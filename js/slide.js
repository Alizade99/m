var pos=0;
var brandsLi=$(".brands li");
$(".brands li:nth-child(-n+3)").addClass("active")

var liLength=brandsLi.children().length;
var liheight=brandsLi.outerHeight()

$(".nextbtn").on("click",function(){
    // brandsLi.eq(pos).removeClass("active")
 pos++;
    // $(".brands li").eq(pos+2).addClass("active")
   
 if(pos==$(".brands").children().length-2){
   pos=0
    // var brandClone=$(".brands li").clone().appendTo(".brands");
    //     brandClone.addClass("clone")
}
 $(".brands li").css({
     top:-(liheight)*pos+'px'
     
 })
   
})
$(".prebtn").on("click",function(){
    pos--;
 

    if(pos==-1){
        pos=$(".brands li").children().length-3;
        // var brandClone=$(".brands li").clone().prependTo(".brands");
        // brandClone.addClass("clone")
    }
    $(".brands li").css({
        top:-(liheight)*pos+'px'
    })
  
   })
//    $('owl-carusel').owlCarousel({
//        loop:true,
//        autoplay:true,
//        margin:10,
//        nav:true,
//        item:9,
//        loop:true,
//        margin:10,
//        autoplaySpeed:500,
//        autoplayHoverPause:true,
//        responsive:{
//            0:{
//                items:1
//            },
//            600:{
//                items:3
//            },
//            1000:{
//                items:5,
//                loop:true,
//                autoplay:true,
//            }}}
       
//    )