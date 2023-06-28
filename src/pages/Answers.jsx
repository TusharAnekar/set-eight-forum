import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/data-context";

export function Answers() {
  const { answerId } = useParams();
  const { questions } = useContext(DataContext);

  const { answer } = questions.find(({ id }) => id === Number(answerId));
  return (
    <>
      <h1>Answer:</h1>
      <p>{answer}</p>
    </>
  );
}
