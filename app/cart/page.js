import { age } from './data.js'

//server component 는 이안에 JS를 넣을 수 없다.
//usestate, useEffect 같은거 사용x
// 'use client' 이렇게 하면 사용할 수 있음. client component

export default function Cart() {

    //DB는 없기 때문에 임시로 data 만들어봄
    let cartList = ['Tomato', 'Pasta']

    return (
        <div>
            <h4 className="title">Cart</h4>
            {cartList.map((item, index) => (
                <CartItem key={index} item={item} />
            ))}

            {/* banner 통해서 props 받아보기 */}
            <Banner content="롯데카드" />
            <Banner content="삼성카드" />
            <Btn color="red" />
            <Btn color="blue" />
        </div>
    )
}
//banner 을 통해 props 받아보기
function Banner(props){
    return<h4>{props.content} 결제 행사중</h4>
}

//button 만들어 보기
function Btn(props){
    return <button style={{background : props.color}}>button</button>
}


//CartList component
function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.item}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

//NextJS에서는 component가 2개있다.
// server component / client component
