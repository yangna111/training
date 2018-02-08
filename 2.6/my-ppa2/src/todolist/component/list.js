import React,{Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.state={
           dbclick:false,
           ctxt:''

        }     
    }
    change =()=>{
       let {changeChecked,id}=this.props;
       changeChecked(id)
    }

    click=()=>{
        let {rm,id}=this.props;
        rm(id)
    }
    dbclick=()=>{  //双击的时候，回调聚焦
       this.setState({
            dbclick:true,
            ctxt:this.props.txt
       },()=>{
            this.refs.nn.selectionStart=this.refs.nn.value.length
            this.refs.nn.focus()
       }) 
     
    }
    changeA=(ev)=>{
       let {changeVal,id}=this.props
       changeVal(id,this.refs.nn.value)  //this.refs.nn.value 更新最新的数据
    }
    
    blur=()=>{

        let {txt,changeVal,id}=this.props
        if(!txt){
            changeVal(id,this.state.ctxt)//this.state.ctxt 没有输入新的内容 就显示之前的内容
        }
            this.setState({
                dbclick:false
            })
       
    }
    keydown=(ev)=>{
      if(ev.keyCode===13){
          this.blur()
      }
    }
    render(){
        let {txt,checked}=this.props
        let {ctxt,dbclick}=this.state
        let classN =checked?'completed':'';
        if(dbclick){
            classN+='editing'
        }
        return(
            <li 
                className={classN}
                onDoubleClick={this.dbclick}
            >
                <div className="view">
                    <input className="toggle"
                     type="checkbox" 
                     checked={checked}
                     onChange={this.change}
                     />
                    <label>{txt}</label>
                    <button className="destroy"
                        onClick ={this.click}
                    >
                    </button>
                </div>
                <input className="edit"
                 value={txt}
                 ref="nn"
                 onBlur={this.blur}
                 onKeyDown={this.keydown}
                 onChange={this.changeA}
                 />
            </li>
        )
    }
}
export default List;