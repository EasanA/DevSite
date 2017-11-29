 ---
layout: page
title: Articles Archive
permalink: /articles/
---

<div class="row">
  <div class="hide-on-med-and-up">
    <div class="leftbar"></div>
    <h1>Article Archive</h1>
    <p style="color:#7c7c7c;"> For all media inquires contact <br> <a href="#" style="font-weight: 800;color:#4b4b4b;">pr@innit.com</a></p> 
  </div>
    {% assign sorted = site.data.articles | sort:"date-order" | reverse %}
    {% for article in sorted %}
      {% if article.type == "News" %}
    <div class="col s3" style="padding-left:0px;">
      <p>{{ article.date }}</p>
    </div>
    <div class="col s9">
      <p style="font-weight:800; font-size:1.5rem; color:#4b4b4b;margin-top:13px; margin-bottom:0px;">{{ article.company_name}}</p>
        <p style="margin-top:0px; font-size:1.2rem;">{{ article.title }}</p>
        <p><div style="position:relative;"><a href="{{ article.url }}" style="color:#4cb935;font-weight:700;text-spacing:1px;text-transform:uppercase;font-size:12px;">Read More<div style="height:2px;background-color:#4cb935;position:absolute;bottom:0;opacity:0.2;width:75px;"></div></a></div></p>
    </div>
    <div class="col s12" style="border-bottom: 1px solid #DADADA;">
    </div>
    {% endif %}
    {% endfor %}