import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    { id: 1, text: "Question 1", options: ["1", "2"] },
    { id: 2, text: "Question 2", options: ["1", "2"] },
    { id: 3, text: "Question 3", options: ["1", "2"] },
    { id: 4, text: "Question 4", options: ["1", "2"] },
    { id: 5, text: "Question 5", options: ["1", "2"] },
  ],
  answers: {},
  result: null,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    submitAnswers: (state) => {
      state.result = Object.values(state.answers).join(", ");
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
