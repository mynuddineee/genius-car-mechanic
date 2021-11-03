import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {

    const[orders, setOrders] = useState([]);
    const {user} = useAuth();
    const history = useHistory();

    useEffect( () => {


        fetch(`http://localhost:5000/services?email=${user.email}`, {

            headers: { 

                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
        .then(res => {
             if(res.status === 200){

                return res.json();
             }

             else if(res.status === 401){

                history.push('/login')
             }

        })
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