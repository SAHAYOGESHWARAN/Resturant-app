import React from 'react';
import OrderHistory from '../components/OrderHistory';

const Orders = () => {
  const userId = localStorage.getItem('userId'); // Assuming the user is logged in and their ID is stored

  return (
    <div>
      <h1>Your Orders</h1>
      <OrderHistory userId={userId} />
    </div>
  );
};

export default Orders;
