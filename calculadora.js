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
}
