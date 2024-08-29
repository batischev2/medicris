const page2 = document.getElementById('page-2')

const gradient = document.getElementById('gradient')

window.addEventListener('scroll', () => {
  if (Math.round(scrollY) > 550) {
    page2.classList.add('page-2-active')
    page2.style.cssText = 'opacity: 100'
  }
  if (Math.round(scrollY) > 4000) {
    page2.style.cssText = `opacity: 0;`
  }
  if (Math.round(scrollY) < 550) {
    page2.classList.remove('page-2-active')
  }
})
