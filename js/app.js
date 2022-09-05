$(function(){



    
        let navbar = $(`nav`);
        let backBtn = $(".backbtn");

        

    $(window).scroll(function (){
       let scrTop = $(window).scrollTop ();

       if(scrTop > 300){
          navbar.addClass(`menuFixed`)
       }
       else{
        navbar.removeClass(`menuFixed`)
       }
      
       if(scrTop > 700){
         backBtn.fadeIn();
       }else{
         backBtn.fadeOut();
       }


    });
 
   

    let number = document.querySelector(`.number`);
    let counter = 0;
    setInterval(() => {
        if(counter == 70){
           clearInterval(); 
        }
        else{
        counter += 1;
        number.innerHTML = counter + "%"
        } 
    
    
    },30);

      $(window).ready(function(){
         let preloader = $(`.preloader`);
         preloader.delay(2000).fadeOut(300);
      });



      // backbtn

     
     backBtn.click(function () {
      $("html,body") .animate(
         {
            scrollTop:0,
         },
         2000
      );
     })
     

      $('.p_slider').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed:1000,
         pauseOnHover:true,
         arrows:true,
         prevArrow:".p_arrows .p_greater_than",
         nextArrow:".p_arrows .p_less_than",

       });

      $('.slider').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed:1000,
         pauseOnHover:true,
         arrows:true,
         prevArrow:".arrows .greater_than",
         nextArrow:".arrows .less_than",

       });
       

});
