---
title: "OL - Bing 3 esimerkki"
layout: splash
excerpt: "OpenLayers 3 esimerkki"
sitemap: false

permalink: /OpenLayers3
modified: 2017-01-26

#<script src="/loader.js" type="text/javascript">
---
<style link rel="stylesheet" href="https://openlayers.org/en/v3.20.1/css/ol.css" type="text/css">
    .map {
        height: 512px;
        width: 70%;
      }
      .ol-attribution a {
        color: black;
      }
</style>

# Oulun kartta

<div id="kartta" class="map"></div>

<script src="https://openlayers.org/en/v3.20.1/build/ol.js"> </script>

<script type="text/javascript">
      var map = new ol.Map({
        target: 'kartta',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.BingMaps({
              imagerySet: 'Road',
              key: 'AhZTr28jhOVSd5W62crIcmGYWZJfUdiH7NJr252VGd7vn6kaCCxeiCD6mk5HgqSL'
            })
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([25.5, 65.0]),
          zoom: 12
        })
      });
</script>

<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"> </script>
