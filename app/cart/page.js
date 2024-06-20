import {age}from './data.js'

            //server component 는 이안에 JS를 넣을 수 없다.
             //usestate, useEffect 같은거 사용x
// 'use client' 이렇게 하면 사용할 수 있음. client component

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>{age}</p>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    )
  } 


  //component
  function CartItem(){
    return(
        <div className="cart-item">
          <p>상품명</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
  }

//NextJS에서는 component가 2개있다.
// server component / client component
