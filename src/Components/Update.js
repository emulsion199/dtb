import React,{Component} from 'react'
class Update extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            title:this.props.data.title
        }
    }
    render() {
        return(
            <header>
            <h2>Update</h2>
            <form action='/update_process' 
            method='post'
            onSubmit={function(e){
                e.preventDefault();
                this.props.onUpdate(e.target.title.value,e.target.desc.value)
                
            }.bind(this)}>
            <p><input type="text" 
            placeholder='title' name='title' 
            value={this.state.title}></input></p>
            <p><textarea placeholder='description' name='desc'></textarea></p>
            <p><input type="submit" ></input></p>
            </form>
            </header>
        )
    }
}
export default Update