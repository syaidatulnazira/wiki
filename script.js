document.addEventListener("DOMContentLoaded", () => {

    const list = document.getElementById("toc-list");
    const headers = document.querySelectorAll("h2");
    headers.forEach((h, i) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${h.id}" style="color: #0645ad; text-decoration:none;">${i+1}. ${h.innerText}</a>`;
        list.appendChild(li);
    });
});

function cariTeks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const allText = document.querySelectorAll("p, td, h2");
    let found = false;

    allText.forEach(el => {
        el.style.backgroundColor = "transparent"; 
        if (input !== "" && el.innerText.toLowerCase().includes(input)) {
            el.style.backgroundColor = "#ffeb3b"; 
            if (!found) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                found = true;
            }
        }
    });
}

function tukarTema() {
    document.body.classList.toggle("dark-mode");
}
