$(function(){

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

    $('#twelve').click(function(){
        
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
});