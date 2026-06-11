---
layout: lab
permalink: /cn/contact/
title: "联系方式"
lang: zh
nav_id: contact
en_url: /contact/
description: "机器人学习与控制实验室联系方式。"
---
{% assign lab = site.data.lab %}
<section class="lab-page-title">
  <p class="lab-eyebrow">联系方式</p>
  <h1>联系方式</h1>
  <p>公开联系方式将在审核后更新。</p>
</section>

<section class="lab-section lab-section--tight">
  <div class="lab-grid lab-grid--two">
    <article class="lab-card">
      <h3>邮箱</h3>
      {% if lab.contact_email %}<p><a href="mailto:{{ lab.contact_email }}">{{ lab.contact_email }}</a></p>{% else %}<p class="lab-muted">邮箱地址待更新。</p>{% endif %}
    </article>
    <article class="lab-card">
      <h3>地址</h3>
      <p>{{ lab.address_zh }}</p>
    </article>
  </div>
</section>
