import React,{Component} from 'react';
import  {ProgressBar,Button} from 'react-bootstrap';

class Skills extends Component {
    constructor(){
        super();
        this.state={displayBio: false};
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio(){
        this.setState({displayBio: !this.state.displayBio })
    }

    render(){
        return(
            <div className="container">
            <div>
                <h2 className="high">skills</h2>
                <p  style={{color:'lightgreen',fontStyle:'italic',fontSize:16,textShadow:'black',}}>I'm proficient in the following Skills base on the bar.</p>
                <li>HTML.<ProgressBar variant="success" animated now={91}/></li>
                <li>CSS.<ProgressBar variant="success" animated now={85}/></li>
                <li>CSS(bootstrap).<ProgressBar variant="success" animated now={81}/></li>
                <li>Javascript.<ProgressBar variant="success" animated now={91}/></li>
                <li>PHP.<ProgressBar variant="success" animated now={67}/></li>
                <li>ReactJS.<ProgressBar variant="success" animated now={77}/></li>
            </div>
            <div className="container">
                <div>
                    <h4 className="high">Hell0!!</h4>
                    <p>My name is Olayinka, I'm a software engineer in embryo.I'm looking forward on working on a meaningful projects.I live in Abuja city.My favourite language is Javascript.</p>
                </div>
                    {
                    this.state.displayBio ? (
                  <div>
                    <p>Beside coding,I also love solving Mathematical problems and playing chess</p>
                       
                    <Button variant="secondary" size="sm" onClick={this.toggleDisplayBio}>
                         Show less.
                       </Button>
                 </div>
                    ) : (<div>
                          <Button variant="secondary" size="sm" onClick={this.toggleDisplayBio}>
                         Read more.
                       </Button>
                           
                        </div>
                    )
                }
            
    
           </div>
    
            
        </div>
            
        );
    
}
}

export default Skills;