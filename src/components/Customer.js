import React from 'react';

class Customer extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <img src={this.props.image} alt="profile"></img>
        <p>{this.props.name}</p>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}

export default Customer;
