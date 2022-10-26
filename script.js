$(function () {
  let roulette_flag = 0;
  const roulette_hit = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  const rensou = {
    twelve: "side_mituya",
    fourteen: "side_pon",
    fifteen: "side_toropi",
    eighteen: "side_tea",
    ten: "side_lemon",
    twenty: "side_nekuta",
    thirty: "side_cola",
    fifty: "side_pain",
  };

  let juice_price = () => {
    $(".juice_button").map(function () {
      $(this).prop("disabled", $("#count").text() < $(this).data("price"));
      if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
        $(this).prop("disabled", true);
      }
    });
  };

  let juice_reset = () => {
    $(".juice_button").map(function () {
      $(this).prop("disabled", true);
      $("#roulette").text(0);
    });
  };

  $(".money_button").on("click", function () {
    if ($(this).prev().val() > 0) {
      $(this)
        .prev()
        .val($(this).prev().val() - 1);
      $("#money_fifty").text($("#money_fifty").text() - $(this).data("money"));
      $("#count").text(Number($("#count").text()) + $(this).data("money"));
    }
    juice_price();
  });

  $(".juice_button").on("click", function () {
    if ($("#" + $(this).prop("id") + "_remain").val() > 0) {
      if (roulette_flag === 0) {
        $("#count").text(Number($("#count").text()) - $(this).data("price"));
      }

      let stock = $("#" + $(this).prop("id") + "_remain").val();
      $("#" + $(this).prop("id") + "_remain").val(stock - 1);
      $("#" + rensou[$(this).prop("id")]).text(
        Number($("#" + rensou[$(this).prop("id")]).text()) + 1
      );
      $("#remain_count").val($("#remain_count").val() - 1);
      if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
        $(this).prop("disabled", true);
        $(this).text("売り切れ");
      }
    }

    if (roulette_flag === 0) {
      let random = Math.floor(Math.random() * 99) + 1;
      $("#roulette").text(random);
      if (roulette_hit.indexOf(random) !== -1) {
        roulette_flag = 1;
        $("#reset").prop("disabled", true);
        if (Number($("#" + $(this).prop("id") + "_remain").val()) > 0) {
          $(".juice_button").map(function () {
            $(this).prop("disabled", false);
          });
        }
        if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
          $(".juice_button").map(function () {
            $(this).prop("disabled", true);
          });
        }
      }
    } else {
      roulette_flag = 0;
      $("#roulette").text(0);
      $("#reset").prop("disabled", false);
    }
    juice_price();
  });

  $("#reset").on("click", function () {
    let total_money =
      Number($("#money_fifty").text()) + Number($("#count").text());
    $("#money_fifty").text(total_money);
    $("#count").text(0);
    $("#roulette").text(0);
    $("#money_thou").val(Math.floor(total_money / 1000));
    $("#money_ten").val(Math.floor((total_money % 1000) / 100));
    $("#money_one").val(Math.floor((total_money % 1000) % 100) / 10);
    juice_reset();
  });

  $("#button_first").on("click", function () {
    $(".all_reset").map(function () {
      $(this).val($(this).data("default"));
      $(this).text($(this).data("default"));
    });

    juice_reset();
  });
});

// let roulette_flag = 0;
//   $("#roulette").text(0);
//   $(".juice_button").map(function () {
//     $(this).prop("disabled", true);
//   });

//   const roulette_hit = [11, 22, 33, 44, 55, 66, 77, 88, 99];
//   const rensou = {
//     twelve: "side_mituya",
//     fourteen: "side_pon",
//     fifteen: "side_toropi",
//     eighteen: "side_tea",
//     ten: "side_lemon",
//     twenty: "side_nekuta",
//     thirty: "side_cola",
//     fifty: "side_pain",
//   };

