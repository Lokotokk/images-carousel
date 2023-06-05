let index = 0;

show_image(index);

function show_image(i) { // 1 //-1
    index += i; 
    console.log(index);         // 1  //

    let images = document.getElementsByClassName("image"); // массив, который содержит все картинки.
    let dots = document.getElementsByClassName("dot");     // массив, который содержит все точки.

    for (j = 0; j < images.length; j++) {  // идём по массиву с картинками. 0 
        images[j].style.display = "none";
    }

    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    if (index > images.length - 1) // 1 
        index = 0;

    if (index < 0)                 // ????????????? 
        index = images.length - 1;

    console.log(index);   
    images[index].style.display = "block"; // появляется картинка
    dots[index].className += " active"; // добавляем класс active к точке.
}
