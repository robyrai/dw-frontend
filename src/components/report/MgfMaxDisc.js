import React, { Component } from 'react'

export default class MgfMaxDisc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxDisc: 0
        }
    }
    
      componentDidMount() {
        fetch("http://localhost:8080/mfgMaxDiscount/" + this.props.name)
          .then(res => res.json())
          .then(res => this.setState({ maxDisc: res }));
      }
    
      render() {
        return <div>{JSON.stringify(this.state.maxDisc)}</div>;
      }
}
