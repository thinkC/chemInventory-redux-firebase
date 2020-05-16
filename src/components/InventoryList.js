import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import DetailInventory from './DetailInventory';
import InventorySummary from './InventorySummary';
import { connect } from 'react-redux';

//connect is the glue that glue react with reacr-redux

class InventoryList extends Component {



    // detailInventory = () => {
    //     return this.state.inventories.map(inventory => {
    //         return <DetailInventory inventories={this.state.inventories} inventory={inventory} key={inventory.id} />
    //     })
    // }

    render() {
        //console.log(this.props);
        const { inventories } = this.props;
        console.log(inventories)

        const inventoryList = () => {

            return inventories && inventories.map(currentInventory => {
                return <InventoryItem inventories={inventories} inventory={currentInventory} key={currentInventory.id} />
            })
        }
        return (
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    {console.log(inventories)}
                    <InventorySummary inventories={inventories} />
                </div>
                <div className="col-sm-12 col-md-6">
                    {/* {this.inventoryList()} */}
                    <InventoryItem />
                    {inventoryList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inventories: state.inventory.inventories
    }
}



export default connect(mapStateToProps)(InventoryList)