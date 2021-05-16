import React from 'react';
import SearchBar from '../components/SearchBar';
import CartButton from '../components/Shopping-cart-button';
import SideBarCategory from '../components/SideBarCategory';
import { getCategories } from '../services/api';

export default function Home() {
  return (
    <div>
      <SearchBar />
      <CartButton />
      <SideBarCategory categories={ getCategories() } />
    </div>
  );
}
