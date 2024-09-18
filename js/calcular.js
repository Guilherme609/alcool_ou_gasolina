/*
function calcular() {
    let precoAlcool = parseFloat(document.getElementById("alcool").value);
    let precoGasolina = parseFloat(document.getElementById("gasolina").value);
    let resultado = document.getElementById("resultado");
    let imagem = document.getElementById("imagem");

    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
        resultado.textContent = "Por favor, insira valores válidos!";
        imagem.style.display = "none";
        return;
    }

    let relacao = precoAlcool / precoGasolina;

    if (relacao <= 0.7) {
        resultado.textContent = "É mais vantajoso abastecer com Álcool.";
        imagem.src = "alcool.jpg";  // Substitua pelo caminho correto da imagem do álcool
        imagem.alt = "Imagem de Álcool";
    } else {
        resultado.textContent = "É mais vantajoso abastecer com Gasolina.";
        imagem.src = "gasolina.jpg";  // Substitua pelo caminho correto da imagem da gasolina
        imagem.alt = "Imagem de Gasolina";
    }

    imagem.style.display = "block";
}
*/
function calcular() {
    let precoAlcool = parseFloat(document.getElementById("alcool").value);
    let precoGasolina = parseFloat(document.getElementById("gasolina").value);
    let resultado = document.getElementById("resultado");
    let imagem = document.getElementById("imagem");

    // Verifica se os valores inseridos são válidos
    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
        resultado.textContent = "Por favor, insira valores válidos!";
        imagem.style.display = "none";
        return;
    }

    // Calcula a relação entre álcool e gasolina
    let relacao = precoAlcool / precoGasolina;

    // Exibe o resultado baseado na relação
    if (relacao <= 0.7) {
        resultado.textContent = "É mais vantajoso abastecer com Álcool.";
        imagem.src = "img/alcool.jpg";  // Substitua pelo caminho correto da imagem do álcool
        imagem.alt = "Imagem de Álcool";
    } else {
        resultado.textContent = "É mais vantajoso abastecer com Gasolina.";
        imagem.src = "img/gasolina.jpg";  // Substitua pelo caminho correto da imagem da gasolina
        imagem.alt = "Imagem de Gasolina";
    }

    // Exibe a imagem
    imagem.style.display = "block";
}
