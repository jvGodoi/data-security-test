var elementosImportante = document.querySelectorAll(".importancia__secoes");

elementosImportante.forEach(function (importancia__secoes) {
    importancia__secoes.addEventListener('click', function () {
        importancia__secoes.classList.toggle('ativa');
    });
});

const btnMobile = document.getElementById('btn-mobile')

    function toggleMenu(){
        const nav = document.getElementById('nav');
        nav.classList.toggle('active')

    }

btnMobile.addEventListener('click', toggleMenu);
