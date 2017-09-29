---
layout: page
title: DevPress
menu: main
order: 4
permalink: /devpress/
---
  <div class="row">
  <div class="col s12 m3 l2">
      <ul class="section table-of-contents">
        <li><a href="#PressCoverage">Press Coverage</a></li>
        <li><a href="#PressReleases">Press Releases</a></li>
        <li><a href="#BrandAssets">Brand Assets</a></li>
      </ul>
      <p> For media, analyst, and speaking inquires, please contact us at <a href="#">pr@innit.com</a></p> 
    </div>
    <div class="col s12 m9 l10">
      <div id="News2017" class="section scrollspy">
        <p>{{site.data.articles[0].year}}
            {% for article in site.data.articles %}
            	{% if article.year == 2017 %}
                    <p>{{ article.title }}</p>
            	{% endif %}
            {% endfor %}</p>
      </div>

      <div id="News2016" class="section scrollspy">
      {% for article in site.data.articles %}
        {% if article.year == 2017 %}
      	<div class="row" style="margin-bottom: 0px; margin-top: 10px;">
      		<div class="col s8">
      			<img class="responsive-img" src="{{ site.url }}{{ article.logo}}">
        	</div>
        </div>
        <div class="row" style="margin-bottom: 0px;">
        	<div class="col s8">
        		<p>{{ article.title }}<br>{{ article.date }}</p>
        	</div>
        	<div class="col s4">
            	<p><a href="{{ article.url}}">Read More</a></p>
            </div>
        </div>
        <div class="divider"></div>
            	{% endif %}
            {% endfor %}
      </div>

      <div id="initialization" class="section scrollspy">
        <p>content</p>
      </div>
    </div>
  </div>