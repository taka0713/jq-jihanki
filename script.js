$(function () {
  $("#button_thousand").on("click", function () {
    if ($("#money_thou").val() > 0) {
      $("#money_thou").val($("#money_thou").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - 1000);
      $("#count").text(Number($("#count").text()) + 1000);
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

  $("#twelve").on("click", function () {
    twelve_remain = Number($("#twelve_remain").val());
    buy_count = Number($("#count").text());
    remain_count = Number($("#remain_count").val());
    side_mituya = Number($("#side_mituya").text());

    if (twelve_remain > 0 && buy_count >= 120) {
      twelve_remain = twelve_remain - 1;
      remain_count = remain_count - 1;
      side_mituya = side_mituya + 1;
      console.log(side_mituya);
      buy_count = buy_count - 120;
      $("#twelve_remain").val(twelve_remain);
      $("#remain_count").val(remain_count);
      $("#side_mituya").text(side_mituya);
      $("#count").text(buy_count);
    }
  });
});
