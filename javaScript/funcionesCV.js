/*==================== Boton de top ====================*/

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== Cambio de idioma ====================*/

document.getElementById('boton-espanol').onclick = function (){
  if (document.documentElement.lang=="es"){
    console.log('El idioma ya es español')
  }
  else{
    location.href="../index.html";
  };
}
document.getElementById('boton-ingles').onclick = function (){
  if (document.documentElement.lang=="es"){ 
    location.href="ingles/indexEn.html";
  }
  else{
    console.log('El idioma ya es ingles')
  };
}

if(document.documentElement.lang=="es"){
  document.getElementById('boton-espanol').style.color = "rgb(210, 126, 210)";
  document.getElementById('boton-espanol').style.fontSize = "22px";
  document.getElementById('boton-espanol').style.fontWeight = "900"
}
else{
  document.getElementById('boton-ingles').style.fontWeight = "900";
  document.getElementById('boton-ingles').style.color = "rgb(210, 126, 210)";
  document.getElementById('boton-ingles').style.fontSize = "22px"
}

/*==================== Mostrar menu en celular ====================*/

const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('boton-menu-id','nav-menu-id')


/*==================== Enviar un email ====================*/
function enviarEmail(){

  Email.send({
    SecureToken : "db29dfc5-9833-4c42-a664-5090bc24ac22",
    To : 'n.jofre16@gmail.com',
    From : "n.jofre16@gmail.com",
    Subject : "Nueva interaccion de CV",
    Body : "Nombre: " + document.getElementById("Nombre-1").value + "<br> Email: " + document.getElementById("Email-1").value + "<br> Mensaje: " + document.getElementById("mensaje").value
  }).then(
  message => alert("Mensaje enviado")
  );
}