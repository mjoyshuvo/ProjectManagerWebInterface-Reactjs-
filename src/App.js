import React, { Component } from 'react';
import './App.css';
import './index.css';
import $ from 'jquery';
import uuid from 'uuid';
import AddProjects from './Components/AddProjects';
import Projects from './Components/Projects';
import Todos from './Components/todos';
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[],
      todos: []
    }
  }
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  getProjects(){
    this.setState({projects:[
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
          lead: 'Shuvo'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
          lead: 'Shuvo'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
          lead: 'Shuvo'
        },
      ]})
  }
  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }
  componentDidMount(){
    this.getTodos();
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }
  handeleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App container">
        <div className='row card hoverable'>
          <AddProjects addProject={this.handleAddProject.bind(this)}/>
          <Projects projects={this.state.projects} onDelete={this.handeleDeleteProject.bind(this)}/>
          <Todos todos={this.state.todos} />
          <hr />
        </div>
      </div>
    );
  }
}
export default App;