//   let juice_price = () => {
//     $(".juice_button").map(function () {
//       $(this).prop("disabled", $("#count").text() < $(this).data("price"));
//       if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
//         $(this).prop("disabled", true);
//       }
//     });
//   };
//   let juice_reset = () => {
//     $(".juice_button").map(function () {
//       $(this).prop("disabled", true);
//       $("#roulette").text(0);
//     });
//   };
//   $(".money_button").on("click", function () {
//     if ($("#money_fifty").text() > 0 && $(this).prev("input").val() > 0) {
//       $(this)
//         .prev("input")
//         .val($(this).prev("input").val() - 1);
//       $("#money_fifty").text($("#money_fifty").text() - $(this).data("money"));
//       $("#count").text(Number($("#count").text()) + $(this).data("money"));
//     }
//     juice_price();
//   });
//   $(".juice_button").on("click", function () {
//     if (
//       Number($("#count").text()) - $(this).data("price") >= 0 &&
//       $("#" + $(this).prop("id") + "_remain").val() > 0
//     ) {
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - $(this).data("price"));
//       }
//       let stock = $("#" + $(this).prop("id") + "_remain").val();
//       $("#" + $(this).prop("id") + "_remain").val(stock - 1);
//       $("#" + rensou[$(this).prop("id")]).text(
//         Number($("#" + rensou[$(this).prop("id")]).text()) + 1
//       );
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
//         $(this).prop("disabled", true);
//         $(this).text("売り切れ");
//       }
//     }
//     if (roulette_flag === 0) {
//       let random = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(random);
//       if (roulette_hit.indexOf(random) !== -1) {
//         roulette_flag = 1;
//         $("#reset").prop("disabled", true);
//         if (Number($("#" + $(this).prop("id") + "_remain").val()) > 0) {
//           $(".juice_button").map(function () {
//             $(this).prop("disabled", false);
//           });
//         }
//         if (Number($("#" + $(this).prop("id") + "_remain").val()) === 0) {
//           $(".juice_button").map(function () {
//             $(this).prop("disabled", true);
//           });
//         }
//       }
//     } else {
//       roulette_flag = 0;
//       $("#roulette").text(0);
//       $("#reset").prop("disabled", false);
//     }

//     juice_price();
//   });
//   $("#reset").on("click", function () {
//     let total_money =
//       Number($("#count").text()) + Number($("#money_fifty").text());
//     $("#money_fifty").text(total_money);
//     $("#money_thou").val(Math.floor(total_money / 1000));
//     $("#money_ten").val(Math.floor((total_money % 1000) / 100));
//     $("#money_one").val(Math.floor((total_money % 1000) % 100) / 10);
//     $("#count").text(0);
//     $("#roulette").text(0);
//     juice_reset();
//   });
//   $("#button_first").on("click", function () {
//     $(".all_reset").map(function () {
//       $(this).val($(this).data("default"));
//       $(this).text($(this).data("default"));
//     });
//     juice_reset();
//   });

//   $(".money_thou").on("click", function () {
//     if ($("#money_fifty").text() > 0 && $("#money_thou").val() > 0) {
//       $("#money_fifty").text($("#money_fifty").text() - 1000);
//       $("#money_thou").val($("#money_thou").val() - 1);
//       $("#count").text(Number($("#count").text()) + 1000);
//     }

