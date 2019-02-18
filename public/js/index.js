function render() {
    ReactDOM.render(<App
        addToCart={addItemToCart}
        numberOfItemsInCart={state.numberOfItemsInCart}
        products={state.products} />,
        document.getElementById("root"));
}
render();

function addItemToCart() {
    state.numberOfItemsInCart++;
    render();
}