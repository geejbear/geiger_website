const color_array = ['pink', 'blueviolet', 'orange', 'violet', 'turquoise', 'darkgreen', 'yellow', 'darkred'];

document.addEventListener('DOMContentLoaded', function(){

    screen.orientation.lock("portrait"); //prevents the screen to rotate on mobile devices
    const myImg = document.querySelector('img');

    myImg.onclick = () => {
       const mySrc = myImg.getAttribute('src'); 
       if (mySrc === 'images/guille_1.jpeg') {
            myImg.setAttribute('src', 'images/guille_2.jpeg'); 
            alert("Hello! ;)");
       } else {
            myImg.setAttribute('src', 'images/guille_1.jpeg')
       }
    };

    const background_color = document.getElementById('background_color');

    let randNum = () => {
        return Math.floor(Math.random() * color_array.length);
    };

    let changeColor = () => {
        let num = randNum();
        let randomColor = color_array[num];
        document.body.style.backgroundColor = randomColor;
    };

    background_color.addEventListener('click', changeColor);

});