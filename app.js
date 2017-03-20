'use strict';

var projects = [];

function Projects (rawProjects) {
  for(var key in rawProjects) {
    this[key] = rawProjects[key];
  }
};

Projects.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  $newProject.removeClass('burger');

  // $newProject.find('h2').text(this.title);
  // $newProject.find('time').text(this.date);
  // $newProject.find('').attr('href', this.projectUrl);
  // $newProject.find('.about').append(this.about);
  // return $newProject;
  var source = $('#article.template').html();
  var outlineRender = Handlebars.compile(source);

  this.body = marked(this.body);

  return outlineRender(this);
};

rawProjects.forEach(function(projectObject) {
  projects.push(new Projects(projectObject));
});

projects.forEach(function(proj) {
  $('#projects').append(proj.toHtml());
});
// Projects();
