$(function() {
    var b = $("#button");
    var w = $("#tab");
    var l = $("#list");
    
    w.width(l.outerWidth(true));
  
    b.click(function() {
    
      if(w.hasClass('midContent')) {
        w.removeClass('midContent');
        w.width(0);
      } else {
        w.addClass('midContent');
        w.width(l.outerWidth(true));
      }
    
    });
});
$(function() {
    var b = $("#btns");
    var w = $("#tab");
    var l = $("#list");
    
    w.width(l.outerWidth(true));
  
    b.click(function() {
      
      if(w.hasClass('midContent')) {
        w.removeClass('midContent');
        w.removeClass('mainContent__btnhide')
        w.width(0);
      } else {
        w.addClass('midContent');
        w.width(l.outerWidth(true));
      }
    
    });
});

function myFunction() {

  document.getElementById("button").style.display = "none";
  document.getElementById("btns").classList.remove("active");
}

function addFunction() {
 
  // var element = document.getElementById("button");
  // element.classList.add("mainContent__btnhide");
  document.getElementById("button").style.display = "block";
  document.getElementById("btns").classList.add("active");
  

}



// $('item--logo').on('click', function(){
//     $('item-logo').removClass('active');
//     $(this).addClass('active');
// });

