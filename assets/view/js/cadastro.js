const inputCep = $(".CEP");
const botaoCep = $(".buscar");
const inputEndereco = $("#inputAddress");
const inputCidade = $(".cidade");
const validNome = $("#validationServer01");
const validSobrenome = $("#validationServer02");
const validUser = $("#validationServerUsername");
const validEstado = $("#validationServer04");
const checkTermo = $("#invalidCheck3");


validNome.on("keyup", function () {
    validNome.addClass ("is-valid")
})

validSobrenome.on("keyup", function () {
    validSobrenome.addClass ("is-valid")
})

validUser.on("keyup", function () {
    validUser.addClass ("is-valid")
})

validEstado.on("keyup", function () {
    validEstado.addClass ("is-valid")
})

botaoCep.on("click", function (event) {
    event.preventDefault ();
    inputCep.addClass ("is-valid")
    pegaCep ()
})

inputCep.on('keyup', function() {
      inputCep.val(this.value.match(/[0-9]*/));
  });

function pegaCep () {
    let cepDigitado = inputCep.val();
    const cep = $.ajax ({
        method: "GET",
        url: `https://viacep.com.br/ws/${cepDigitado}/json/`,

        success: function () {
            inputEndereco.val(cep.responseJSON.logradouro)
            inputCidade.val(cep.responseJSON.localidade)
        },

        error: function () {
            console.log ("Deu erro")
        }
    })
}
// function marcaCheckbox () {
//     if (checkTermo.val() == "uncheck") {
//         mostra = $("#invalidCheck3Feedback")
//     } else {
//         mostra = $(".is-valid")
//     }
// }



