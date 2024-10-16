import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../features/questionnaire/questionnaireSlice";
import { Radio } from "antd";

import { useState, useEffect } from "react";

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.questionnaire.answers);

  const [value, setValue] = useState(answers[question.id] || null);

  const handleChange = (e) => {
    const selectedAnswer = e.target.value;
    setValue(selectedAnswer);
    dispatch(
      answerQuestion({ questionId: question.id, answer: selectedAnswer })
    );
  };

  useEffect(() => {
    if (answers[question.id]) {
      setValue(answers[question.id]);
    }
  }, [answers, question.id]);

  return (
    <div>
      <h3>{question.text}</h3>
      <Radio.Group onChange={handleChange} value={value}>
        {question.options.map((option) => (
          <Radio key={option} value={option}>
            {option}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};

export default Question;
