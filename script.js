fetch('https://date-time-api.onrender.com/datetime')
  .then(response => response.json())
  .then(data => {
    document.getElementById('datetime').innerText = `Data: ${data.date} | Hora: ${data.time}`;
  })
  .catch(error => {
    document.getElementById('datetime').innerText = 'Erro ao carregar data/hora';
  });
