// Procurar o botão
document.querySelector("#add-time")
    // Quando clicar no botão, executar uma ação
    .addEventListener('click', cloneField)


// Criando uma ação utilizando função
function cloneField() {
    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //o cloneNode é para nos referirmos ao HTML

    // Limpar os campos antes de duplicar
    const fields = newFieldContainer.querySelectorAll('input') // To procurando tudo o que é input que ele achar ali dentro, e coloco na variável fields

    // E para cada campo, limpar de fato...
    fields.forEach(function(field) {
      field.value = ""
    })


    // Colocar na página: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
  }






