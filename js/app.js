const translate_word = document.getElementById("translate-word").value
const language = document.getElementsByTagName("language").value

const translate = new Translate(translate_word, language)
const ui = new UI()

addEventListener()

function addEventListener() {
  document.getElementById("form").addEventListener("submit", translateText)
  document.getElementById("language").onchange = function () {
    ui.changeUI()
  }
}

function translateText(e) {
  translate.parameters(document.getElementsByTagName("translate-word").value, document.getElementsByTagName("language").value)

  translate.translate(function (err, res) {
    if (err) {
      console.log(err)
    } else {
      ui.display(res)
    }
  })

  e.preventDefault()
}
