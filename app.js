'use strict';

var projects = [];

function Projects (rawProjects) {
  for(var key in rawProjects) {
    this[key] = rawProjects[key];
  }
};

Projects.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var outlineRender = Handlebars.compile(source);

  return outlineRender(this);
};

rawProjects.forEach(function(projectObject) {
  projects.push(new Projects(projectObject));
});

projects.forEach(function(proj) {
  $('.projects').append(proj.toHtml());
});
