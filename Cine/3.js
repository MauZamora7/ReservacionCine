const urlParams = new URLSearchParams(window.location.search);
    const pelicula = urlParams.get('pelicula');
    const horario = urlParams.get('horario');
    const numAdultos = urlParams.get('numAdultos');
    const numMenores = urlParams.get('numNinos');
    const total = urlParams.get('total');

    document.getElementById('pelicula').textContent = pelicula;
    document.getElementById('horario').textContent = horario;
    document.getElementById('numAdultos').textContent = numAdultos;
    document.getElementById('numNinos').textContent = numMenores;
    document.getElementById('total').textContent = `$${total}`;