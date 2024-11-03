import "./timer.css";
import { useState, useRef, useEffect } from "react";

export default function Timer() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionLabel, setSessionLabel] = useState("Session");
  const [buttonLabel, setButtonLabel] = useState("Start");
  const [mins, setMins] = useState(25);
  const [sec, setSec] = useState(0);
  const [time, setTime] = useState(null);
  const alarm = useRef(null);

  const playAlarm = () => {
    if (alarm.current) {
      alarm.current?.play().catch((error) => {
        console.log("audio error", error);
      });
    }
  };

  const reset = () => {
    alarm.current?.load();
    alarm.current?.pause();
    clearInterval(time);
    setBreakLength(5);
    setSessionLength(25);
    setSessionLabel("Session");
    setButtonLabel("Start");
    setMins(25);
    setSec(0);
    setTime(null);
  };

  const decreaseBreak = () => {
    if (buttonLabel === "Stop" || breakLength <= 1) return;
    clearInterval(time);
    setBreakLength(breakLength - 1);
    setSessionLabel("Session");
    setButtonLabel("Start");
    setMins(sessionLength);
    setTime(null);
    setSec(0);
  };

  const increaseBreak = () => {
    if (buttonLabel === "Stop" || breakLength >= 60) return;
    clearInterval(time);
    setBreakLength(breakLength + 1);
    setSessionLabel("Session");
    setButtonLabel("Start");
    setMins(sessionLength);
    setSec(0);
    setTime(null);
  };

  const increaseSession = () => {
    if (buttonLabel === "Stop" || sessionLength >= 60) return;
    clearInterval(time);
    setSessionLength(sessionLength + 1);
    setSessionLabel("Session");
    setButtonLabel("Start");
    setMins(sessionLength + 1);
    setSec(0);
    setTime(null);
  };

  const decreaseSession = () => {
    if (buttonLabel === "Stop" || sessionLength <= 1) return;
    clearInterval(time);
    setSessionLength(sessionLength - 1);
    setSessionLabel("Session");
    setButtonLabel("Start");
    setMins(sessionLength - 1);
    setSec(0);
    setTime(null);
  };

  const start = () => {
    if (mins === 0 && sec === 0) {
      setButtonLabel("Stop");
      setMins(sessionLength);
      setSec(0);
    } else {
      setButtonLabel("Stop");
    }
  };

  const stop = () => {
    clearInterval(time);
    setButtonLabel("Start");
    setTime(null);
  };

  useEffect(() => {
    let timer;
    if (buttonLabel === "Stop") {
      timer = setInterval(() => {
        if (mins === 0 && sec === 0) {
          playAlarm();
          setSessionLabel(sessionLabel === "Session" ? "break" : "Session");
          setMins(sessionLabel === "Session" ? breakLength : sessionLength);
        } else if (sec === 0) {
          setMins(mins - 1);
          setSec(59);
        } else {
          return setSec(sec - 1);
        }
      }, 1000);

      if (buttonLabel === "Start" && timer) {
        clearInterval(timer);
      }
    }

    return () => clearInterval(timer);
  }, [buttonLabel, mins, sec, sessionLabel, sessionLength, breakLength, time]);

  return (
    <div>
      <h1>My Pomodoro timer</h1>
      <div id="break">
        <button id="break-decrement" onClick={decreaseBreak}>
          Decrease-Break
        </button>
        <label id="break-label">break length: </label>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" onClick={increaseBreak}>
          Increase-Break
        </button>
        <div id="session">
          <button id="session-decrement" onClick={decreaseSession}>
            Decrease-Session
          </button>
          <label id="session-label">session length: </label>
          <span id="session-length">{sessionLength}</span>
          <button id="session-increment" onClick={increaseSession}>
            Increase-Session
          </button>
        </div>
        <div id="timer">
          <label id="timer-label">{sessionLabel}: </label>
          <span id="time-left">
            {mins < 10 ? `0${mins}` : mins}:{sec < 10 ? `0${sec}` : sec}
          </span>
        </div>
        <div id="controls">
          <button id="start_stop" onClick={buttonLabel === "Start" ? start : stop}>
            {buttonLabel}
          </button>
          <button id="reset" onClick={reset}>
            reset
          </button>
        </div>
        <audio id="beep" ref={alarm} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
      </div>
    </div>
  );
}
