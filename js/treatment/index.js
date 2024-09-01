$(function () {
  $('#twentytwentycontainer11').twentytwenty()
  $('#twentytwentycontainer12').twentytwenty()
  $('#twentytwentycontainer21').twentytwenty()
  $('#twentytwentycontainer22').twentytwenty()
})
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

const slidesAmountResult2 =
  document.querySelectorAll('[data-slide-number-result-2]').length / 2
const rightButton__resultBlock__window2 = document.getElementById(
  'rightButton__resultBlock__window2'
)
const leftButton__resultBlock__window2 = document.getElementById(
  'leftButton__resultBlock__window2'
)
const text__resultBlock__window2 = document.getElementById(
  'text__resultBlock__window2'
)

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
      arr1[i].classList.remove('open')
      arr1[i].classList.add('close')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-result-1="${newActive}"]`
    )
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
      setTimeout(() => arr2[i].classList.add('open'), 50)
    }
    $(`#twentytwentycontainer1${newActive}`).twentytwenty()
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
      arr1[i].classList.remove('open')
      arr1[i].classList.remove('close')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-result-1="${newActive}"]`
    )
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
      setTimeout(() => arr2[i].classList.add('open'), 50)
    }
    $(`#twentytwentycontainer1${newActive}`).twentytwenty()
  }
})
rightButton__resultBlock__window2.addEventListener('click', () => {
  let lastActive = text__resultBlock__window2.getAttribute(
    'data-slide-result-2'
  )

  if (lastActive != slidesAmountResult1) {
    if (lastActive == 1) {
      leftButton__resultBlock__window2.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1

    if (newActive == slidesAmountResult1) {
      rightButton__resultBlock__window2.style.cssText = 'opacity: 30%'
    }

    text__resultBlock__window2.innerHTML = `${newActive} / ${slidesAmountResult1}`
    text__resultBlock__window2.setAttribute('data-slide-result-2', newActive)
    const arr1 = document.querySelectorAll(
      `[data-slide-number-result-2="${lastActive}"]`
    )
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute('data-visible', 'false')
      arr1[i].classList.remove('open')
      arr1[i].classList.add('close')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-result-2="${newActive}"]`
    )
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
      setTimeout(() => arr2[i].classList.add('open'), 50)
    }
    $(`#twentytwentycontainer2${newActive}`).twentytwenty({
      before_label: 'January 2017', // Set a custom before label
      after_label: 'March 2017' // Set a custom after label
    })
  }
})
leftButton__resultBlock__window2.addEventListener('click', () => {
  let lastActive = text__resultBlock__window2.getAttribute(
    'data-slide-result-2'
  )
  if (lastActive != 1) {
    if (lastActive == slidesAmountResult1) {
      rightButton__resultBlock__window2.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      leftButton__resultBlock__window2.style.cssText = 'opacity: 30%'
    }
    const arr1 = document.querySelectorAll(
      `[data-slide-number-result-2="${lastActive}"]`
    )
    text__resultBlock__window2.innerHTML = `${newActive} / ${slidesAmountResult1}`
    text__resultBlock__window2.setAttribute('data-slide-result-2', newActive)
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute('data-visible', 'false')
      arr1[i].classList.remove('open')
      arr1[i].classList.remove('close')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-result-2="${newActive}"]`
    )
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
      setTimeout(() => arr2[i].classList.add('open'), 50)
    }
    $(`#twentytwentycontainer2${newActive}`).twentytwenty({
      before_label: 'January 2017', // Set a custom before label
      after_label: 'March 2017' // Set a custom after label
    })
  }
})
