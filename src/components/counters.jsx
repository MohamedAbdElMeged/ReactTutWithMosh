import React, { Component } from 'react'
import Counter from './counter';
export class Counters extends Component {

    render() {
        return (
            <div className="container">
                <button onClick={this.props.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(counter => (
                     <Counter key={counter.id}  counter={counter} handleIncrement={this.props.handleIncrement}  handleDelete={this.props.handleDelete}>
                     </Counter>
                    ))}
            </div>
        )
    }
}

export default Counters
