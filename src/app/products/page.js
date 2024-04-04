import ProductModule from "./product";

async function product () {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}

export default async function page() {
    let products = await product();
    // console.log(product)
    
  return (
    <div className="flex flex-col justify-between p-24">
      <h1 className='text-3xl mb-2'>Product List</h1>
      {
        products.map((item) => (
            <div>
              <h3 className="mt-2" key={item}>Name : {item.title}</h3>
              
              <ProductModule Price={item.price}/>
            </div>
              
        ))
      }
    </div>
  )
}

export function generateMetadata() {
  return{
      title: "product"
  }
}








