var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){


	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
		dots[i].className = dots[i].className.replace("aaa","");
		dots[i].className = dots[i].className.replace("ds","");
	}

	 slides[slideIndex-1].style.display = "block";
	 
	 dots[slideIndex-1].className+= " active";

	 
	 function func() {

  		dots[slideIndex-1].className+= " ds";
	}
	setTimeout(func, 3800);
	
	 function func2() {
  		dots[slideIndex-1].className+= " aaa";
		
	}
	setTimeout(func2, 4300);
	 
}



var slideIndex1=1;
showSlides1(slideIndex1);

function plusSlides1(n, a){
	showSlides1(slideIndex1 += n);
}

function currentSlide1(n, a){
	showSlides1(slideIndex1 = n);
}

function showSlides1(n, a){
	var i;
	var slides1 = document.getElementsByClassName("mySlides1");
	var dots1 = document.getElementsByClassName("dot1");

	if(n > slides1.length){
		slideIndex1 = 1;
	}

	if(n < 1){
		slideIndex1 = slides1.length;
	}
	for(i=0; i<slides1.length; i++){
		slides1[i].style.display = "none";
	}
	for(i=0; i < dots1.length; i++){
		dots1[i].className = dots1[i].className.replace("act","");
	}


	 slides1[slideIndex1-1].style.display = "block";

	 dots1[slideIndex1-1].className+= " act";
}

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('button[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(10, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(10, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount/.7);
  });
});