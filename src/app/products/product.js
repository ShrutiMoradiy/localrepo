'use client'

export default function product(props) {
    console.log(props)
    return (
        <div>
            <button className="border p-1.5" onClick={() => alert(props.Price)}>Check Price</button>
        </div>
    )
}

