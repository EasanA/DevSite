---
layout: page
title: Press
menu: main
order: 4
permalink: /press/
---
<div class="row">
  <img class="responsive-img" src="{{ site.url }}/assets/images/sitewide/hero_placeholder.png">
</div>
<div class="row">
  <div class="col s12 m4 l3 offset-m1 offset-l1">
    <div class="toc-wrapper target hide-on-small-only" style="margin-top: 1.1rem;">
      <div class="leftbar"></div>
      <h1 style="margin-top:7px;">Press Center</h1>
        <ul class="section table-of-contents">
          <li><a href="#PressCoverage">Press Coverage</a></li>
          <li><a href="#PressReleases">Press Releases</a></li>
          <li><a href="#BrandAssets">Brand Assets</a></li>
        </ul>
      <p style="color:#7c7c7c;"> For all media inquires contact <br> <a href="#" style="font-weight: 800;color:#4b4b4b;">pr@innit.com</a></p> 
    </div>
    <div class="hide-on-med-and-up">
      <div class="leftbar"></div>
      <h1>Press Center</h1>
      <p style="color:#7c7c7c;"> For all media inquires contact <br> <a href="#" style="font-weight: 800;color:#4b4b4b;">pr@innit.com</a></p> 
    </div>
  </div>
  <div class="col s12 m6 l7">
    <div id="PressCoverage" class="section scrollspy">
      <div class="row">
        <h3 style="margin-top: 1.1rem;">Press Coverage</h3>
      </div>
      {% assign sorted = site.data.articles | sort:"date-order" | reverse %}
      {% for article in sorted limit:6 %}
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
      <a class="waves-effect waves-light btn-large regbutton" href="{{ site.url }}/articles/" style="float:right;margin-top: 20px;">Read More</a>
      <a class="waves-effect waves-light btn-large mobilebutton" href="{{ site.url }}/articles/" style="float:right;margin-top: 20px;width:100%">Read More</a>
    </div>
  </div>
  <div class="col s12 m6 l7 offset-m5 offset-l4">
    <div id="PressReleases" class="section scrollspy">
      <div class="row">
        <h3 style="margin-top: 1.1rem;">Press Releases</h3>
      </div>
      {% assign sorted = site.data.articles | sort:"date-order" | reverse %}
      {% for article in sorted %}
        {% if article.type == "PR" %}
      <div class="col s3" style="padding-left:0px;">
        <p>{{ article.date }}</p>
      </div>
      <div class="col s9">
        <p style="font-weight:800; font-size:1.4rem; color:#4b4b4b;margin-top:13px; margin-bottom:0px;">{{ article.title}}</p>
          <p><div style="position:relative;"><a href="{{ article.url }}" style="color:#4cb935;font-weight:700;text-spacing:1px;text-transform:uppercase;font-size:12px;">Read More<div style="height:2px;background-color:#4cb935;position:absolute;bottom:0;opacity:0.2;width:75px;"></div></a></div></p>
      </div>
      <div class="col s12" style="border-bottom: 1px solid #DADADA;">
      </div>
      {% endif %}
      {% endfor %}
      <a class="waves-effect waves-light btn-large regbutton" style="float:right;margin-top: 20px;">Read More</a>
      <a class="waves-effect waves-light btn-large mobilebutton" style="float:right;margin-top: 20px;width:100%;">Read More</a>
    </div>
  </div>
  <div class="col s12 m6 l7 offset-m5 offset-l4">
    <div id="BrandAssets" class="section scrollspy">
      <h3 style="margin-top:1.1rem;">Brand Assets</h3>
      <p class="body">Before using the Innit Logo, please be sure to follow our basic rules:</p>
      <p class="body">1. Don't alter the shape, proportion, color, or orientation of the logo.</p>
      <p class="body">2. Use the "i" s a guide for the amount of padding to leave around the logo.</p>
      <p class="body">3. The "circle" above the "i" should be kept appple green as long as it is visible.</p>
      <div class="brandholdercontainer" style="display:flex">
        <div class="brandholder" style="flex: 1 1 0;margin: 25px 10px 25px 0px;">
          <img class="responsive-img" src="{{ site.url }}/assets/images/press/press-brand-logo-color.jpg">
        </div>
        <div class="brandholder" style="flex: 1 1 0;margin: 25px 0px 25px 0px">
          <img class="responsive-img" src="{{ site.url }}/assets/images/press/press-brand-logo-white.jpg">
        </div>
      </div>
      <a class="waves-effect waves-light btn-large regbutton" style="float:right;">Download</a>
      <a class="waves-effect waves-light btn-large mobilebutton" style="float:right;width:100%;">Download</a>
    </div>
  </div>
</div>