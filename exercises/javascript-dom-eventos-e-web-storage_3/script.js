function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < dezDaysList.length; index += 1) {
      const dezDay = dezDaysList[index];
      const dezDayItem = document.createElement('li');
      dezDayItem.className = 'day';
      dezDayItem.innerHTML = dezDay;
      document.querySelector('#days').appendChild(dezDayItem)
    if (dezDay == 24 || dezDay == 25 || dezDay == 31) {
        dezDayItem.className = "day holiday"
    }

    if (dezDay == 4 || dezDay == 11 || dezDay == 18 || dezDay == 25) {
        dezDayItem.className = "day friday"
    }
  }

  //Exercicio 2

  let buttonHoliday = document.createElement("BUTTON");
  buttonHoliday.innerText = "Feriados";
  buttonHoliday.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(buttonHoliday)

  //Exercicio 3

  buttonHoliday.addEventListener('click', function () {
    let holidayDay = document.querySelectorAll('.day')
    holidayDay.style.backgroundColor = 'blue'
  })