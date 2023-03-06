// Sidebar
const btnMenuLateral = document.querySelectorAll('.side-dropdown') // allDropDown

btnMenuLateral.forEach(item =>{
    const a = item.parentElement.querySelector('a:first-child')
    a.addEventListener('click',(e)=>{
        e.preventDefault()

        a.classList.toggle('active')
        item.classList.toggle('show')
    })
})

// Menu Profile
const profile = document.querySelector('nav .profile')
const imgProfile = profile.querySelector('img')
const dropdownProfile = profile.querySelector('.profile-link')

imgProfile.addEventListener('click',()=>{
    dropdownProfile.classList.toggle('show')
})


// Menu del Grafico Estadistico
const allMenu = document.querySelectorAll('.menu')

allMenu.forEach(item=>{
    const icon = item.querySelector('.icon')
    const menuLink = item.querySelector('.menu-link')
    
    icon.addEventListener('click',()=>{
        menuLink.classList.toggle('show')
    })
})


window.addEventListener('click',(e)=>{
    if(dropdownProfile.classList.contains('show')
        && e.target !== imgProfile
        && e.target !== dropdownProfile){
            dropdownProfile.classList.remove('show')
    }

    allMenu.forEach(item=>{
        const icon = item.querySelector('.icon')
        const menuLink = item.querySelector('.menu-link')
        
        if(menuLink.classList.contains('show')
            && e.target !== menuLink
            && e.target !== icon){
            menuLink.classList.remove('show')
        }
    })
})


// Progress bar
const allProgress = document.querySelectorAll('.progress')

allProgress.forEach(item=>{
    item.style.setProperty('--value', item.dataset.value)
})


// Menu Lateral
const toggleSideBar = document.querySelector('.toggle-sidebar')
const sidebar = document.querySelector('.sidebar')
const dividers = document.querySelectorAll('.divider')

toggleSideBar.addEventListener('click',()=>{

  sidebar.classList.toggle('hide')

  if(sidebar.classList.contains('hide')){
    dividers[1].textContent = 'T & F'

    /* oculta los links que estan desplazados hacia abajo*/
    btnMenuLateral.forEach(item =>{
      const a = item.parentElement.querySelector('a:first-child')
      a.classList.remove('active')
      item.classList.remove('show')
    })

  }else{
    dividers[1].textContent = dividers[1].dataset.text
  }
})


// hover del sidebar
sidebar.addEventListener('mouseleave',()=>{
  if(sidebar.classList.contains('hide')){
    dividers[1].textContent = dividers[1].textContent = 'T & F'
    
    /* oculta los links que estan desplazados hacia abajo*/
    btnMenuLateral.forEach(item =>{
      const a = item.parentElement.querySelector('a:first-child')
      a.classList.remove('active')
      item.classList.remove('show')
    })
  }
})

sidebar.addEventListener('mouseenter',()=>{
  if(sidebar.classList.contains('hide')){
    dividers[1].textContent = dividers[1].dataset.text
  }
})

// Generacion de valores aleatorios para el grafico
const dataSeries1 = []
const dataSeries2 = []

function numerosAleatorios(){
  return Math.floor(Math.random() * 120)
}

for (let i = 0; i < 8; i++) {
  dataSeries1[i] = numerosAleatorios()
  dataSeries2[i] = numerosAleatorios()
}


// libreria ApexChart - grafico estadistico
var options = {
    series: [{
    name: 'series1',
    data: dataSeries1
  }, {
    name: 'series2',
    data: dataSeries2
  }],
    chart: {
      /*para colores claros en tema oscuro*/
    foreColor: 'gray', 
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2022-09-19T00:00:00.000Z", "2022-09-19T01:30:00.000Z", "2022-09-19T02:30:00.000Z", "2022-09-19T03:30:00.000Z", "2022-09-19T04:30:00.000Z", "2022-09-19T05:30:00.000Z", "2022-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


// ChatBox
const enviarForm = document.querySelector('#form-chat')
const inputChat = document.querySelector('#form-chat .form-group input')
const chatBox = document.querySelector('.chat-box')

enviarForm.addEventListener('submit',(e)=>{
  e.preventDefault()

  let texto = inputChat.value
  if(texto.trim() == ''){
    inputChat.value = ''
    inputChat.focus()
    return
  }
  
  let msgMe = document.createElement('div')
  let chat = document.createElement('div')
  let profile = document.createElement('div')
  let time = document.createElement('span')
  let p = document.createElement('p')

  msgMe.classList.add('msg', 'me')
  chat.classList.add('chat')
  profile.classList.add('profile')
  time.classList.add('time')
  time.textContent = '16:39'
  p.classList.add('chat-text')
  p.style = 'color: #474747'
  p.textContent = texto

  profile.appendChild(time)
  chat.appendChild(profile)
  chat.appendChild(p)
  msgMe.appendChild(chat)
  chatBox.appendChild(msgMe)

  inputChat.value = ''
  inputChat.focus()
})


// Tema oscuro

const darkThemeBtn = document.querySelector('.dark-theme')
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const brand = document.querySelector('.brand')
const cards = document.querySelectorAll('.card')
const contentDatas = document.querySelectorAll('.content-data')
const dropdownLinks = document.querySelectorAll('.side-dropdown a')
const sideMenuLinks = document.querySelectorAll('.side-menu a')
const navLinkIcons = document.querySelectorAll('.nav-link .icon')
const chatColor = document.querySelectorAll('.chat p')
const wrapper = document.querySelector('.wrapper')

darkThemeBtn.addEventListener('click',()=>{
  if(darkThemeBtn.textContent.trim() == 'Tema Oscuro'){
    darkThemeBtn.innerHTML = `<ion-icon name="sunny-outline" class="icon"></ion-icon> Tema Claro`
  }else{
    darkThemeBtn.innerHTML = `<ion-icon name="moon-outline" class="icon"></ion-icon> Tema Oscuro`
  }

  main.classList.toggle('dark')
  sidebar.classList.toggle('dark')

  cards.forEach(card=>{
    card.classList.toggle('dark')
  })

  contentDatas.forEach(data=>{
    data.classList.toggle('dark')
  })

  sideMenuLinks.forEach(link=>{
    link.classList.toggle('dark')
  })

  nav.classList.toggle('dark')
  toggleSideBar.classList.toggle('dark')

  navLinkIcons.forEach(icon=>{
    icon.classList.toggle('dark')
  })

  chatColor.forEach(p=>{
    p.classList.toggle('dark')
  })

  wrapper.classList.toggle('dark')
  brand.classList.toggle('dark')
})
