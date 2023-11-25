import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import theHandyBag from './assets/bag_1.png'
import theStylishBag from './assets/bag_2.png'
import theSimpleBag from './assets/bag_3.png'
import theTrendyBag from './assets/bag_4.png'
import Tile from "./components/Tile.jsx";
import brands from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {
    return (<>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                buttonName="to the collection"
            />
            <Button
                buttonName="shop all bags"
            />
            <Button
                buttonName="pre-orders"
            />
        </nav>
        <main>
            <Product
                isBestSeller = "yes"
                image= {theHandyBag}
                title = "The handy bag"
                price = "400"
            />
            <Product
                isBestSeller = "yes"
                image = {theStylishBag}
                title = "The stylish bag"
                price = "250"
            />
            <Product
            isBestSeller = "no"
            image = {theSimpleBag}
            title = "The sipmle bag"
            price = "300"
        />
            <Product
                isBestSeller = "no"
                image = {theTrendyBag}
                title = "The trendy bag"
                price = "150"
            />

        </main>
<footer>
    <Tile
    tileTitle = "the brand"
    tileText = "this is text"
    image ="none"
    />
    <Tile
        image ={brands}
    />
    <Tile
        image = {story}
    />
    <Tile
        tileTitle = "our story"
        tileText = "this is text"
        image ="none"

    />
    <section>

    </section>
    <section>

    </section>
    <section>

    </section>
    <section>

    </section>
</footer>
    </>)
}

export default App
