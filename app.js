let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

// Função para adicionar os nomes dos amigos na lista
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    if (nome === '') {
        alert('ERRO! Campo vazio. Digite um nome.');
        return;
    }
    
    if (!isNaN(nome)) {
        alert('ERRO! Números não são permitidos. Digite um nome válido.');
        return;
    }
    
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    document.getElementById('amigo').value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para o sorteio!');
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O amigo secreto sorteado é: <strong>${sorteado}</strong></p>`;
}