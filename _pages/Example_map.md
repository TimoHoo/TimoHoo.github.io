---
title: "Geoloc OL - Kapsi"
layout: splash
excerpt: "OpenLayers Geoloc esimerkki"
sitemap: false

permalink: /OpenLayers

modified: 2017-02-17
---

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">

<link rel="stylesheet" href="assets/css/ol.css" type="text/css">
<style type="text/css">
  html, body, .map {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 512px;
  }
 </style>

<style>
.map:-moz-full-screen {
height: 100%;
}
.map:-webkit-full-screen {
height: 100%;
}
.map:-ms-fullscreen {
height: 100%;
}
.map:fullscreen {
height: 100%;
}
.ol-rotate {
top: 3em;
}
</style>

<div id="map" class="map"></div>

<!-- The line below is only needed for old environments like Internet Explorer and Android 4.x -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

<script src="assets/js/ol.js"></script>

<script src="assets/js/bundle_geoloc.js"> </script>
<div id="info">&nbsp;</div>

<label for="track">
  Paikanna
  <input id="track" type="checkbox"/>
</label>

<p>
  sijainti: <code id="position"></code>&nbsp;&nbsp;
  paikannustarkkuus: <code id="accuracy"></code>&nbsp;&nbsp;
  korkeus merenpinnasta: <code id="altitude"></code>&nbsp;&nbsp;
  korkeuden tarkkuus: <code id="altitudeAccuracy"></code>&nbsp;&nbsp;
  suunta: <code id="heading"></code>&nbsp;&nbsp;
  nopeus: <code id="speed"></code>
</p>
