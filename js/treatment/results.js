const slidesAmountResult1 =
  document.querySelectorAll('[data-slide-number-result-1]').length / 2
const rightButton__resultBlock__window1 = document.getElementById(
  'rightButton__resultBlock__window1'
)
const leftButton__resultBlock__window1 = document.getElementById(
  'leftButton__resultBlock__window1'
)
const text__resultBlock__window1 = document.getElementById(
  'text__resultBlock__window1'
)
text__resultBlock__window1.innerHTML = `1 / ${slidesAmountResult1}`
rightButton__resultBlock__window1.addEventListener('click', () => {
  let lastActive = text__resultBlock__window1.getAttribute(
    'data-slide-result-1'
  )

  if (lastActive != slidesAmountResult1) {
    if (lastActive == 1) {
      leftButton__resultBlock__window1.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1

    if (newActive == slidesAmountResult1) {
      rightButton__resultBlock__window1.style.cssText = 'opacity: 30%'
    }

    text__resultBlock__window1.innerHTML = `${newActive} / ${slidesAmountResult1}`
    text__resultBlock__window1.setAttribute('data-slide-result-1', newActive)
    const arr1 = document.querySelectorAll(
      `[data-slide-number-result-1="${lastActive}"]`
    )
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute('data-visible', 'false')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-result-1="${newActive}"]`
    )
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
    }
  }
})
leftButton__resultBlock__window1.addEventListener('click', () => {
  let lastActive = text__resultBlock__window1.getAttribute(
    'data-slide-result-1'
  )
  if (lastActive != 1) {
    if (lastActive == slidesAmountResult1) {
      rightButton__resultBlock__window1.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      leftButton__resultBlock__window1.style.cssText = 'opacity: 30%'
    }
    const arr1 = document.querySelectorAll(
      `[data-slide-number-result-1="${lastActive}"]`
    )
    text__resultBlock__window1.innerHTML = `${newActive} / ${slidesAmountResult1}`
    text__resultBlock__window1.setAttribute('data-slide-result-1', newActive)
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute('data-visible', 'false')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-result-1="${newActive}"]`
    )
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
    }
  }
})
