$(function () {
  $("#button_thousand").on("click", function () {
    console.log();
    $("money_thou").val($("money_thou").text() - 1);
  });
});
