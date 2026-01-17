document.addEventListener("DOMContentLoaded", () => {
    binaTOC();
    semakTemaSimpanan();
});

function binaTOC() {
    const tocList = document.getElementById("toc-list");
    const headings = document.querySelectorAll(".mw-content h2");

    headings.forEach((h, i) => {
        // Cipta ID unik jika tiada
        if (!h.id) h.id = "section-" + i;

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${h.id}`;
        a.style.color = "var(--link-color)";
        a.style.textDecoration = "none";
        a.innerHTML = `<span style="opacity:0.7;">${i + 1}</span> ${h.innerText}`;
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

// 3. Fungsi Carian (Highlight & Scroll)
function cariTeks() {
    const kataKunci = document.getElementById("searchInput").value.toLowerCase();
    const elemenTeks = document.querySelectorAll("p, td, h2, li");
    let dijumpai = false;

    // Reset highlight lama
    elemenTeks.forEach(el => el.style.backgroundColor = "transparent");

    if (kataKunci === "") return;

    elemenTeks.forEach(el => {
        if (el.innerText.toLowerCase().includes(kataKunci)) {
            el.style.backgroundColor = "#ffd700"; // Highlight Kuning
            el.style.color = "#000"; // Pastikan teks boleh dibaca
            
            if (!dijumpai) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                dijumpai = true;
            }
        }
    });

    if (!dijumpai) alert("Perkataan tidak ditemui.");
}

// 4. Fungsi Tukar Tema (Dark Mode)
function tukarTema() {
    const isDark = document.body.classList.toggle("dark-mode");
    
    // Simpan pilihan ke LocalStorage
    localStorage.setItem("wiki-theme", isDark ? "dark" : "light");
}

function semakTemaSimpanan() {
    const temaSediaAda = localStorage.getItem("wiki-theme");
    if (temaSediaAda === "dark") {
        document.body.classList.add("dark-mode");
    }
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
