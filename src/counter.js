// declaring variables

let count_inc;
let count_dec;
let count;

let time_start;
let time_stop;
let time;

let reset;

let inc; //for storins setinterval in timer

// initializing values

count_inc = document.querySelector("#increase");
count_dec = document.querySelector("#decrease");
count = document.querySelector(".display.counter");
count_reset = document.querySelector(".counter .reset");

time_start = document.querySelector("#start");
time_stop = document.querySelector("#stop");
time = document.querySelector(".display.stopwatch");
time_reset = document.querySelector(".stopwatch .reset");

// setting width of timer buttons, start and stop to that of
// increase and decrease, but decreasing 30px from it
// (2 x (10px padding & 5px border)) so that size remains same
// as of increase and decrease, Since, start & stop
// are set to 'content-box' in css stylesheet for same button
// pressing affect as that of increase and decrease

time_start.style.width = `${
  Number(getComputedStyle(count_inc).width.slice(0, -2)) - 30
}px`;

time_stop.style.width = `${
  Number(getComputedStyle(count_dec).width.slice(0, -2)) - 30
}px`;

// COUNTER

// --- button increase & decrease ---

count_inc.onclick = () => {
  let value = Number(count.innerHTML);
  count.innerHTML = ++value;
};

count_dec.onclick = () => {
  let value = Number(count.innerHTML);
  count.innerHTML = --value;
};

// --- button start & stop ---

time_start.onclick = () => {
  let value = Number(time.innerHTML);
  inc = setInterval(() => (time.innerHTML = ++value), 1000);
  time_start.setAttribute("disabled", "");
};

time_stop.onclick = () => {
  clearInterval(inc);
  time_start.removeAttribute("disabled");
};

// --- button reset ---

count_reset.onclick = () => {
  count.innerHTML = "0";
};

time_reset.onclick = () => {
  clearInterval(inc);
  time.innerHTML = "0";
  time_start.removeAttribute("disabled");
};
