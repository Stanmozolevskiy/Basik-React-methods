import React, { Component } from 'react';

class Counter extends Component {

   componentDidUpdate(prevPrpps, prevState){
    console.log('prevPrpps', prevPrpps)
    console.log('prevState', prevState)
    // if(prevPrpps.counter.value !==this.props.count.value){
    //     // Get an Ajex call and get new data frm the server
    // }
   }
   componentWillUnmount(){
       console.log("Counter Unmount")
   }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formtCount()}</span>
                <button
                    onClick={() => this.props.onIncrease(this.props.counter)}
                    className="btn btn-secondary btn-sm">
                    increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formtCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value 
    }
}

export default Counter;