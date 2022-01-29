import { useState } from "react";
import answers from "./data";

function refreshPage() {
  window.location.reload(false);
}

const ResponseList = () => {
  const [responses, setResponses] = useState([]);
  const index = Math.floor(Math.random() * answers.length);
  const answer = answers[index];
  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          setResponses((currResponses) => {
            const newResponses = [...currResponses];
            newResponses.unshift(answer.answer);
            return newResponses;
          });
        }}
      >
        Bluster!
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          setResponses((currResponses) => {
            const newResponses = [...currResponses];
            newResponses.shift();
            return newResponses;
          });
        }}
      >
        Backtrack!
      </button>
      <button className="btn btn-danger" onClick={refreshPage}>
        U-Turn!
      </button>
      <ul>
        {responses.map((response, index) => {
          return (
            <li key={index}>
              {response}
              <button
                className="btn-sm"
                onClick={() => {
                  setResponses((currResponses) => {
                    const newResponses = [...currResponses];
                    newResponses.splice(index, 1);
                    return newResponses;
                  });
                }}
              >
                🤦
              </button>
              <button
                className="btn-sm"
                onClick={() => {
                  setResponses((currResponses) => {
                    const newResponses = [...currResponses];
                    const spliced = newResponses.splice(index, 1);
                    newResponses.unshift(
                      spliced,
                      spliced,
                      spliced,
                      spliced,
                      spliced
                    );
                    return newResponses;
                  });
                }}
              >
                😍
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResponseList;
