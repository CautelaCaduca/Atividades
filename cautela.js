
window.onload = function() {

var data = new Date
var ano = data.getFullYear()
var mez = data.getMonth () + 1
var dias = data.getDate () 
var horas = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

document.getElementById ("dataColocada").innerHTML = "Data Atual:" + ano + "/" + mez + "/" + dias + " " + horas + ":" + minutos + ":" + segundos

}

function PegarData(){
    var hoje = new Date()
    var anoAtual = hoje.getFullYear()
    var anoNovo = new Date(anoAtual + 1, 0, 1)
    var umDia = 1000 * 60 * 60 * 24; 
    var diasFaltando = Math.ceil((anoNovo - hoje) / umDia);
   

    document.getElementById ("AnoNovoColocado").innerHTML = "Faltam " + diasFaltando + " Dias para o Ano Novo!" 
    
}

  