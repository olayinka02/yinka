import React,{Component} from 'react';


import PROJECTS from '../projects';

class Project extends Component{
    render(){
        const {title, Description, Link, Image} = this.props.project;
        return(
            <span style={{display:'inline-block',width:250,padding:10,height:100,}}>
            <p>{title}</p>
            <a href={Link}>
            
            <img src={Image} alt='profile' style={{width:150, height:95,borderRadius:6,}}></img>
            </a>
            <p>{Description}</p>
            
           
        </span>
              
        )
    }
}

class Projects extends Component{
    render(){
        return (
            <div>
                <h3 className="high"> Highlighted projects</h3>
                <p style={{color:'lightgreen',fontStyle:'italic',fontSize:16,textShadow:'black',}}>Click on image to be a visitor</p>
                <div>
                    {PROJECTS.map (PROJECTS => {
                              return (
                            <Project key={PROJECTS.id} project={PROJECTS}/>
                          );
                        }
                      )
                    }
                </div>
            </div>
        )
    }
}

export default Projects;