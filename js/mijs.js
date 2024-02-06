/********************************************
 *    función de validación
 */

function validacion(){
    let correcto=true;
    let nombre=document.getElementById('nombre');
    let apellidos=document.getElementById('apellidos');
    let email=document.getElementById('email');
    let provincia=document.getElementById('provincia');
    
    if (apellidos.value.length==0 || /^\s+$/.test(nombre.value))
      {
       correcto=false;
       nombre.style.borderColor="red";
       document.getElementById('nombreHelp').style.visibility="visible";
      }
   
      console.log(apellidos.value+ /^\s+$/.test(apellidos.value));
    if (apellidos.value.length==0 || /^\s+$/.test(apellidos.value))
      {
       correcto=false;
       apellidos.style.borderColor="red";
       document.getElementById('apellidosHelp').style.visibility="visible";
      }
      if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email.value)))
      {
       correcto=false;
       email.style.borderColor="red";
       document.getElementById('emailHelp').style.visibility="visible";
      }

      if (provincia.value==0)
      {
       correcto=false;
       provincia.style.borderColor="red";
       document.getElementById('provinciaHelp').style.visibility="visible";
      }

      
    return correcto;


}

function resetear(id)
    {   document.getElementById(id+'Help').style.visibility="hidden";
        document.getElementById(id).style.borderColor="lightgray";
    }