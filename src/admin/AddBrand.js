import React, { useState } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';
import { createBrand } from './apiAdmin';

const AddBrand = () => {
	const [ name, setName ] = useState('');
	const [ error, setError ] = useState(false);
	const [ success, setSuccess ] = useState(false);

	// destructure user and token from localstorage
	const { user, token } = isAuthenticated();

	const handleChange = (e) => {
		setError('');
		setName(e.target.value);
	};

	const clickSubmit = (e) => {
		e.preventDefault();
		setError('');
		setSuccess(false);
		// make request to api to create category
		createBrand(user._id, token, { name }).then((data) => {
			if (data.error) {
				setError(true);
			} else {
				setError('');
				setSuccess(true);
			}
		});
	};

	const newBrandForm = () => (
		<form onSubmit={clickSubmit}>
			<div className="form-group">
				<label className="text-muted">Name</label>
				<input
					type="text"
					className="form-control"
					onChange={handleChange}
					value={name}
					autoFocus
				/>
			</div>
			<button className="btn btn-outline-primary">Create Brand</button>
		</form>
	);

	const showSuccess = () => {
		if (success) {
			return <h3 className="text-success">{name} is created</h3>;
		}
	};

	const showError = () => {
		if (error) {
			return <h3 className="text-danger">Brand should be unique</h3>;
		}
	};

	const goBack = () => (
		<div className="mt-5">
			<Link to="/admin/dashboard" className="text-warning">
				Back to Dashhboard
			</Link>
		</div>
	);

	return (
		<Layout
			title="Add a new brand"
			description={`G'day ${isAuthenticated().user
				.name}, ready to add a new brand?`}
			className="container"
		>
			<div className="row">
				<div className="col-md-8 offset-md-2">
					{showSuccess()}
					{showError()}
					{newBrandForm()}
					{goBack()}
				</div>
			</div>
		</Layout>
	);
};

export default AddBrand;
