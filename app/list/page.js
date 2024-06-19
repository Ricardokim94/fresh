export default function List() {
    //지금은 DB가 없으므로 data를 일단 임의로 넣어봄
    let Product = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <div>
            <h2 className="title">Products</h2>
            {/* map으로 for문 사용(반복) */}
            {
                Product.map((item, i) => {
                    return (
                        <div className="food" key={i}>
                            <h4>{item}</h4>
                        </div>
                    );
                })
            }
        </div>
    );
} 