import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }
  static defaultProps = {
    categories : ["Web Design", "Web Development", "Mobile Development"]
  }
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Please insert Title");
    }else{
      this.setState({
        newProject:{
          id: uuid.v4(),
          title:this.refs.title.value,
          category:this.refs.category.value,
          lead:this.refs.lead.value
        }
      }, function(){
        this.props.addProject(this.state.newProject)
      });
    }
    e.preventDefault();
  }
  render() {
    
    return (
      <div className="AddProjects">
        <p className="divider-new">Add Project</p>
          <div className="col-md-12">
            <form className="col-md-12" onSubmit={this.handleSubmit.bind(this)}>
                <div className="row">
                    <div className="input-field col-md-4">
                        <input id="title" type="text" ref="title" className="validate"/>
                        <label htmlFor="title" className="active">Title</label>
                    </div>
                    <div className="input-field col-md-4">
                        <input id="lead" ref="lead" type="text" className="validate"/>
                        <label htmlFor="lead" className="active">Lead Programmer</label>
                    </div>
                    <div className="input-field col-md-4">
                        <input id="category" ref="category" type="text" className="validate"/>
                        <label htmlFor="category" className="active">Category</label>
                    </div>
                    <button type="submit" className="btn btn-info waves-effect waves-light">Add Todo</button>
                </div>
                <br />
            </form>
          </div>
      </div>
    );
  }
}
export default AddProjects;