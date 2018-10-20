$(function() {
    console.log('ready');

    // Listen for a click on thumbnail image

    $('.js-thumbnails li').on('click', function(){
    	const image = $(this).children('img');
    	const imageSrc = image.data('main');

    	// Update large main image with new src

    	$('#main').attr('src', imageSrc);

    	$('.selected').removeClass('selected');
    	$(this).addClass('selected');
    })

});