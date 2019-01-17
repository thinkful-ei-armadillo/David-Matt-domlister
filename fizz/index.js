
'use strict';
/*global $*/

$(function fizz(){
  $('#number-chooser').submit(function(event){
    event.preventDefault();

    const input = $(this).find('input[name="number-choice"]').val();
    
    for (let i=1; i <= input; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        $('.js-results').append(`<div class="fizz-buzz-item fizz">
        <span>fizz</span>
      </div>`);
      } else if (i % 3 === 0){
        $('.js-results').append(`<div class="fizz-buzz-item buzz">
        <span>buzz</span>
      </div>`);}
      else if (i % 5 === 0) {
        $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz">
        <span>fizzbuzz</span>
      </div>`);}
      else {$('.js-results').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
      }
    }
  });
  
});
