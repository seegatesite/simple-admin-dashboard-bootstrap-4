$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled-2");
  $(".sidebar-nav-item").removeClass("show-nav");
});

$(document).ready(function () {
  $(".sidebar-nav-item").click(function () {
    let el = $(this);
    $(".sidebar-nav-item").not(el).removeClass("show-nav");
    if (!el.hasClass("show-nav")) {
      el.addClass("show-nav");
    } else {
      el.removeClass("show-nav");
    }
  });
});
