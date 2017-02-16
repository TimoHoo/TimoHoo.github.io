---
title: "Geoloc OL - Kapsi"
layout: splash
excerpt: "OpenLayers Geoloc esimerkki"
sitemap: false

permalink: /OpenLayers

modified: 2017-02-16
---
<link rel="stylesheet" href="assets/css/ol.css" type="text/css">

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="chrome=1">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
<title>Mobile full screen</title>
<style type="text/css">
  html, body, .map {
    width: 100%;
  }
</style>
<div id="map" class="map"></div>

<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList"></script>

<script src="assets/js/ol.js"></script>

<script src="assets/js/bundle_Geoloc.js"> </script>
<div id="info">&nbsp;</div>

<label for="track">
  Paikanna
  <input id="track" type="checkbox"/>
</label>
<p>
  paikannustarkkuus: <code id="accuracy"></code>&nbsp;&nbsp;
  korkeus merenpinnasta: <code id="altitude"></code>&nbsp;&nbsp;
  korkeuden tarkkuus: <code id="altitudeAccuracy"></code>&nbsp;&nbsp;
  suunta: <code id="heading"></code>&nbsp;&nbsp;
  nopeus: <code id="speed"></code>
</p>
