import React, { useRef, useState, useCallback } from "react";

import "../css/Right.scss";
import ListTodo from "./ListTodo";

const Right = () => {
  const [value, setValue] = useState(null);
  const inputRef = useRef(null);
  const [inputs, setInputs] = useState("");
  const [selectedTodo, setSelectedTodo] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할 일 입력하기",
      checked: false,
    },
  ]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setValue("");
      onInsert(value);
    },
    [value]
  );

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current, //지금 현재 ID 값
        text,
        checked: false,
      };
      setTodos([...todos, todo]);
      nextId.current++;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const onUpdate = useCallback(
    (id, text) => {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      //삭제 버튼을 누른 ID 값을 제외한 나머지 값들을 반환
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  return (
    <section className="section-R">
      <div className="conbox">
        <div className="todoList mb-3">
          <h2>To Do List</h2>
        </div>
        <div className="input-group">
          <form className="w-100" onSubmit={onSubmit}>
            <label htmlFor="inp-text">
              <input
                type="text"
                ref={inputRef}
                onChange={onChange}
                value={value || ""}
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
          </form>
        </div>
        <ListTodo
          list={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onChangeSelectedTodo={onChangeSelectedTodo}
          selectedTodo={selectedTodo}
          setValue={setValue}
          addInput={addInput}
        />
      </div>
    </section>
  );
};

export default Right;
