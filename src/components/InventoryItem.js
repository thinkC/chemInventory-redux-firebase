import React from 'react';
import InventoryList from './InventoryList';
import DetailInventory from './DetailInventory';
import moment from 'moment';

const InventoryItem = (props) => {
    const { inventory, inventories } = props;
    console.log(inventory)
    if (!inventory) {
        return null
    }
    console.log(inventory.inventoryname)
    const convertFirebaseTimestamp = (seconds) => {
        //console.log(seconds * 1000)
        //console.log(new Date(seconds * 1000))
        let convertedDate = moment(new Date(seconds * 1000), 'MM/DD/YY').format('ll')
        console.log(convertedDate)
        return convertedDate;
        //return new Date(seconds * 1000)
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Chemical Name: {inventory.inventoryname}</h5>
                <p className="card-text">Total Remaining: {inventory.totalremaining}</p>
                <p className="card-text">LOT Number: {inventory.lotnumber}</p>
                <p className="card-text">Country: {inventory.country}</p>
                <p>Created by {inventory.authorFirstName} {inventory.authorLastName}</p>
                <p>Created at {convertFirebaseTimestamp(inventory.createdAt.seconds)} </p>
            </div>
        </div>

    )
}

export default InventoryItem;
