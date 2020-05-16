import React from 'react'
import InventoryList from './InventoryList';
//import InventoryItem from './InventoryItem';

const DetailInventory = (props) => {
    // const { inventory, inventories } = props;
    // console.log(inventories)
    const id = props.match.params.id;
    return (

        // <div className="card card-top" >
        //     {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        //     <div className="card-body">
        //         <h5 className="card-title">Chemical Name: {inventories.inventoryName}</h5>


        //         <p className="card-text">Initial Quantity: {inventories.initialQuantity}</p>
        //         <p className="card-text">Requested Quantity: {inventories.reqQty}</p>
        //         <p className="card-text">LOT Number: {inventories.lotNumber}</p>
        //         <p className="card-text">Manufacture Date:{inventories.manuDate} </p>
        //         <p className="card-text">Expire Date: {inventories.expiredate}</p>
        //         <p className="card-text">Manifest ID: {inventories.manifestId}</p>
        //         <p className="card-text">Total Remaining: {inventories.totalRemaining}</p>
        //         {/* <p className="card-text">Total Remaining: {" "} {this.calTotal(this.state.inventories.initialquantity, this.state.inventories.requestedquantity)}</p> */}
        //         <p className="card-text">Country: {inventories.country}</p>

        //     </div>
        // </div>

        <div className="card card-top" >

            <div className="card-body">
                <h5 className="card-title">Chemical Name: Sodium Chloride - {id}</h5>


                <p className="card-text">Initial Quantity: 120</p>
                <p className="card-text">Requested Quantity: 0</p>
                <p className="card-text">LOT Number: 123FERT</p>
                <p className="card-text">Manufacture Date:Jan 20, 2018 </p>
                <p className="card-text">Expire Date: March 15, 2022</p>
                <p className="card-text">Manifest ID: ASWER123</p>
                <p className="card-text">Total Remaining: 120</p>
                {/* <p className="card-text">Total Remaining: {" "} {this.calTotal(this.state.inventories.initialquantity, this.state.inventories.requestedquantity)}</p> */}
                <p className="card-text">Country: Nigeria</p>

            </div>
        </div>

    )
}

export default DetailInventory;