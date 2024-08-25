const rightButton = document.getElementById('feedbackBlock__rightButton')
const textFeedback = document.getElementById('feedbackBlock__text')
const leftButton = document.getElementById('feedbackBlock__leftButton')
const slidesAmountF = document.querySelectorAll('[data-slide-number]').length
textFeedback.innerHTML = `1 / ${slidesAmountF}`
rightButton.addEventListener('click', () => {
  let lastActive = textFeedback.getAttribute('data-number')
  if (lastActive != slidesAmountF) {
    if (lastActive == 1) {
      leftButton.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmountF) {
      rightButton.style.cssText = 'opacity: 30%'
    }
    textFeedback.setAttribute('data-number', newActive)
    textFeedback.innerHTML = `${newActive} / ${slidesAmountF}`
    let lastActiveElement = document.querySelector(
      `[data-slide-number="${lastActive}"]`
    )
    let newActiveElement = document.querySelector(
      `[data-slide-number="${newActive}"]`
    )
    lastActiveElement.setAttribute('data-visible', 'false')
    lastActiveElement.classList.remove('open')
    lastActiveElement.classList.add('close')
    newActiveElement.setAttribute('data-visible', 'true')
    setTimeout(() => newActiveElement.classList.add('open'), 50)
  }
})
leftButton.addEventListener('click', () => {
  let lastActive = textFeedback.getAttribute('data-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmountF) {
      rightButton.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      leftButton.style.cssText = 'opacity: 30%'
    }
    textFeedback.setAttribute('data-number', newActive)
    textFeedback.innerHTML = `${newActive} / ${slidesAmountF}`
    let lastActiveElement = document.querySelector(
      `[data-slide-number="${lastActive}"]`
    )
    let newActiveElement = document.querySelector(
      `[data-slide-number="${newActive}"]`
    )
    lastActiveElement.setAttribute('data-visible', 'false')
    lastActiveElement.classList.remove('open')
    lastActiveElement.classList.remove('close')
    newActiveElement.setAttribute('data-visible', 'true')
    setTimeout(() => newActiveElement.classList.add('open'), 50)
  }
})
