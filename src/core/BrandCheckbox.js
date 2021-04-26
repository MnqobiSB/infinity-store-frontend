import React, { useState } from 'react';

const BrandCheckbox = ({ brands, handleFilters }) => {
	const [ checked, setCheked ] = useState([]);

	const handleToggle = (b) => () => {
		// return the first index or -1
		const currentBrandId = checked.indexOf(b);
		const newCheckedBrandId = [ ...checked ];
		// if currently checked was not already in checked state > push
		// else pull/take off
		if (currentBrandId === -1) {
			newCheckedBrandId.push(b);
		} else {
			newCheckedBrandId.splice(currentBrandId, 1);
		}
		// console.log(newCheckedBrandId);
		setCheked(newCheckedBrandId);
		handleFilters(newCheckedBrandId);
	};

	return brands.map((b, i) => (
		<li key={i} className="list-unstyled">
			<input
				onChange={handleToggle(b._id)}
				value={checked.indexOf(b._id === -1)}
				type="checkbox"
				className="form-check-input"
			/>
			<label className="form-check-label">{b.name}</label>
		</li>
	));
};

export default BrandCheckbox;
