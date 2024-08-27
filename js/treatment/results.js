const slidesAmountResult1 =
  document.querySelectorAll('[data-slide-number-result-1]').length / 2
const rightButtonResult = document.getElementById(
  'rightButton__resultBlock__window1'
)
const leftButtonResult = document.getElementById(
  'leftButton__resultBlock__window1'
)
const textResult = document.getElementById('text__resultBlock__window1')
textResult.innerHTML = `1 / ${slidesAmountResult1}`
rightButtonResult.addEventListener('click', () => {
  let lastActive = textResult.getAttribute('data-slide-result-1')

  if (lastActive != slidesAmountResult1) {
    if (lastActive == 1) {
      leftButtonResult.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmountResult1) {
      rightButtonResult.style.cssText = 'opacity: 30%'
    }
    textResult.innerHTML = `${newActive} / ${slidesAmountResult1}`
    textResult.setAttribute('data-slide-result-1', newActive)
    let lastActiveElement = document.querySelector(
      `[data-slide-number-result-1="${lastActive}"]`
    )
    let newActiveElement = document.querySelector(
      `[data-slide-number-result-1="${newActive}"]`
    )
    lastActiveElement.setAttribute('data-visible', 'false')
    lastActiveElement.classList.remove('open')
    lastActiveElement.classList.add('close')
    newActiveElement.setAttribute('data-visible', 'true')
    setTimeout(() => newActiveElement.classList.add('open'), 50)
  }
})
leftButtonResult.addEventListener('click', () => {
  let lastActive = textResult.getAttribute('data-slide-result-1')
  if (lastActive != 1) {
    if (lastActive == slidesAmountResult1) {
      rightButtonResult.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      leftButtonResult.style.cssText = 'opacity: 30%'
    }
    let lastActiveElement = document.querySelector(
      `[data-slide-number-result-1="${lastActive}"]`
    )
    let newActiveElement = document.querySelector(
      `[data-slide-number-result-1="${newActive}"]`
    )
    lastActiveElement.setAttribute('data-visible', 'false')
    lastActiveElement.classList.remove('open')
    lastActiveElement.classList.remove('close')
    newActiveElement.setAttribute('data-visible', 'true')
    setTimeout(() => newActiveElement.classList.add('open'), 50)
  }
})
