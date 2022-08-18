$(function () {
  let roulette_flag = 0;

  // $(".juice_button").map(function () {
  //   // console.log($(this).text().trim());
  //   if ($(this).text().trim() === "120円") {
  //     console.log("unko");
  //   } else {
  //     console.log("hoge");
  //   }
  // });

  $(".juice_button").prop("disabled", true);

  $(".money_thou").on("click", function () {
    if ($("#money_fifty").text() > 0 && $("#money_thou").val() > 0) {
      $("#money_fifty").text($("#money_fifty").text() - 1000);
      $("#money_thou").val($("#money_thou").val() - 1);
      $("#count").text(Number($("#count").text()) + 1000);
    }

    $("#twelve").prop("disabled", false);
    $("#fourteen").prop("disabled", false);
    $("#fifteen").prop("disabled", false);
    $("#eighteen").prop("disabled", false);
    $("#ten").prop("disabled", false);
    $("#twenty").prop("disabled", false);
    $("#thirty").prop("disabled", false);
    $("#fifty").prop("disabled", false);
  });
  $(".money_ten").on("click", function () {
    if ($("#money_fifty").text() > 0 && $("#money_ten").val() > 0) {
      $("#money_fifty").text($("#money_fifty").text() - 100);
      $("#money_ten").val($("#money_ten").val() - 1);
      $("#count").text(Number($("#count").text()) + 100);
    }
    if ($("#count").text() >= 100 && $("#count").text() < 120) {
      $("#ten").prop("disabled", false);
    }
    if ($("#count").text() >= 120 && $("#count").text() < 201) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
      $("#twenty").prop("disabled", false);
    }
    if ($("#count").text() >= 201 && $("#count").text() < 301) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
      $("#twenty").prop("disabled", false);
      $("#thirty").prop("disabled", false);
    }
    if ($("#count").text() >= 401 && $("#count").text() < 501) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
      $("#twenty").prop("disabled", false);
      $("#thirty").prop("disabled", false);
      $("#fifty").prop("disabled", false);
    }
  });
  $(".money_one").on("click", function () {
    if ($("#money_fifty").text() > 0 && $("#money_one").val() > 0) {
      $("#money_fifty").text($("#money_fifty").text() - 10);
      $("#money_one").val($("#money_one").val() - 1);
      $("#count").text(Number($("#count").text()) + 10);
    }
    if ($("#count").text() >= 100 && $("#count").text() < 120) {
      $("#ten").prop("disabled", false);
    }
    if ($("#count").text() >= 120 && $("#count").text() < 121) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
    }
    if ($("#count").text() >= 140 && $("#count").text() < 141) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
    }
    if ($("#count").text() >= 150 && $("#count").text() < 151) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
    }
    if ($("#count").text() >= 180 && $("#count").text() < 181) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
    }
    if ($("#count").text() >= 200 && $("#count").text() < 201) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
      $("#twenty").prop("disabled", false);
    }
    if ($("#count").text() >= 300 && $("#count").text() < 301) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
      $("#twenty").prop("disabled", false);
      $("#thirty").prop("disabled", false);
    }
    if ($("#count").text() >= 500 && $("#count").text() < 501) {
      $("#ten").prop("disabled", false);
      $("#twelve").prop("disabled", false);
      $("#fourteen").prop("disabled", false);
      $("#fifteen").prop("disabled", false);
      $("#eighteen").prop("disabled", false);
      $("#twenty").prop("disabled", false);
      $("#thirty").prop("disabled", false);
      $("#fifty").prop("disabled", false);
    }
  });
  $("#twelve").on("click", function () {
    if ($("#twelve_remain").val() > 0 && $("#count").text() > 0) {
      $("#twelve_remain").val($("#twelve_remain").val() - 1);
      $("#side_mituya").text(Number($("#side_mituya").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      if (roulette_flag === 0) {
        $("#count").text(Number($("#count").text()) - 120);
      }
    }

    if (Number($("#twelve_remain").val()) === 0) {
      $("#twelve").text("売り切れ");
      $("#twelve").prop("disabled", true);
    }

    let roulette_number = Math.floor(Math.random() * 99) + 1;
    $("#roulette").text(roulette_number);
    if (
      roulette_number === 11 ||
      roulette_number === 22 ||
      roulette_number === 33 ||
      roulette_number === 44 ||
      roulette_number === 55 ||
      roulette_number === 66 ||
      roulette_number === 77 ||
      roulette_number === 88 ||
      roulette_number === 99
    ) {
      roulette_flag = 1;

      $(".juice_button").map(function () {
        if ($(".juice_button").val() >= 1) {
          $(this).prop("disabled", false);
          if (roulette_flag === 1) {
            $("#twelve_remain").val($("#twelve_remain").val() - 1);
            $("#side_mituya").text(Number($("#side_mituya").text()) + 1);
            $("#remain_count").val($("#remain_count").val() - 1);
          }
        }
      });
      roulette_flag = 0;
    }
  });

  $("#fourteen").on("click", function () {
    if ($("#fourteen_remain").val() > 0 && $("#count").text() > 0) {
      $("#fourteen_remain").val($("#fourteen_remain").val() - 1);
      $("#side_pon").text(Number($("#side_pon").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 140);
    }
    if (Number($("#fourteen_remain").val()) === 0) {
      $("#fourteen").text("売り切れ");
      $("#fourteen").prop("disabled", true);
    }
  });

  $("#fifteen").on("click", function () {
    if ($("#fifteen_remain").val() > 0 && $("#count").text() > 0) {
      $("#fifteen_remain").val($("#fifteen_remain").val() - 1);
      $("#side_toropi").text(Number($("#side_toropi").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 150);
    }
    if (Number($("#fifteen_remain").val()) === 0) {
      $("#fifteen").text("売り切れ");
      $("#fifteen").prop("disabled", true);
    }
  });

  $("#eighteen").on("click", function () {
    if ($("#eighteen_remain").val() > 0 && $("#count").text() > 0) {
      $("#eighteen_remain").val($("#eighteen_remain").val() - 1);
      $("#side_tea").text(Number($("#side_tea").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 180);
    }
    if (Number($("#eighteen_remain").val()) === 0) {
      $("#eighteen").text("売り切れ");
      $("#eighteen").prop("disabled", true);
    }
  });

  $("#ten").on("click", function () {
    if ($("#ten_remain").val() > 0 && $("#count").text() > 0) {
      $("#ten_remain").val($("#ten_remain").val() - 1);
      $("#side_lemon").text(Number($("#side_lemon").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 100);
    }
    if (Number($("#ten_remain").val()) === 0) {
      $("#ten").text("売り切れ");
      $("#ten").prop("disabled", true);
    }
  });

  $("#twenty").on("click", function () {
    if ($("#twenty_remain").val() > 0 && $("#count").text() > 0) {
      $("#twenty_remain").val($("#twenty_remain").val() - 1);
      $("#side_nekuta").text(Number($("#side_nekuta").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 200);
    }
    if (Number($("#twenty_remain").val()) === 0) {
      $("#twenty").text("売り切れ");
      $("#twenty").prop("disabled", true);
    }
  });

  $("#thirty").on("click", function () {
    if ($("#thirty_remain").val() > 0 && $("#count").text() > 0) {
      $("#thirty_remain").val($("#thirty_remain").val() - 1);
      $("#side_cola").text(Number($("#side_cola").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 300);
    }
    if (Number($("#thirty_remain").val()) === 0) {
      $("#thirty").text("売り切れ");
      $("#thirty").prop("disabled", true);
    }
  });

  $("#fifty").on("click", function () {
    if ($("#fifty_remain").val() > 0 && $("#count").text() > 0) {
      $("#fifty_remain").val($("#fifty_remain").val() - 1);
      $("#side_pain").text(Number($("#side_pain").text()) + 1);
      $("#remain_count").val($("#remain_count").val() - 1);
      $("#count").text(Number($("#count").text()) - 500);
    }
    if (Number($("#fifty_remain").val()) === 0) {
      $("#fifty").text("売り切れ");
      $("#fifty").prop("disabled", true);
    }
  });

  $("#reset").on("click", function () {
    $("#count").text(0);
    $("#money_fifty").text(money_fifty);
    $("#money_thou").val(money_thou);
    $("#money_ten").val(money_ten);
    $("#money_one").val(money_one);
  });

  $("#button_first").on("click", function () {
    $("#count").text(0);
    $("#money_fifty").text(5000);
    $("#money_thou").val(4);
    $("#money_ten").val(9);
    $("#money_one").val(10);
    $("#remain_count").val(80);
    $("#twelve_remain").val(10);
    $("#fourteen_remain").val(10);
    $("#fifteen_remain").val(10);
    $("#eighteen_remain").val(10);
    $("#ten_remain").val(10);
    $("#twenty_remain").val(10);
    $("#thirty_remain").val(10);
    $("#fifty_remain").val(10);
    $("#twelve").text("120円");
    $("#fourteen").text("140円");
    $("#fifteen").text("150円");
    $("#eighteen").text("180円");
    $("#ten").text("100円");
    $("#twenty").text("200円");
    $("#thirty").text("300円");
    $("#fifty").text("500円");
    $("#side_mituya").text(0);
    $("#side_pon").text(0);
    $("#side_toropi").text(0);
    $("#side_tea").text(0);
    $("#side_lemon").text(0);
    $("#side_nekuta").text(0);
    $("#side_cola").text(0);
    $("#side_pain").text(0);
    $("#roulette_one").text(0);
    $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").prop(
      "disabled",
      true
    );
  });

  // const button_light = {
  //   "#twelve": 120,
  //   "#fourteen": 140,
  //   "#fifteen": 150,
  //   "#eighteen": 180,
  //   "#ten": 100,
  //   "#twenty": 200,
  //   "#thirty": 300,
  //   "#fifty": 500,
  // };
  // let juice_price = () => {
  //   $(".money_count").map($(".money_count").text() > $(".juice_button"));
  //   console.log("hoge");
  // };
  // $(".juice_button").prop("disabled", true);
  // $(".money_button").on("click", function () {
  //   if ($("#money_fifty").text() > 0 && $(".money_remain").val() > 0) {
  //     $("#money_fifty").text($("#money_fifty").text() - $(this).data("money"));
  //     $(this)
  //       .prev()
  //       .val($(this).prev().val() - 1);
  //     $("#count").text(
  //       Number($("#count").text()) + Number($(this).data("money"))
  //     );
  //   }
  //   $(".juice_button").map(function () {
  //     if ($("#count").text() >= "#" + $(".juice_button")) {
  //       $("#twelve").prop("disabled", false);
  //     }
  //   });
  //   if ($("#count").text() >= "#" + $(".juice_button").map()) {
  //     $("#twelve").prop("disabled", false);
  //   }
  //   if ($("#count").text() >= 100) {
  //     $("#ten").prop("disabled", false);
  //   }
  //   if ($("#count").text() >= 140) {
  //     $("#fourteen").prop("disabled", false);
  //   }
  //   if ($("#count").text() >= 200) {
  //     $("#twenty").prop("disabled", false);
  //   }
  //   juice_price();
  // });
  // $("").on("click", function () {});
});

// d 1000円押したら財布から1000円が自販機に入って、財布から1000円引かれる、1000円の残数から1引かれる、ただし、マイナスにならないようにする
// d 100円押したら財布から100円が自販機に入って、財布から100円引かれる、100円の残数から1引かれる、ただし、マイナスにならないようにする
// d 10円押したら財布から10円が自販機に入って、財布から10円引かれる、10円の残数から1引かれる、ただし、マイナスにならないようにする
// d 入れた金額が表示される
// d 入った金額によってボタンを光らせる
// d それぞれの金額のボタンを押すと自販機からその金額が引かれて、トータルのジュースの残数と個別の残数が1づつ減る、ただし、マイナスにならないようにする
// d 横の買ったジュース欄に押したジュースが1追加される
// 購入時、ジュースのボタンを押すとルーレットが回り、ゾロ目なら当たりとして、残金を減らさずにジュースを1本排出
// 排出したジュースの残数を1減らして横の買ったジュース欄に押したジュースが1追加される
// リセットボタンを押すと、自販機に入ってる額が財布に戻る
// 初期状態を押すと全てがリセットされる
