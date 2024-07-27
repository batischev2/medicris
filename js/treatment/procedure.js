const procedure1 =  document.querySelector(`#procedure1`)
const procedure2 =  document.querySelector(`#procedure2`)
const radio1 = document.querySelector(`[data-procedure-radio="1"]`)
const radio2 = document.querySelector(`[data-procedure-radio="2"]`)

procedure1.addEventListener("click", () => {
  radio1.classList.add('FILTER-2-MOB_choosen')
  radio1.classList.remove('FILTER-2-MOB_no')
  radio2.classList.remove('FILTER-2-MOB_choosen')
  radio2.classList.add('FILTER-2-MOB_no')

  
  let arr2 = document.querySelectorAll(`[data-procedure-2]`)
  for (let i = 0; i < arr2.length; i++) {
    arr2[i].setAttribute('data-procedure-2', 'invisible')
  }
  let arr1 = document.querySelectorAll(`[data-procedure-1]`)
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].setAttribute('data-procedure-1', 'visible')
  }
  
})

procedure2.addEventListener("click", () => {
  radio2.classList.add('FILTER-2-MOB_choosen')
  radio2.classList.remove('FILTER-2-MOB_no')
  radio1.classList.remove('FILTER-2-MOB_choosen')
  radio1.classList.add('FILTER-2-MOB_no')

  let arr1 = document.querySelectorAll(`[data-procedure-1]`)
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].setAttribute('data-procedure-1', 'invisible')
  }
  let arr2 = document.querySelectorAll(`[data-procedure-2]`)
  for (let i = 0; i < arr2.length; i++) {
    arr2[i].setAttribute('data-procedure-2', 'visible')
  }
})