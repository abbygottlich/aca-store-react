function ProductDetail(props) {

    let star = [];
    for (let i = 0; i < props.products.rating; i++) {
        star.push(<span className="glyphicon glyphicon-star"></span>)
    }

    return <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
            <img src="http://placehold.it/320x150" alt="" />
            <div className="caption">
                <h4 className="pull-right">{props.products.price}</h4>
                <h4><a href="#">{props.products.name}</a>
                </h4>
                <p>{props.products.description}</p>
            </div>
            <div className="ratings">
                <p className="pull-right">{props.products.reviews} reviews</p>
                <p>
                    {star}
                </p>
            </div>
        </div>
    </div>
};