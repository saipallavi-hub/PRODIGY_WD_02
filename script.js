let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
  const display = document.getElementById('display');
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    isRunning = true;
  }
}

function pauseStopwatch() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${document.getElementById('laps').children.length + 1}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
  }
}
