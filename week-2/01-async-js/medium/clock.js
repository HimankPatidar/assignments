function displayCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  
    console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
  }
  
  // Display current time immediately
  displayCurrentTime();
  
  // Set up interval to display time every second using setInterval
  const intervalTimer = setInterval(displayCurrentTime, 1000);
  
  // Set up a timeout to stop the interval after 10 seconds
  const timeoutTimer = setTimeout(() => {
    clearInterval(intervalTimer);
    console.log('Interval stopped after 10 seconds.');
  }, 10000);
  