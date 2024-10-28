const perguntas = [
    {
        pertunta: 'Quanto é 2 + 2 ?',
        opcoes: ['1', '3', '4', '5'],
        resposta: '4',
    }, 
    {
        pertunta: 'Quanto é 5 * 5 ?',
        opcoes: ['25', '55', '10', '51'],
        resposta: '25',
    }, 
    {
        pertunta: 'Quanto é 10 / 2 ?',
        opcoes: ['4', '5', '2', '1'],
        resposta: '5'
    } 
];

let qntAcertos = 0;
let perguntaAtual = 0;

function renderQuestion(){
    const quizContainer = document.getElementById('quiz-container');
    const questionData = perguntas[perguntaAtual];
    // Limpa o container e exibe a pertunta atual
    quizContainer.innerHTML = `<h2>{questionData.pergunta}</h2>`;
    questionData.opcoes.forEach((opcao, index) => {
        quizContainer.innerHTML += `
            <button class="option" onclick="selectOption('${opcao}')">${index + 1}) ${opcao}</button>
        `;
    });
}

function selectOption(opcaoEscolhida) {
    const respostaCerta = perguntas[perguntaAtual].resposta;
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next-btn');

    if (opcaoEscolhida === respostaCerta) {
        qntAcertos++;
        resultElement.innerText = 'Acertou 👏!';
        resultElement.style.color = '#4caf50';
    } else {
        resultElement.innerText = 'Errou ❌!';
        resultElement.style.color = '#f44336';
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next-btn');

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        renderQuestion();
        resultElement.innerText = '';
        nextButton.style.display = 'none';
    } else {
        // Fim do quiz
        document.getElementById('quiz-container').innerHTML = `<h2>Você acertou ${qntAcertos} de ${perguntas.length} perguntas.</h2>`;
        nextButton.style.display = 'none';
    }
}

// Inicializa o quiz
renderQuestion();