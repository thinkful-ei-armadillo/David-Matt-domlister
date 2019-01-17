
'use strict';

$(function fizz(){
  $('#number-chooser').submit(function(event){
    event.preventDefault();

    const input = $(this).find('input[name="number-choice"]').val();
    console.log(input);
  });
});