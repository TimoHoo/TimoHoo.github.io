---
title: "OL - OSM Drag'nDrop"
layout: splash
excerpt: "OpenLayers 3 esimerkki"
sitemap: false

permalink: /OpenLayersD2D

modified: 2017-02-19

---
<link rel="stylesheet" href="assets/css/ol.css" type="text/css">

## Drag and Drop JSON, KML, GPX ym vektorit OSM kartalle

<div id="kartta" class="map"></div>

<style>
      #map {
        height: 400px;
        width: 100%;
      }
</style>

<!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

<script src="assets/js/ol.js"></script>
<div id="info">&nbsp;</div>

<script src="assets/js/DragnDropbundle.js"> </script>
