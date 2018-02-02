import React,{Component} from 'react';

class App1 extends Component{
    constructor(){
        super();
        this.state={
            arr:[1,2,3,4,5,6]
        }
    }
    click =()=>{
        let {arr} = this.state;
        let arr2=arr.concat();
        arr2.push(1);
        this.setState={
            arr:arr2
        }
    }
   
    render(){
        return(
            <div>
                <div>
                    hello,word!!!
                </div>
                <button onClick={this.click}>点击添加</button>
                <ul>
                    {
                      this.state.arr.map((e,i)=><li key={e}>{e}</li>)  
                    }
                </ul>
            </div>
            
        )
    }
}

export default App1;