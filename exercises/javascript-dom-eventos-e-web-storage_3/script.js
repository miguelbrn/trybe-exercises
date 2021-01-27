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
    if (dezDay == 24 || dezDay == 31) {
        dezDayItem.className = "day holiday"
    }else if (dezDay == 25) {
      dezDayItem.className = "day holiday friday"
    }else if (dezDay == 4 || dezDay == 11 || dezDay == 18 || dezDay == 25) {
        dezDayItem.className = "day friday"
    }
  }

  //Exercicio 2
  function holidayButton (str) {
  let buttonHoliday = document.createElement("BUTTON");
  let buttonsContainer = document.querySelector('.buttons-container')
  buttonHoliday.innerText = str;
  buttonHoliday.id = 'btn-holiday';
  buttonsContainer.appendChild(buttonHoliday)
  }

  holidayButton("Feriados")
  //Exercicio 3

  function changeBgColor() {
    let holidayButton = document.getElementById('btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let backgroundColor = "rgb(238,238,238)";
    let newBackgroundColor = "green";

    holidayButton.addEventListener('click', function () {

        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor == newBackgroundColor) {
                holidays[index].style.backgroundColor = backgroundColor;
            } else {
                holidays[index].style.backgroundColor = newBackgroundColor;
            }
        }
    });
}
changeBgColor();
  
//Exercicio 4

  function createsFridayButton(friday) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.id = newButtonID;
    newButton.innerHTML = friday;
    buttonsContainer.appendChild(newButton);
}
createsFridayButton('Sexta-Feira');

  //Exercicio 5

  function changeFridayText(theFridays) {

    let fridayButton = document.getElementById('btn-friday');
    let fridays = document.querySelectorAll('.friday');

    fridayButton.addEventListener('click', function () {
          for (let index = 0; index < fridays.length; index += 1) {

            if (fridays[index].innerText != 'Sexta-feira') {
                fridays[index].innerText = 'Sexta-feira';
            } else {
                fridays[index].innerText = theFridays[index];
            }
        }
    })
}
  let theFridays = [ 4, 11, 18, 25 ];
  changeFridayText(theFridays); 

//Exercicio 6
  
  function mouseOver() {
    let day = document.getElementById('days');

    day.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '40px';
      event.target.style.fontWeight = 'bold';
    })
  };
  function mouseOut() {
    let day = document.getElementById('days');

    day.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  mouseOver();
  mouseOut();

  //Exercício 7

  function addTask (tasks) {
    let myTasks = document.querySelector('.my-tasks');
    let task = document.createElement('span');
    task.innerHTML = tasks;
    myTasks.appendChild(task);
  }

  addTask('Estudar')

  //Exercício 8

  function addSubtitle (color) {
    let cor = document.createElement('div');
    cor.className = 'task';
    cor.style.backgroundColor = color;
    document.querySelector('.my-tasks').appendChild(cor)
  }

  addSubtitle('red')

  //Exercício 9