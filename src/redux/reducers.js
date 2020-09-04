import {
  GET_EMPLOYMENTS,
  GET_EMPLOYMENTS_SUCCESS,
  GET_EMPLOYMENTS_FAIL,
  ADD_EMPLOYMENT,
  DELETE_EMPLOYMENT,
  UPDATE_EMPLOYMENT,
  GET_EMPLOYMENT,
  GET_EMPLOYMENT_SUCCESS,
  GET_EMPLOYMENT_FAIL,
  UPDATE_DETAIL
} from "./constants";

const initialState = {
  employments: [],
  loading: false,
  employment:{}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYMENTS:
      return {
        ...state,
        loading: true
      };
    case GET_EMPLOYMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        employments: action.payload
      };
    case GET_EMPLOYMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ADD_EMPLOYMENT:
      console.log(state,'state của add')
      return {
        ...state,
        employments: [ action.payload],
      };
    case DELETE_EMPLOYMENT:
      return {
        ...state,
        employments: state.employments.filter(
          (employment) => employment.id !== action.payload.id
        ),
        employment: state.employments.filter(
          (employment) => employment.id !== action.payload.id
        ),
      };
      case UPDATE_EMPLOYMENT:
        console.log(action.payload, action.key, 'action .payload nè')
        let temp = state.employments;
        temp[action.key].email = action.payload.email;
        temp[action.key].first_name= action.payload.first_name;
        temp[action.key].last_name= action.payload.last_name;

        // temp[action.key].avatar= action.payload.avatar;
        console.log(temp,'temp');
        return{
          ...state,
          employments: temp.filter(
            (employment) => employment !== action.payload
          ),
        };
        case GET_EMPLOYMENT:
          return {
            ...state,
            loading: true
          };
        case GET_EMPLOYMENT_SUCCESS:
          console.log(action.payload)
          return {
            ...state,
            loading: false,
            employment: action.payload
          };
        case GET_EMPLOYMENT_FAIL:
          console.log(action.payload)
          return {
            ...state,
            loading: false,
            error: action.payload
          };

          case UPDATE_DETAIL:
            console.log(action.payload, action.key, 'action .payload của 1 detail nè nè')
            return{
              ...state,
              employment: action.payload
            };
    default:
      return state;
  }
}

export default rootReducer;
