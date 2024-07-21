const r = document.getElementById("r")
const t = document.getElementById("t") 
const l = document.getElementById("l")
l.style.cssText = `
  opacity: 30%;
  transform: rotate(180deg);
  ` 
const slidesAmount = document.querySelectorAll("[data-slide-number]").length
t.innerHTML = `1/${slidesAmount}` 
r.addEventListener("click", () => {
  let lastActive = t.getAttribute('data-number')
  if (lastActive != slidesAmount) { 
    if (lastActive == 1) {
      l.style.cssText = "opacity: 100%"
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmount) {
      r.style.cssText = "opacity: 30%"
    }
    t.setAttribute('data-number', newActive)
    t.innerHTML = `${newActive}/${slidesAmount}`
    document.querySelector(`[data-slide-number="${lastActive}"]`).setAttribute("data-visible", "false")
    document.querySelector(`[data-slide-number="${newActive}"]`).setAttribute("data-visible", "true")
  }
  
})
l.addEventListener("click", () => {
  let lastActive = t.getAttribute('data-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmount) {
      r.style.cssText = "opacity: 100%"
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      l.style.cssText = "opacity: 30%"
    }
    t.setAttribute('data-number', newActive)
    t.innerHTML = `${newActive}/${slidesAmount}`
    document.querySelector(`[data-slide-number="${lastActive}"]`).setAttribute("data-visible", "false")
    document.querySelector(`[data-slide-number="${newActive}"]`).setAttribute("data-visible", "true")
  }
  
})