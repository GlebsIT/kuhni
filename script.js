/*burger.onclick = function getAnchor() {
    var x = document.getElementById('menu');
    console.log(x);
    if(x.className == "menu"){
        x.className += " responsive";
    } else {
        x.className ="menu";

    }
}
*/

$(document).ready(function(){

    $( ".can_project" ).hover(
        function() {
             eyes = $(this).find(".eyes");
             eyes[0].style.display ="block";
    });

    $('.can_project').mouseleave(function(){
        eyes = $(this).find(".eyes");
             eyes[0].style.display ="none";
      });
    //механизм раскраски 
    //https://medium.com/@stasonmars/%D0%BF%D0%BB%D0%B8%D1%82%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D1%80%D0%B0%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0-%D0%BD%D0%B0-css-flexbox-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-order-%D0%B8-nth-child-6cc2a76c9aba
    // попозже надо будет сделать через статью.
    raskrasit();
    
});

function raskrasit(){
    var scr = $(window).width();
    stroka = 4;
    firstElement = true;
    painted = true;
    if(scr < 640){
        stroka = 1;
    }
    else if ( scr < 990)
    {
        stroka = 3;
    }
    var project = $('.can_project');

    for(var i=0 ;i< project.length;i++){
    
        if (i%stroka == 0)
        {  
            if(firstElement)
            {
                console.log(i);
                console.log(stroka);
                project[i].style.background="#dddddd";
                firstElement = false;
                painted = false;
            }
            else 
            {
                firstElement = true;
                painted = true;
            }
            
        }
        else{
            if(painted)
            {
                project[i].style.background="#dddddd";
                painted = false;
            }
            else painted = true;
        }
        
    } 
}
