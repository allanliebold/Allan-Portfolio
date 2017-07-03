'use strict';

var about = [];

function About(rawDataObj) {
  this.year = rawDataObj.year;
  this.job = rawDataObj.job;
  this.location = rawDataObj.location;
}

About.prototype.toHtml = function() {
  var template = $('#about-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
}


rawData.forEach(function(aboutItem) {
  about.push(new About(aboutItem));
});

about.forEach(function(item){
  $('#about ul').append(item.toHtml());
});
