const clockContainer = document.querySelector(".js-clock");

const clockTitle = clockContainer.querySelector("h1");

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', (e) => {
  const real = confirm('정말 초기화하시겠어요?');
  if (real) {
    localStorage.clear();
    window.location.reload();
  } else {
    return;
  }
});


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
    
}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();






