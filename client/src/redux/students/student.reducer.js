import { GET_STUDENT ,GET_STUDENTS, DELETE_STUDENT } from "../types";

const initialState = {
  students: null,
  student: null,
  loading: true
};

const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
        loading: false
      };
    case GET_STUDENT:
      return {
        ...state,
        student: payload,
        loading: false
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(stud => stud.id !== payload),
        loading: false
      };
    default:
      return state;
  }
};

export default studentReducer;
