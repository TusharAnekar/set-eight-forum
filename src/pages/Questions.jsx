import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { DataContext } from "../contexts/data-context";

export function Questions() {
  const { questions } = useContext(DataContext);
  return (
    <>
      <h1>Questions</h1>
      {questions.map(({ id, question, answer }) => (
        <div>
          <h3>{question}</h3>
          <button>upvote</button>
          <button>dwonvote</button>
          <NavLink to={`/questions/${id}`}>answer</NavLink>
        </div>
      ))}
    </>
  );
}
