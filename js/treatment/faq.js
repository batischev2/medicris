const faq1 = document.getElementById('faq1')
const faqBody1 = document.getElementById('faq-body1')
const faq2 = document.getElementById('faq2')
const faqBody2 = document.getElementById('faq-body2')
const faq3 = document.getElementById('faq3')
const faqBody3 = document.getElementById('faq-body3')
const faq4 = document.getElementById('faq4')
const faqBody4 = document.getElementById('faq-body4')
const faq5 = document.getElementById('faq5')
const faqBody5 = document.getElementById('faq-body5')
const faq6 = document.getElementById('faq6')
const faqBody6 = document.getElementById('faq-body6')

faq1.addEventListener("click", () => {
  if (faq1.classList.contains('closed')) {
    
    faqBody1.style.cssText = `display: block`
    faq1.classList.remove('closed')
    faq1.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody1.style.cssText = `display: none`
    faq1.classList.add('closed')
    faq1.style.cssText = `transorm: rotate(180deg)`
  }
})
faq2.addEventListener("click", () => {
  if (faq2.classList.contains('closed')) {
    
    faqBody2.style.cssText = `display: block`
    faq2.classList.remove('closed')
    faq2.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody2.style.cssText = `display: none`
    faq2.classList.add('closed')
    faq2.style.cssText = `transorm: rotate(180deg)`
  }
})
faq3.addEventListener("click", () => {
  if (faq3.classList.contains('closed')) {
    
    faqBody3.style.cssText = `display: block`
    faq3.classList.remove('closed')
    faq3.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody3.style.cssText = `display: none`
    faq3.classList.add('closed')
    faq3.style.cssText = `transorm: rotate(180deg)`
  }
})
faq4.addEventListener("click", () => {
  if (faq4.classList.contains('closed')) {
    
    faqBody4.style.cssText = `display: block`
    faq4.classList.remove('closed')
    faq4.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody4.style.cssText = `display: none`
    faq4.classList.add('closed')
    faq4.style.cssText = `transorm: rotate(180deg)`
  }
})
faq5.addEventListener("click", () => {
  if (faq5.classList.contains('closed')) {
    
    faqBody5.style.cssText = `display: block`
    faq5.classList.remove('closed')
    faq5.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody5.style.cssText = `display: none`
    faq5.classList.add('closed')
    faq5.style.cssText = `transorm: rotate(180deg)`
  }
})
faq6.addEventListener("click", () => {
  if (faq6.classList.contains('closed')) {
    
    faqBody6.style.cssText = `display: block`
    faq6.classList.remove('closed')
    faq6.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody6.style.cssText = `display: none`
    faq6.classList.add('closed')
    faq6.style.cssText = `transorm: rotate(180deg)`
  }
})