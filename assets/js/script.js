function change_image(image_number)
{
	document.getElementById('gallery-image-holder').setAttribute('src', 'assets/images/gallery' + image_number + '.jpg');
}