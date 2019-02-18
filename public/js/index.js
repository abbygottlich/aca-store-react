function render() {
    ReactDOM.render(<App
        addToCart={addItemToCart}
        cart={state.shoppingCart}
        numberOfItemsInCart={state.numberOfItemsInCart}
        products={state.products} />,
        document.getElementById("root"));
}
render();

function addItemToCart(item) {
    state.shoppingCart.push(item);
    render();
}