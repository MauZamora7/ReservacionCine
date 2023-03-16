const form = document.getElementById('reservation-form');
const ticket = document.getElementById('ticket');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const pelicula = document.querySelector('input[name="pelicula"]:checked');
  const horario = document.getElementById('horario').value;
  const numAdultos = parseInt(document.getElementById('numAdultos').value);
  const numNinos = parseInt(document.getElementById('numNinos').value);

  if (numAdultos == 1 && numNinos > 4) {
    alert("Solo se permiten 4 menores por adulto");
    return;
  } else if (numAdultos == 2 && numNinos > 3) {
    alert("Solo se permiten 3 menores por 2 adultos");
    return;
  } else if (numAdultos == 3 && numNinos > 2) {
    alert("Solo se permiten 2 menores por 3 adultos");
    return;
  } else if (numAdultos == 4 && numNinos > 0) {
    alert("Ya no se permiten menores cuando hay 4 adultos");
    return;
  }

  const costoAdultos = 72; 
  const costoNinos = 56; 
  const total = (numAdultos * costoAdultos) + (numNinos * costoNinos);

  const ticketData = {
    pelicula: pelicula.value,
    horario: `${horario}:00`,
    numAdultos: numAdultos,
    numNinos: numNinos,
    total: total,
  };

  const ticketParams = new URLSearchParams(ticketData).toString();
  const ticketUrl = `ticket.html?${ticketParams}`;

  window.location.href = ticketUrl;
});


