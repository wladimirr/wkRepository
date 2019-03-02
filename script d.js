var btn_prev = document.querySelector(' .buttons .prev');
var btn_next = document .querySelector(' .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;
 console.log(i);
 

   btn_prev.onclick = function(){
	 images[i].className = ' ';
	 i-- ;
	 if (i < 0){i = images.length -1;
}
	 images[i].className = 'showed';
}

   btn_next.onclick = function (){
 	images[i].className = ' ';
	 i++ ;
	 if (i >= images.length ){
	 	i = 0;
 }
	 images[i].className = 'showed';
}	  