import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';

export default function App() {
  const journal = data.map(entry => {
    return (
      <Card 
        key={entry.id}
        entry={entry}
      />
    )
  });
    return (
      <>
        <Navbar />
        <section className="cards-list">
          {journal}
        </section>
      </>
    );
}