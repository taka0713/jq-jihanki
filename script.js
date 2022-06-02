$(function(){

    $('#start').click(function(){

        let minutes = Number($('#minutes').val());
        let seconds = Number($('#seconds').val());
        timer = setInterval(function(){
            seconds = seconds - 1;
            $('#seconds').val(seconds);
            if(seconds <= 0){
                $('#seconds').val(0);
            }
            if(seconds < 0 && minutes > 0){
                minutes = minutes - 1;
                seconds = 59;
                $('#minutes').val(minutes);
                $('#seconds').val(59);
            }
            
            if(seconds === 0 && minutes === 0){
                alert('終了です');
            }
        },1000);

    });

    $('#stop').click(function(){
        clearInterval(timer);
        
    });
    
});