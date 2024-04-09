function updateClock() {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  