// '2022-06-21T00:00:00.000-07:00'
const updateTimer = (isoDate, timerInfo) => {
  const date = new Date(isoDate);

    const timeTillDate = date - Date.now();
    const seconds = Math.floor(timeTillDate / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    timerInfo.seconds = seconds % 60;
    timerInfo.minutes = minutes % 60;
    timerInfo.hours = hours;  
  
    
  }
    
  const timerInfo = {hours: 0, minutes: 0, seconds: 0}
  updateTimer('2022-06-22T00:00:00.000-07:00', timerInfo)
  console.log(timerInfo)
  