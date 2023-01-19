import {Link} from 'react-router-dom'

export default function Navigation(){
	return(
		<div className="navbar">
			<Link to="/">Home</Link>
			<Link to="/Login"> Login</Link>
			<Link to="/products">ProductsData</Link>
			<Link to="/Contact">Contact</Link>
		</div>
	)
}