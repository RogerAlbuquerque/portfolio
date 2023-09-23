

function showProgramador(){

  let programador = document.getElementById("programador")
  let pessoa      = document.getElementById("pessoa")
  let programmer  = document.getElementById("programmer")
  let person      = document.getElementById("person")

  programador.style.display = "flex"  
  programmer.style.display  = "flex"  
  pessoa.style.display      = "none"
  person.style.display      = "none"

  document.getElementById("comoProgramador").style.color = "#FF5C00"
  document.getElementById("comoPessoa").style.color      = "#00F0FF"
  document.getElementById("asProgrammer").style.color    = "#FF5C00"
  document.getElementById("asPerson").style.color        = "#00F0FF"

}

function showPessoa(){
  let programador = document.getElementById("programador")  
  let programmer  = document.getElementById("programmer")
  let pessoa      = document.getElementById("pessoa")
  let person      = document.getElementById("person")

  programador.style.display = "none"  
  programmer.style.display  = "none"
  pessoa.style.display      = "flex"
  person.style.display      = "flex"

  document.getElementById("comoProgramador").style.color = "#00F0FF"  
  document.getElementById("asProgrammer").style.color    = "#00F0FF"
  document.getElementById("comoPessoa").style.color      = "#FF5C00"
  document.getElementById("asPerson").style.color        = "#FF5C00"


}

function changeLangToEng(){
  let ptContainer = document.getElementById("containerPt")
  let engContainer = document.getElementById("containerEn")
  

  engContainer.style.display = "block"
  ptContainer.style.display = "none"

  let ptbutton =  document.getElementById("ptbr")
  let enbutton = document.getElementById("enus")

  ptbutton.style.color = "rgb(225,225,225,0.4)"
  ptbutton.style.textDecoration = "none"
  enbutton.style.color = "#fff"
  enbutton.style.textDecoration = "underline"

}

function changeLangToPT(){
  let ptContainer = document.getElementById("containerPt")
  let engContainer = document.getElementById("containerEn")
  

  ptContainer.style.display = "block"
  engContainer.style.display = "none"

  let ptbutton =  document.getElementById("ptbr")
  let enbutton = document.getElementById("enus")

  enbutton.style.color = "rgb(225,225,225,0.4)"
  ptbutton.style.color = "#fff"
  ptbutton.style.textDecoration = "underline"
  enbutton.style.textDecoration = "none"

}