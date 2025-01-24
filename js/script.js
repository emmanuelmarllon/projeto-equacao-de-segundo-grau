function solveEquation() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (a === 0) {
    resultDiv.innerHTML = `<p class="highlight">O valor de 'a' não pode ser 0. Não é uma equação do segundo grau.</p>`;
    return;
  }

  // Cálculo de Delta
  const delta = b ** 2 - 4 * a * c;

  // Exibir a equação completa
  const equation = `<p>A equação é: <strong>${a}x² ${b >= 0 ? "+" : ""} ${b}x ${
    c >= 0 ? "+" : ""
  } ${c} = 0</strong></p>`;
  resultDiv.innerHTML += equation;

  // Mostrar cálculo de Delta
  const deltaCalculation = `<p>Cálculo de Δ: <strong>Δ = b² - 4ac</strong><br>
        Δ = (${b})² - 4(${a})(${c})<br>
        Δ = ${b ** 2} - ${4 * a * c}<br>
        Δ = ${delta}</p>`;
  resultDiv.innerHTML += deltaCalculation;

  // Analisar as raízes baseadas em Δ
  if (delta < 0) {
    resultDiv.innerHTML += `<p class="highlight">Como Δ = ${delta}, a equação não possui raízes reais.</p>`;
  } else if (delta === 0) {
    const root = -b / (2 * a);
    resultDiv.innerHTML += `<p class="highlight">Como Δ = 0, a equação possui uma raiz real:<br>
          x = -b / 2a<br>
          x = -(${b}) / 2(${a})<br>
          x = ${root.toFixed(2)}</p>`;
  } else {
    const root1 = (-b + Math.sqrt(delta)) / (2 * a);
    const root2 = (-b - Math.sqrt(delta)) / (2 * a);

    const rootsCalculation = `<p>Cálculo das raízes:<br>
          x₁ = (-b + √Δ) / 2a<br>
          x₁ = (-(${b}) + √${delta}) / 2(${a})<br>
          x₁ = ${root1.toFixed(2)}<br><br>
          x₂ = (-b - √Δ) / 2a<br>
          x₂ = (-(${b}) - √${delta}) / 2(${a})<br>
          x₂ = ${root2.toFixed(2)}</p>`;

    resultDiv.innerHTML += rootsCalculation;
    resultDiv.innerHTML += `<p class="highlight">As raízes da equação são: x₁ = ${root1.toFixed(
      2
    )} e x₂ = ${root2.toFixed(2)}</p>`;
  }
}
