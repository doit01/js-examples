export const mapOf = obj => Object.freeze({ ...obj });

export const types = mapOf({
  TOGGLE_FORM: 'TOGGLE_FORM',
  SET_MEAL: 'SET_MEAL',
  SET_CALORIES: 'SET_CALORIES',
  SAVE_MEAL: 'SAVE_MEAL',
  EDIT_MEAL: 'EDIT_MEAL',
  DELETE_MEAL: 'DELETE_MEAL',
  STORE_STATE: 'STORE_STATE',
});

export const showFormCommand = mapOf({
  type: types.TOGGLE_FORM,
  showForm: true,
});

export const hideFormCommand = mapOf({
  type: types.TOGGLE_FORM,
  showForm: false,
});

export const setMealCommand = meal => mapOf({
  type: types.SET_MEAL,
  meal,
});

export const setCaloriesCommand = calories => mapOf({
  type: types.SET_CALORIES,
  calories,
});

export const saveMealCommand = mapOf({
  type: types.SAVE_MEAL,
});

export const editMealCommand = id => mapOf({
  type: types.EDIT_MEAL,
  id,
});

export const deleteMealCommand = id => mapOf({
  type: types.DELETE_MEAL,
  id,
});

export const storeLocalStorageStateCommand = mapOf({
  type: types.STORE_STATE,
});
