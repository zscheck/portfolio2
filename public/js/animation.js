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
      
        $('.carousel').carousel();  
            // Next slide
        // $('.carousel').carousel('next');
        // $('.carousel').carousel('next', 3); // Move next n times.

        // Previous slide
        // $('.carousel').carousel('prev');
        // $('.carousel').carousel('prev', 4); // Move prev n times.

        // Set to nth slide
        // $('.carousel').carousel('set', 4);

        // Destroy carousel
        // $('.carousel').carousel('destroy');
        // $('.carousel.carousel-slider').carousel({fullWidth: true});
    
      //ajax form
      $(function() {
    
        // Get the form.
        var form = $('#contact-form');
    
        // Get the messages div.
        var formMessages = $('#form-messages');
    
        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
          // Stop the browser from submitting the form.
          e.preventDefault();
    
          // Serialize the form data.
          var formData = $(form).serialize();
    
          // Submit the form using AJAX.
          $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
          })
          .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
    
            // Set the message text.
            $(formMessages).text(response);
    
            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
          })
          .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
    
            // Set the message text.
            if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
          });
    
        });
    
      });
    
    });
    