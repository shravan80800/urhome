window.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.fade-in');
    
    var isInViewport = function(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    
    var fadeInElements = function() {
      for (var i = 0; i < elements.length; i++) {
        if (isInViewport(elements[i])) {
          elements[i].style.opacity = 1;
          elements[i].style.transform = 'translateY(0)';
        }
      }
    };
    
    window.addEventListener('scroll', fadeInElements);
    fadeInElements();
  });
  




  