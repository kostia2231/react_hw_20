import { useDispatch, useSelector } from "react-redux";
import Question from "./components/question";
import Result from "./components/result";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import { Button } from "antd";

const App = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div>
      <h1>questionnaire</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <Button
        style={{ marginTop: "20px" }}
        type="primary"
        block
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Result />
    </div>
  );
};

export default App;
