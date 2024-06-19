import Link from "next/link"; //a tag말고 Link tag 사용하면 조금더 부드러운 화면 전환 됨.

export default function Home() {
  let name = 'Ricardo' //변수 사용법
  return (
    <div>
      
      <h1 className="title">Test Page</h1>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}
