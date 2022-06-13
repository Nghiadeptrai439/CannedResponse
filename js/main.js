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
    var b = $("#btnsetting");
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
}

function addFunction() {
 
  // var element = document.getElementById("button");
  // element.classList.add("mainContent__btnhide");
  document.getElementById("button").style.display = "block";
}

