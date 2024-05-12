import React, { useState } from 'react'
import './Home.css'
import Header from '../../compoents/Navbar/Header/Header'
import ExploreMenu from '../../compoents/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../compoents/FoodDisplay/FoodDisplay'

const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
