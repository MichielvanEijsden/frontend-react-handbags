

function Tile(prop){
    let tileFill = ``
    if (prop.image === "none"){

tileFill=  <section>
    <h2>{prop.tileTitle}</h2>
    <p>{prop.tileText}</p>
    </section>
}else {
tileFill= <section>
    <img src={prop.image} alt= "footer image"/>
</section>
       }
return tileFill
}
export default Tile