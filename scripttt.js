const btn = document.querySelector(".boton");
const containernosotros = document.querySelector(".containerNosotros");
const containerInfo3 = document.querySelector(".containerInfo3");
const info3 = document.querySelector(".info3");
const tex = document.querySelector(".tex");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const tc1 = document.querySelector(".tc1");
const tc2 = document.querySelector(".tc2");
const tc3 = document.querySelector(".tc3");
const tc4 = document.querySelector(".tc4");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector(".p4");

btn.onclick = () => {
	containernosotros.classList.toggle("active");
};

function calcular() {
	if (tex.value == "") {
		c1.classList.remove("active");
		c2.classList.remove("active");
		c3.classList.remove("active");
		c4.classList.remove("active");
		tc1.classList.remove("active");
		tc2.classList.remove("active");
		tc3.classList.remove("active");
		tc4.classList.remove("active");
	} else {
		c1.classList.add("active");
		c2.classList.add("active");
		c3.classList.add("active");
		c4.classList.add("active");
		tc1.classList.add("active");
		tc2.classList.add("active");
		tc3.classList.add("active");
		tc4.classList.add("active");
		p1.innerHTML = "$ " + Math.round(tex.value * (0.08 / 365));
		p2.innerHTML = "$ " + Math.round(tex.value * (0.08 / 12));
		p3.innerHTML = "$ " + Math.round(tex.value * (0.08 / 2));
		p4.innerHTML = "$ " + Math.round(tex.value * 0.08);
	}
}

tex.onkeyup = calcular;
