export const DELETE_PROJECT = 'ENTITIES/PROJECTS/DELETE_PROJECT'
export const deleteProject = id => ({ type: DELETE_PROJECT, id });

export const UPDATE_PROJECT = 'ENTITIES/PROJECTS/UPDATE_PROJECT';
export const updateProject = (id, payload) => ({ type: UPDATE_PROJECT, id, payload });

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT:
      return _.omit(state, action.id);
    case UPDATE_PROJECT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload
        }
      };
    default:
      return state;
  }
}
