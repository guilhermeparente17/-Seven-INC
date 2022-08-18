export const Actions = {
  ADD_NAME: 'ADD_NAME',
  ADD_EMPLOYEE: 'ADD_EMPLOYEE',
  ADD_STATUS_PAGE: 'ADD_STATUS_PAGE'
}


const initialState = {
  name: '',
  statusPage: '',
  employee: {},
}


export class ActionsTypes {
  static addName = (payload) => ({type: Actions.ADD_NAME, payload: payload});

  static addEmployee = (payload) => ({type: Actions.ADD_EMPLOYEE, payload: payload});

  static addStatusPage = (payload) => ({type: Actions.ADD_STATUS_PAGE, payload: payload});
}

export class Selectors {
  static getName(state) {
    return state.name;
  }

  static getEmployee(state) {
    return state.employee;
  }

  static getStatusPage(state) {
    return state.statusPage;
  }
}

export const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case Actions.ADD_NAME:
      return {...state, name: payload};
    case Actions.ADD_EMPLOYEE:
      return {...state, employee: payload};
    case Actions.ADD_STATUS_PAGE:
      return {...state, statusPage: payload};
    default:
      return;
  }
}

export default rootReducer;