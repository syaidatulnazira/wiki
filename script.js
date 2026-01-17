document.addEventListener("DOMContentLoaded", function() {
    const tocList = document.getElementById("toc-list");
    const headings = document.querySelectorAll(".main-content h2");

    headings.forEach((heading, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        const id = heading.id || `section-${index}`;
        heading.id = id;

        a.href = `#${id}`;
        a.style.textDecoration = "none";
        a.style.color = "var(--link-color)";
        a.innerHTML = `<span style="color:#555">${index + 1}</span> ${heading.innerText}`;
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
});

function tukarTema() {
    document.body.classList.toggle("dark-mode");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
