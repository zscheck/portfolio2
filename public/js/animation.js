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
        $('.materialboxed').materialbox();

        //Query the parent container and child divs
        const carouselWrapper = document.querySelector(".wrapper-parent");
        const projects = carouselWrapper.children;

        //Query the description parent wrapper
        const descWrapper = document.querySelector(".description-wrappers");
        const descriptions = descWrapper.children;

        //Add a click listener in every child
        for (let i in projects) {
          //Assign let project for each project in loop
          let project = projects[i];
          // 
          $(project).click(e => {
            console.log("B", e.target.children[0].attributes[0].value);
            //Assign dataset named anchor, display it on the N/A header
           let datasetAnchored = e.target.children[0].attributes[0].value;
            //Filter through the children
            for (let j in descriptions) {
              let desc = descriptions[j];
              console.log(desc.dataset.index, datasetAnchored);
              console.log(desc.dataset.index !== datasetAnchored);
              if (desc.dataset.index == datasetAnchored) {
                desc.classList.remove("hidden");
                desc.classList.add("active");
              } else {
                desc.classList.remove("active");
                desc.classList.add("hidden");
              }
            }
          });
        }
    
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
    