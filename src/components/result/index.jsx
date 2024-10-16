import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  return (
    <div>
      {result ? (
        <h2>Your Score: {result}</h2>
      ) : (
        <h2>Please choose something</h2>
      )}
    </div>
  );
};

export default Result;
