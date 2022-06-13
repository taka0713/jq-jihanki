$(function(){

    let roulette_flug = 0;

    $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', true);

    $('#money_thou,#money_ten,#money_one').change(function(){

        let money_thou = Number($('#money_thou').val());
        let money_ten = Number($('#money_ten').val());
        let money_one = Number($('#money_one').val());
        total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
        $('#money_fifty').text(total_money);
    });

    $('#button_thousand').click(function(){
        
        let money_thou = Number($('#money_thou').val());
        let money_fifty = Number($('#money_fifty').text());
        let count = Number($('#count').text());
        count = count + 1000;
        money_thou = money_thou - 1;
        money_fifty = money_fifty - 1000;
        $('#money_thou').val(money_thou);
        $('#money_fifty').text(money_fifty);
        $('#count').text(count);
    });

    $('#button_hundred').click(function(){
        
        let money_ten = Number($('#money_ten').val());
        let money_fifty = Number($('#money_fifty').text());
        let count = Number($('#count').text());
        count = count + 100;
        money_thou = money_thou - 1;
        money_fifty = money_fifty - 100;
        $('#money_ten').val(money_ten);
        $('#money_fifty').text(money_fifty);
        $('#count').text(count);
    });

    $('#button_ten').click(function(){
        
        let money_one = Number($('#money_one').val());
        let money_fifty = Number($('#money_fifty').text());
        let count = Number($('#count').text());
        count = count + 10;
        money_one = money_one - 1;
        money_fifty = money_fifty - 10;
        $('#money_one').val(money_one);
        $('#money_fifty').text(money_fifty);
        $('#count').text(count);
    });

    $('#twelve').click(function(e){
        let twelve_remain = Number($('#twelve_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_mituya = Number($('#side_mituya').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            $('#reset').prop('disabled', false);

            twelve_remain = twelve_remain - 1;
            remain_count = remain_count - 1;
            side_mituya = side_mituya + 1;
            $('#twelve_remain').val(twelve_remain);
            $('#remain_count').val(remain_count);
            $('#side_mituya').text(side_mituya);

            roulette_flag = 0;
            e.preventDefault();
        }

        
        if(twelve_remain > 0 && buy_count >= 120 && roulette_flag === 0){

                twelve_remain = twelve_remain - 1;
                remain_count = remain_count - 1;
                side_mituya = side_mituya + 1;
                buy_count = buy_count - 120;
                $('#twelve_remain').val(twelve_remain);
                $('#remain_count').val(remain_count);
                $('#side_mituya').text(side_mituya);
                $('#count').text(buy_count);
        }

        if(buy_count < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(buy_count < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(buy_count < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(buy_count < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(buy_count < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(buy_count < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(buy_count < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(buy_count < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        if(twelve_remain === 0){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
            $('#twelve').text('売り切れ');
        }
    });

    $('#fourteen').click(function(){

    });

    $('#fifteen').click(function(){

    });

    $('#eighteen').click(function(){

    });

    $('#ten').click(function(){

    });

    $('#twenty').click(function(){

    });

    $('#thirty').click(function(){

    });

    $('#fifty').click(function(){

    });

    $('#reset').click(function(){

    });

    $('#button_first').click(function(){
        $('#count').text(0);
        $('#money_fifty').text(5000);
        $('#money_thou').val(4);
        $('#money_ten').val(9);
        $('#money_one').val(10);
        $('#remain_count').val(80);
        $('#twelve_remain').val(10);
        $('#fourteen_remain').val(10);
        $('#fifteen_remain').val(10);
        $('#eighteen_remain').val(10);
        $('#ten_remain').val(10);
        $('#twenty_remain').val(10);
        $('#thirty_remain').val(10);
        $('#fifty_remain').val(10);
        $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','none');
        $('#side_mituya').text(0);
        $('#side_pon').text(0);
        $('#side_toropi').text(0);
        $('#side_tea').text(0);
        $('#side_lemon').text(0);
        $('#side_nekuta').text(0);
        $('#side_cola').text(0);
        $('#side_pain').text(0);
        $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', true);
    });
});