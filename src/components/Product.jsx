

function Product(prop){
    let bestSeller = ``
   if( prop.isBestSeller === "yes")
       bestSeller = "Best seller"
    else bestSeller= "New Collection"

    return(
        <article>
        <span>
        {bestSeller}
        </span>
        <div>
            <img src={prop.image} alt={"product image"}/>
        </div>
        <p>
            {prop.title}
        </p>
            <h4>
                €{prop.price},-
            </h4>
        </article>
    )
}
export default Product