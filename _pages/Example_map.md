---
title: "OpenLayers 3 esimerkki"
excerpt: ""OpenLayers 3 esimerkki"
sitemap: false

permalink: /OL3

modified: 2017-01-17

# //  
---
<link rel="stylesheet" href="https://openlayers.org/en/v3.20.1/css/ol.css" type="text/css">

    <style>
      .map {
        height: 400px;
        width: 100%;
      }
    </style>

<script src="https://openlayers.org/en/v3.20.1/build/ol.js"> </script>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

## Esimerki Kartta

<div id="kartta" class="map"></div>

    <script>
      var map = new ol.Map({
        target: 'kartta',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([25.47, 65.01]),
          zoom: 10
        })
      });
    </script>
