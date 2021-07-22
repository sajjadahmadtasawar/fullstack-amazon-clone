import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import '../styles/orders.css';
import { useStateValue } from '../StateProvider';
import Order from './Order';
function Orders() {
  const [{ basket, user }] = useStateValue();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('user')
        .doc(user?.uid)
        .collection('order')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrder(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrder([]);
    }
  });

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div>
        {order?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
