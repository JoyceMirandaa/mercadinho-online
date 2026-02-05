document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    const menuPerfil = document.getElementById("perfil-menu");
    const btnAbrir = document.getElementById("abrirPerfil");
    const btnFechar = document.getElementById("fecharPerfil");

    function MudarTema() {
        const body = document.body;
        const botaoTema = document.getElementById("btnTema");

        body.classList.toggle("dark-mode");
        botaoTema.classList.add("girando");

        if (body.classList.contains("dark-mode")) {
            botaoTema.src = "/imagens/lua-tema.svg";
        } else {
            botaoTema.src = "/imagens/sol-tema.svg";
        }

        setTimeout(() => {
            botaoTema.classList.remove("girando");
        }, 400);
    }

    function AbrirPerfil() {
        menuPerfil.style.display = "block";
    }

    function FecharPerfil() {
        menuPerfil.style.display = "none";
    }

    btnAbrir.addEventListener("click", AbrirPerfil);
    btnFechar.addEventListener("click", FecharPerfil);

    window.addEventListener("click", (e) => {
        if (e.target === menuPerfil) {
            FecharPerfil();
        }
    });

    window.MudarTema = MudarTema;
    window.AbrirPerfil = AbrirPerfil;

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
