function formatTimeWithLeadingZero(number) {
  return number < 10 ? `0${number}` : number;
}
let flashSaleEndDate = "2023-12-01";
let flashSaleEndTime = "22:14:00";
let flashSaleDeadline = new Date(
  `${flashSaleEndDate} ${flashSaleEndTime}`
).getTime();

function updateFlashSaleTimer() {
  let now = new Date().getTime();
  let flashSaleTotal = flashSaleDeadline - now;

  if (flashSaleTotal < 0) {
    document.querySelectorAll(".flashSaleTitle").forEach((element) => {
      element.innerHTML = "Sale Ended";
    });
    document.querySelectorAll(".timerDiv").forEach((element) => {
      element.innerHTML = `
                <div>
                    <div class="countDown" id="hour2">00</div>
                    <div class="smallText">H :</div>
                </div>
                <div>
                    <div class="countDown" id="min2">00</div>
                    <div class="smallText">M :</div>
                </div>
                <div>
                    <div class="countDown" id="sec2">00</div>
                    <div class="smallText">S</div>
                </div>
            `;
    });
    return;
  }

  let flashSaleHours = Math.floor(
    (flashSaleTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let flashSaleMinutes = Math.floor(
    (flashSaleTotal % (1000 * 60 * 60)) / (1000 * 60)
  );
  let flashSaleSeconds = Math.floor((flashSaleTotal % (1000 * 60)) / 1000);

  let formattedFlashSaleHours = formatTimeWithLeadingZero(flashSaleHours);
  let formattedFlashSaleMinutes = formatTimeWithLeadingZero(flashSaleMinutes);
  let formattedFlashSaleSeconds = formatTimeWithLeadingZero(flashSaleSeconds);

  document.querySelectorAll(".timerDiv").forEach((element) => {
    element.innerHTML = `
            <div>
                <div class="countDown" id="hour2">${formattedFlashSaleHours}</div>
                <div class="smallText">H :</div>
            </div>
            <div>
                <div class="countDown" id="min2">${formattedFlashSaleMinutes}</div>
                <div class="smallText">M :</div>
            </div>
            <div>
                <div class="countDown" id="sec2">${formattedFlashSaleSeconds}</div>
                <div class="smallText">S </div>
            </div>
        `;
  });
}
updateFlashSaleTimer();
setInterval(updateFlashSaleTimer, 1000);
