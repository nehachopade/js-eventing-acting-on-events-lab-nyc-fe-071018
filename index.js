const element = document.getElementById('dodger');

function moveDodgerRight(){
  document.addEventListener('keydown', (event) => {
  if (event.which===39) {
    let previousRight = element.style.left
    console.log(previousRight)
      let previousRightNumber =parseInt(previousRight.replace('px',''),10)
      if (previousRightNumber < 360) {
          let newRightNumber=(previousRightNumber + 1) + "px"
          element.style.left = newRightNumber;
  }
}})
}

moveDodgerRight();