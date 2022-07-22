$(function () {
  $(".money_button").on("click", function () {
    if ($(this).prev("input").val() > 0) {
      $(this)
        .prev("input")
        .val($(this).prev("input").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - $(this).data("money"));
      $("#count").text(Number($("#count").text()) + $(this).data("money"));
    }
  });

  $(".juice_button").on("click", function () {
    // twelve_remain = Number($("#twelve_remain").val());
    // buy_count = Number($("#count").text());
    // console.log(buy_count);
    // remain_count = Number($("#remain_count").val());
    // side_mituya = Number($("#side_mituya").text());

    const stock = $("#" + $(this).prop("id") + "_remain").val();

    stock = stock - 1;
    Number($("#remain_count").val()) - 1;
    console.log($(".side_count").prop("id").text() + 1);
    $(".side_count").prop("id").text() + 1;

    // if ($(this).prev().val() > 0 && $("#count").text() >= 120) {
    //   twelve_remain = twelve_remain - 1;
    //   remain_count = remain_count - 1;
    //   side_mituya = side_mituya + 1;
    //   buy_count = buy_count - 120;

    //   $("#twelve_remain").val(twelve_remain);
    //   $("#remain_count").val(remain_count);
    //   $("#side_mituya").text(side_mituya);
    //   $("#count").text(buy_count);
    // }
  });
});
