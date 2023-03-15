$('.carousel').carousel({
	pause: "hover",
  interval: 2000
});

var startImage = $('section.awSlider .item.active > img').attr('src');
$('section.awSlider').append('<img src="' + startImage + '">');

$('section.awSlider .carousel').on('slid.bs.carousel', function () {
 var bscn = $(this).find('.item.active > img').attr('src');
	$('section.awSlider > img').attr('src',bscn);
});

// enabling all tooltips: 
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

// cloudinary 
import {Cloudinary} from '@cloudinary/url-gen'
import {Resize} from '@cloudinary/url-gen/actions'



const cldInstance = new Cloudinary({cloud: {cloudName: 'dldvhwuhn'}});



// Fetch images from the web without uploading them
