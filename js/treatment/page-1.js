const page1__rightButton = document.getElementById('page1__rightButton')
const page1__text = document.getElementById('page1__text')
const page1__leftButton = document.getElementById('page1__leftButton')
page1__leftButton.style.cssText = `
  opacity: 30%;
  transform: rotate(180deg);
  `
const slidesAmount = document.querySelectorAll('[data-slide-number-1]').length

page1__text.innerHTML = `1 / ${slidesAmount}`
page1__rightButton.addEventListener('click', () => {
  let lastActive = page1__text.getAttribute('data-number')
  if (lastActive != slidesAmount) {
    if (lastActive == 1) {
      page1__leftButton.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmount) {
      page1__rightButton.style.cssText = 'opacity: 30%'
    }
    page1__text.setAttribute('data-number', newActive)
    page1__text.innerHTML = `${newActive} / ${slidesAmount}`
    document
      .querySelector(`[data-slide-number-1="${lastActive}"]`)
      .setAttribute('data-visible', 'false')
    document
      .querySelector(`[data-slide-number-1="${newActive}"]`)
      .setAttribute('data-visible', 'true')
  }
})
page1__leftButton.addEventListener('click', () => {
  let lastActive = page1__text.getAttribute('data-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmount) {
      page1__rightButton.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      page1__leftButton.style.cssText = 'opacity: 30%'
    }
    page1__text.setAttribute('data-number', newActive)
    page1__text.innerHTML = `${newActive} / ${slidesAmount}`
    document
      .querySelector(`[data-slide-number-1="${lastActive}"]`)
      .setAttribute('data-visible', 'false')
    document
      .querySelector(`[data-slide-number-1="${newActive}"]`)
      .setAttribute('data-visible', 'true')
  }
})
