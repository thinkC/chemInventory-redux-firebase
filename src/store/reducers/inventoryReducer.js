const initState = {

    inventories: [
        {
            country: "Nigeria",
            expiredate: new Date(),
            initialquantity: 109,
            inventorycode: 'ABC0123',
            inventoryname: 'Sodium Chloride',
            lotnumber: '110YHG',
            manifestid: 'NG0001',
            manufacturedate: new Date(),
            requestedquantity: 0,
            totalremaining: 100,
            id: 1

        },
        {
            country: "Ghana",
            expiredate: new Date('December 20, 2022'),
            initialquantity: 500,
            inventorycode: 'ABC0125',
            inventoryname: 'Acetic Acid',
            lotnumber: '110YMM',
            manifestid: 'GH0001',
            manufacturedate: new Date(),
            requestedquantity: 0,
            totalremaining: 500,
            id: 2

        }
    ]
};

const inventoryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_INVENTORY':
            console.log('created Inventory', action.inventory)
    }
    return state;
}

export default inventoryReducer;