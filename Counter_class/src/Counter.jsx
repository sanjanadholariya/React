import { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            data: [
                {
                    name: "sanjana",
                    id: 1
                },
                {
                    name : "prince",
                    id :2
                }

            ] , 
            colors : ["red" , "pink" , "blue" , "teal" , "purple" , "black"]


        }

    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (

            <div align="center">
                <h1>Counter</h1>
                <h3>Count :- {this.state.count}</h3>
                <button onClick={() => this.increment()}>+</button>

                {
                    this.state.data.map((val , index)=>{
                        return(
                            <div key={index}>
                                <h3>{val.name}</h3>
                                <h4>{val.id}</h4>
                            </div>
                        )
                    })
                }
                {
                    this.state.colors.map((val , index) => {
                        return(
                            <div key={index}>
                                <h5 style={{color:val}}>{val}</h5>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Counter;