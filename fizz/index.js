
'use strict';

$(function fizz(){
  $('#number-chooser').submit(function(event){
    event.preventDefault();

    const input = $(this).find('input[name="number-choice"]').val();
    
    for (let i=1; i <= input; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        
      }
      else if (i % 3 === 0){
        
      }
      else if (i % 5 === 0) {
        
      }
      else {}
    }

  });
});
