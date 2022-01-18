const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
 
 
 'use strict'
 var	testim = document.getElementById("testim"),
         testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
     testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
     testimLeftArrow = document.getElementById("left-arrow"),
     testimRightArrow = document.getElementById("right-arrow"),
     testimSpeed = 4500,
     currentSlide = 0,
     currentActive = 0,
     testimTimer,
         touchStartPos,
         touchEndPos,
         touchPosDiff,
         ignoreTouch = 30;
 ;
 
 window.onload = function() {
 
     // Testim Script
     function playSlide(slide) {
         for (var k = 0; k < testimDots.length; k++) {
             testimContent[k].classList.remove("active");
             testimContent[k].classList.remove("inactive");
             testimDots[k].classList.remove("active");
         }
 
         if (slide < 0) {
             slide = currentSlide = testimContent.length-1;
         }
 
         if (slide > testimContent.length - 1) {
             slide = currentSlide = 0;
         }
 
         if (currentActive != currentSlide) {
             testimContent[currentActive].classList.add("inactive");            
         }
         testimContent[slide].classList.add("active");
         testimDots[slide].classList.add("active");
 
         currentActive = currentSlide;
     
         clearTimeout(testimTimer);
         testimTimer = setTimeout(function() {
             playSlide(currentSlide += 1);
         }, testimSpeed)
     }
 
     testimLeftArrow.addEventListener("click", function() {
         playSlide(currentSlide -= 1);
     })
 
     testimRightArrow.addEventListener("click", function() {
         playSlide(currentSlide += 1);
     })    
 
     for (var l = 0; l < testimDots.length; l++) {
         testimDots[l].addEventListener("click", function() {
             playSlide(currentSlide = testimDots.indexOf(this));
         })
     }
 
     playSlide(currentSlide);
 
     // keyboard shortcuts
     document.addEventListener("keyup", function(e) {
         switch (e.keyCode) {
             case 37:
                 testimLeftArrow.click();
                 break;
                 
             case 39:
                 testimRightArrow.click();
                 break;
 
             case 39:
                 testimRightArrow.click();
                 break;
 
             default:
                 break;
         }
     })
         
         testim.addEventListener("touchstart", function(e) {
                 touchStartPos = e.changedTouches[0].clientX;
         })
     
         testim.addEventListener("touchend", function(e) {
                 touchEndPos = e.changedTouches[0].clientX;
             
                 touchPosDiff = touchStartPos - touchEndPos;
             
                 console.log(touchPosDiff);
                 console.log(touchStartPos);	
                 console.log(touchEndPos);	
 
             
                 if (touchPosDiff > 0 + ignoreTouch) {
                         testimLeftArrow.click();
                 } else if (touchPosDiff < 0 - ignoreTouch) {
                         testimRightArrow.click();
                 } else {
                     return;
                 }
             
         })
 }


const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

