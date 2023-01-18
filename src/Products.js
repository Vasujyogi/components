function Products(props){
	return(
		<div>
			{
				props.products.map(pitem)=>(
					<div key={pitem.id} classname="product-item">
					<img src={pitem.pic}/>
					<p>{pitem.name}</p>

					</div>
				))
			}
			</div>
		)
    }

export default Products