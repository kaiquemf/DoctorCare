function onScroll()
{
  if(scrollY > 0){
    navigation.classList.add('scroll');
  }
  else{
    navigation.classList.remove('scroll')
  }
}
const openButton = document.querySelector('#navigation')
function openMenu()
{
  openButton.classList.add('menu-expanded')
}
function closeMenu()
{
  openButton.classList.remove('menu-expanded')
}