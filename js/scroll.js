const abilities = document.getElementById('abilities')
const doctors = document.getElementById('doctors')
const equip = document.getElementById('equip')
const clinic = document.getElementById('clinic')

window.addEventListener('scroll', () => {
  if (Math.round(scrollY) > 2380 && Math.round(scrollY) < 3000) {
    abilities.classList.add('type-2-active')
    abilities.style.cssText = `opacity: 100;`
  }
  if (Math.round(scrollY) > 3001) {
    abilities.style.cssText = `opacity: 0;`
  }
  if (Math.round(scrollY) < 2379) {
    abilities.classList.remove('type-2-active')
  }
  //doctor
  if (Math.round(scrollY) > 3000) {
    doctors.classList.add('type-2-active')
    doctors.style.cssText = `opacity: 100;`
  }
  if (Math.round(scrollY) > 3618) {
    doctors.style.cssText = `opacity: 0;`
  }
  if (Math.round(scrollY) < 2999) {
    doctors.classList.remove('type-2-active')
  }
  //equip
  if (Math.round(scrollY) > 3619 && Math.round(scrollY) < 4236) {
    equip.classList.add('type-2-active')
    equip.style.cssText = `opacity: 100;`
  }
  if (Math.round(scrollY) > 4237) {
    equip.style.cssText = `opacity: 0;`
  }
  if (Math.round(scrollY) < 3618) {
    equip.classList.remove('type-2-active')
  }
  //clinic
  if (Math.round(scrollY) > 2380 && Math.round(scrollY) < 3000) {
    clinic.classList.add('type-2-active')
    clinic.style.cssText = `opacity: 100;`
  }
  if (Math.round(scrollY) > 4000) {
    clinic.style.cssText = `opacity: 0;`
  }
  if (Math.round(scrollY) < 2379) {
    clinic.classList.remove('type-2-active')
  }
})
