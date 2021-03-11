function UI() {
  this.output = document.getElementById("outputImage")
  this.outputLang = document.getElementById("outputLanguage")
  this.outputWord = document.getElementById("outputWord")

  this.language = document.getElementById("language")
}

UI.prototype.changeUI = function() {
  this.output.src = `images/${this.language.value}.png`
  this.outputLang.innerHTML = this.language.options[this.language.selectedIndex].textContent
}

UI.prototype.display = function(res) {
  this.outputWord.textContent = res
}