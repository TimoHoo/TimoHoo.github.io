---
title: "FraktaaliPuu"
layout: splash
#type: pages
excerpt: "Tämä on Fraktaalipuu github esimerkin mukaan"
sitemap: true
permalink: /Puu

modified: 2018-03-08
---
<button type="btn" onclick="init_colors()">Vaihda väriä</button>
<canvas id="canvas"></canvas>

<div class="controls">
<div>
<span class="fr">Kulma (5 -> 90):</span>
<input id="angle_range" type="range" min="5" max="90" value="30" step="5" onchange="init()" />
<span id="angle_span">0</span>
</div>
<div>
<span class="fr">Monimutkaisuus (0.5 -> 0.8):</span>
<input id="complexity_range" type="range" min="0.5" max="0.8" value="0.7" step="0.01" onchange="init()" />
<span id="complexity_span">0</span>
</div>
<div>
<span class="fr">Taivutus (-90 -> +90):</span>
<input id="flexure_range" type="range" min="-90" max="90" value="0" step="10" onchange="init()" />
<span id="flexure_span">0</span>
</div>
</div>

<script type="text/javascript" src="assets/js/fractal.js"></script>
