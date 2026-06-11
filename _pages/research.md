---
layout: lab
permalink: /research/
title: "Research"
lang: en
nav_id: research
zh_url: /cn/research/
description: "Research directions of the Robot Learning and Control Lab."
---
<section class="lab-page-title">
  <p class="lab-eyebrow">Research</p>
  <h1>Research directions</h1>
  <p>We organize the lab around core problems in robot learning, control, planning, manipulation, and embodied intelligence.</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-grid lab-grid--two">
    {% for item in site.data.research %}
      <article class="lab-card">
        <h3>{{ item.title_en }}</h3>
        <p>{{ item.summary_en }}</p>
        <div class="lab-tags">
          {% for tag in item.tags %}<span>{{ tag }}</span>{% endfor %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>
