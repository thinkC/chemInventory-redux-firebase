import React from 'react'
import InventoryList from './InventoryList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Moment from 'react-moment';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
//import InventoryItem from './InventoryItem';

const DetailInventory = (props) => {
    // const { inventory, inventories } = props;
    // console.log(inventories)
    const { auth } = props
    //redirect if user is not signed in
    if (!auth.uid) return <Redirect to="/signin" />
    const id = props.match.params.id;
    //console.log(props)
    const { inventory } = props;
    console.log(inventory)
    if (inventory) {
        const convertFirebaseTimestamp = (seconds) => {
            //console.log(seconds * 1000)
            //console.log(new Date(seconds * 1000))
            let convertedDate = moment(new Date(seconds * 1000), 'MM/DD/YY').format('ll')
            console.log(convertedDate)
            return convertedDate;
            //return new Date(seconds * 1000)
        }

        // let nn = Object.entries(inventory).map((item) => {
        //     if (key === 'manufacturedate') {
        //         console.log(key)
        //     }
        // })

        // const convertFirebaseTimestamp = () => {
        //     for (let [key, value] of Object.entries(inventory)) {
        //         if (key === 'manufacturedate') {
        //             console.log(value)
        //             const { seconds, nanaseconds } = value
        //             console.log(seconds)
        //             const manudate = seconds;
        //             console.log(new Date(manudate * 1000))
        //             return new Date(manudate * 1000)
        //         }
        //         if (key === 'expiredate') {
        //             const { seconds, nanaseconds } = value
        //             console.log(seconds)
        //             const expdate = seconds
        //         }
        //     }
        // }


        let manudate = inventory.manufacturedate.seconds
        return (

            <div className="card card-top" >

                <div className="card-body">
                    <h5 className="card-title">Chemical Name: {inventory.inventoryname}</h5>


                    <p className="card-text">Initial Quantity: {inventory.initialquantity}</p>
                    <p className="card-text">Requested Quantity: {inventory.requestedquantity}</p>
                    <p className="card-text">LOT Number: {inventory.lotnumber}</p>
                    <p className="card-text">Manufacture Date:{convertFirebaseTimestamp(inventory.manufacturedate.seconds)}</p>
                    {/* <p className="card-text">Manufacture Date:<Moment format="YYYY/MM/DD"> {convertFirebaseTimestamp(inventory.expiredate.seconds)} </Moment></p> */}
                    {/* <p className="card-text">Manufacture Date:{new Date((inventory.manufacturedate.seconds) * 1000)} </p> */}
                    <p className="card-text">Expire Date:{convertFirebaseTimestamp(inventory.expiredate.seconds)} </p>
                    <p className="card-text">Manifest ID: {inventory.manifestid} </p>
                    <p className="card-text">Total Remaining:{inventory.totalremaining} </p>
                    {/* <p className="card-text">Total Remaining: {" "} {this.calTotal(this.state.inventories.initialquantity, this.state.inventories.requestedquantity)}</p> */}
                    <p className="card-text">Country:{inventory.country} </p>
                    <p>Created by {inventory.authorFirstName} {inventory.authorLastName}</p>
                    {/* <p>{moment(inventory.createdAt.toDate()).calendar()}</p> */}
                    <p>{convertFirebaseTimestamp(inventory.createdAt.seconds)}</p>

                </div>
            </div>
        )
    } else {
        return (

            <div className="container">
                <p>Loading Project</p>
            </div>

        )
    }

}

const mapStateToProps = (state, ownProps) => {
    //console.log(state)
    const id = ownProps.match.params.id;
    const inventories = state.firestore.data.inventories;
    const inventory = inventories ? inventories[id] : null
    return {
        inventory: inventory,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'inventories' }
    ])
)(DetailInventory);