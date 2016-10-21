---
title: "Linkit"
layout: single
type: pages

excerpt: "Tämä on excerpt -teksti joka tulee näkyville kuvan päälle."
sitemap: true
permalink: /Linkit

header:
  overlay_image: Maisema_banner.png
  caption: "Photo: Timo Hoo"
---

{% include base_path %}

## Viestien testisivu:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
