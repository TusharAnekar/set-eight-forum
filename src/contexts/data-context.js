import { createContext } from "react";
import { useEffect, useState } from "react";

import { fakeFetch } from "../apis/fakeFetch";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  async function getQuestions() {
    try {
      const {
        status,
        data: { questions },
      } = await fakeFetch("https://example.com/api/questions");
      if (status === 200) setQuestions(questions);
    } catch (error) {}
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ questions, setQuestions }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
