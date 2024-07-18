const calculateAverage = readings => {
    const sum = readings.reduce((acc, val) => acc + val, 0);
    const avg = sum / readings.length;
    return {
      average: Number(avg.toFixed(2)),
      isSafe: avg >= 19.5 && avg <= 23.5
    };
  };
  
  const calculateAndDisplay = () => {
    const readings = document.getElementById('oxygenReadings').value
      .split(',')
      .map(Number)
      .filter(x => !isNaN(x));
  
    const resultElement = document.getElementById('result');
    
    if (readings.length === 0) {
      resultElement.textContent = "Please enter valid oxygen readings.";
      resultElement.style.color = '#ff0000';
      return;
    }
  
    const result = calculateAverage(readings);
    
    const messageLines = [
      `The average oxygen level is ${result.average}%.`,
      `Oxygen level is ${result.isSafe ? 'safe' : 'not safe'}.`
    ];
  
    resultElement.innerHTML = '';
    messageLines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      resultElement.appendChild(p);
    });
  
    resultElement.style.color = result.isSafe ? '#00ff00' : '#ff0000';
  };
  
  document.getElementById('calculateButton').addEventListener('click', calculateAndDisplay);
  
  document.getElementById('oxygenReadings').value = 
    "19.45,23.87,20.52,20.73,18.65,19.77,22.82,24.74,20.03,25.49,19.12,23.09,19.56,24.70,20.30,24.06,25.37,25.43,23.76,18.67,25.11,21.63,18.88,18.87,20.23,21.81,25.42,21.76,23.22,21.27,20.04,19.00,24.65,22.14,24.72,19.36,22.35,23.45,23.39,23.06,19.05,21.03,21.77,25.30,23.42,24.02,23.20,21.15,24.52,20.78";