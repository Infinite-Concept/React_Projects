import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const[menu, setMenu] = useState(items)
  const[categories, setCategories] = useState(Categories)

  const Filter = (cart) => {
      if(cart === "all"){
        setMenu(items)
      }

      
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>

        <Categories categories={categories} />
        <Menu />
      </section>
    </main>
  )
}

export default App;
