function alternarTema() {
    const body = document.body;
    const btn = document.getElementById("btn-tema");

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        body.classList.add("contraste-7-1");
        localStorage.setItem("tema", "dark");
        if (btn) btn.textContent = "☀️";
    } else {
        body.classList.remove("contraste-7-1");
        localStorage.setItem("tema", "light");
        if (btn) btn.textContent = "🌙";
    }
}

let tamanhoFonteAtual = 100;

function aumentarFonte() {
    if (tamanhoFonteAtual < 150) {
        tamanhoFonteAtual += 20;
        aplicarTamanhoFonte();
        localStorage.setItem("tamanhoFonte", tamanhoFonteAtual);
        atualizarStatusFonte();
    }
}

function diminuirFonte() {
    if (tamanhoFonteAtual > 80) {
        tamanhoFonteAtual -= 20;
        aplicarTamanhoFonte();
        localStorage.setItem("tamanhoFonte", tamanhoFonteAtual);
        atualizarStatusFonte();
    }
}

function resetarFonte() {
    tamanhoFonteAtual = 100;
    aplicarTamanhoFonte();
    localStorage.setItem("tamanhoFonte", tamanhoFonteAtual);
    atualizarStatusFonte();
}

function aplicarTamanhoFonte() {
    const fatorEscala = tamanhoFonteAtual / 100;
    document.documentElement.style.fontSize = `${16 * fatorEscala}px`;
}

function atualizarStatusFonte() {
    const spanStatus = document.getElementById("status-fonte");
    if (spanStatus) {
        spanStatus.textContent = tamanhoFonteAtual + "%";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    const btn = document.getElementById("btn-tema");
    
    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
        document.body.classList.add("contraste-7-1");
        if (btn) btn.textContent = "☀️";
    } else {
        document.body.classList.remove("contraste-7-1");
        if (btn) btn.textContent = "🌙";
    }
    
    const fonteSalva = localStorage.getItem("tamanhoFonte");
    if (fonteSalva) {
        tamanhoFonteAtual = parseInt(fonteSalva);
        aplicarTamanhoFonte();
        atualizarStatusFonte();
    }
});
