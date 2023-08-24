const color_array = ['red', 'blueviolet', 'orange', 'violet', 'turquoise'];

document.addEventListener('DOMContentLoaded', function(){

    const myImg = document.querySelector('img');

    myImg.onclick = () => {
       const mySrc = myImg.getAttribute('src'); 
       if (mySrc === 'images/Guillermo2_Copyright_Sven_Kristian_Wolf_180.jpeg') {
            myImg.setAttribute('src', 'images/Guillermo2_Copyright_Sven_Kristian_Wolf.jpeg'); 
            alert("Thanks! I somehow ended up upside down!");
       } else {
            myImg.setAttribute('src', 'images/Guillermo2_Copyright_Sven_Kristian_Wolf_180.jpeg')
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