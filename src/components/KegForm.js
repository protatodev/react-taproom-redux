import React from 'react';

class KegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.keg ? props.keg.name : '',
      price: props.keg ? props.keg.price : '',
      brand: props.keg ? props.keg.brand : '',
      description: props.keg ? props.description : '',
      errorMsg: 'You must enter a <strong>NAME</strong> and a <strong>PRICE</strong> at the very least!'
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
    this.setState(() => ({ description }))
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
      <div>
        {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Name the new keg"
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input 
            type="text" 
            placeholder="Price the new keg"
            value={this.state.price}
            onChange={this.onPriceChange}
          />
          <input 
            type="text" 
            placeholder="Enter a brand"
            value={this.state.brand}
            onChange={this.onBrandChange}
          />
          <textarea 
            placeholder="Enter a description for the new keg"
            value={this.state.description}
            onChange={this.onDescriptionChange}  
          ></textarea>
          <button type="submit" disabled={this.state.errorMsg}>Add Keg</button>
        </form>
      </div>
    );
  }
}

export default KegForm;