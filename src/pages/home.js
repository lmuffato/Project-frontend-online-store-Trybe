import React from 'react';
import SearchBar from '../components/SearchBar';
import SideBarCategory from '../components/SideBarCategory';
import { getCategories } from '../services/api';

export default function Home() {
  return (
    <>
      <SearchBar />
      <SideBarCategory categories={ getCategories() } />
    </>
  );
}
