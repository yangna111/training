import React,{Component} from 'react';
class Foot extends Component{
   
    render(){
        let {num} =this.props;
        return(
                <footer className="footer">
                    <span className="todo-count">
                        <strong>{num}</strong>
                        <span>条未选中</span>
                    </span>
                </footer>
        )
    }
}
export default Foot;