import React from 'react';
import SearchBar from '../components/SearchBar';
import SideBarCategory from '../components/SideBarCategory';
import { getCategories } from '../services/api';
import './styles/home.css';

export default function Home() {
  return (
    <main className="home">
      <SideBarCategory categories={ getCategories() } />
      <SearchBar />
    </main>
  );
}
