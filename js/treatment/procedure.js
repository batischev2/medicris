$(function () {
  $('#twentytwentycontainer11').twentytwenty()
  $('#twentytwentycontainer12').twentytwenty()
  $('#twentytwentycontainer21').twentytwenty()
  $('#twentytwentycontainer22').twentytwenty()
})

const procedure1 = document.querySelector(`#procedure1`)
const procedure2 = document.querySelector(`#procedure2`)
const radio1 = document.querySelector(`[data-procedure-radio="1"]`)
const radio2 = document.querySelector(`[data-procedure-radio="2"]`)

procedure1.addEventListener('click', () => {
  radio1.classList.add('filter-2-mob_choosen')
  radio1.classList.remove('filter-2-mob_no')
  radio2.classList.remove('filter-2-mob_choosen')
  radio2.classList.add('filter-2-mob_no')

  let arr2 = document.querySelectorAll(`[data-procedure-2]`)
  for (let i = 0; i < arr2.length; i++) {
    arr2[i].setAttribute('data-procedure-2', 'invisible')
  }
  let arr1 = document.querySelectorAll(`[data-procedure-1]`)
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].setAttribute('data-procedure-1', 'visible')
  }
  $(`#twentytwentycontainer12`).twentytwenty()
  $(`#twentytwentycontainer11`).twentytwenty()
})

procedure2.addEventListener('click', () => {
  radio2.classList.add('filter-2-mob_choosen')
  radio2.classList.remove('filter-2-mob_no')
  radio1.classList.remove('filter-2-mob_choosen')
  radio1.classList.add('filter-2-mob_no')

  let arr1 = document.querySelectorAll(`[data-procedure-1]`)
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].setAttribute('data-procedure-1', 'invisible')
  }
  let arr2 = document.querySelectorAll(`[data-procedure-2]`)
  for (let i = 0; i < arr2.length; i++) {
    arr2[i].setAttribute('data-procedure-2', 'visible')
  }
  $(`#twentytwentycontainer21`).twentytwenty()
  $(`#twentytwentycontainer22`).twentytwenty()
})
