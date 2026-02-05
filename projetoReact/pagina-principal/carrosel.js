function MudarTema() {
        const body = document.body;

        body.classList.toggle("dark-mode");

}

window.MudarTema = MudarTema;

MudarTema()