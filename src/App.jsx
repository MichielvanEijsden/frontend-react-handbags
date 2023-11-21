import './App.css'
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";

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
                title = "The handy bag"
                price = "€400,-"
            />
            <Product
                isBestSeller = "yes"
                title = "The stylish bag"
                price = "€250,-"
            />
            <Product
            isBestSeller = "yes"
            title = "The sipmle bag"
            price = "€300,-"
        />
            <Product
                isBestSeller = "yes"
                title = "The trendy bag"
                price = "€150,-"
            />

        </main>

    </>)
}

export default App
