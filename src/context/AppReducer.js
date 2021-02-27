 // eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case 'GET_STUDENTS':
    return {
      ...state,
      students: action.payload
    }
    case 'ADD_TAGS':
      return {
        ...state,
        tags: [...state.tags, action.payload]
      }
    case 'STUDENT_ERROR':
    return {
      ...state,
      error: action.payload
    }
    default:
      return state;
  }
}