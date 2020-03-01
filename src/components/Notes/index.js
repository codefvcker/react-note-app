import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Notes.scss";

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map(item => (
      <CSSTransition key={item.id} classNames={"note"} timeout={500}>
        <li className="list-group-item note">
          <strong>{item.title}</strong>
          <small>{item.date}</small>
          <button
            onClick={() => onRemove(item.id)}
            type="button"
            className="btn-sm btn btn-outline-danger"
          >
            &times;
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
