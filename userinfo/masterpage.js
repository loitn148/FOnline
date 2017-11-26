// JavaScript source code
 $(function(){
     $('.navi').hover(function () {
         $(this).children('ul').fadeIn();
     },
       function(){
           $(this).children('ul').fadeOut();
       });
 });