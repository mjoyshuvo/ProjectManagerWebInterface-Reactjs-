import React, { Component } from 'react';
import ProjectItems from './Projectitem';
class Projects extends Component {
	deleteProject(id){
		this.props.onDelete(id);
	}
  render() {
  	let projectItems;
  	if (this.props.projects){
  		projectItems = this.props.projects.map(project => {
  			return(
  				<ProjectItems onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
  				);
  		});
  	}
    return (
      <div className="Projects">
        <h6>MY Projects</h6>
        <hr/>
        <div>
        	<ul className="list-group">
        		{projectItems}
        	</ul>     	
        </div>
      </div>
    );
  }
}
export default Projects;