$(function () {
  const rensou = {
    twelve: "#side_mituya",
    fourteen: "#side_pon",
    fifteen: "#side_toropi",
    eighteen: "#side_tea",
    ten: "#side_lemon",
    twenty: "#side_nekuta",
    thirty: "#side_cola",
    fifty: "#side_pain",
  };

  let juice_price = () => {
    $(".juice_button").map(function () {
      if ($("#count").text() >= $(this).data("price")) {
        $(this).prop("disabled", false);
      }
    });
    $(".juice_button").map(function () {
      if ($("#count").text() <= $(this).data("price")) {
        $(this).prop("disabled", true);
      }
    });
  };

  $(".money_button").on("click", function () {
    if ($(this).prev("input").val() > 0) {
      $(this)
        .prev("input")
        .val($(this).prev("input").val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - $(this).data("money"));
      $("#count").text(Number($("#count").text()) + $(this).data("money"));
    }
    juice_price();
  });

  $(".juice_button").on("click", function () {
    if (
      $("#" + $(this).prop("id") + "_remain").val() > 0 &&
      $("#count").text() - $(this).data("price") > 0
    ) {
      let stock = $("#" + $(this).prop("id") + "_remain").val();
      $("#" + $(this).prop("id") + "_remain").val(stock - 1);
      Number($("#remain_count").val($("#remain_count").val() - 1));
      $("#count").text($("#count").text() - $(this).data("price"));

      $(rensou[$(this).prop("id")]).text(
        Number($(rensou[$(this).prop("id")]).text()) + 1
      );
    }

    if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
      $(this).text("売り切れ");
      $(this).prop("disabled", true);
    }
    juice_price();
  });
  $("#button_first").on("click", function () {
    $(".all_reset").map(function () {
      $(this).val($(this).data("default"));
      $(this).text($(this).data("default"));
    });
  });
  $("#reset").on("click", function () {
    $("#money_fifty").text(
      Number($("#money_fifty").text()) + Number($("#count").text())
    );
    $("#count").text(0);
    let money_money =
      Number($("#money_fifty").text()) + Number($("#count").text());
    $("#money_thou").val(Math.floor(money_money / 1000));
    $("#money_ten").val(Math.floor((money_money % 1000) / 100));
    $("#money_one").val(Math.floor((money_money % 100) / 10));
  });
});
