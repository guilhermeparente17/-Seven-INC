export const Actions = {
  ADD_NAME: 'ADD_NAME',
  ADD_EMPLOYEE: 'ADD_EMPLOYEE'
}


const initialState = {
  name: '',
  employee: {}
}


export class ActionsTypes {
  static addName = (payload) => ({type: Actions.ADD_NAME, payload: payload});

  static addEmployee = (payload) => ({type: Actions.ADD_EMPLOYEE, payload: payload});
}

export class Selectors {
  static getName(state) {
    return state.name;
  }

  static getEmployee(state) {
    return state.employee;
  }
}

export const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case Actions.ADD_NAME:
      return {...state, name: payload};
    case Actions.ADD_EMPLOYEE:
      return {...state, employee: payload};
    default:
      return;
  }
}

export default rootReducer;