//     $("#twelve").prop("disabled", false);
//     $("#fourteen").prop("disabled", false);
//     $("#fifteen").prop("disabled", false);
//     $("#eighteen").prop("disabled", false);
//     $("#ten").prop("disabled", false);
//     $("#twenty").prop("disabled", false);
//     $("#thirty").prop("disabled", false);
//     $("#fifty").prop("disabled", false);
//     if (Number($("#twelve_remain").val()) === 0) {
//       $("#twelve").prop("disabled", true);
//     }
//     if (Number($("#fourteen_remain").val()) === 0) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if (Number($("#fifteen_remain").val()) === 0) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if (Number($("#eighteen_remain").val()) === 0) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if (Number($("#ten_remain").val()) === 0) {
//       $("#ten").prop("disabled", true);
//     }
//     if (Number($("#twenty_remain").val()) === 0) {
//       $("#twenty").prop("disabled", true);
//     }
//     if (Number($("#thirty_remain").val()) === 0) {
//       $("#thirty").prop("disabled", true);
//     }
//     if (Number($("#fifty_remain").val()) === 0) {
//       $("#fifty").prop("disabled", true);
//     }
//   });
//   $(".money_ten").on("click", function () {
//     if ($("#money_fifty").text() > 0 && $("#money_ten").val() > 0) {
//       $("#money_fifty").text($("#money_fifty").text() - 100);
//       $("#money_ten").val($("#money_ten").val() - 1);
//       $("#count").text(Number($("#count").text()) + 100);
//     }
//     if ($("#count").text() >= 100 && $("#count").text() < 120) {
//       $("#ten").prop("disabled", false);
//     }
//     if ($("#count").text() >= 120 && $("#count").text() < 140) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//     }
//     if ($("#count").text() >= 140 && $("#count").text() < 150) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//     }
//     if ($("#count").text() >= 150 && $("#count").text() < 180) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//     }
//     if ($("#count").text() >= 180 && $("#count").text() < 200) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//     }
//     if ($("#count").text() >= 200 && $("#count").text() < 300) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//       $("#twenty").prop("disabled", false);
//     }
//     if ($("#count").text() >= 300 && $("#count").text() < 500) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//       $("#twenty").prop("disabled", false);
//       $("#thirty").prop("disabled", false);
//     }
//     if ($("#count").text() >= 500) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//       $("#twenty").prop("disabled", false);
//       $("#thirty").prop("disabled", false);
//       $("#fifty").prop("disabled", false);
//     }
//     if (Number($("#twelve_remain").val()) === 0) {
//       $("#twelve").prop("disabled", true);
//     }
//     if (Number($("#fourteen_remain").val()) === 0) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if (Number($("#fifteen_remain").val()) === 0) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if (Number($("#eighteen_remain").val()) === 0) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if (Number($("#ten_remain").val()) === 0) {
//       $("#ten").prop("disabled", true);
//     }
//     if (Number($("#twenty_remain").val()) === 0) {
//       $("#twenty").prop("disabled", true);
//     }
//     if (Number($("#thirty_remain").val()) === 0) {
//       $("#thirty").prop("disabled", true);
//     }
//     if (Number($("#fifty_remain").val()) === 0) {
//       $("#fifty").prop("disabled", true);
//     }
//   });
//   $(".money_one").on("click", function () {
//     if ($("#money_fifty").text() > 0 && $("#money_one").val() > 0) {
//       $("#money_fifty").text($("#money_fifty").text() - 10);
//       $("#money_one").val($("#money_one").val() - 1);
//       $("#count").text(Number($("#count").text()) + 10);
//     }
//     if ($("#count").text() >= 100 && $("#count").text() < 120) {
//       $("#ten").prop("disabled", false);
//     }
//     if ($("#count").text() >= 120 && $("#count").text() < 140) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//     }
//     if ($("#count").text() >= 140 && $("#count").text() < 150) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//     }
//     if ($("#count").text() >= 150 && $("#count").text() < 180) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//     }
//     if ($("#count").text() >= 180 && $("#count").text() < 200) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//     }
//     if ($("#count").text() >= 200 && $("#count").text() < 300) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//       $("#twenty").prop("disabled", false);
//     }
//     if ($("#count").text() >= 300 && $("#count").text() < 500) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//       $("#twenty").prop("disabled", false);
//       $("#thirty").prop("disabled", false);
//     }
//     if ($("#count").text() >= 500) {
//       $("#ten").prop("disabled", false);
//       $("#twelve").prop("disabled", false);
//       $("#fourteen").prop("disabled", false);
//       $("#fifteen").prop("disabled", false);
//       $("#eighteen").prop("disabled", false);
//       $("#twenty").prop("disabled", false);
//       $("#thirty").prop("disabled", false);
//       $("#fifty").prop("disabled", false);
//     }
//     if (Number($("#twelve_remain").val()) === 0) {
//       $("#twelve").prop("disabled", true);
//     }
//     if (Number($("#fourteen_remain").val()) === 0) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if (Number($("#fifteen_remain").val()) === 0) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if (Number($("#eighteen_remain").val()) === 0) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if (Number($("#ten_remain").val()) === 0) {
//       $("#ten").prop("disabled", true);
//     }
//     if (Number($("#twenty_remain").val()) === 0) {
//       $("#twenty").prop("disabled", true);
//     }
//     if (Number($("#thirty_remain").val()) === 0) {
//       $("#thirty").prop("disabled", true);
//     }
//     if (Number($("#fifty_remain").val()) === 0) {
//       $("#fifty").prop("disabled", true);
//     }
//   });

