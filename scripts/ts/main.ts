const Menu = () => {
  const menu_mobile = document.querySelector('.menu_burguer') as HTMLElement
  const nav_menu: NodeListOf<Element> = document.querySelectorAll('.menu')

  menu_mobile.addEventListener('click', () => {
    menu_mobile.classList.toggle('active')
    nav_menu.forEach((item) => {
      item.classList.toggle('active')
    })
  })
}

Menu()
