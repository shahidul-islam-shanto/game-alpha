function playHome() {
  playHomeHidden("home-screen");
  playHomeHidden("score-board");
  playGroundHiddenRemove("play-ground");

  // reset value
  setElementValueById("current-score", 0);
  setElementValueById("current-life", 5);

  continuePlay();
}

function continuePlay() {
  const arrayValue = addRandomArray();

  // play button click
  const buttonPlay = document.getElementById("game-value");
  buttonPlay.innerText = arrayValue;
  addBackgroundColor(arrayValue);
}

/**
 * click the key press start
 */
function handleKeyPressById(event) {
  const keyPress = event.key;
  console.log(keyPress);

  // get show game value
  const gameUpdate = document.getElementById("game-value");
  const gameKeyValue = gameUpdate.innerText;
  const gameKeyText = gameKeyValue.toLowerCase();
  console.log(gameKeyText);

  if (keyPress === gameKeyText) {
    // set current value
    const currentScore = getTextElementById("current-score");
    const currentUpdateValue = currentScore + 1;
    setElementValueById("current-score", currentUpdateValue);

    removeBackgroundColor(gameKeyText);
    continuePlay();
  } else {
    // set current value
    const currentScore = getTextElementById("current-life");
    const currentUpdateValue = currentScore - 1;
    setElementValueById("current-life", currentUpdateValue);

    if (currentUpdateValue === 0) {
      gamePlay();
    }
    removeBackgroundColor(gameKeyText);
    continuePlay();
  }
}

// function handleKeyPressById(event) {
//   const keyPrassKey = event.key;

//   //   get the expact keyup
//   const keyAlpha = document.getElementById("game-value");
//   const currentAlpha = keyAlpha.innerText;
//   const alphaCuse = currentAlpha.toLowerCase();

//   //   get a point
//   if (keyPrassKey === alphaCuse) {
//     const currentScore = getTextElementById("current-score");
//     const updateValue = currentScore + 1;
//     setElementValueById("current-score", updateValue);

//     removeBackgroundColor(alphaCuse);
//     continueGame();
//   } else {
//     const currentLife = getTextElementById("current-life");
//     const minusValue = currentLife - 1;
//     setElementValueById("current-life", minusValue);

//     // if (minusValue === 0) {
//     //   gamePlay();
//     // }

//     removeBackgroundColor(alphaCuse);
//     continueGame();
//     // console.log("you loss a point");
//   }
// }
document.addEventListener("keyup", handleKeyPressById);
/**
 * click the key press end
 */

/**
 * final value score board start
 */
function gamePlay() {
  playHomeHidden("play-ground");
  playGroundHiddenRemove("score-board");

  // update final score
  const finalScore = getTextElementById("current-score");
  setElementValueById("final-score", finalScore);

  // remove this background color
  const clearColor = getShowTextElementById("game-value");
  removeBackgroundColor(clearColor);
}
/**
 * final value score board end
 */
