import { Link } from "react-router-dom"

const Items = (props) => {
  return (
    <section className="w-[250px] hover:scale-[1.05] transition-all cursor-pointer">
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <p className="my-[6px]">{props.name}</p>
        <div className="flex gap-[30px]">
            {/* old price */}
            <div className="text-[#8c8c8c] text-[18px] font-medium line-through">
                <p>${props.old_price}</p>
            </div>
            {/* new price */}
            <div className="text-[#374151] text-[18px] font-semibold">
                <p>${props.new_price}</p>
            </div>
        </div>
    </section>
  )
}

export default Items