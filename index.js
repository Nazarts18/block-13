const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  

  const monthDays = document.querySelector(".list_3_1");
  document.querySelector(".date2 span").innerHTML = new Date().toLocaleString('en', {       
    month: 'long',
    year: 'numeric'       
  });

  document.querySelector(".data").innerHTML = new Date().toLocaleString('en', {       
    month: 'long',
    year: 'numeric',
    day: 'numeric'       
  });

 

  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1,0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="day">${prevLastDay - x+1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="col">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let n = 1; n <= nextDays; n++) {
    days += `<div class="day">${n}</div>`;
    monthDays.innerHTML = days;
  }
};


renderCalendar();