import React from 'react';

class KegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.keg ? props.keg.name : '',
      price: props.keg ? props.keg.price : '',
      brand: props.keg ? props.keg.brand : '',
      description: props.keg ? props.keg.description : '',
      errorMsg: props.keg ? '' : 'You must enter a NAME and a PRICE at the very least!'
    };
  }
  
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({name}));
    if(this.state.price) {
      this.setState(() => ({  errorMsg: ''  }));
    }
  };
  
  onPriceChange = e => {
    const price = e.target.value;
    if(!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }

    if(this.state.name) {
      this.setState(() => ({ errorMsg: '' }));
    }
  };

  onBrandChange = e => {
    const brand = e.target.value;
    this.setState(() => ({ brand }))
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({
      name: this.state.name,
      price: parseFloat(this.state.price),
      brand: this.state.brand,
      description: this.state.description
    });
  }
  
  render() {
    return(
      <div className="jumbotron">
        {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name the new keg"
              value={this.state.name}
              onChange={this.onNameChange}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Price the new keg"
              value={this.state.price}
              onChange={this.onPriceChange}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Enter a brand"
              value={this.state.brand}
              onChange={this.onBrandChange}
              className="form-control"
            />
            <textarea
              placeholder="Enter a description for the new keg"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              className="form-control"
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit" disabled={this.state.errorMsg}>{this.props.keg ? 'Edit Keg' : 'Add Keg'}</button>
        </form>
      </div>
    );
  }
}

export default KegForm;