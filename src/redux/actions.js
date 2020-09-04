import {
    GET_EMPLOYMENTS,
    ADD_EMPLOYMENT,
    DELETE_EMPLOYMENT,
    UPDATE_EMPLOYMENT,
    GET_EMPLOYMENTS_FAIL,
    GET_EMPLOYMENTS_SUCCESS,
    GET_EMPLOYMENT_SUCCESS,
    GET_EMPLOYMENT,
    GET_EMPLOYMENT_FAIL,
    UPDATE_DETAIL
  } from "./constants";

  export function addemploymentAction(data) {
    return {
      type: ADD_EMPLOYMENT,
      payload: data,
    };
  }
  
  export function deleteemploymentAction(data, key) {
    console.log(data, key)
    return {
      type: DELETE_EMPLOYMENT,
      payload: data,
      key:key
    };
  }
  export function updateemploymentAction(data, key) {
    return {
      type: UPDATE_EMPLOYMENT,
      payload: data,
      key: key,
    };
  }
  export const getEmploymentsPendingAction = () => ({
    type: GET_EMPLOYMENTS
  });
  
  export const getEmploymentsSuccessAction = data => ({
    type: GET_EMPLOYMENTS_SUCCESS,
    payload: data
  });
  
  export const getEmploymentsFailAction = error => ({
    type: GET_EMPLOYMENTS_FAIL,
    payload: error
  });
  
  export const getEmploymentsAction = () => {
    return dispatch => {
      try {
        dispatch(getEmploymentsPendingAction());
        return fetch("https://reqres.in/api/users?page=2", {
          method: "GET",
          headers: {
            "x-api-key": "a9c5327b-18d2-42c0-9fda-059dac6ecb65"
          }
        })
          .then(res => res.json())
          .then(data => dispatch(getEmploymentsSuccessAction(data.data)));
      } catch (error) {
        dispatch(getEmploymentsFailAction(error));
      }
    };
  };
  //detail
  export const getEmploymentPendingAction = () => ({
    type: GET_EMPLOYMENT
  });
  
  export const getEmploymentSuccessAction = data => ({
    type: GET_EMPLOYMENT_SUCCESS,
    payload: data
  });
  
  export const getEmploymentFailAction = error => ({
    type: GET_EMPLOYMENT_FAIL,
    payload: error
  });
  
  export const getEmploymentAction = (id) => {
    console.log(id, 'id của bên trang tạo nè nè huhu sao ko ra rứa')
    return dispatch => {
      try {
        dispatch(getEmploymentPendingAction());
        return fetch(`https://reqres.in/api/users/${id}`, {
          method: "GET",
          headers: {
            "x-api-key": "a9c5327b-18d2-42c0-9fda-059dac6ecb65"
          }
        })
          .then(res => res.json())
          .then(data => dispatch(getEmploymentSuccessAction(data.data)));
      } catch (error) {
        dispatch(getEmploymentFailAction(error));
      }
    };
  };
  export function updateDetailEmploymentAction(data, key) {
    return {
      type: UPDATE_DETAIL,
      payload: data,
      key: key,
    };
  }