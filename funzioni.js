$(document).ready(function(){
  $(".menu").click(function(){

    var mainWr = $(".main-wrapper");
    var sideWr = $(".side-wrapper");

    //alert("hey")

    mainWr.toggleClass("remove");
    sideWr.toggleClass("remove");

  })
})
