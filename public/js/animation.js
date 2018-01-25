$(document).ready(function() {
    console.log('working');
      // typing animation
      (function($) {
        $.fn.writeText = function(content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function() {
                if(current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 80);
        };
        
      })(jQuery);
    
      // input text for typing animation 
      $("#holder").writeText("JavaScript Developer");
        
      // Push the body and the nav over by 285px over
      var main = function() {
        $('.fa-bars').click(function() {
          $('.nav-screen').animate({
            right: "0px"
          }, 200);
    
          $('body').animate({
            right: "285px"
          }, 200);
        });
    
        // Then push them back */
        $('.fa-times').click(function() {
          $('.nav-screen').animate({
            right: "-285px"
          }, 200);
    
          $('body').animate({
            right: "0px"
          }, 200);
        });
    
        $('.nav-links a').click(function() {
          $('.nav-screen').animate({
            right: "-285px"
          }, 500);
    
          $('body').animate({
            right: "0px"
          }, 500);
        });
      };
    
      $(document).ready(main);
    });
    