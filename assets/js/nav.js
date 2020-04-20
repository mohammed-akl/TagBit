$(function() {
  $('navigation a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
