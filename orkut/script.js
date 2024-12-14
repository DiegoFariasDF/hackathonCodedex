function adicionarDepoimento() {
    const input = document.getElementById('depoimentoInput');
    const depoimentos = document.getElementById('depoimentos');

    if (input.value.trim() === '') {
        alert('Por favor, escreva algo antes de enviar!');
        return;
    }

    const novoDepoimento = document.createElement('div');
    novoDepoimento.className = 'depoimento';
    novoDepoimento.textContent = input.value;

    depoimentos.prepend(novoDepoimento);

    input.value = '';
}