'use client'
import { useState } from "react";

//이거 안적으면 server component임. server에서는 onclick 이런거 못사용 해서 적어줘야됨.
export default function List() {
    //지금은 DB가 없으므로 data를 일단 임의로 넣어봄
    let Product = ['Tomatoes', 'Pasta', 'Coconut']
    let [Count, setCount] = useState([0, 0, 0])

    return (
        <div>
            <h2 className="title">Products</h2>
            {/* map으로 for문 사용(반복) */}
            {
                Product.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" alt={item} />
                            <h4>{item}</h4>
                            <sapn>{Count[i]}</sapn>
                            <button onClick={() => {
                                let copy = [...Count]; //array 복사하는 법
                                copy[i]++
                                setCount(copy)
                            }}>+</button>
                        </div>
                    );
                })
            }
        </div>
    );
} 