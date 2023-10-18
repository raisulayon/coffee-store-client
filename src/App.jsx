import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees]=useState(loadedCoffees);


  return (
    <>
    <div className='m-20'>
      <h2 className='text-4xl font-rancho font-bold text-purple-600 text-center my-20'>Our Popular Products: {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee=><CoffeeCard 
        key={coffee._id } 
        coffee={coffee}>
        coffees={coffees}
        setCoffees={setCoffees}  
        </CoffeeCard>)
      }
      </div>
    </div>
    </>
  )
}

export default App
