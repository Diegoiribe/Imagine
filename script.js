const email = document.querySelector(".email");
const contra = document.querySelector(".contra");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const perror = document.querySelector(".perror");
const tacha = document.querySelector(".tacha");
const btndark = document.querySelector(".btndark2");
const dark = document.querySelector(".dark2");
const inicio = document.querySelector(".inicio");
const containerInicio = document.querySelector(".containerInicio");
const h3 = document.querySelector(".h3");
const p = document.querySelector(".p");

btn.onclick = comprobaremail;
tacha.onclick = cerrar;
var i = 0;
function comprobaremail() {
	while (i <= 3) {
		if (email.value == "luis@gmail.com" && contra.value == "Luis") {
			window.location.href = "./indexxx.html";
			break;
		} else {
			perror.classList.add("linea");
			email.classList.add("linea");
			contra.classList.add("linea");
			h3.classList.add("linea");
			p.classList.add("linea");

			setTimeout(function () {
				h3.classList.remove("linea");
				p.classList.remove("linea");
				perror.classList.remove("linea");
				email.classList.remove("linea");
				contra.classList.remove("linea");
			}, 2000);
			i++;
			break;
		}
	}
	console.log(i);
}

function cerrar() {
	error.classList.remove("linea");
	tacha.classList.remove("linea");
}

dark.onclick = () => {
	btndark.classList.toggle("active");
	dark.classList.toggle("active");
	inicio.classList.toggle("on");
	email.classList.toggle("on");
	contra.classList.toggle("on");
	containerInicio.classList.toggle("on");
	btn.classList.toggle("on");
};
