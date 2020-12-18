$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");

  $(document).unbind("scroll");
  $("body").css({ overflow: "visible" });
});

$("body").css({ overflow: "hidden" });
$(document).bind("scroll", function () {
  window.scrollTo(0, 0);
});
