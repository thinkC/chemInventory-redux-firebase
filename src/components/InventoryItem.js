import React from 'react';
import InventoryList from './InventoryList';
import DetailInventory from './DetailInventory'

const InventoryItem = (props) => {
    const { inventory, inventories } = props;
    console.log(inventory)
    if (!inventory) {
        return null
    }
    console.log(inventory.inventoryname)

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Chemical Name: {inventory.inventoryname}</h5>
                <p className="card-text">Total Remaining: {inventory.totalremaining}</p>
                <p className="card-text">LOT Number: {inventory.lotnumber}</p>
                <p className="card-text">Country: {inventory.country}</p>
            </div>
        </div>

    )
}

export default InventoryItem;
