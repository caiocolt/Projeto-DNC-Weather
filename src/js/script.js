async function buscarEndereco() {
    const cep = document.getElementById('cep').value;
    if (!cep) {
         alert("Por favor, insira um CEP.");
         return;
    }
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json();
      console.log(data);
      document.getElementById('rua').innerHTML = data.logradouro;
      document.getElementById('bairro').innerHTML = data.bairro;
      document.getElementById('cidade').innerHTML = data.localidade;
    } catch (error) {
      alert(error.message)
    }
    }

    async function buscarPrevisao() {
  const lat = document.getElementById('latitude').value;
  const long = document.getElementById('longitude').value;

  if (!lat || !long) {
      alert("Por favor, insira a latitude e a longitude.");
      return;
  }

  try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`);
      const data = await response.json();
      console.log(data);

      //Atualizar o HTML com os dados recebidos da API
      const previsaoHTML = `
          <p>Temperatura Atual: ${data.current_weather.temperature}°C</p>
          <p>Velocidade do Vento: ${data.current_weather.windspeed} km/h</p>
          <p>Condições: ${data.current_weather.weathercode}</p>
      `;
      document.getElementById('respostaPrevisao').innerHTML = previsaoHTML;

  } catch (error) {
      alert("Erro ao buscar previsão do tempo: " + error.message);
  }
}