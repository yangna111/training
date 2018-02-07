import React, {Component} from 'react';
import head from './component/head';
import list from './component/list';
import foot from './component/foot';

class Index extends Component {
    render(){
        return(
            <section className="todoapp">
                <div>
                    <head/>
                    <section className="main">
                        <input className="toggle-all" type="checkbox" checked=""/>
                        <ul className="todo-list">
                            
                        </ul>
                    </section>
                    
                </div>
        </section>
        )
    }
}

export default Index;
