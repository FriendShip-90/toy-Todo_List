import React, { useEffect, useState } from "react";

import "../css/ListTodo.scss";
import { Row, Col } from "react-bootstrap";

const ListTodo = ({
  list,
  onRemove,
  onToggle,
  onUpdate,
  onChangeSelectedTodo,
  selectedTodo,
  setValue,
  addInput,
}) => {
  useEffect(() => {
    if (selectedTodo) {
      setValue(list.text);
    }
  }, []);

  return (
    <section className="list-box">
      <Row>
        <Col xs={6} className="work item">
          <ul>
            {list.map((item) => {
              const { id, text, checked } = item;
              if (!checked) {
                return (
                  <li
                    className="d-flex align-items-center justify-content-between w-100 mb-6"
                    key={id}
                  >
                    <div className="box w-100">
                      <div className="top">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center justify-content-start position-relative w-75">
                            <span className="round"></span>
                            {addInput}
                            <div className="title ms-3">{text}</div>
                          </div>
                          <div className="date">
                            <span>10</span>분 전
                          </div>
                        </div>
                      </div>
                      <div className="bottom align-items-center justify-content-between">
                        <div className="box d-flex justify-content-between mx-auto">
                          <div
                            className="edit"
                            onClick={() => {
                              onChangeSelectedTodo(item);
                              onUpdate(id, text);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="17"
                              height="17"
                              fill="currentColor"
                              className="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                              />
                            </svg>
                          </div>
                          <div
                            className="complete mx-4"
                            onClick={() => onToggle(id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#1ACE37"
                              className="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                            </svg>
                          </div>
                          <div className="delete" onClick={() => onRemove(id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#AF1414"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </Col>
        {/* 완료된 목록 */}
        <Col xs={6} className="done item">
          <ul>
            {list.map((item) => {
              const { text, id, checked } = item;
              if (checked) {
                return (
                  <li
                    className="d-flex align-items-center justify-content-between w-100"
                    key={id}
                  >
                    <div className="box w-100">
                      <div className="top">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center justify-content-start">
                            <span className="round"></span>
                            <div className="title ms-3">{text}</div>
                          </div>
                          <div className="date">
                            <span>10</span>분 전
                          </div>
                        </div>
                      </div>
                      <div className="bottom align-items-center">
                        <div className="box d-flex justify-content-between mx-auto">
                          <div
                            className="complete"
                            onClick={() => onToggle(id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="#1ACE37"
                              className="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                            </svg>
                          </div>
                          <div className="delete" onClick={() => onRemove(id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#AF1414"
                              className="bi bi-trash3"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </Col>
      </Row>
    </section>
  );
};

export default ListTodo;
