---
title: "Fractal tree"
layout: splash
excerpt: "Github esimerkin mukaisesti modattu Fractal Tree"
sitemap: false
author_profile: false
permalink: /puu2

my_js_snippet: |
  console.log("hello");
  console.log("world");

modified: 2021-05-07
---

<button type="button" onclick="init_colors()">Väritys</button>

<div>
<span class="fr">Kulma (5 -> 30) - Lukema: <span id="angle_span">30</span> </span>
<input id="angle_range" type="range" min="5" max="90" value="30" step="4" onchange="init()" />
</div>

<div>
<span class="fr">Monimutkaisuus (0.50 -> 0.80) - Lukema: <span id="complexity_span">0.70</span> </span>
<input id="complexity_range" type="range" min="0.50" max="0.80" value="0.70" step="0.02" onchange="init()" />
</div>

<div>
<span class="fr">Taivutus (-90 -> +90) - Lukema: <span id="flexure_span">0</span> </span>
<input id="flexure_range" type="range" min="-90" max="90" value="0" step="10" onchange="init()" />
</div>


<div>
  <label for="volume">Volume</label>
  <input type="range" id="volume" name="volume" min="0" max="11">
</div>

<div>
  <label for="cowbell">Cowbell</label>
  <input type="range" id="cowbell" name="cowbell" min="0" max="100" value="90" step="10">
</div>


Tervetuloa sivulle: {{ page.title }}

<button class="favorite styled"
        type="button">
    Add to favorites
</button>

<script>

{{ page.my_js_snippet }}

</script>
