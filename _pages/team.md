---
layout: page
title: About Us
menu: main
order: 2
permalink: /team/
---
<!-- Hero Image -->
<div class="flexrow" style="height: 400px;width: auto;">
  <img class="responsive-img" src="{{ site.url }}/assets/images/partner/partners-hero.jpg">
</div>
<!-- Mission Statement -->
<div class="marginspacer">
</div>
  <div class="flexrow" style="margin-left: calc(100% / 10); margin-right: calc(100% / 10)">
    <div style="flex: 2 1 0">
      <div class="leftbar"></div>
      <h1>We're On A Mission</h1>
    </div>
    <div style="flex: 3 1 0">
      <p class="body">Built on a vision to empower consumers to eat and live better. We do this by giving food a voice. And with this bridge the incredicle pace of eating innovation and existing consumer behavior; helping how people eat everyday.</p>
    </div>
  </div>
<div class="marginspacer">
</div>
<!-- Tabs -->
<div class="flexrow">
  <ul class="tabs" style="text-align: center;border-bottom: 1px solid #DADADA;">
    <li class="tab col s3"><a class="active" href="#executive">Our Executives</a></li>
    <li class="tab col s3"><a href="#team">Our Team</a></li>
    <li class="tab col s3"><a href="#advisor">Our Advisors</a></li>
  </ul>
</div>
<!-- Executive Tab -->
<div id="executive">
  <div class="flexrow" style="flex-direction: row; justify-content: space-around;flex-wrap: wrap;">
  {% for profile in site.data.executive %}
    <div class="headshotholder" style="position: relative;flex-basis: 30%;margin-top: 10px">
      <div class="photo">
        <img class="responsive-img" src="{{ site.url }}{{ profile.imageA }}">
      </div>
      <div class="hoverphoto">
        <img class="responsive-img" src="{{ site.url }}{{ profile.imageB }}">
      </div>
      <div class="textoverlay" style="background-color: rgba(249, 249, 249, .7); position: absolute; bottom: 0; left: 0; z-index: 1;width: 100%;padding-left: 15px;">
        <h5 style="padding-top: 10px;margin-bottom: 5px;">{{ profile.name }}</h5>
        <p class="body" style="margin-bottom: 0px; margin-top: 0px;">{{ profile.title }}</p>
        <div class="headshotlinkholder" style="">
        <a class="profile" href="#" style="display: inline-block;float: right; color: #2f2f2f; margin: 0 5px 10px 0;vertical-align: middle;">PROFILE<i class="material-icons" style="height: 12px;display: inline-block;vertical-align: -5px;">keyboard_arrow_right</i></a>
        </div>
      </div>
    </div>
  {% endfor %}
  <div class="ghostholder" style="height: 0; flex-basis: 30%;">
  </div>
  <div class="ghostholder" style="height: 0; flex-basis: 30%;">
  </div>
  </div>
</div>
<!-- Team Tab -->
<div id="team">
  <div class="flexrow" style="flex-direction: row; justify-content: space-around;flex-wrap: wrap;">
  {% for profile in site.data.team %}
    <div class="headshotholder" style="position: relative;flex-basis: 30%;margin-top: 10px;">
      <div class="photo">
        <img class="responsive-img" src="{{ site.url }}{{ profile.imageA }}">
      </div>
      <div class="hoverphoto">
        <img class="responsive-img" src="{{ site.url }}{{ profile.imageB }}">
      </div>
      <div class="hovertextoverlay" style="background-color: rgba(249, 249, 249, .5); position: absolute; bottom: 0; left: 0; z-index: 1;width: 100%;padding-left: 15px;">
        <h5 style="padding-top: 15px;padding-bottom: 15px;">{{ profile.name }}</h5>
      </div>
    </div>
  {% endfor %}
  <div class="ghostholder" style="height: 0; flex-basis: 30%;">
  </div>
  <div class="ghostholder" style="height: 0; flex-basis: 30%;">
  </div>
  </div>
</div>
<!-- Advisors --> 
<div id="advisor">
  <div class="flexrow" style="flex-direction: row; justify-content: space-around;flex-wrap: wrap;">
  {% for profile in site.data.advisor %}
    <div class="headshotholder" style="position: relative;flex-basis: 30%; margin-top: 10px;">
      <div class="photohoveroff">
        <img class="responsive-img" src="{{ site.url }}{{ profile.image }}">
      </div>
      <div class="textoverlay" style="background-color: rgba(249, 249, 249, .5); position: absolute; bottom: 0; left: 0; z-index: 1;width: 80%;padding-left: 15px;">
        <h5>{{ profile.name }}</h5>
        <p class="body">{{ profile.role }}</p>
      </div>
    </div>
  {% endfor %}
  <div class="ghostholder" style="height: 0; flex-basis: 30%;">
  </div>
  <div class="ghostholder" style="height: 0; flex-basis: 30%;">
  </div>
  </div>
</div>
<!-- Location -->
<div class="marginspacer">
  <div class="flexrowlocation" style="margin-right: calc(100% / 10);margin-left: calc(100% / 10);">
    <div class="locationtext" style="flex: 3 1 0;">
      <h3>Our Location</h3>
      <p>Innit is located in the heart of downtown Redwood City just a three minute walk from the Redwood City Caltrain station.  Our office is close restaurants and lots of great places to grab coffee or tea.</p>
      <div class="divider"></div>
      <div class="miniflexsection" style="display: flex;">
        <img class="responsive-img" src="{{ site.url }}/assets/images/team/about-us-pin.svg" style="margin-right: 10px;">
        <p style="display: inline;">399 Bradford Street Suite 105 <br> Redwood City, CA 94063</p>
      </div>
    </div>
    <div class="map" style="flex: 5 1 0; margin-left: calc(100% / 12);margin-right: calc(100% / 12);">
      <img class="responsive-img" src="{{ site.url }}/assets/images/team/about-us-map.jpg">
    </div>
  </div>
</div>