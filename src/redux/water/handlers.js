export const handleAddWater = (state, { payload }) => {
  if (state.today.portionsOfWater) {
    state.today.portionsOfWater.push(payload.waterData);
  } else {
    state.today.portionsOfWater = [payload.waterData];
  }
};

export const handleEditWAter = (state, { payload }) => {
  const arr = state.today.portionsOfWater;
  const index = arr.findIndex((item) => item.id === payload.waterData.id);
  if (index !== -1) {
    arr[index] = payload.waterData;
  }
};

export const handleDeleteWater = (state, { payload }) => {
  if (state.today.portionsOfWater)
    state.today.portionsOfWater = state.today.portionsOfWater.filter(
      (data) => data.id !== payload.id
    );
};

export const handleGetToday = (state, { payload }) => {
  state.today = payload;
};

export const handleGetMonth = (state, { payload }) => {
  state.month = payload;
};
