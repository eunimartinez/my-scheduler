function todayFunction() {
  console.log("runing");
  let today = dayjs();
  $("#currentDay").text(today.format("MM-DD-YYYY  HH:MM"));
  var currentTime = today.format("HH");

  for (let i = 0; i < timeBlocks.length; i++) {
    timeBlocks[i].removeClass("future past present");

    if (currentTime > timeBlocks[i][0].dataset.hour) {
      timeBlocks[i][0].classList.add("past");
    } else if (currentTime == timeBlocks[i][0].dataset.hour) {
      timeBlocks[i][0].classList.add("present");
    } else {
      timeBlocks[i][0].classList.add("future");
    }
  }
}

const timeBlock8hour = $("#hour-8");
const timeBlock9hour = $("#hour-9");
const timeBlock10hour = $("#hour-10");
const timeBlock11hour = $("#hour-11");
const timeBlock12hour = $("#hour-12");
const timeBlock13hour = $("#hour-13");
const timeBlock14hour = $("#hour-14");
const timeBlock15hour = $("#hour-15");
const timeBlock16hour = $("#hour-16");
const timeBlock17hour = $("#hour-17");
const timeBlock18hour = $("#hour-18");
const saveBtn = $(".saveBtn");

const timeBlocks = [
  timeBlock8hour,
  timeBlock9hour,
  timeBlock10hour,
  timeBlock11hour,
  timeBlock12hour,
  timeBlock13hour,
  timeBlock14hour,
  timeBlock15hour,
  timeBlock16hour,
  timeBlock17hour,
  timeBlock18hour,
];
loadSchedule();
todayFunction();

function loadSchedule() {
  for (let i = 0; i < timeBlocks.length; i++) {
    timeBlocks[i].children("textarea")[0].innerText = localStorage.getItem(
      "time block" + timeBlocks[i][0].dataset.hour
    );
  }
}

function handleSave(event) {
  event.preventDefault();

  var clickedBtn = $(event.currentTarget);
  var parentElement = clickedBtn.parent().data("hour");
  var siblingElement = clickedBtn.siblings("textarea").val();
  console.log(siblingElement);

  localStorage.setItem("time block" + parentElement, siblingElement);
}

saveBtn.on("click", handleSave);
