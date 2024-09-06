import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../utils/api'; // Adjust the import path as needed

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (err) {
        setError('Failed to fetch menu items.');
      }
    };

    loadMenuItems();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
