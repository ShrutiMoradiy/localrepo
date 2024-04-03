async function product () {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}

export default async function page() {
    let products = await product();
    // console.log(products)
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className='text-3xl'>Product List</h1>
      {
        products.map((item) => (
            <h3 key={item}>Name : {item.title}</h3>
        ))
      }
    </div>
  )
}










