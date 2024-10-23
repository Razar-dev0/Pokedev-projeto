//window.alert('oi') 
/* OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev
 aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    PASSO 1 - precisamos criar uma variavel no JS para trabalhar com a listagem pokedevs
    PASSO 2 - identificar o evento de clique no elemento da listagem
    PASSO 3 - remover a classe aberto só do cartão que tá aberto
    PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber
    qual cartão abrir 
    PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem 
    PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem 
*/

//  PASSO 1 - precisamos criar uma variavel no JS para trabalhar com a listagem pokedevs//
const listaSelecaoPokedevs = document.querySelectorAll('.pokedev');
//console.log(listaSelecaoPokedevs);

// PASSO 2 - identificar o evento de clique no elemento da listagem
/*const devchu = document.getElementById('devchu');
devchu.addEventListener('click' , () => {
    console.log('oi');
}) */

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener('click', () => {
        // PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();

        // PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev para saber qual cartão abrir
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem 
        desativarPokedevNaListagem();

        // PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem 
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add('ativo');
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector('.ativo');
    pokedevAtivoNaListagem.classList.remove('ativo');
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = 'cartao-' + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add('aberto');
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}