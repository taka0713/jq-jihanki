$(function () {
  let roulette_flag = 0;

  let twelve_remain;
  let fourteen_remain;
  let fifteen_remain;
  let eighteen_remain;
  let ten_remain;
  let twenty_remain;
  let thirty_remain;
  let fifty_remain;
  let remain_count;
  let side_mituya;
  let side_pon;
  let side_toropi;
  let side_tea;
  let side_lemon;
  let side_nekuta;
  let side_cola;
  let side_pain;
  let buy_count;

  let defaultSet = () => {
    twelve_remain = Number($("#twelve_remain").val());
    fourteen_remain = Number($("#fourteen_remain").val());
    fifteen_remain = Number($("#fifteen_remain").val());
    eighteen_remain = Number($("#eighteen_remain").val());
    ten_remain = Number($("#ten_remain").val());
    twenty_remain = Number($("#twenty_remain").val());
    thirty_remain = Number($("#thirty_remain").val());
    fifty_remain = Number($("#fifty_remain").val());
    remain_count = Number($("#remain_count").val());
    side_mituya = Number($("#side_mituya").text());
    side_pon = Number($("#side_pon").text());
    side_toropi = Number($("#side_toropi").text());
    side_tea = Number($("#side_tea").text());
    side_lemon = Number($("#side_lemon").text());
    side_nekuta = Number($("#side_nekuta").text());
    side_cola = Number($("#side_cola").text());
    side_pain = Number($("#side_pain").text());
    buy_count = Number($("#count").text());
  };

  let changeButtonForPrice = () => {
    if (buy_count < 100) {
      $("#ten").prop("disabled", true);
      $("#ten").css("outline", "none");
    }
    if (buy_count < 120) {
      $("#twelve").prop("disabled", true);
      $("#twelve").css("outline", "none");
    }
    if (buy_count < 140) {
      $("#fourteen").prop("disabled", true);
      $("#fourteen").css("outline", "none");
    }
    if (buy_count < 150) {
      $("#fifteen").prop("disabled", true);
      $("#fifteen").css("outline", "none");
    }
    if (buy_count < 180) {
      $("#eighteen").prop("disabled", true);
      $("#eighteen").css("outline", "none");
    }
    if (buy_count < 200) {
      $("#twenty").prop("disabled", true);
      $("#twenty").css("outline", "none");
    }
    if (buy_count < 300) {
      $("#thirty").prop("disabled", true);
      $("#thirty").css("outline", "none");
    }
    if (buy_count < 500) {
      $("#fifty").prop("disabled", true);
      $("#fifty").css("outline", "none");
    }
  };

  let change_sold = () => {
    if (twelve_sold === 0) {
      $("#twelve").prop("disabled", true);
      $("#twelve").css("outline", "none");
    }
    if (fourteen_sold === 0) {
      $("#fourteen").prop("disabled", true);
      $("#fourteen").css("outline", "none");
    }
    if (fifteen_sold === 0) {
      $("#fifteen").prop("disabled", true);
      $("#fifteen").css("outline", "none");
    }
    if (eighteen_sold === 0) {
      $("#eighteen").prop("disabled", true);
      $("#eighteen").css("outline", "none");
    }
    if (ten_sold === 0) {
      $("#ten").prop("disabled", true);
      $("#ten").css("outline", "none");
    }
    if (twenty_sold === 0) {
      $("#twenty").prop("disabled", true);
      $("#twenty").css("outline", "none");
    }
    if (thirty_sold === 0) {
      $("#thirty").prop("disabled", true);
      $("#thirty").css("outline", "none");
    }
    if (fifty_sold === 0) {
      $("#fifty").prop("disabled", true);
      $("#fifty").css("outline", "none");
    }
  };

  let change_remain = () => {
    if (twelve_remain === 0) {
      $("#twelve").prop("disabled", true);
      $("#twelve").css("outline", "none");
    }
    if (fourteen_remain === 0) {
      $("#fourteen").prop("disabled", true);
      $("#fourteen").css("outline", "none");
    }
    if (fifteen_remain === 0) {
      $("#fifteen").prop("disabled", true);
      $("#fifteen").css("outline", "none");
    }
    if (eighteen_remain === 0) {
      $("#eighteen").prop("disabled", true);
      $("#eighteen").css("outline", "none");
    }
    if (ten_remain === 0) {
      $("#ten").prop("disabled", true);
      $("#ten").css("outline", "none");
    }
    if (twenty_remain === 0) {
      $("#twenty").prop("disabled", true);
      $("#twenty").css("outline", "none");
    }
    if (thirty_remain === 0) {
      $("#thirty").prop("disabled", true);
      $("#thirty").css("outline", "none");
    }
    if (fifty_remain === 0) {
      $("#fifty").prop("disabled", true);
      $("#fifty").css("outline", "none");
    }
  };

  $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").prop(
    "disabled",
    true
  );

  $("#money_thou,#money_ten,#money_one").change(function () {
    let money_thou = Number($("#money_thou").val());
    let money_ten = Number($("#money_ten").val());
    let money_one = Number($("#money_one").val());
    let total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
    $("#money_fifty").text(total_money);
  });

  $("#button_thousand").click(function () {
    let money_thou = Number($("#money_thou").val());
    let money_ten = Number($("#money_ten").val());
    let money_one = Number($("#money_one").val());
    let money_fifty = Number($("#money_fifty").text());
    let count = Number($("#count").text());

    let twelve_sold = Number($("#twelve_remain").val());
    let fourteen_sold = Number($("#fourteen_remain").val());
    let fifteen_sold = Number($("#fifteen_remain").val());
    let eighteen_sold = Number($("#eighteen_remain").val());
    let ten_sold = Number($("#ten_remain").val());
    let twenty_sold = Number($("#twenty_remain").val());
    let thirty_sold = Number($("#thirty_remain").val());
    let fifty_sold = Number($("#fifty_remain").val());

    if (money_thou > 0) {
      let total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
      money_thou = money_thou - 1;
      $("#money_thou").val(money_thou);
      total_money = total_money - 1000;
      $("#money_fifty").text(total_money);
      count = count + 1000;
      $("#count").text(count);

      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    }

    change_sold();
  });

  $("#button_hundred").click(function () {
    let money_thou = Number($("#money_thou").val());
    let money_ten = Number($("#money_ten").val());
    let money_one = Number($("#money_one").val());
    let money_fifty = Number($("#money_fifty").text());
    let count = Number($("#count").text());

    let twelve_sold = Number($("#twelve_remain").val());
    let fourteen_sold = Number($("#fourteen_remain").val());
    let fifteen_sold = Number($("#fifteen_remain").val());
    let eighteen_sold = Number($("#eighteen_remain").val());
    let ten_sold = Number($("#ten_remain").val());
    let twenty_sold = Number($("#twenty_remain").val());
    let thirty_sold = Number($("#thirty_remain").val());
    let fifty_sold = Number($("#fifty_remain").val());

    if (count <= 100) {
      $("#ten").css("outline", "1px solid red");
      $("#ten").prop("disabled", false);
    } else if (count <= 200) {
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen").css(
        "outline",
        "1px solid red"
      );
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen").prop(
        "disabled",
        false
      );
    } else if (count <= 300) {
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty").css(
        "outline",
        "1px solid red"
      );
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty").prop(
        "disabled",
        false
      );
    } else if (count >= 500) {
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
      $(
        "#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty,#fifty"
      ).prop("disabled", false);
    }

    if (money_ten > 0) {
      let total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
      money_ten = money_ten - 1;
      $("#money_ten").val(money_ten);
      total_money = total_money - 100;
      $("#money_fifty").text(total_money);
      count = count + 100;
      $("#count").text(count);
    }

    change_sold();
  });

  $("#button_ten").click(function () {
    let money_thou = Number($("#money_thou").val());
    let money_ten = Number($("#money_ten").val());
    let money_one = Number($("#money_one").val());
    let money_fifty = Number($("#money_fifty").text());
    let count = Number($("#count").text());

    let twelve_sold = Number($("#twelve_remain").val());
    let fourteen_sold = Number($("#fourteen_remain").val());
    let fifteen_sold = Number($("#fifteen_remain").val());
    let eighteen_sold = Number($("#eighteen_remain").val());
    let ten_sold = Number($("#ten_remain").val());
    let twenty_sold = Number($("#twenty_remain").val());
    let thirty_sold = Number($("#thirty_remain").val());
    let fifty_sold = Number($("#fifty_remain").val());

    if (count >= 100 && count < 120) {
      $("#ten").css("outline", "1px solid red");
      $("#ten").prop("disabled", false);
    } else if (count >= 100 && count < 140) {
      $("#ten,#twelve").css("outline", "1px solid red");
      $("#ten,#twelve").prop("disabled", false);
    } else if (count >= 100 && count < 150) {
      $("#ten,#twelve,#fourteen").css("outline", "1px solid red");
      $("#ten,#twelve,#fourteen").prop("disabled", false);
    } else if (count >= 100 && count < 180) {
      $("#ten,#twelve,#fourteen,#fifteen").css("outline", "1px solid red");
      $("#ten,#twelve,#fourteen,#fifteen").prop("disabled", false);
    } else if (count >= 100 && count < 200) {
      $("#ten,#twelve,#fourteen,#fifteen,#eighteen").css(
        "outline",
        "1px solid red"
      );
      $("#ten,#twelve,#fourteen,#fifteen,#eighteen").prop("disabled", false);
    } else if (count >= 100 && count < 300) {
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen").css(
        "outline",
        "1px solid red"
      );
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen").prop(
        "disabled",
        false
      );
    } else if (count >= 100 && count < 500) {
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty").css(
        "outline",
        "1px solid red"
      );
      $("#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty").prop(
        "disabled",
        false
      );
    } else if (count >= 100 && count < 501) {
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
      $(
        "#ten,#twelve,#fourteen,#fifteen,#eighteen,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
    }

    if (money_one > 0) {
      let total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
      money_one = money_one - 1;
      $("#money_one").val(money_one);
      total_money = total_money - 10;
      $("#money_fifty").text(total_money);
      count = count + 10;
      $("#count").text(count);
    }

    change_sold();
  });

  $("#twelve").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      twelve_remain = twelve_remain - 1;
      remain_count = remain_count - 1;
      side_mituya = side_mituya + 1;
      $("#twelve_remain").val(twelve_remain);
      $("#remain_count").val(remain_count);
      $("#side_mituya").text(side_mituya);

      roulette_flag = 0;
      e.preventDefault();
    } else if (twelve_remain > 0 && buy_count >= 120 && roulette_flag === 0) {
      twelve_remain = twelve_remain - 1;
      remain_count = remain_count - 1;
      side_mituya = side_mituya + 1;
      buy_count = buy_count - 120;
      $("#twelve_remain").val(twelve_remain);
      $("#remain_count").val(remain_count);
      $("#side_mituya").text(side_mituya);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();

      if (twelve_remain === 0) {
        $("#twelve").prop("disabled", true);
        $("#twelve").css("outline", "none");
        $("#twelve").text("売り切れ");
      }
    }
  });

  $("#fourteen").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      fourteen_remain = fourteen_remain - 1;
      remain_count = remain_count - 1;
      side_pon = side_pon + 1;
      $("#fourteen_remain").val(fourteen_remain);
      $("#remain_count").val(remain_count);
      $("#side_pon").text(side_pon);

      roulette_flag = 0;
      e.preventDefault();
    } else if (fourteen_remain > 0 && buy_count >= 140 && roulette_flag === 0) {
      fourteen_remain = fourteen_remain - 1;
      remain_count = remain_count - 1;
      side_pon = side_pon + 1;
      buy_count = buy_count - 140;
      $("#fourteen_remain").val(fourteen_remain);
      $("#remain_count").val(remain_count);
      $("#side_pon").text(side_pon);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();
    }

    if (fourteen_remain === 0) {
      $("#fourteen").prop("disabled", true);
      $("#fourteen").css("outline", "none");
      $("#fourteen").text("売り切れ");
    }
  });

  $("#fifteen").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      fifteen_remain = fifteen_remain - 1;
      remain_count = remain_count - 1;
      side_toropi = side_toropi + 1;
      $("#fifteen_remain").val(fifteen_remain);
      $("#remain_count").val(remain_count);
      $("#side_toropi").text(side_toropi);

      roulette_flag = 0;
      e.preventDefault();
    } else if (fifteen_remain > 0 && buy_count >= 150 && roulette_flag === 0) {
      fifteen_remain = fifteen_remain - 1;
      remain_count = remain_count - 1;
      side_toropi = side_toropi + 1;
      buy_count = buy_count - 150;
      $("#fifteen_remain").val(fifteen_remain);
      $("#remain_count").val(remain_count);
      $("#side_toropi").text(side_toropi);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;
      changeButtonForPrice();
    }

    if (fifteen_remain === 0) {
      $("#fifteen").prop("disabled", true);
      $("#fifteen").css("outline", "none");
      $("#fifteen").text("売り切れ");
    }
  });

  $("#eighteen").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      eighteen_remain = eighteen_remain - 1;
      remain_count = remain_count - 1;
      side_tea = side_tea + 1;
      $("#eighteen_remain").val(eighteen_remain);
      $("#remain_count").val(remain_count);
      $("#side_tea").text(side_tea);

      roulette_flag = 0;
      e.preventDefault();
    } else if (eighteen_remain > 0 && buy_count >= 180 && roulette_flag === 0) {
      eighteen_remain = eighteen_remain - 1;
      remain_count = remain_count - 1;
      side_tea = side_tea + 1;
      buy_count = buy_count - 180;
      $("#eighteen_remain").val(eighteen_remain);
      $("#remain_count").val(remain_count);
      $("#side_tea").text(side_tea);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();
    }

    if (eighteen_remain === 0) {
      $("#eighteen").prop("disabled", true);
      $("#eighteen").css("outline", "none");
      $("#eighteen").text("売り切れ");
    }
  });

  $("#ten").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      ten_remain = ten_remain - 1;
      remain_count = remain_count - 1;
      side_lemon = side_lemon + 1;
      $("#ten_remain").val(ten_remain);
      $("#remain_count").val(remain_count);
      $("#side_lemon").text(side_lemon);

      roulette_flag = 0;
      e.preventDefault();
    } else if (ten_remain > 0 && buy_count >= 100 && roulette_flag === 0) {
      ten_remain = ten_remain - 1;
      remain_count = remain_count - 1;
      side_lemon = side_lemon + 1;
      buy_count = buy_count - 100;
      $("#ten_remain").val(ten_remain);
      $("#remain_count").val(remain_count);
      $("#side_lemon").text(side_lemon);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();
    }

    if (ten_remain === 0) {
      $("#ten").prop("disabled", true);
      $("#ten").css("outline", "none");
      $("#ten").text("売り切れ");
    }
  });

  $("#twenty").click(function (e) {
    defaultSet();
    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      twenty_remain = twenty_remain - 1;
      remain_count = remain_count - 1;
      side_nekuta = side_nekuta + 1;
      $("#twenty_remain").val(twenty_remain);
      $("#remain_count").val(remain_count);
      $("#side_nekuta").text(side_nekuta);

      roulette_flag = 0;
      e.preventDefault();
    } else if (twenty_remain > 0 && buy_count >= 200 && roulette_flag === 0) {
      twenty_remain = twenty_remain - 1;
      remain_count = remain_count - 1;
      side_nekuta = side_nekuta + 1;
      buy_count = buy_count - 200;
      $("#twenty_remain").val(twenty_remain);
      $("#remain_count").val(remain_count);
      $("#side_nekuta").text(side_nekuta);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();
    }

    if (twelve_remain === 0) {
      $("#twelve").prop("disabled", true);
      $("#twelve").css("outline", "none");
    }
    if (fourteen_remain === 0) {
      $("#fourteen").prop("disabled", true);
      $("#fourteen").css("outline", "none");
    }
    if (fifteen_remain === 0) {
      $("#fifteen").prop("disabled", true);
      $("#fifteen").css("outline", "none");
    }
    if (eighteen_remain === 0) {
      $("#eighteen").prop("disabled", true);
      $("#eighteen").css("outline", "none");
    }
    if (ten_remain === 0) {
      $("#ten").prop("disabled", true);
      $("#ten").css("outline", "none");
    }
    if (twenty_remain === 0) {
      $("#twenty").prop("disabled", true);
      $("#twenty").css("outline", "none");
    }
    if (thirty_remain === 0) {
      $("#thirty").prop("disabled", true);
      $("#thirty").css("outline", "none");
    }
    if (fifty_remain === 0) {
      $("#fifty").prop("disabled", true);
      $("#fifty").css("outline", "none");
    }

    if (twenty_remain === 0) {
      $("#twenty").prop("disabled", true);
      $("#twenty").css("outline", "none");
      $("#twenty").text("売り切れ");
    }
  });

  $("#thirty").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      thirty_remain = thirty_remain - 1;
      remain_count = remain_count - 1;
      side_cola = side_cola + 1;
      $("#thirty_remain").val(thirty_remain);
      $("#remain_count").val(remain_count);
      $("#side_cola").text(side_cola);

      roulette_flag = 0;
      e.preventDefault();
    } else if (thirty_remain > 0 && buy_count >= 300 && roulette_flag === 0) {
      thirty_remain = thirty_remain - 1;
      remain_count = remain_count - 1;
      side_cola = side_cola + 1;
      buy_count = buy_count - 300;
      $("#thirty_remain").val(thirty_remain);
      $("#remain_count").val(remain_count);
      $("#side_cola").text(side_cola);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();
    }

    if (thirty_remain === 0) {
      $("#thirty").prop("disabled", true);
      $("#thirty").css("outline", "none");
      $("#thirty").text("売り切れ");
    }
  });

  $("#fifty").click(function (e) {
    defaultSet();

    change_remain();

    let roulette_number = Math.floor(Math.random() * 99) + 1;

    if (roulette_flag === 1) {
      $("#reset").prop("disabled", false);

      fifty_remain = fifty_remain - 1;
      remain_count = remain_count - 1;
      side_pain = side_pain + 1;
      $("#fifty_remain").val(fifty_remain);
      $("#remain_count").val(remain_count);
      $("#side_pain").text(side_pain);

      roulette_flag = 0;
      e.preventDefault();
    } else if (fifty_remain > 0 && buy_count >= 500 && roulette_flag === 0) {
      fifty_remain = fifty_remain - 1;
      remain_count = remain_count - 1;
      side_pain = side_pain + 1;
      buy_count = buy_count - 500;
      $("#fifty_remain").val(fifty_remain);
      $("#remain_count").val(remain_count);
      $("#side_pain").text(side_pain);
      $("#count").text(buy_count);

      roulette_number = Math.floor(Math.random() * 99) + 1;
      $("#roulette_one").text(roulette_number);
    }

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
      $(
        "#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty"
      ).prop("disabled", false);
      $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
        "outline",
        "1px solid red"
      );
    } else {
      roulette_flag = 0;

      changeButtonForPrice();
    }

    if (fifty_remain === 0) {
      $("#fifty").prop("disabled", true);
      $("#fifty").css("outline", "none");
      $("#fifty").text("売り切れ");
    }
  });

  $("#reset").click(function () {
    let money_fifty = Number($("#money_fifty").text());
    let count = Number($("#count").text());
    let money_thou = Number($("#money_thou").val());
    let money_ten = Number($("#money_ten").val());
    let money_one = Number($("#money_one").val());
    let thou_divide = count / 1000;
    let ten_divide = (count % 1000) / 100;
    let one_divide = ((count % 1000) % 100) / 10;
    money_fifty = count + money_fifty;
    money_thou = money_thou + Math.floor(thou_divide);
    money_ten = money_ten + Math.floor(ten_divide);
    money_one = money_one + Math.floor(one_divide);
    $("#count").text(0);
    $("#money_fifty").text(money_fifty);
    $("#money_thou").val(money_thou);
    $("#money_ten").val(money_ten);
    $("#money_one").val(money_one);
  });

  $("#button_first").click(function () {
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
    $("#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty").css(
      "outline",
      "none"
    );
  });
});
