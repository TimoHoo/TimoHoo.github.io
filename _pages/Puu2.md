---
title: "FraktaaliPuu"
layout: splash
#type: pages
excerpt: "Tämä on Fraktaalipuu github esimerkin mukaan"
sitemap: true
permalink: /Puu2

modified: 2018-08-10
---

<body onload="init_colors()">

<script type="text/javascript" src="assets/js/fractal.js"></script>

<div class="controls">

<div>
<span class="fr">Angle (5 -> 30) Value: <span id="angle_span">0</span> </span>
<input id="angle_range" type="range" min="5" max="90" value="30" step="5" onchange="init()" />
</div>

<div>
<span class="fr">Complexity (0.50 -> 0.80) Value: <span id="complexity_span">0</span> </span>
<input id="complexity_range" type="range" min="0.50" max="0.80" value="0.71" step="0.01" onchange="init()" />
</div>

<div>
<span class="fr">Flexure (-90 -> +90) Value: <span id="flexure_span">0</span> </span>
<input id="flexure_range" type="range" min="-90" max="90" value="0" step="10" onchange="init()" />
</div>

</div>

<button type="btn" onclick="init_colors()">Change colors</button>

<canvas id="PiirtoAlusta"></canvas>

</body>
