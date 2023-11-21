function Product(prop){
    let bestSeller = ``
   if( prop.isBestSeller === "yes")
       bestSeller = "Best seller"

    return(
        <article>
        <span>
        {bestSeller}
        </span>

        <p>
            {prop.title}
        </p>
            <h4>
                {prop.price}
            </h4>
        </article>
    )
}
export default Product