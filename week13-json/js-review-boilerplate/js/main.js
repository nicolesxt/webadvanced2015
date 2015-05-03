function initialize(){
	getData();
	createImages();
}

function getData(){
	$.ajax({
		url: 'data/data.json',
		dataType: 'json',
		success: function(imgData){
			console.log(imgData);
			createImages(imgData);
		}
	});
}

function createImages(imgData){
	var imgArray = imgData.images;
	var gallery = document.querySelector('.gallery-images');
	for(var i=0; i< imgArray.length; i++){
		var container = document.createElement('div');
		container.classList.add('gallery-img');

		var thumbnail = document.createElement('img');
		thumbnail.src = 'img/'+imgArray[i].thumb;

		var title = document.createElement('h3');
		title.innerHTML = 'img/'+imgArray[i].title;

		var copy = document.createElement('p');
		copy.innerHTML = 'img/'+imgArray[i].copy;

		container.appendChild(thumbnail);
		container.appendChild(title);
		container.appendChild(copy);
		gallery.appendChild(container);

	}
}

initialize();