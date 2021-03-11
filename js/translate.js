function Translate(word, lang) {
  this.apiKey = "XXXXXX-XXXXXX"
  this.word = word
  this.lang = lang

  this.xhr = new XMLHttpRequest()
}

Translate.prototype.translate = function(cb) {
  const translatePoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}text=${this.word}&lang=${this.lang}`

  this.xhr.open("GET", translatePoint)

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText)
      const text = json.text[0]
      cb(null, text)
    } else {
      cb("Bir hata oldu dostum 😢😢 :[", null)  
    }
  }

  this.xhr.send()
}

Translate.prototype.parameters = function(word, lang) {
  this.word = word
  this.lang = lang
}

