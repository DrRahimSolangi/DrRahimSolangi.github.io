// $(function() {
//   $(document).scroll(function() {
//     var $nav = $("#mainNavbar");
//     $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//   });
// });

const bio = $("#bio");
const awards = $("#awards");
const gallery = $("#gallery");
const blog = $("#blog");

bio.click(function(e) {
  awards.removeClass("activeBTN");
  gallery.removeClass("activeBTN");
  blog.removeClass("activeBTN");
  bio.addClass("activeBTN");

  e.preventDefault();
});
awards.click(function(e) {
  bio.removeClass("activeBTN");
  gallery.removeClass("activeBTN");
  blog.removeClass("activeBTN");
  awards.addClass("activeBTN");

  e.preventDefault();
});
gallery.click(function(e) {
  awards.removeClass("activeBTN");
  bio.removeClass("activeBTN");
  blog.removeClass("activeBTN");
  gallery.addClass("activeBTN");

  e.preventDefault();
});
blog.click(function(e) {
  awards.removeClass("activeBTN");
  gallery.removeClass("activeBTN");
  bio.removeClass("activeBTN");
  blog.addClass("activeBTN");

  e.preventDefault();
});
