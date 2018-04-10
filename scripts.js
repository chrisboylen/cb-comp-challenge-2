$('.onclick-menu-content').hide();
$('.main-nav-container').on('click', '.menu', function(e) {
  e.preventDefault();
  $('.onclick-menu-content').slideToggle('slow');
});