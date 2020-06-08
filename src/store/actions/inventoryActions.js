export const createInventory = (inventory) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database;
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('inventories').add({
            ...inventory,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_INVENTORY', inventory: inventory })
        }).catch((err) => {
            dispatch({ type: 'CREATE_INVENTORY_ERROR', err })
        })

    }
}