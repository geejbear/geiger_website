if (document.querySelector && document.addEventListener) {

	const color_array = ['blueviolet', 'orange', 'violet', 'turquoise', 'darkgreen', 'darkred'];

	document.addEventListener('DOMContentLoaded', function(){

		const hören = document.querySelector("#youtube");
		hören.addEventListener("click", function () {
			alert("Sie werden zu Youtube verbunden :)");
		});

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
}
