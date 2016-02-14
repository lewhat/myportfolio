
( function( window ) {

'use strict'

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)")
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c )
  }
  addClass = function( elem, c ) {
    elem.classList.add( c )
  }
  removeClass = function( elem, c ) {
    elem.classList.remove( c )
  }
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className )
  }
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c
    }
  }
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' )
  }
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass
  fn( elem, c )
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie )
} else {
  // browser global
  window.classie = classie
}

})( window )


$(document).ready(function(){

    $('navbar-fixed-top').each(function(){
     sections.push($($(this).attr('href')))
    })  

})


/* ================================================================ */
$('body').scrollspy({ target: '#navbar-example' })

/*scroll fade*/

$(window).on("load",function() {
  function fade() {
    $('.storyText').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(500,1)}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(500,0)}
      }
    })
  }
  fade() //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade()
}) //Fade in elements during scroll
})

$(window).on("load",function() {
  function fade() {
    $('.myLife').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(500,1)}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(500,0)}
      }
    })
  }
  fade() //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade()
  }) //Fade in elements during scroll
})


$(window).on("load",function() {
  function fade() {
    $('.one').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(500,1)}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(1000,0)}
      }
    })
  }
  fade() //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade()
  }) //Fade in elements during scroll
})


$(window).on("load",function() {
  function fade() {
    $('.two').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(750,1)}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(750,0)}
      }
    })
  }
  fade() //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade()
  })//Fade in elements during scroll
})


$(window).on("load",function() {
  function fade() {
    $('.three').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(1000,1)}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(500,0)}
      }
    })
  }
  fade() //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade()
  }) //Fade in elements during scroll
})


$(window).on("load",function() {
  function fade() {
    $('.four').each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = $(window).scrollTop() + $(window).innerHeight()

      /* If the object is completely visible in the window, fade it in */
      if (objectBottom < windowBottom) {
        if ($(this).css('opacity')==0) {$(this).fadeTo(1000,1)}
      } else {
        if ($(this).css('opacity')==1) {$(this).fadeTo(500,0)}
      }
    })
  }
  fade() //Fade in completely visible elements during page-load
  $(window).scroll(function() {fade()
  }) //Fade in elements during scroll
})




  

  