/**
 * play home and play ground hidden and show start
 */
function playHomeHidden(elementId) {
  const playHomeHid = document.getElementById(elementId);
  playHomeHid.classList.add("hidden");
}
function playGroundHiddenRemove(elementId) {
  const playGroundShow = document.getElementById(elementId);
  playGroundShow.classList.remove("hidden");
}
/**
 * play home and play ground hidden and show start
 */
/**
 * string a array convert start
 */
function addRandomArray() {
  // get a random string
  const randomArray = "abcdefghijklmnopqrstuvwxyz";
  const arrayRan = randomArray.split("");

  //   get a random number
  const randomNum = Math.random() * 25;
  const roundNum = Math.round(randomNum);

  const randomList = arrayRan[roundNum];
  return randomList;
}

/**
 * string a array convert end
 */

/**
 * add background color start
 */
function addBackgroundColor(elementId) {
  const backgroundColorItem = document.getElementById(elementId);
  backgroundColorItem.classList.add("bg-orange-500");
}

function removeBackgroundColor(elementId) {
  const backgroundColorItemRemove = document.getElementById(elementId);
  backgroundColorItemRemove.classList.remove("bg-orange-500");
}

/**
 *  * add background color end
 */
/**
 * get current value start
 */
function getTextElementById(elementId) {
  const current = document.getElementById(elementId);
  const currentText = current.innerText;
  const currentPars = parseInt(currentText);
  return currentPars;
}
/**
 * get current value end
 */

/**
 * set current value end
 */
function setElementValueById(elementId, value) {
  const setElement = document.getElementById(elementId);
  setElement.innerText = value;
}
/**
 * set current value end
 */

/**
 * final show function start
 */
function getShowTextElementById(elementId) {
  const textShow = document.getElementById(elementId);
  const textList = textShow.innerText;
  return textList;
}
/**
 * final show function end
 */
