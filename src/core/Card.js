import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Card = ({ product }) => {
	return (
		<div className="mb-3">
			<div className="card">
				<div className="card-header">{product.name}</div>
				<div className="card-body">
					<p>{product.description}</p>
					<p>R{product.price}</p>
					<Link to="/">
						<button className="btn btn-outline-primary mt-2 mb-2">
							View Product
						</button>
					</Link>
					<button className="btn btn-outline-warning mt-2 mb-2">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
