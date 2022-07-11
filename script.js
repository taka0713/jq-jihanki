$(function () {
  $("#button_thousand").on("click", function () {
    if ($("#money_thou").val() > 0) {
      $("#money_thou").val($("#money_thou").val() - 1);
    }

    console.log($("#money_thou").val() - 1);
  });
});
