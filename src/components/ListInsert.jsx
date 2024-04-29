import React, { useState, useRef } from "react";
import { useEffect } from "react";
import moment from "moment";

const ListInsert = ({ onInsert, selectedTodo, onUpdate, timestamp }) => {
  const [value, setValue] = useState("");
  const [timeAgo, setTimeAgo] = useState(""); //시간 세팅
  const inputRef = useRef(null);
  // const [start, setStart] = useState(new Date());

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value, timeAgo);
    setValue("");
    // calculateTimeAgo(start);
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
      inputRef.current.focus();
    } else {
      setValue("");
    }
  }, [selectedTodo]);

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = moment();
      const postedTime = moment();
      const diffMinutes = now.diff(postedTime, "minutes");
      console.log(diffMinutes);

      if (diffMinutes < 1) {
        setTimeAgo("방금 전");
      } else if (diffMinutes < 60) {
        setTimeAgo(`${diffMinutes}분 전`);
      } else {
        setTimeAgo(postedTime.fromNow());
      }
    };

    calculateTimeAgo(); // 최초 렌더링 시 호출
    const intervalId = setInterval(calculateTimeAgo, 1000); // 1분마다 갱신

    return () => clearInterval(intervalId); // 언마운트 시 clearInterval 호출
  }, [timeAgo]);

  return (
    <div className="input-group">
      <form
        className="w-100"
        onSubmit={
          selectedTodo ? () => onUpdate(selectedTodo.id, value) : onSubmit
        }
      >
        <label htmlFor="inp-text">
          <input
            type="text"
            ref={inputRef}
            onChange={onChange}
            value={value}
            id="inp-text"
            placeholder="Write Todo List"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </label>
        {selectedTodo ? (
          <button
            type="submit"
            className="hide"
            tabIndex="-1"
            onClick={() => onUpdate(selectedTodo.id, value)}
          ></button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default ListInsert;
