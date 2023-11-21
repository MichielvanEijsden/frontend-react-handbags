
function Button(prop){
let disable = prop.buttonName === "pre-orders";

    return(

        <button disabled={disable}>{prop.buttonName}</button>

            )
}

export default Button