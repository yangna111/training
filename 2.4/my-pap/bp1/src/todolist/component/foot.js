import React, {Component} from 'react';

class foot extends Component{
    render(){
        return(
            <footer className="footer">
                    <span className="todo-count">
                        <strong>0</strong>
                        <span>条未选中</span>
                    </span>
            </footer>
        )
    }
}
export default foot;