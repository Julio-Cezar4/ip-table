function getIPInfo() {
  const ip = document.getElementById('ipInput').value;
  const token = '1881496a1d88bd'; // Substitua pelo seu token da API ipinfo.io
  const url = `https://ipinfo.io/${ip}/json?token=${token}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          document.getElementById('ip').textContent = data.ip || 'N/A';
          document.getElementById('org').textContent = data.org || 'N/A';
          document.getElementById('country').textContent = data.country || 'N/A';
          document.getElementById('city').textContent = data.city || 'N/A';
          document.getElementById('ipTable').style.display = 'table';
      })
      .catch(error => {
          alert('Erro ao buscar as informações. Verifique o IP e tente novamente.');
          console.error('Erro:', error);
      });
}

function clearTable() {
  document.getElementById('ipInput').value = '';
  document.getElementById('ip').textContent = '';
  document.getElementById('org').textContent = '';
  document.getElementById('country').textContent = '';
  document.getElementById('city').textContent = '';
  document.getElementById('ipTable').style.display = 'none';
}
