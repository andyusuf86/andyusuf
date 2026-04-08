const toggle = document.getElementById("darkToggle");

function setTheme(mode){
    if(mode === "dark"){
        document.body.classList.add("dark-mode");
        toggle.innerHTML = "☀️";
    } else {
        document.body.classList.remove("dark-mode");
        toggle.innerHTML = "🌙";
    }
}

// load
const saved = localStorage.getItem("theme") || "light";
setTheme(saved);

// toggle
toggle.onclick = () => {
    const isDark = document.body.classList.contains("dark-mode");
    const newMode = isDark ? "light" : "dark";
    localStorage.setItem("theme", newMode);
    setTheme(newMode);
};






// COPY EMAIL
document.querySelectorAll(".copy-email").forEach(box => {
    box.addEventListener("click", function(){

        const text = this.getAttribute("data-copy");

        navigator.clipboard.writeText(text);

        const info = this.querySelector(".copy-info");
        info.innerHTML = "Copied!";

        this.classList.add("copied");

        setTimeout(() => {
            info.innerHTML = "Click to copy";
            this.classList.remove("copied");
        }, 2000);
    });
});








// TOAST FUNCTION
function showToast(message){
    const toast = document.getElementById("toast");
    const text = document.getElementById("toast-text");

    text.innerHTML = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// COPY EMAIL
document.querySelectorAll(".copy-email").forEach(box => {
    box.addEventListener("click", function(){

        const text = this.getAttribute("data-copy");

        navigator.clipboard.writeText(text);

        showToast("Email copied to clipboard ✔");
    });
});