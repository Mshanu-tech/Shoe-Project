import React, { useContext } from 'react';
import { product } from './product';
import Customnav from './customnavber';
import style from './style/home.module.css'
import { Shoecontext } from '../App'
import { useNavigate } from 'react-router-dom';
import Cards from '../Components/Cards';

function Home() {

  const navigate = useNavigate()
  const {shoe , setshoe} = useContext(Shoecontext)

  const handlecard = (e) => {
    navigate('/View',{state:{id:e.id , name:e.name, price:e.price, image:e.image, genter:e.genter}})
  }
  return (
    <div className={style.body}>
    <Customnav/>

    <div className={style.backgroudimage}>
      <h1 className={style.h2}>Love the Planet <br /> we walk on</h1>
    </div>
    <h1 className={style.h1}>SHOE</h1> 
      <div style={{ display: "flex", justifyContent: "center" , flexWrap:"wrap"}}>

    {
      product.map((e)=>(
        <div style={{ margin: "1rem" }} key={e.id}>
            <Cards image={e.image} name={e.name} price={e.price} handlecards={()=>handlecard(e)}/>
        </div>
      ))
    }
      </div>
    </div>
  );
}
export default Home;
