
function calcular(event){
  event.preventDefault();
  
  let alcoolIput = document.getElementById("alcool").value;
  let gasolinaInput = document.getElementById("gasolina").value;
  let ccontenteResult = document.getElementById("content-result");
  let textResult = document.getElementById("textResult");
  
  let alcoolR = document.getElementById("alcool-result");
  
  let gasolinaR = document.getElementById("gasolina-result");
  
  let dividir = (alcoolIput / gasolinaInput);
  
  dividir < 0.7 ?
    textResult.innerHTML = "compensa usar Álcool" :
    textResult.innerHTML = "compensa usar Gasolina";
    
    
    alcoolR.innerHTML = "Compensa usar Álcool " + alcoolIput + "Mts";
    
    gasolinaR.innerHTML = "Compensa usar Gasolina " + gasolinaInput + "Mts";
  
  ccontenteResult.classList.remove("hide");
};