

const slidesAmountResult1 = document.querySelectorAll("[data-slide-number-result-1]").length / 2
const r_r_1 = document.getElementById('r_r_1')
const l_r_1 = document.getElementById('l_r_1')
const t_r_1 = document.getElementById('t_r_1')
t_r_1.innerHTML= `1 / ${slidesAmountResult1}`
r_r_1.addEventListener("click", () => {
  let lastActive = t_r_1.getAttribute('data-slide-result-1')
  
  if (lastActive != slidesAmountResult1) { 
    if (lastActive == 1) {
      l_r_1.style.cssText = "opacity: 100%"
    }
    let newActive = Number(lastActive) + 1
    
    if (newActive == slidesAmountResult1) {
      r_r_1.style.cssText = "opacity: 30%"
    }
    
    t_r_1.innerHTML = `${newActive} / ${slidesAmountResult1}`
    t_r_1.setAttribute('data-slide-result-1', newActive)
    const arr1 = document.querySelectorAll(`[data-slide-number-result-1="${lastActive}"]`)
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute("data-visible", "false")
    }
    const arr2 = document.querySelectorAll(`[data-slide-number-result-1="${newActive}"]`)
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute("data-visible", "true")
    }
    
  }
})
l_r_1.addEventListener("click", () => {
  let lastActive = t_r_1.getAttribute('data-slide-result-1')
  if (lastActive != 1) {
    if (lastActive == slidesAmountResult1) {
      r_r_1.style.cssText = "opacity: 100%"
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      l_r_1.style.cssText = "opacity: 30%"
    }
    const arr1 = document.querySelectorAll(`[data-slide-number-result-1="${lastActive}"]`)
    t_r_1.innerHTML = `${newActive} / ${slidesAmountResult1}`
    t_r_1.setAttribute('data-slide-result-1', newActive)
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute("data-visible", "false")
    }
    const arr2 = document.querySelectorAll(`[data-slide-number-result-1="${newActive}"]`)
    for (let i = 0; i < arr2.length; i++) {
      arr2[i].setAttribute("data-visible", "true")
    }
  }
  
})