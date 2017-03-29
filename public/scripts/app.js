'use strict';

const projects = [];

function Projects (rawProjects) {
  for(let key in rawProjects) {
    this[key] = rawProjects[key];
  }
};

Projects.prototype.toHtml = function() {
  let source = $('#project-template').html();
  let outlineRender = Handlebars.compile(source);

  return outlineRender(this);
};

$.getJSON('data.json', function(response) {
  response.forEach(function(projectObject) {
    projects.push(new Projects(projectObject));
  });
  projects.forEach(function(proj) {
    $('.projects').append(proj.toHtml());
  });
})
