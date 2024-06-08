import data_product from '../assets/data'
import Items from './Items'

const RelatedProducts = () => {
  return (
    <div>
        <h1>Related Products</h1>
        <hr />
        <div>
            {data_product.map((item, i) => (
                <Items 
                    key={i} 
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts