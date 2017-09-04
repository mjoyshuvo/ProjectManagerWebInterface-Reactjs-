import React, { Component } from 'react';

class ProjectItems extends Component {
	deleteProject(id){
		this.props.onDelete(id);

	}
  render() {
    return (
      <li className="ProjectItem list-group-item">
      	<strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}><i className="material-icons red-text">delete</i></a>
      </li>
    );
  }
}

export default ProjectItems;