//   $("#twelve").on("click", function () {
//     if ($("#twelve_remain").val() > 0 && $("#count").text() > 0) {
//       $("#twelve_remain").val($("#twelve_remain").val() - 1);
//       $("#side_mituya").text(Number($("#side_mituya").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 120);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }

//     if (Number($("#twelve_remain").val()) === 0) {
//       $("#twelve").text("売り切れ");
//       $("#twelve").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#fourteen").on("click", function () {
//     if ($("#fourteen_remain").val() > 0 && $("#count").text() > 0) {
//       $("#fourteen_remain").val($("#fourteen_remain").val() - 1);
//       $("#side_pon").text(Number($("#side_pon").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 140);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#fourteen_remain").val()) === 0) {
//       $("#fourteen").text("売り切れ");
//       $("#fourteen").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#fifteen").on("click", function () {
//     if ($("#fifteen_remain").val() > 0 && $("#count").text() > 0) {
//       $("#fifteen_remain").val($("#fifteen_remain").val() - 1);
//       $("#side_toropi").text(Number($("#side_toropi").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);

//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 150);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#fifteen_remain").val()) === 0) {
//       $("#fifteen").text("売り切れ");
//       $("#fifteen").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#eighteen").on("click", function () {
//     if ($("#eighteen_remain").val() > 0 && $("#count").text() > 0) {
//       $("#eighteen_remain").val($("#eighteen_remain").val() - 1);
//       $("#side_tea").text(Number($("#side_tea").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 180);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#eighteen_remain").val()) === 0) {
//       $("#eighteen").text("売り切れ");
//       $("#eighteen").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#ten").on("click", function () {
//     if ($("#ten_remain").val() > 0 && $("#count").text() > 0) {
//       $("#ten_remain").val($("#ten_remain").val() - 1);
//       $("#side_lemon").text(Number($("#side_lemon").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 100);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#ten_remain").val()) === 0) {
//       $("#ten").text("売り切れ");
//       $("#ten").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#twenty").on("click", function () {
//     if ($("#twenty_remain").val() > 0 && $("#count").text() > 0) {
//       $("#twenty_remain").val($("#twenty_remain").val() - 1);
//       $("#side_nekuta").text(Number($("#side_nekuta").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 200);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#twenty_remain").val()) === 0) {
//       $("#twenty").text("売り切れ");
//       $("#twenty").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#thirty").on("click", function () {
//     if ($("#thirty_remain").val() > 0 && $("#count").text() > 0) {
//       $("#thirty_remain").val($("#thirty_remain").val() - 1);
//       $("#side_cola").text(Number($("#side_cola").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 300);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#thirty_remain").val()) === 0) {
//       $("#thirty").text("売り切れ");
//       $("#thirty").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#fifty").on("click", function () {
//     if ($("#fifty_remain").val() > 0 && $("#count").text() > 0) {
//       $("#fifty_remain").val($("#fifty_remain").val() - 1);
//       $("#side_pain").text(Number($("#side_pain").text()) + 1);
//       $("#remain_count").val($("#remain_count").val() - 1);
//       if (roulette_flag === 0) {
//         $("#count").text(Number($("#count").text()) - 500);
//       }
//     }
//     if ($("#count").text() < 100) {
//       $("#ten").prop("disabled", true);
//     }
//     if ($("#count").text() < 120) {
//       $("#twelve").prop("disabled", true);
//     }
//     if ($("#count").text() < 140) {
//       $("#fourteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 150) {
//       $("#fifteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 180) {
//       $("#eighteen").prop("disabled", true);
//     }
//     if ($("#count").text() < 200) {
//       $("#twenty").prop("disabled", true);
//     }
//     if ($("#count").text() < 300) {
//       $("#thirty").prop("disabled", true);
//     }
//     if ($("#count").text() < 500) {
//       $("#fifty").prop("disabled", true);
//     }
//     if (Number($("#fifty_remain").val()) === 0) {
//       $("#fifty").text("売り切れ");
//       $("#fifty").prop("disabled", true);
//     }
//     if (roulette_flag === 0) {
//       let roulette_number = Math.floor(Math.random() * 99) + 1;
//       $("#roulette").text(roulette_number);
//       if (
//         roulette_number === 11 ||
//         roulette_number === 22 ||
//         roulette_number === 33 ||
//         roulette_number === 44 ||
//         roulette_number === 55 ||
//         roulette_number === 66 ||
//         roulette_number === 77 ||
//         roulette_number === 88 ||
//         roulette_number === 99
//       ) {
//         roulette_flag = 1;

