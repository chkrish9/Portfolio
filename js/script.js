(function($) {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            return false;
        }
        }
    });
      // Collapse Navbar
  var navbarCollapse = function() {
    if ($(".navbar").offset().top > 100) {
      $(".navbar").addClass("navbar-bg");
    } else {
      $(".navbar").removeClass("navbar-bg");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  $("#error-block").hide();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  $('.img-zoom').on('click', function() {
    $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
    $('#enlargeImageModal').modal('show');
  });
  $('#contact-form').submit(function(e) {
    var email, message, name;
    name = document.getElementById('inputName');
    email = document.getElementById('inputEmail');
    message = document.getElementById('inputMessage');
    if (!name.value || !email.value || !message.value) {
      $("#error-block").show();
      return false;
    } else {
      e.preventDefault();
    var $contactForm = $('#contact-form');
    $.ajax({
      url: '//formspree.io/murali.ofc@outlook.com',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
      },
      success: function(data) {
        console.log(data); 
      },
      error: function(err) {
       console.log(err);
      }
    });
      $(this).get(0).reset();
      $("#error-block").hide();
    }
  });
})($);