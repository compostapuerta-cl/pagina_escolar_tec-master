const alternarTema = () => {
    const body = document.querySelector('body');
    const temaActual = body.getAttribute('data-bs-theme');
    
    if (temaActual === 'dark') {
        body.removeAttribute('data-bs-theme');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
    }
}

const luna = document.querySelector('#luna').addEventListener('click', alternarTema);