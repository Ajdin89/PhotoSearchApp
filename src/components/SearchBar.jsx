import React from 'react';

class SearchBar extends React.Component {
	state = {
		term: '',
	};

	onInputChange = (event) => {
		this.setState({
			term: event.target.value,
		});
	};

	onFormSubmit = (event) => {
    event.preventDefault();
    this.props.propSubmit(this.state.term)
	};

	render() {
		return (
			<div>
				<div className='ui segment' style={{ marginTop: '20px' }}>
					<form className='ui form' onSubmit={this.onFormSubmit}>
						<div className='field'>
							<label>Image Search</label>
							<input
								type='text'
								value={this.state.term}
								onChange={this.onInputChange}
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default SearchBar;
