export const createInventory = (inventory) => {
    return (dispatch, getState) => {
        //make async call to database;
        dispatch({ type: 'CREATE_INVENTORY', inventory: inventory })
    }
}