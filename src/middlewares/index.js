export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

export const enumerated = (store) => (next) => (action) => {
  const list = [...action.action.payload];
  const listUpdated = [];
  let count = 0;
  list.forEach((pokemon) =>
    listUpdated.push({
      ...pokemon,
      number: "#" + (++count).toString().padStart(3, "0"),
    })
  );
  const updatedAction = {
    ...action,
    action: { ...action.action, payload: listUpdated },
  };
  next(updatedAction);
};
