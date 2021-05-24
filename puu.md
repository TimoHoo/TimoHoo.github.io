---
title: "Fraktaalipuu(2)"
layout: page
excerpt: "Github esimerkin mukaisesti modattu Fractal Tree"
permalink: /fpuu

date: 2021-05-23
---

<button type="button" onclick="init_colors()">Muuta värit</button>

<div>
<span class="fr">Kulma (5 -> 30) - Lukema: <span id="angle_span">20</span> </span>
<input id="angle_range" type="range" min="5" max="30" value="15" step="2" onchange="init()" />
</div>

<div>
<span class="fr">Monimutkaisuus (0.50 -> 0.80) - Lukema: <span id="complexity_span">0.70</span> </span>
<input id="complexity_range" type="range" min="0.50" max="0.80" value="0.70" step="0.02" onchange="init()" />
</div>

<div>
<span class="fr">Taivutus (-30 -> +30) - Lukema: <span id="flexure_span">0</span> </span>
<input id="flexure_range" type="range" min="-30" max="30" value="0" step="5" onchange="init()" />
</div>

<canvas id="PiirtoAlusta">
</canvas>

<script src="assets/js/fractal.js">

</script>
