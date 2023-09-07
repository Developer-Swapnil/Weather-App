import React, { useEffect } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TomTomMap = () => {
  const { weatherData } = useSelector((state) => state.weatherStore);
  const COORD =
    Object.keys(weatherData).length === 0
      ? { lng: 77.102493, lat: 28.70406 }
      : { lng: weatherData.coord.lon, lat: weatherData.coord.lat };
  useEffect(() => {
    // const COORD = { lng: 77.102493, lat: 28.70406 };

    const map = tt.map({
      key: "oBkGAD4d68gLv1Jhwo8mKCsoE1zKHdn3",
      container: "map",
      center: [COORD.lng, COORD.lat],
      zoom: 13,
    });

    const cloudSource = {
      type: "raster",
      tiles: [
        "https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=24485baa2feb4d7dd186da07b331561f",
      ],
      tileSize: 256,
      minZoom: 0,
      maxZoom: 12,
      attribution: "OpenWeatherMap.Org",
    };

    const rainSource = {
      type: "raster",
      tiles: [
        "https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=24485baa2feb4d7dd186da07b331561f",
      ],
      tileSize: 512,
      minZoom: 0,
      maxZoom: 12,
      attribution: "OpenWeatherMap.Org",
    };

    const cloudLayer = {
      id: "cloud_layer",
      type: "raster",
      source: "cloud_source",
      layout: { visibility: "visible" },
    };

    const rainLayer = {
      id: "rain_layer",
      type: "raster",
      source: "rain_source",
      layout: { visibility: "visible" },
    };

    map.on("load", function () {
      map.addSource("cloud_source", cloudSource);
      map.addLayer(cloudLayer);

      map.addSource("rain_source", rainSource);
      map.addLayer(rainLayer);
      weatherForCityAround(COORD);
    });

    map.on("click", function (event) {
      console.log(event.lngLat);
      weatherForCityAround(event.lngLat);
    });

    async function weatherForCityAround(lngLat) {
      const url = `https://api.openweathermap.org/data/2.5/find?units=imperial&lat=${lngLat.lat}&lon=${lngLat.lng}&cnt=5&appid=24485baa2feb4d7dd186da07b331561f`;
      const weatherResponse = await fetch(url);
      const weatherData = await weatherResponse.json();
      console.log(weatherData);
      weatherData.list.forEach((element) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const popup = new tt.Popup()
          .setDOMContent(createDOM(element))
          .setLngLat(element.coord)
          .addTo(map);
      });
    }
    function createDOM(city) {
      const div = document.createElement("div");
      div.style.font = "italic bold 24px arial";
      const temp = document.createTextNode(city.main.temp.toFixed(0) + " F ");

      div.appendChild(temp);

      const code = city.weather[0].icon;
      const image = document.createElement("img");
      image.src = `http://openweathermap.org/img/wn/${code}.png`;
      div.appendChild(image);

      const description = document.createTextNode(city.weather[0].description);
      div.appendChild(description);

      return div;
    }

    return () => {
      map.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weatherData]);

  return <div style={{ width: "100%", height: "100%" }} id="map" />;
};

export default TomTomMap;
