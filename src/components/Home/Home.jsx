import React from 'react'

class Home extends React.Component{
    state={countValue: 0}

    incrementCount =()=>{
        let countUpdate;
        countUpdate = this.state.countValue ++;
        console.log(countUpdate);  
    }

    componentDidMount(){
        this.setState({countValue: this.state.countValue ++})
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="">Home Page</h1>
                        <p>{this.state.countValue}</p>
                        <button className="btn btn-danger" onClick={this.incrementCount}>Count</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;