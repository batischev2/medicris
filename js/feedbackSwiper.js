const rf = document.getElementById("r_f") 
const tf = document.getElementById("t_f") 
const lf = document.getElementById("l_f") 
const slidesAmountF = document.querySelectorAll("[data-slide-number]").length
tf.innerHTML = `1 / ${slidesAmountF}` 
rf.addEventListener("click", () => {
  let lastActive = tf.getAttribute('data-number')
  if (lastActive != slidesAmountF) { 
    if (lastActive == 1) {
      // lf.setAttribute('src', 'media/review/Arrow_black.svg')
      lf.style.cssText = "opacity: 100%"
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmountF) {
      rf.style.cssText = "opacity: 30%"
    }
    tf.setAttribute('data-number', newActive)
    tf.innerHTML = `${newActive} / ${slidesAmountF}`
    document.querySelector(`[data-slide-number="${lastActive}"]`).setAttribute("data-visible", "false")
    document.querySelector(`[data-slide-number="${newActive}"]`).setAttribute("data-visible", "true")
  }
  
})
lf.addEventListener("click", () => {
  let lastActive = tf.getAttribute('data-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmountF) {
      rf.style.cssText = "opacity: 100%"
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      lf.style.cssText = "opacity: 30%"
    }
    tf.setAttribute('data-number', newActive)
    tf.innerHTML = `${newActive} / ${slidesAmountF}`
    document.querySelector(`[data-slide-number="${lastActive}"]`).setAttribute("data-visible", "false")
    document.querySelector(`[data-slide-number="${newActive}"]`).setAttribute("data-visible", "true")
  }
  
})