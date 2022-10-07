var swiper = new Swiper(".myslide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  });
 
  
  var x1=document.querySelectorAll(".box");
  var x=document.querySelectorAll(".img1");

  $(".categ").on("mouseenter",function(){
    var i=$(this).index();
    console.log(i)
    $(x[i]).slideToggle(function(){
      $(x[i]).hide();
        $(x1[i]).show();
        
    });
    
  })
  
   
  $(".categ").on("mouseleave",function(){
    var i=$(this).index();
    console.log(i)
    $(x1[i]).slideToggle(function(){
        $(x[i]).show();
        $(x1[i]).hide();

    });
    
  })
  $(".categ").on("click",function(){
   
    var i=$(this).index();
    if(i==0){
      $(document).scrollTop()
    }
   
    
  })

   
  
 