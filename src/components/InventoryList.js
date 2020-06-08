import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import DetailInventory from './DetailInventory';
import InventorySummary from './InventorySummary';
import InventoryNotification from './InventoryNotification ';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

//connect is the glue that glue react with reacr-redux

class InventoryList extends Component {



    // detailInventory = () => {
    //     return this.state.inventories.map(inventory => {
    //         return <DetailInventory inventories={this.state.inventories} inventory={inventory} key={inventory.id} />
    //     })
    // }

    render() {
        //console.log(this.props);
        const { inventories, auth, notifications } = this.props;
        //console.log(inventories)

        //redirect if user is not signed in
        if (!auth.uid) return <Redirect to="/signin" />



        const inventoryList = () => {

            return inventories && inventories.map(inventory => {
                return (
                    <Link to={'/inventory/' + inventory.id}>
                        <InventoryItem inventories={inventories} inventory={inventory} key={inventory.id} />
                    </Link>
                )
            })
        }
        return (
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    {/* {console.log(inventories)} */}
                    <InventoryNotification notifications={notifications} />
                </div>
                <div className="col-sm-12 col-md-4">
                    {console.log(inventories)}
                    <InventorySummary inventories={inventories} />
                </div>
                <div className="col-sm-12 col-md-4">
                    {/* {inventoryList()} */}
                    {/* <Link to={'inventory/' + id}> */}
                    <InventoryItem />
                    {/* </Link> */}
                    {inventoryList()}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         inventories: state.inventory.inventories || state.firestore.inventories
//     }
// }

const mapStateToProps = (state) => {
    console.log(state)
    return {
        inventories: state.firestore.ordered.inventories,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'inventories', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(InventoryList)



