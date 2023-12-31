import { useEffect, useState } from "react";

const TimeSet = () => {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [week, setWeek] = useState("");

  const [hour, setHour] = useState(() => {
    let hour = date.getHours();
    if (hour < 10) {
      return "0" + hour;
    } else {
      return hour;
    }
  });
  const [min, setMin] = useState("");
  const [amPm, setAmPm] = useState("");

  const settingWeek = (week) => {
    switch (week) {
      case 0:
        return "일";
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
      default:
        break;
    }
  };

  useEffect(() => {
    const time = setInterval(() => {
      const date = new Date();
      setYear(date.getFullYear());
      setMonth(date.getMonth() + 1);
      setDay(date.getDate());
      setWeek(settingWeek(date.getDay()));

      setAmPm("오후");
      setHour(() => {
        let hour = date.getHours();
        if (hour < 10) {
          return "0" + hour;
        } else {
          return hour;
        }
      });
      setMin(() => {
        let minutes = date.getMinutes();
        if (minutes < 10) {
          return "0" + minutes;
        } else {
          return minutes;
        }
      });

      return () => clearInterval(time);
    }, 1000);
  }, []);

  console.log("실행");

  return (
    <>
      <div>
        <div className="date-wrap d-flex align-items-center">
          <div>
            <span className="year">{year}년</span>
            <span className="month"> {month}월</span>
            <span className="day"> {day}일</span>
          </div>
          <div className="daybyday" style={{ marginLeft: "2rem" }}>
            {week}요일
          </div>
        </div>
        <div
          className="time-wrap d-flex align-items-center"
          style={{ marginTop: "25px" }}
        >
          <div className="amPm time-box">{amPm}</div>
          <div className="d-flex justify-content-between ms-5">
            <div className="hour time-box">{hour}</div>
            <span className="semicolon d-block ms-3 me-3">:</span>
            <div className="min time-box">{min}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSet;
