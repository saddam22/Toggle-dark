const toggleBtn = document.getElementById("toggleBtn");
const html = document.documentElement;

//load saved theme
if(localStorage.getItem("theme") === "dark"){
	html.classList.add("dark");
}

//Toggle theme
toggleBtn.addEventListener("click", () =>{
	html.classList.toggle("dark");

	if(html.classList.contains("dark")){
		localStorage.setItem("theme", "dark");
	}else{
		localStorage.setItem("theme", "light");
	}
});