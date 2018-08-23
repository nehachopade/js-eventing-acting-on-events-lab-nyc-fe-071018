const element = document.getElementById('dodger');

document.addEventListener('keydown', (event) => {
  console.log(event)
  if (event.which===37) {
      let previousLeft = element.style.left
      let previousLeftNumber =parseInt(previousLeft.replace('px',''),10)
      if (previousLeftNumber >0) {
          let newLeftNumber=(previousLeftNumber -1) + "px"
          element.style.left = newLeftNumber
      }
}})