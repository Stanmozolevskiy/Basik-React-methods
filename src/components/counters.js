import React, { Component } from 'react';
import Counter from '../components/counter'

class Counters extends Component {

    render() {
        console.log('App - Counters rendered')
        const {onDelete, onIncrease, counters, onReset } = this.props;
        return (<div>
            <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrease={onIncrease}
                    counter={counter}
                />
            ))}
        </div>);
    }
}

export default Counters;