import { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
        }

    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    reset() {
        this.setState({ count: this.state.count = 0 })
    }



    render() {
        return (

            <div align="center">
                <h1>Counter</h1>
                <h3>Count :- {this.state.count}</h3>
                <button onClick={() => this.increment()}>+</button>
                <button disabled={this.state.count==0} onClick={() => this.decrement()}>-</button>
                <button onClick={() => this.reset()}>Reset</button>


                
            </div>

        )
    }
}

export default Counter;