$(function() {

  const bgImages = [
    'assets/bg1.jpg',
    'assets/bg2.jpg',
    'assets/bg3.jpg',
    'assets/bg4.jpg',
    // 'assets/bg5.jpg',
    // 'assets/bg6.jpg',
    // 'assets/bg7.jpg',
  ];
  let bgImagesIndex=0;
  let lastIndex = bgImages.length - 1
  $('.elephant').click(function() {
       if (bgImagesIndex<=lastIndex){
         $( 'body' ).css("background-image", "url('" + bgImages[bgImagesIndex] + "')");
         bgImagesIndex++;

      } else {
        bgImagesIndex=0;
        $( 'body' ).css("background-image", "url('assets/bg0.jpg')");
        }
    });


});
