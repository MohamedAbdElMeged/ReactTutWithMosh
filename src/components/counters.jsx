import React, { Component } from 'react'
import Counter from './counter';
export class Counters extends Component {

    render() {
        const {handleReset , handleIncrement , handleDelete , counters} = this.props;
        return (
            <div className="container">
                <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => (
                     <Counter key={counter.id}  counter={counter} handleIncrement={handleIncrement}  handleDelete={handleDelete}>
                     </Counter>
                    ))}
            </div>
        )
    }
}

export default Counters
