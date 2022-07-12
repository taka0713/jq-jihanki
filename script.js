$(function () {
  $("#button_thousand").on("click", function () {
    if ($("#money_thou").val() > 0) {
      $("#money_thou").val($("#money_thou").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - 1000);
      $("#count").text(Number($("#count").text()) + 1000);
      console.log(typeof $("#count").text());
    }

    console.log($("#money_thou").val() - 1);
  });
});
