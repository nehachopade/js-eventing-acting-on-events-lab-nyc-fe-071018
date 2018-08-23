const element = document.getElementById('dodger');

document.addEventListener('keydown', (event) => {
  console.log(event)
  if (event.which===37) {
      let previousLeft = element.style.left
      if (previousLeft >0) {
          let previousLeftNumber =parseInt(previousLeft.replace('px',''),10)
          let newLeftNumber=(previousLeftNumber -1) + "px"
          element.style.left = newLeftNumber
  }
})
