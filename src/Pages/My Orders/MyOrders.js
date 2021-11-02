import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {

    const[orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect( () => {


        fetch(`http://localhost:5000/services?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))

    },[])
    return (
        <div>
            <h2>My Orders {orders.length}</h2>
            <ul>
                {
                    orders.map(order => <li key={order._id}>{order.name} : {order.price} </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrders;