'use strict';

var projects = [];

function Projects (rawProjects) {
  for(var key in rawProjects) {
    this[key] = rawProjects[key];
  }
};

Projects.prototype.toHtml = function() {
  var source = $('article.template').html();
  var outlineRender = Handlebars.compile(source);
  return outlineRender(this);
};

// $newProject.find('h1').text(this.title);
// $newProject.find('h3').text(this.date);
// $newProject.find('.about').text(this.about);

rawProjects.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(proj) {
  $('.projects').append(proj.toHtml());
});
Projects();
