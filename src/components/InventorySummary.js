import React from 'react'
import InventoryList from './InventoryList'

export default function InventorySumary(props) {


    const { inventories } = props;
    console.log(inventories)
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

    } else {

    }





    //console.log(inventories)

    // const bb = setTimeout((getTotalIventory)=>{

    // },5000)

    const cc = (obj) => {
        let dd = setTimeout(() => { getTotalIventory(obj) }, 5000)
        return dd
    }

    const callActive = (inventories) => {
        //console.log(inventories)
        let callActive1 = setTimeout(() => { getActiveChem(inventories) }, 5000)
        return callActive1;
    }

    const getTotalIventory = (obj) => {

        console.log(inventories)
        let total = inventories.reduce((acc, curr) => {
            console.log(curr.expiredate.seconds)
            return acc += parseInt(curr.totalremaining)
        }, 0)
        console.log(total)
        return total;
    }

    const getDateDiff = (date1, date2) => {
        const daysCount = Math.round((date2 - date1) / (1000 * 60 * 60 * 24));
        //console.log(daysCount);
        return daysCount;
    }

    // const getDateDiff = (date1, date2) => {
    //     const daysCount = Math.round((date2 - date1) / (1000));
    //     //console.log(daysCount);
    //     return daysCount;
    // }

    // const getActiveChem = () => {
    //     let activeChem = [];
    //     for (let i = 0; i < inventories.length; i++) {
    //         console.log(inventories)
    //         //console.log(inventories[i].expiredate)
    //         let getNumDay = getDateDiff(new Date(inventories[i].manufacturedate), new Date(inventories[i].expiredate))
    //         //console.log(inventories.manufacturedate)
    //         console.log(getNumDay)
    //         if (getNumDay > 90) {
    //             activeChem.push(getNumDay)
    //         }

    //     }
    //     console.log(activeChem)

    //     let numActiveChem = activeChem.length;
    //     console.log(numActiveChem)
    //     return numActiveChem
    // }


    const getActiveChem = () => {
        let activeChem = [];
        const zz = inventories.map((item) => {
            //console.log(item.expiredate.seconds)
            let date1 = item.expiredate.seconds;
            let date2 = item.manufacturedate.seconds

            date1 = new Date(date1 * 1000);
            date2 = new Date(date2 * 1000);

            let getNumDay = getDateDiff(date2, date1)
            console.log(getNumDay)
            convertSecToDays(getNumDay)
            if (getNumDay > 90) {
                activeChem.push(getNumDay)
            }
        })

        console.log(activeChem)

        let numActiveChem = activeChem.length;
        console.log(numActiveChem)
        return numActiveChem
    }

    const convertSecToDays = (num) => {
        let aa = num / 86400
        console.log(aa)
        return aa;
        //return num / 86400
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
                    {/* <h5 className="card-title">Total Inventory: {getTotalIventory(inventories)}</h5> */}
                    <h5 className="card-title">Total Inventory: {cc(inventories)}</h5>

                </div>
            </div>
            <div className="card mt-3" >

                <div className="card-body">
                    {/* <h5 className="card-title text-success">Active Chemicals: {getActiveChem(inventories)}</h5> */}
                    <h5 className="card-title text-success">Active Chemicals: {callActive(inventories)}</h5>

                </div>
            </div>
            <div className="card mt-3" >

                <div className="card-body">
                    {/* <h5 className="card-title text-warning">About to Expire Chemicals: {getWarningChem(inventories)}</h5> */}

                </div>
            </div>

            <div className="card mt-3" >

                <div className="card-body">
                    {/* <h5 className="card-title text-danger">Expired Chemicals: {getExpChem(inventories)}</h5> */}

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

//         // const getTotalIventory = (obj) => {

//         //     console.log(inventories)
//         //     let total = inventories.reduce((acc, curr) => {
//         //         return acc += parseInt(curr.totalremaining)
//         //     }, 0)
//         //     //console.log(total)
//         //     return total;
//         // }



//         return (
//             <div>
//                 <div className="card mt-5" >

//                     <div className="card-body">
//                         {/* <h5 className="card-title">Total Inventory: {getTotalIventory(inventories)}</h5> */}

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
