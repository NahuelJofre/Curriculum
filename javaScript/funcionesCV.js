
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



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


/*==================== DARK LIGHT THEME ====================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
*/ 