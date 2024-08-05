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

const faq11 = document.getElementById('faq11')
const faqBody11 = document.getElementById('faq-body11')
const faq12 = document.getElementById('faq12')
const faqBody12 = document.getElementById('faq-body12')
const faq13 = document.getElementById('faq13')
const faqBody13 = document.getElementById('faq-body13')
const faq14 = document.getElementById('faq14')
const faqBody14 = document.getElementById('faq-body14')
const faq15 = document.getElementById('faq15')
const faqBody15 = document.getElementById('faq-body15')
const faq16 = document.getElementById('faq16')
const faqBody16 = document.getElementById('faq-body16')
const faq17 = document.getElementById('faq17')
const faqBody17 = document.getElementById('faq-body17')

const f = document.getElementById('f')
const b = document.getElementById('b')
const counter = document.getElementById('counter')

faq1.addEventListener('click', () => {
  if (faq1.lastElementChild.classList.contains('closed')) {
    faqBody1.style.cssText = `display: block`
    faq1.lastElementChild.classList.remove('closed')
    faq1.lastElementChild.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody1.style.cssText = `display: none`
    faq1.lastElementChild.classList.add('closed')
    faq1.lastElementChild.style.cssText = `transorm: rotate(180deg)`
  }
})
faq2.addEventListener('click', () => {
  if (faq2.lastElementChild.classList.contains('closed')) {
    faqBody2.style.cssText = `display: block`
    faq2.lastElementChild.classList.remove('closed')
    faq2.lastElementChild.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody2.style.cssText = `display: none`
    faq2.lastElementChild.classList.add('closed')
    faq2.lastElementChild.style.cssText = `transorm: rotate(180deg)`
  }
})
faq3.addEventListener('click', () => {
  if (faq3.lastElementChild.classList.contains('closed')) {
    faqBody3.style.cssText = `display: block`
    faq3.lastElementChild.classList.remove('closed')
    faq3.lastElementChild.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody3.style.cssText = `display: none`
    faq3.lastElementChild.classList.add('closed')
    faq3.lastElementChild.style.cssText = `transorm: rotate(180deg)`
  }
})
faq4.addEventListener('click', () => {
  if (faq4.lastElementChild.classList.contains('closed')) {
    faqBody4.style.cssText = `display: block`
    faq4.lastElementChild.classList.remove('closed')
    faq4.lastElementChild.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody4.style.cssText = `display: none`
    faq4.lastElementChild.classList.add('closed')
    faq4.lastElementChild.style.cssText = `transorm: rotate(180deg)`
  }
})
faq5.addEventListener('click', () => {
  if (faq5.lastElementChild.classList.contains('closed')) {
    faqBody5.style.cssText = `display: block`
    faq5.lastElementChild.classList.remove('closed')
    faq5.lastElementChild.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody5.style.cssText = `display: none`
    faq5.lastElementChild.classList.add('closed')
    faq5.lastElementChild.style.cssText = `transorm: rotate(180deg)`
  }
})
faq6.addEventListener('click', () => {
  if (faq6.lastElementChild.classList.contains('closed')) {
    faqBody6.style.cssText = `display: block`
    faq6.lastElementChild.classList.remove('closed')
    faq6.lastElementChild.style.cssText = `transform: rotate(180deg)`
  } else {
    faqBody6.style.cssText = `display: none`
    faq6.lastElementChild.classList.add('closed')
    faq6.lastElementChild.style.cssText = `transorm: rotate(180deg)`
  }
})

faq11.addEventListener('click', () => {
  if (faq11.lastElementChild.classList.contains('closed')) {
    faqBody11.style.cssText = `display: block`
    faq11.lastElementChild.classList.remove('closed')
    faq11.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody11.style.cssText = `display: none`
    faq11.lastElementChild.classList.add('closed')
    faq11.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})
faq12.addEventListener('click', () => {
  if (faq12.lastElementChild.classList.contains('closed')) {
    faqBody12.style.cssText = `display: block`
    faq12.lastElementChild.classList.remove('closed')
    faq12.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody12.style.cssText = `display: none`
    faq12.lastElementChild.classList.add('closed')
    faq12.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})
faq13.addEventListener('click', () => {
  if (faq13.lastElementChild.classList.contains('closed')) {
    faqBody13.style.cssText = `display: block`
    faq13.lastElementChild.classList.remove('closed')
    faq13.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody13.style.cssText = `display: none`
    faq13.lastElementChild.classList.add('closed')
    faq13.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})
faq14.addEventListener('click', () => {
  if (faq14.lastElementChild.classList.contains('closed')) {
    faqBody14.style.cssText = `display: block`
    faq14.lastElementChild.classList.remove('closed')
    faq14.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody14.style.cssText = `display: none`
    faq14.lastElementChild.classList.add('closed')
    faq14.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})
faq15.addEventListener('click', () => {
  if (faq15.lastElementChild.classList.contains('closed')) {
    faqBody15.style.cssText = `display: block`
    faq15.lastElementChild.classList.remove('closed')
    faq15.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody15.style.cssText = `display: none`
    faq15.lastElementChild.classList.add('closed')
    faq15.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})
faq16.addEventListener('click', () => {
  if (faq16.lastElementChild.classList.contains('closed')) {
    faqBody16.style.cssText = `display: block`
    faq16.lastElementChild.classList.remove('closed')
    faq16.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody16.style.cssText = `display: none`
    faq16.lastElementChild.classList.add('closed')
    faq16.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})
faq17.addEventListener('click', () => {
  if (faq17.lastElementChild.classList.contains('closed')) {
    faqBody17.style.cssText = `display: block`
    faq17.lastElementChild.classList.remove('closed')
    faq17.lastElementChild.setAttribute('src', 'media/treatment/faq/minus.svg')
  } else {
    faqBody17.style.cssText = `display: none`
    faq17.lastElementChild.classList.add('closed')
    faq17.lastElementChild.setAttribute('src', 'media/treatment/faq/plus.svg')
  }
})

const slidesAmountFAQ =
  document.querySelectorAll('[data-slide-number-faq]').length / 2

f.addEventListener('click', () => {
  let lastActive = counter.getAttribute('data-faq-number')
  if (lastActive != slidesAmountFAQ) {
    if (lastActive == 1) {
      b.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) + 1
    if (newActive == slidesAmountFAQ) {
      f.style.cssText = 'opacity: 30%'
    }
    counter.setAttribute('data-faq-number', newActive)
    const arr1 = document.querySelectorAll(
      `[data-slide-number-faq="${lastActive}"]`
    )
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute('data-visible', 'false')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-faq="${newActive}"]`
    )
    for (let i = 0; i < arr1.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
    }
  }
})
b.addEventListener('click', () => {
  let lastActive = counter.getAttribute('data-faq-number')
  if (lastActive != 1) {
    if (lastActive == slidesAmountFAQ) {
      f.style.cssText = 'opacity: 100%'
    }
    let newActive = Number(lastActive) - 1
    if (newActive == 1) {
      b.style.cssText = 'opacity: 30%'
    }
    const arr1 = document.querySelectorAll(
      `[data-slide-number-faq="${lastActive}"]`
    )
    counter.setAttribute('data-faq-number', newActive)
    for (let i = 0; i < arr1.length; i++) {
      arr1[i].setAttribute('data-visible', 'false')
    }
    const arr2 = document.querySelectorAll(
      `[data-slide-number-faq="${newActive}"]`
    )
    for (let i = 0; i < arr1.length; i++) {
      arr2[i].setAttribute('data-visible', 'true')
    }
  }
})
