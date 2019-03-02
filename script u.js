             //слайдер
var btn_prev = document.querySelector(' .buttons .prev');
var btn_next = document .querySelector(' .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');
var i = 0;
  
 

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
   
  
     //калькуллятор (неоптимизирован)
function plus(){

  var num1,num2,result;
  num1 = document.getElementById('n1').value;
  num1=parseInt(num1);

  num2=document.getElementById('n2').value;
  num2=parseInt(num2);

  result=num1+num2;
   console.log(result);
    document.getElementById('out1').innerHTML= result;
}

function minus(){
  var num1,num2,result;
  num1 = document.getElementById('n1').value;
  num1=parseInt(num1);

  num2=document.getElementById('n2').value;
  num2=parseInt(num2);

  result=num1-num2;
  console.log(result);
  document.getElementById('out1').innerHTML=result;

}

    // считывание и вывод на экран движковогшо регулятора

function rng1(){
  var nmb;
  nmb=document.getElementById('r1').value;
   console.log(nmb);
   document.getElementById('out2').innerHTML= nmb;
}


  //события и команды управления мыши
  //-----------------------------------

   var block = document.getElementById('one');
//клик мышью
  block.onclick = function (){
   this.style.background = 'green';
     this.onclick = null;
  }
//двойной клик--------
 
 // block.ondblclick = function (){
 //  this.style.background = 'red';
 //  this.style.width = '80%';     //80% всей длины контейнера
//    this.style.height ='50%';    //50% всей длины контейнера
//  }

//клик правой кнопкой мыши-------

// block.oncontextmenu = function (){
 //  this.style.background = 'black';
 // return false;
// }


//мышь входит на элемент-------

 // block.onmouseenter = function (){
  // console.log('in!!!');
  // this.style.background = 'gold';
 // }

 //мышь уходит с элемента--------

 // block.onmouseleave = function (){
 //  this.style.background = 'orange';
 // }


//движение мышью ------------------

  //var a=0;
   //block.onmousemove = function(){
 // a++;
   // this.style.width = 100 + a+'px';
  // }



//нажимаем и держим кнопку мыши(любую)-----

  block.onmousedown = function(event){
    this.style.background = 'cyan';
    console.log('button:' +event.button);
    console.log('which:' +event.which);
  lock.onmouseup = function (){
    this.style.background = 'pink';
   }




 