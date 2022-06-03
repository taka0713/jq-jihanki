$(function(){

    $('#twelve').click(function(){
        let twelve_remain = Number($('#twelve_remain').val());
        let remain_count = Number($('#remain_count').val());
        twelve_remain = twelve_remain - 1;
        remain_count = remain_count - 1;
        $('#twelve_remain').val(twelve_remain);
        $('#remain_count').val(remain_count);
        $('#count').val(0);
    });

    $('#fourteen').click(function(){

        = setInterval(function(){
           seconds = seconds - 1;
           
       });

   });

   $('#fifteen').click(function(){

    = setInterval(function(){
       seconds = seconds - 1;
       
   });

});

$('#eighteen').click(function(){

    
       
   });

});

$('#ten').click(function(){

    
       
   });

});

$('#twenty').click(function(){

    

});

$('#thirty').click(function(){

    

});

$('#fifty').click(function(){

    

});

$('#reset').click(function(){

    

});

$('#button_thousand').click(function(){

    
});

$('#button_hundred').click(function(){

    
});

$('#button_ten').click(function(){

    

});

    $('#stop').click(function(){
        clearInterval(timer);
        
    });
    
});