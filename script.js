$(function(){
    let roulette_flag = 0;

    $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', true);
    let count_yen = Number($('#count').text());

    
    

    $('#money_thou,#money_ten,#money_one').change(function(){
        let money_thou = Number($('#money_thou').val());
        let money_ten = Number($('#money_ten').val());
        let money_one = Number($('#money_one').val());
        total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
        $('#money_fifty').text(total_money);
    });

    $('#button_thousand').click(function(){
        let money_thou_yen = Number($('#money_thou').val());
        let money_thou = Number($('#money_thou').val());
        let money_ten = Number($('#money_ten').val());
        let money_one = Number($('#money_one').val());
        let twelve_sold= Number($('#twelve_remain').val());
        let fourteen_sold= Number($('#fourteen_remain').val());
        let fifteen_sold= Number($('#fifteen_remain').val());
        let eighteen_sold= Number($('#eighteen_remain').val());
        let ten_sold= Number($('#ten_remain').val());
        let twenty_sold= Number($('#twenty_remain').val());
        let thirty_sold= Number($('#thirty_remain').val());
        let fifty_sold= Number($('#fifty_remain').val());
        let total_count = 0;
        if(money_thou_yen > 0){
            money_thou_yen = money_thou_yen - 1;
            $('#money_thou').val(money_thou_yen);
            total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
            total_money = total_money - 1000;
            $('#money_fifty').text(total_money);
            let count_text = Number($('#count').text());
            total_count = count_text + 1000;
            $('#count').text(total_count);

            $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
            $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
        }
        if(twelve_sold === 0){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(fourteen_sold === 0){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(fifteen_sold === 0){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(eighteen_sold === 0){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(ten_sold === 0){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(twenty_sold === 0){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(thirty_sold === 0){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(fifty_sold === 0){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }
        
    });

    $('#button_hundred').click(function(){
        let money_ten_yen = Number($('#money_ten').val());
        let money_ten = Number($('#money_ten').val());
        let money_thou = Number($('#money_thou').val());
        let money_one = Number($('#money_one').val());
        let twelve_sold= Number($('#twelve_remain').val());
        let fourteen_sold= Number($('#fourteen_remain').val());
        let fifteen_sold= Number($('#fifteen_remain').val());
        let eighteen_sold= Number($('#eighteen_remain').val());
        let ten_sold= Number($('#ten_remain').val());
        let twenty_sold= Number($('#twenty_remain').val());
        let thirty_sold= Number($('#thirty_remain').val());
        let fifty_sold= Number($('#fifty_remain').val());
        let total_count = 0;
        if(money_ten_yen > 0){
            money_ten_yen = money_ten_yen - 1;
            $('#money_ten').val(money_ten_yen);
            total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
            total_money = total_money - 100;
            $('#money_fifty').text(total_money);
            let count_text = Number($('#count').text());
            total_count = count_text + 100;
            $('#count').text(total_count);
        }
        if(total_count <= 100){
            $('#ten').css('outline','1px solid red');
            $('#ten').prop('disabled', false);
        }else if (total_count <= 200){
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen').css('outline','1px solid red');
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen').prop('disabled', false);
        }else if (total_count <= 300){
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty').css('outline','1px solid red');
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty').prop('disabled', false);
        }else if (total_count >= 500){
            $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty,#fifty').prop('disabled', false);
        }

        if(twelve_sold === 0){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(fourteen_sold === 0){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(fifteen_sold === 0){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(eighteen_sold === 0){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(ten_sold === 0){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(twenty_sold === 0){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(thirty_sold === 0){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(fifty_sold === 0){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }
    });

    $('#button_ten').click(function(){
        let money_one_yen = Number($('#money_one').val());
        let money_thou = Number($('#money_thou').val());
        let money_ten = Number($('#money_ten').val());
        let money_one = Number($('#money_one').val());
        let twelve_sold= Number($('#twelve_remain').val());
        let fourteen_sold= Number($('#fourteen_remain').val());
        let fifteen_sold= Number($('#fifteen_remain').val());
        let eighteen_sold= Number($('#eighteen_remain').val());
        let ten_sold= Number($('#ten_remain').val());
        let twenty_sold= Number($('#twenty_remain').val());
        let thirty_sold= Number($('#thirty_remain').val());
        let fifty_sold= Number($('#fifty_remain').val());
        let total_count = 0;
        if(money_one_yen > 0){
            money_one_yen = money_one_yen - 1;
            $('#money_one').val(money_one_yen);
            total_money = money_thou * 1000 + money_ten * 100 + money_one * 10;
            total_money = total_money - 10;
            $('#money_fifty').text(total_money);
            let count_text = Number($('#count').text());
            total_count = count_text + 10;
            $('#count').text(total_count);
        }
        
        if(total_count >= 100 && total_count < 120){
            $('#ten').css('outline','1px solid red');
            $('#ten').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 140){
            $('#ten,#twelve').css('outline','1px solid red');
            $('#ten,#twelve').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 150){
            $('#ten,#twelve,#fourteen').css('outline','1px solid red');
            $('#ten,#twelve,#fourteen').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 180){
            $('#ten,#twelve,#fourteen,#fifteen').css('outline','1px solid red');
            $('#ten,#twelve,#fourteen,#fifteen').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 200){
            $('#ten,#twelve,#fourteen,#fifteen,#eighteen').css('outline','1px solid red');
            $('#ten,#twelve,#fourteen,#fifteen,#eighteen').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 300){
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen').css('outline','1px solid red');
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 500){
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty').css('outline','1px solid red');
            $('#ten,#twenty,#twelve,#fourteen,#fifteen,#eighteen,#thirty').prop('disabled', false);
        }else if (total_count >= 100 && total_count < 501){
            $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
            $('#ten,#twelve,#fourteen,#fifteen,#eighteen,#twenty,#thirty,#fifty').prop('disabled', false);
        }

        if(twelve_sold === 0){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(fourteen_sold === 0){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(fifteen_sold === 0){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(eighteen_sold === 0){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(ten_sold === 0){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(twenty_sold === 0){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(thirty_sold === 0){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(fifty_sold === 0){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }
    });


    $('#twelve').click(function(){
        let twelve_remain = Number($('#twelve_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_mituya = Number($('#side_mituya').text());
        let buy_count = Number($('#count').text());
        
        if(roulette_flag === 1){
            twelve_remain = twelve_remain - 1;
            remain_count = remain_count - 1;
            side_mituya = side_mituya + 1;
            $('#twelve_remain').val(twelve_remain);
            $('#remain_count').val(remain_count);
            $('#side_mituya').text(side_mituya);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(twelve_remain > 0 && buy_count >= 120 && roulette_flag === 0){
                twelve_remain = twelve_remain - 1;
                remain_count = remain_count - 1;
                side_mituya = side_mituya + 1;
                buy_count = buy_count - 120;
                $('#twelve_remain').val(twelve_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_mituya').text(side_mituya);
                $('#count').text(buy_count); 
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }
        
        

        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let twelve_remain_mitsuya = Number($('#twelve_remain').val());
        if(twelve_remain_mitsuya === 0){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
            $('#twelve').text('売り切れ');
        }

    });

    $('#fourteen').click(function(){
        let fourteen_remain = Number($('#fourteen_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_pon = Number($('#side_pon').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            fourteen_remain = fourteen_remain - 1;
            remain_count = remain_count - 1;
            side_pon = side_pon + 1;
            $('#fourteen_remain').val(fourteen_remain);
            $('#remain_count').val(remain_count);
            $('#side_pon').text(side_pon);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(fourteen_remain > 0 && buy_count >= 140 && roulette_flag === 0){
                fourteen_remain = fourteen_remain - 1;
                remain_count = remain_count - 1;
                side_pon = side_pon + 1;
                buy_count = buy_count - 140;
                $('#fourteen_remain').val(fourteen_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_pon').text(side_pon);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }
        

        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let fourteen_remain_pon = Number($('#fourteen_remain').val());
        if(fourteen_remain_pon === 0){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
            $('#fourteen').text('売り切れ');
        }
   });

   $('#fifteen').click(function(){
        let fifteen_remain = Number($('#fifteen_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_toropi = Number($('#side_toropi').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            fifteen_remain = fifteen_remain - 1;
            remain_count = remain_count - 1;
            side_pon = side_pon + 1;
            $('#fifteen_remain').val(fifteen_remain);
            $('#remain_count').val(remain_count);
            $('#side_toropi').text(side_toropi);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(fifteen_remain > 0 && buy_count >= 150 && roulette_flag === 0){
                fifteen_remain = fifteen_remain - 1;
                remain_count = remain_count - 1;
                side_toropi = side_toropi + 1;
                buy_count = buy_count - 150;
                $('#fifteen_remain').val(fifteen_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_toropi').text(side_toropi);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }
        

        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let fifteen_remain_toropi = Number($('#fifteen_remain').val());
        if(fifteen_remain_toropi === 0){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
            $('#fifteen').text('売り切れ');
        }
    });

    $('#eighteen').click(function(){
        let eighteen_remain = Number($('#eighteen_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_tea = Number($('#side_tea').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            eighteen_remain = eighteen_remain - 1;
            remain_count = remain_count - 1;
            side_tea = side_tea + 1;
            $('#eighteen_remain').val(eighteen_remain);
            $('#remain_count').val(remain_count);
            $('#side_tea').text(side_tea);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(eighteen_remain > 0 && buy_count >= 180 && roulette_flag === 0){
                eighteen_remain = eighteen_remain - 1;
                remain_count = remain_count - 1;
                side_tea = side_tea + 1;
                buy_count = buy_count - 180;
                $('#eighteen_remain').val(eighteen_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_tea').text(side_tea);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }

        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let eighteen_remain_tea = Number($('#eighteen_remain').val());
        if(eighteen_remain_tea === 0){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
            $('#eighteen').text('売り切れ');
        }
    });

    $('#ten').click(function(){
        let ten_remain = Number($('#ten_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_lemon = Number($('#side_lemon').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            ten_remain = ten_remain - 1;
            remain_count = remain_count - 1;
            side_lemon = side_lemon + 1;
            $('#ten_remain').val(ten_remain);
            $('#remain_count').val(remain_count);
            $('#side_lemon').text(side_lemon);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(ten_remain > 0 && buy_count >= 100 && roulette_flag === 0){
                ten_remain = ten_remain - 1;
                remain_count = remain_count - 1;
                side_lemon = side_lemon + 1;
                buy_count = buy_count - 100;
                $('#ten_remain').val(ten_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_lemon').text(side_lemon);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }

        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let ten_remain_lemon = Number($('#ten_remain').val());
        if(ten_remain_lemon === 0){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
            $('#ten').text('売り切れ');
        }
    });

    $('#twenty').click(function(){
        let twenty_remain = Number($('#twenty_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_nekuta = Number($('#side_nekuta').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            twenty_remain = twenty_remain - 1;
            remain_count = remain_count - 1;
            side_nekuta = side_nekuta + 1;
            $('#twenty_remain').val(twenty_remain);
            $('#remain_count').val(remain_count);
            $('#side_nekuta').text(side_nekuta);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(twenty_remain > 0 && buy_count >= 200 && roulette_flag === 0){
                twenty_remain = twenty_remain - 1;
                remain_count = remain_count - 1;
                side_nekuta = side_nekuta + 1;
                buy_count = buy_count - 200;
                $('#twenty_remain').val(twenty_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_nekuta').text(side_nekuta);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }
    
        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let twenty_remain_nekuta = Number($('#twenty_remain').val());
        if(twenty_remain_nekuta === 0){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
            $('#twenty').text('売り切れ');
        }
    });

    $('#thirty').click(function(){
        let thirty_remain = Number($('#thirty_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_cola = Number($('#side_cola').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            thirty_remain = thirty_remain - 1;
            remain_count = remain_count - 1;
            side_cola = side_cola + 1;
            $('#thirty_remain').val(thirty_remain);
            $('#remain_count').val(remain_count);
            $('#side_cola').text(side_cola);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(thirty_remain > 0 && buy_count >= 300 && roulette_flag === 0){
                thirty_remain = thirty_remain - 1;
                remain_count = remain_count - 1;
                side_cola = side_cola + 1;
                buy_count = buy_count - 300;
                $('#thirty_remain').val(thirty_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_cola').text(side_cola);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }
    
        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let thirty_remain_cola = Number($('#thirty_remain').val());
        if(thirty_remain_cola === 0){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
            $('#thirty').text('売り切れ');
        }
    });

    $('#fifty').click(function(){
        let fifty_remain = Number($('#fifty_remain').val());
        let remain_count = Number($('#remain_count').val());
        let side_pain = Number($('#side_pain').text());
        let buy_count = Number($('#count').text());

        if(roulette_flag === 1){
            fifty_remain = fifty_remain - 1;
            remain_count = remain_count - 1;
            side_pain = side_pain + 1;
            $('#fifty_remain').val(fifty_remain);
            $('#remain_count').val(remain_count);
            $('#side_pain').text(side_pain);
            $('#reset').prop('disabled', false);
            roulette_flag = 0;
            preventDefault();
        }else if(fifty_remain > 0 && buy_count >= 500 && roulette_flag === 0){
                fifty_remain = fifty_remain - 1;
                remain_count = remain_count - 1;
                side_pain = side_pain + 1;
                buy_count = buy_count - 500;
                $('#fifty_remain').val(fifty_remain);
                $('#remain_count').val(remain_count);
                $('#count').val(0);
                $('#side_pain').text(side_pain);
                $('#count').text(buy_count);
            
        }
        
        if(roulette_flag === 0){
            let buy_roulette = Math.floor( Math.random() * 99 ) + 1;
            Number($('#roulette_one').text(buy_roulette));
            if(buy_roulette === 11 || buy_roulette === 22 ||buy_roulette === 33 || buy_roulette === 44 || buy_roulette === 55 || buy_roulette === 66 ||buy_roulette === 77 || buy_roulette === 88 || buy_roulette === 99){
                roulette_flag = 1;
                $('#reset').prop('disabled', true);
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').css('outline','1px solid red');
                $('#twelve,#fourteen,#fifteen,#eighteen,#ten,#twenty,#thirty,#fifty').prop('disabled', false);
            }else{
                roulette_flag = 0;
                
            }
        
        }
    
        let count_yen = Number($('#count').text());
        if(count_yen < 100){
            $('#ten').prop('disabled', true);
            $('#ten').css('outline','none');
        }
        if(count_yen < 120){
            $('#twelve').prop('disabled', true);
            $('#twelve').css('outline','none');
        }
        if(count_yen < 140){
            $('#fourteen').prop('disabled', true);
            $('#fourteen').css('outline','none');
        }
        if(count_yen < 150){
            $('#fifteen').prop('disabled', true);
            $('#fifteen').css('outline','none');
        }
        if(count_yen < 180){
            $('#eighteen').prop('disabled', true);
            $('#eighteen').css('outline','none');
        }
        if(count_yen < 200){
            $('#twenty').prop('disabled', true);
            $('#twenty').css('outline','none');
        }
        if(count_yen < 300){
            $('#thirty').prop('disabled', true);
            $('#thirty').css('outline','none');
        }
        if(count_yen < 500){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
        }

        let fifty_remain_pain = Number($('#fifty_remain').val());
        if(fifty_remain_pain === 0){
            $('#fifty').prop('disabled', true);
            $('#fifty').css('outline','none');
            $('#fifty').text('売り切れ');
        }
    });

    $('#reset').click(function(){
        let wallet = Number($('#money_fifty').text());
        let count_yen = Number($('#count').text());
        let thou_yen = Number($('#money_thou').val());
        let ten_yen = Number($('#money_ten').val());
        let one_yen = Number($('#money_one').val());
        let thou_divide = count_yen / 1000;
        let ten_divide = (count_yen % 1000) / 100;
        let one_divide = (count_yen % 1000) % 100 / 10 ;
        wallet = count_yen + wallet;
        thou_yen = thou_yen + Math.floor(thou_divide);
        ten_yen = ten_yen + Math.floor(ten_divide);
        one_yen = one_yen + Math.floor(one_divide);
        $('#count').text(0);
        $('#money_fifty').text(wallet);
        $('#money_thou').val(thou_yen);
        $('#money_ten').val(ten_yen);
        $('#money_one').val(one_yen);
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