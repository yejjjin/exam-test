$(function () {
  let now = 0;

  const slideCount = $(".slide ul li").length;
  const slideList = $(".slide ul");

  setInterval(function () {
    now = (now + 1) % slideCount;
    slideList.css("left", 100 * -now + "%");
  }, 3000);

  //   modal
  $(".list-bbs li:first-child").on("click", function () {
    $("#modal").css("display", "flex");
  });

  $("#modal-close").on("click", function () {
    $("#modal").css("display", "none");
  });
});
