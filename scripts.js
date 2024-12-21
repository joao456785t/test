const key = "4cbe44e4f6d147364647364b6b6c36d0";

function ColocaDadosNaTela(dados) {
  document.querySelector(".temp").innerHTML = `Temperatura: ${dados.main.temp}°C`;
  document.querySelector(".nublado").innerHTML = `Descrição: ${dados.weather[0].description}`;
  document.querySelector(".city").innerHTML = `Tempo em: ${dados.name}`;
  document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`;
  console.log(dados);
}

async function Buscarcidade(cidade) {
  try {
    const resposta = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    );
    const dados = await resposta.json();
    if (dados.cod === 200) {
      ColocaDadosNaTela(dados);
    } else {
      alert("Cidade não encontrada!");
    }
  } catch (error) {
    console.error("Erro ao buscar os dados da cidade:", error);
    alert("Erro ao buscar os dados da cidade.");
  }
}

function cliquenobotao() {
  const cidade = document.querySelector(".input-cidade").value;
  if (cidade) {
    Buscarcidade(cidade);
  } else {
    alert("Por favor, insira o nome de uma cidade.");
  }
}

// Adicionar evento ao botão
document.querySelector(".botao-buscar").addEventListener("click", cliquenobotao);
