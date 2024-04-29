import React, { useState, useCallback } from "react";

import "../css/Right.scss";
import ListTodo from "./ListTodo";
import ListInsert from "./ListInsert";

let nextId = 2;
const Right = () => {
  const [selectedTodo, setSelectedTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할 일 입력하기",
      checked: false,
      timeSet: "10 분 전",
    },
  ]);
  const [timestamp, setTimestamp] = useState("");

  const onInsert = (text, time) => {
    setTimestamp(new Date());
    if (text === "") {
      alert("할 일을 입력하세요");
    } else {
      const todo = {
        id: nextId, //지금 현재 ID 값
        text,
        checked: false,
        timeSet: time,
      };
      setTodos([...todos, todo]);
      nextId++;
    }
  };
  console.log(todos);

  const onCheckToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onUpdate = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    setSelectedTodo("");
  };

  return (
    <section className="section-R">
      <div className="conbox">
        <div className="todoList mb-3">
          <h2>To Do List</h2>
        </div>
        <ListInsert
          onInsert={onInsert}
          selectedTodo={selectedTodo}
          onUpdate={onUpdate}
        />
        <ListTodo
          todos={todos}
          onRemove={onRemove}
          onCheckToggle={onCheckToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          timestamp={timestamp}
        />
      </div>
    </section>
  );
};

export default Right;
