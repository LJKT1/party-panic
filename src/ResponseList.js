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
      <table>
        {responses.map((response, index) => {
          return (
            <tr key={index}>
              <td className="response-cells">{response}</td>
              <td className="emoji-cells">
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
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default ResponseList;
