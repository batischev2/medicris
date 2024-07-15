const $ddbtn_1 = document.getElementById("ddbtn-1")
const $ddbtn_2 = document.getElementById("ddbtn-2")
$ddbtn_1.addEventListener('click', () => {
  const img = document.querySelector("#ddbtn-1 > .footer__navimg")
  if ($ddbtn_1.classList.contains('closed')) {
    img.style.cssText = `
      transform: rotate(180deg) scale(.5);
    `
    document.getElementById('ddbody-1').style.cssText = `display: block`
    $ddbtn_1.classList.remove('closed')
  } else {
    img.style.cssText = `
      transorm: rotate(180deg)
    `
    document.getElementById('ddbody-1').style.cssText = `display: none`
    $ddbtn_1.classList.add('closed')
  }
})
$ddbtn_2.addEventListener('click', () => {
  const img = document.querySelector("#ddbtn-2 > .footer__navimg")
  if ($ddbtn_2.classList.contains('closed')) {
    img.style.cssText = `
      transform: rotate(180deg) scale(.5);
    `
    document.getElementById('ddbody-2').style.cssText = `display: block`
    $ddbtn_2.classList.remove('closed')
  } else {
    img.style.cssText = `
      transorm: rotate(180deg)
    `
    document.getElementById('ddbody-2').style.cssText = `display: none`
    $ddbtn_2.classList.add('closed')
  }
})