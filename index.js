'use strict';

function watchCats(){
  $('.thumbnails').on('click', 'img', function(){
    
    const targetCat = $(this);
    const pressedBool = $(targetCat).attr('aria-pressed') === 'true';
    targetCat.attr('aria-pressed', !pressedBool);
    // const catAltImg = $(this).attr('alt');
    const targetCatImg = $(this).attr('src');

    $('.hero').find('img').attr('src', targetCatImg);
    console.log(targetCat);
    console.log(targetCat);

  });
}

$(watchCats);