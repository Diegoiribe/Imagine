const logout = document.querySelector(".final");
const usuario = document.querySelector(".usuario");
const wallet = document.querySelector(".wallet");
const transfer = document.querySelector(".transfer");
const toggle = document.querySelector(".i5");
const container = document.querySelector(".containerPrincipal");
const flecha = document.querySelector(".arriba");
const cuadrado = document.querySelector(".cuadrado");
const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");
const mes = document.querySelector(".mes");
const negro = document.querySelector(".negro");
const blanco = document.querySelector(".blanco");
const btndark = document.querySelector(".btndark");
const dark = document.querySelector(".dark");
const containerUsuario = document.querySelector(".containerUsuario");
const containerr = document.querySelector(".container");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const contenedor = document.querySelector(".c5");
const icon = document.querySelector(".icon");
const iconn = document.querySelector(".iconn");
const iconnn = document.querySelector(".iconnn");
const grafica = document.querySelector(".grafico");
const numero = document.querySelector(".numero");
const signo = document.querySelector(".signoss");
const graficamovimientos = document.querySelector(".graficomovimientos");
const numeros = document.querySelector(".numeros");
const signos = document.querySelector(".signosss");
const tldepositos = document.querySelector(".tldepositos");
const tlretiros = document.querySelector(".tlretiros");
const numeross = document.querySelector(".numeross");
const signoss = document.querySelector(".signossss");

logout.onclick = inicio;
wallet.onclick = () => {
	if (wallet.classList.contains("active")) {
		transfer.classList.remove("active");
	} else {
		wallet.classList.add("active");
		transfer.classList.remove("active");
	}
};
transfer.onclick = () => {
	transfer.classList.add("active");
	if (transfer.classList.contains("active")) {
		wallet.classList.remove("active");
	}
};

toggle.onclick = () => {
	toggle.classList.toggle("active");
	container.classList.toggle("active");
	grafica.classList.toggle("active");
	numero.classList.toggle("active");
	signo.classList.toggle("active");
	graficamovimientos.classList.toggle("active");
	numeros.classList.toggle("active");
	signos.classList.toggle("active");
	tldepositos.classList.toggle("active");
	tlretiros.classList.toggle("active");
	numeross.classList.toggle("active");
	signoss.classList.toggle("active");
	if (toggle.classList.contains("active")) {
		flecha.classList.add("active");
		contenedor.classList.add("active");
		c4.classList.add("active");
		cuadrado.classList.add("active");
		circulo.classList.add("active");
		rectangulo.classList.add("active");
		mes.classList.add("active");
		negro.classList.add("active");
		blanco.classList.add("active");
	} else {
		flecha.classList.remove("active");
		contenedor.classList.remove("active");
		c4.classList.remove("active");
		cuadrado.classList.remove("active");
		circulo.classList.remove("active");
		rectangulo.classList.remove("active");
		mes.classList.remove("active");
		negro.classList.remove("active");
		blanco.classList.remove("active");
	}
};

dark.onclick = () => {
	btndark.classList.toggle("active");
	container.classList.toggle("on");
	c1.classList.toggle("on");
	c2.classList.toggle("on");
	c3.classList.toggle("on");
	c4.classList.toggle("on");
	contenedor.classList.toggle("on");
	dark.classList.toggle("active");
	containerUsuario.classList.toggle("on");
	containerr.classList.toggle("on");
	icon.classList.toggle("on");
	iconn.classList.toggle("on");
	iconnn.classList.toggle("on");
	transfer.classList.toggle("on");
	wallet.classList.toggle("on");
	logout.classList.toggle("on");
	usuario.classList.toggle("on");
};

function inicio() {
	window.location.href = "./indexx.html";
}