//         $(".juice_button").map(function () {
//           if ($("#" + $(this).prop("id") + "_remain").val() >= 1) {
//             $(this).prop("disabled", false);
//           }
//         });
//       }
//     } else {
//       roulette_flag = 0;
//     }
//   });

//   $("#reset").on("click", function () {
//     let total_money =
//       Number($("#count").text()) + Number($("#money_fifty").text());

//     $("#count").text(0);
//     $("#money_fifty").text(total_money);
//     $("#money_thou").val(Math.floor(total_money / 1000));
//     $("#money_ten").val(Math.floor((total_money % 1000) / 100));
//     $("#money_one").val(Math.floor(((total_money % 1000) % 100) / 10));

//     $("#ten").prop("disabled", true);

//     $("#twelve").prop("disabled", true);

//     $("#fourteen").prop("disabled", true);

//     $("#fifteen").prop("disabled", true);

//     $("#eighteen").prop("disabled", true);

//     $("#twenty").prop("disabled", true);

//     $("#thirty").prop("disabled", true);

//     $("#fifty").prop("disabled", true);
//   });

//   $("#button_first").on("click", function () {
//     $("#roulette").text(0);
//     $("#count").text(0);
//     $("#money_fifty").text(5000);
//     $("#money_thou").val(4);
//     $("#money_ten").val(9);
//     $("#money_one").val(10);
//     $("#remain_count").val(80);
//     $("#twelve_remain").val(10);
//     $("#fourteen_remain").val(10);
//     $("#fifteen_remain").val(10);
//     $("#eighteen_remain").val(10);
//     $("#ten_remain").val(10);
//     $("#twenty_remain").val(10);
//     $("#thirty_remain").val(10);
//     $("#fifty_remain").val(10);
//     $("#twelve").text("120円");
//     $("#fourteen").text("140円");
//     $("#fifteen").text("150円");
//     $("#eighteen").text("180円");
//     $("#ten").text("100円");
//     $("#twenty").text("200円");
//     $("#thirty").text("300円");
//     $("#fifty").text("500円");
//     $("#side_mituya").text(0);
//     $("#side_pon").text(0);
//     $("#side_toropi").text(0);
//     $("#side_tea").text(0);
//     $("#side_lemon").text(0);
//     $("#side_nekuta").text(0);
//     $("#side_cola").text(0);
//     $("#side_pain").text(0);
//     $("#roulette_one").text(0);
//     $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").prop(
//       "disabled",
//       true
//     );
//   });

// d 1000円押したら財布から1000円が自販機に入って、財布から1000円引かれる、1000円の残数から1引かれる、ただし、マイナスにならないようにする
// d 100円押したら財布から100円が自販機に入って、財布から100円引かれる、100円の残数から1引かれる、ただし、マイナスにならないようにする
// d 10円押したら財布から10円が自販機に入って、財布から10円引かれる、10円の残数から1引かれる、ただし、マイナスにならないようにする
// d 入れた金額が表示される
// d 入った金額によってボタンを光らせる
// d それぞれの金額のボタンを押すと自販機からその金額が引かれて、トータルのジュースの残数と個別の残数が1づつ減る、ただし、マイナスにならないようにする
// d 横の買ったジュース欄に押したジュースが1追加される
// d 購入時、ジュースのボタンを押すとルーレットが回り、ゾロ目なら当たりとして、残金を減らさずにジュースを1本排出
// d 排出したジュースの残数を1減らして横の買ったジュース欄に押したジュースが1追加される
// d リセットボタンを押すと、自販機に入ってる額が財布に戻る
// d 初期状態を押すと全てがリセット
