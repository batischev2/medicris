const rf = document.getElementById('feedbackBlock__rightButton')
const tf = document.getElementById('feedbackBlock__text')
const lf = document.getElementById('feedbackBlock__leftButton')
const slidesAmountF = document.querySelectorAll('[data-slide-number]').length
tf.innerHTML = `1 / ${slidesAmountF}`
rf.addEventListener('click', () => {
  let lastActive = tf.getAttribute('data-number')
  if (lastActive != slidesAmountF) {
    if (lastActive == 1) {
      lf.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmountF) {
      rf.style.cssText = 'opacity: 30%'
    }
    tf.setAttribute('data-number', newActive)
    tf.innerHTML = `${newActive} / ${slidesAmountF}`
    let lastActiveElement = document.querySelector(
      `[data-slide-number="${lastActive}"]`
    )
    let newActiveElement = document.querySelector(
      `[data-slide-number="${newActive}"]`
    )
    lastActiveElement.setAttribute('data-visible', 'false')
    lastActiveElement.classList.remove('open')
    newActiveElement.setAttribute('data-visible', 'true')
    setTimeout(() => newActiveElement.classList.add('open'), 50)
  }
})
lf.addEventListener('click', () => {
  let lastActive = tf.getAttribute('data-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmountF) {
      rf.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      lf.style.cssText = 'opacity: 30%'
    }
    tf.setAttribute('data-number', newActive)
    tf.innerHTML = `${newActive} / ${slidesAmountF}`
    let lastActiveElement = document.querySelector(
      `[data-slide-number="${lastActive}"]`
    )
    let newActiveElement = document.querySelector(
      `[data-slide-number="${newActive}"]`
    )
    lastActiveElement.setAttribute('data-visible', 'false')
    lastActiveElement.classList.remove('open')
    newActiveElement.setAttribute('data-visible', 'true')
    setTimeout(() => newActiveElement.classList.add('open'), 50)
  }
})
