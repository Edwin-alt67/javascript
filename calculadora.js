function calculadora(accion)
{
  if(accion == 'suma') return suma();
  else if(accion == 'resta') return resta();
  else return 'error al selecionar';
  
   function suma()
   {
     return 2+5;
   } 
   function resta()
   {
      return 5-2;
   }
   //añadiendo codigo como contribuidor las funciones de multiplicacion y dificion
   function multiplicacion()
   {
    return 5*2;
   }
   function division()
   {
    return 5/2;
   }
}

console.log(calculadora('suma')); 
console.log(calculadora('resta'));
//llamando a las funciones
console.log(calculadora('multiplicacion'));
console.log(calculadora('division'));
