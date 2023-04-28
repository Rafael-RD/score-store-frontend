import styled from "styled-components"
import GameCard from "./Components/GameCard.js"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { mainColor } from "../../constants/colors.js";
import { cartListContext } from "../../Components/Context.js";

export default function HomePage(){
  const {REACT_APP_API_URL}=process.env;
  const {cartList, setCartList}=useContext(cartListContext);
  const [gameList,setGameList]=useState([]);


  useEffect(()=>{
    axios.get(`${REACT_APP_API_URL}/products`)
      .then(res=>{
        // console.log(res.data);
        setGameList(res.data);
      })
      .catch(res=>console.error(res));
  },[]) // eslint-disable-line

  useEffect(()=>{
    console.log(cartList);
  },[cartList])

  function addToCart(id, name, price, img){
    if(cartList.some(e=>e.id===id)) setCartList([cartList.filter(e=>e.id!==id)]);
    else setCartList([...cartList, {id, name, price, img}]);
  }

    return(
        <Page>
          <GameCardContainer>
            {gameList.map(e=><GameCard addToCart={addToCart} key={e._id} gameInfo={e} />)}
          </GameCardContainer>
        </Page>
    )
}

const Page=styled.div`
  background-color: ${mainColor};
`

const GameCardContainer=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`