import React from 'react'
import InventoryList from './InventoryList'

export default function InventorySumary(props) {


    const { inventories } = props;
    //console.log(inventories)

    // const aa = async () => {
    //     //const { inventories } = await props;
    //     const response = await props;
    //     const { inventories } = props
    //     console.log(inventories)
    // }
    // aa();

    if (!inventories) {
        return null
        //aa();

    }





    //console.log(inventories)



    // const getTotalIventory = (obj) => {

    //     //console.log(inventories)
    //     let total = inventories.reduce((acc, curr) => {
    //         return acc += parseInt(curr.totalremaining)
    //     }, 0)
    //     //console.log(total)
    //     return total;
    // }

    const getTotalIventory = async (obj) => {

        //console.log(inventories)
        let total = await inventories;
        console.log(total)
        total = inventories.reduce((acc, curr) => {
            return acc += parseInt(curr.totalremaining)
        }, 0)
        //console.log(total)
        return total;
    }




    const getDateDiff = (date1, date2) => {
        const daysCount = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
        //console.log(daysCount);
        return daysCount;
    }

    const getActiveChem = () => {
        let activeChem = [];
        for (let i = 0; i < inventories.length; i++) {
            //console.log(inventories[i])
            //console.log(inventories[i].expiredate)
            let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))
            //console.log(getNumDay)
            if (getNumDay > 90) {
                activeChem.push(getNumDay)
            }

        }
        //console.log(activeChem)

        let numActiveChem = activeChem.length;
        //console.log(numActiveChem)
        return numActiveChem
    }

    const getExpChem = () => {
        let expChem = [];
        for (let i = 0; i < inventories.length; i++) {
            let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))

            if (getNumDay <= 0) {
                expChem.push(getNumDay)
            }
        }

        let numExpChem = expChem.length;

        return numExpChem
    }

    const getWarningChem = () => {
        let warningChem = [];
        for (let i = 0; i < inventories.length; i++) {
            let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))

            if (getNumDay >= 1 && getNumDay <= 61) {
                warningChem.push(getNumDay)
            }
        }

        let numWarningChem = warningChem.length;
        //console.log(numWarningChem)

        return numWarningChem
    }



    return (
        <div>
            <div className="card mt-5" >

                <div className="card-body">
                    <h5 className="card-title">Total Inventory: {getTotalIventory(inventories)}</h5>

                </div>
            </div>
            <div className="card mt-3" >

                <div className="card-body">
                    <h5 className="card-title text-success">Active Chemicals: {getActiveChem(inventories)}</h5>

                </div>
            </div>
            <div className="card mt-3" >

                <div className="card-body">
                    <h5 className="card-title text-warning">About to Expire Chemicals: {getWarningChem(inventories)}</h5>

                </div>
            </div>

            <div className="card mt-3" >

                <div className="card-body">
                    <h5 className="card-title text-danger">Expired Chemicals: {getExpChem(inventories)}</h5>

                </div>
            </div>
        </div>
    )
}




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

// class InventorySummary extends Component {

//     componentDidMount() {
//         const { inventories } = this.props;
//         console.log(inventories)
//     }

//     // getTotalIventory = (obj) => {

//     //     //console.log(inventories)
//     //     let total = inventories.reduce((acc, curr) => {
//     //         return acc += parseInt(curr.totalremaining)
//     //     }, 0)
//     //     //console.log(total)
//     //     return total;
//     // }

//     // getDateDiff = (date1, date2) => {
//     //     const daysCount = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
//     //     //console.log(daysCount);
//     //     return daysCount;
//     // }

//     // getActiveChem = () => {
//     //     let activeChem = [];
//     //     for (let i = 0; i < inventories.length; i++) {
//     //         //console.log(inventories[i])
//     //         //console.log(inventories[i].expiredate)
//     //         let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))
//     //         //console.log(getNumDay)
//     //         if (getNumDay > 90) {
//     //             activeChem.push(getNumDay)
//     //         }

//     //     }
//     //     //console.log(activeChem)

//     //     let numActiveChem = activeChem.length;
//     //     //console.log(numActiveChem)
//     //     return numActiveChem
//     // }

//     // getExpChem = () => {
//     //     let expChem = [];
//     //     for (let i = 0; i < inventories.length; i++) {
//     //         let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))

//     //         if (getNumDay <= 0) {
//     //             expChem.push(getNumDay)
//     //         }
//     //     }

//     //     let numExpChem = expChem.length;

//     //     return numExpChem
//     // }

//     // getWarningChem = () => {
//     //     let warningChem = [];
//     //     for (let i = 0; i < inventories.length; i++) {
//     //         let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))

//     //         if (getNumDay >= 1 && getNumDay <= 61) {
//     //             warningChem.push(getNumDay)
//     //         }
//     //     }

//     //     let numWarningChem = warningChem.length;
//     //     //console.log(numWarningChem)

//     //     return numWarningChem
//     // }





//     render() {
//         const { inventories } = this.props;
//         console.log(inventories)
//         return (
//             <div>
//                 <div className="card mt-5" >

//                     <div className="card-body">
//                         {/* <h5 className="card-title">Total Inventory: {this.getTotalIventory(inventories)}</h5> */}

//                     </div>
//                 </div>
//                 <div className="card mt-3" >

//                     <div className="card-body">
//                         {/* <h5 className="card-title text-success">Active Chemicals: {this.getActiveChem(inventories)}</h5> */}

//                     </div>
//                 </div>
//                 <div className="card mt-3" >

//                     <div className="card-body">
//                         {/* <h5 className="card-title text-warning">About to Expire Chemicals: {this.getWarningChem(inventories)}</h5> */}

//                     </div>
//                 </div>

//                 <div className="card mt-3" >

//                     <div className="card-body">
//                         {/* <h5 className="card-title text-danger">Expired Chemicals: {this.getExpChem(inventories)}</h5> */}

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         inventories: state.firestore.ordered.inventories
//     }
// }

// export default compose(
//     connect(mapStateToProps),
//     firestoreConnect([
//         { collection: 'inventories' }
//     ])
// )(InventorySummary)
