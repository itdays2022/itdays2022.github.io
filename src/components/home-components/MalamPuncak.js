import { useState, useRef, useEffect } from "react";
import malampuncak from "../../images/Malam-Puncak-GS.jpg";
import "./malam-puncak.css";

function MalamPuncak() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = (prps) => {
    const countdownDate = new Date("Nov 5, 2022").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days < 10 ? "0" + days : days);
        setTimerHours(hours < 10 ? "0" + hours : hours);
        setTimerMinutes(minutes < 10 ? "0" + minutes : minutes);
        setTimerSeconds(seconds < 10 ? "0" + seconds : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <section className="malam-puncak" id="malam-puncak">
      <div className="container container-lg">
        <div className="row justify-content-md-center justify-content-center">
          <div className="col-md-10 d-flex align-items-center justify-content-center flex-column">
            <img src={malampuncak} className="img img-item img-fluid w-100 h-100" alt="malam-puncak" />

            <div className="countdown">
              <div>
                <p className="number">
                  {timerDays}
                  <span>D</span>
                </p>
              </div>

              <div>
                <p className="number">
                  {timerHours}
                  <span>H</span>
                </p>
              </div>

              <div>
                <p className="number">
                  {timerMinutes}
                  <span>M</span>
                </p>
              </div>

              <div>
                <p className="number">
                  {timerSeconds}
                  <span>S</span>
                </p>
              </div>
            </div>
            <div className="btn-get-ticket" id="btn-get-ticket">
              <a href="https://yesplis.com/event/it-days-2022" target="_blank" rel="noreferrer">
                Get Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MalamPuncak;
