$(function () {
  $("#button_thousand").on("click", function () {
    if ($("#money_thou").val() > 0) {
      $("#money_thou").val($("#money_thou").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - 1000);
      $("#count").text(Number($("#count").text()) + 1000);
      console.log(typeof $("#count").text());
    }
  });

  $("#button_hundred").on("click", function () {
    if ($("#money_ten").val() > 0) {
      $("#money_ten").val($("#money_ten").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - 100);
      $("#count").text(Number($("#count").text()) + 100);
    }
  });

  $("#button_ten").on("click", function () {
    if ($("#money_one").val() > 0) {
      $("#money_one").val($("#money_one").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - 10);
      $("#count").text(Number($("#count").text()) + 10);
    }
  });

  $("#twelve").on("click", function () {});
});
