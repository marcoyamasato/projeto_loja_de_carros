
$(document).ready(function(){
    $("#caroucel-imagens").slick({autoplay:true,});
})

$('.menu-hamburguer').click(function(){
    $('nav').slideToggle(); /*reconhece que se já fez o slide down, com mais um clique, tem que fazer o slideup*/
})

$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome:{ /*Todos os campos (nome, email e telefone) não são referente aos IDs, mas sim ao valor atribuido ao "name" dos inputs */
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        veiuloDeInteresse:{
            required: false
        },
        mensagem:{
            required: true
        }
    },
    messages:{ /*Aqui estamos personalizando as mensagens do msg_ptBr (arquivo que colamos na pasta)*/
        nome: 'Por favor insira seu nome'
    },

    submitHandler: function(form){
        alert('Mensagem enviada com sucesso')
    },

    invalidHandler: function(e, validador){
        var campos_incorretos = validador.numberOfInvalids();
        if (campos_incorretos){
            alert(`Temos ${campos_incorretos} campos incorretos`)
        }
    }
})



$('.container button').click(function(){
    destino = $('#contato')

    const texto_veiculo = $(this).parent().find('h3').text()

    $('#veiculo-interesse').val(texto_veiculo) /*do elemento this (que é o botao), estamos acessando o pai dele (que é um li). E dentro do pai, estamos buscando o elemento h3*/

    $('html').animate({
        scrollTop: destino.offset().top
        /*scroll top: utilizado para rolar a pagina
        offset: retorna a posição do elemento buscado na esquerda e no top 
        .top: da posição retornada, quero o top (nesse caso) */
    }, 1000)
    
})