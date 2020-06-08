import React from 'react';
import moment from 'moment'

const InventoryNotification = (props) => {
    const { notifications } = props;
    console.log(notifications)
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Notifications</h5>
                {notifications && notifications.map(item => {
                    return (
                        <div key={item.id}>
                            <span className="card-text">{item.user}</span>{"\n"}
                            <span className="card-text">{item.content}</span>
                            <p className="card-text">{moment(item.time.toDate()).fromNow()}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default InventoryNotification 
