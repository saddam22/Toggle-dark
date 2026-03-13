const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;
const icon = document.getElementById("icon");

//system theme detect
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//load saved theme
if(localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && prefersDark)){
	html.classList.add("dark");
	icon.textContent = "☀️";
}

//Toggle theme
toggleBtn.addEventListener("click", () =>{
	html.classList.toggle("dark");

	if(html.classList.contains("dark")){
		localStorage.setItem("theme", "dark");
		icon.textContent = "☀️";
	}else{
		localStorage.setItem("theme", "light");
		icon.textContent = "🌙";
	}
});