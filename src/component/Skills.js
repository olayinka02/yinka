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
                    <h4 className="high">Hell0!!</h4>
                    <p style={{width:300,}}>My name is Olayinka, I'm a frontend engineer.
                     I have one year experience in building an awesome
                     and cool interface.I am a fast and flexible learner.
                     I can convert all UI/UX design to code and I speak ReactJS presently,
                     Beside coding,I also love solving Mathematical problems and playing chess</p>
                </div>
           
            <div className="container">

            <div>
                <h2 className="high">Skills</h2>
                <p  style={{color:'lightgreen',fontStyle:'italic',fontSize:16,textShadow:'black',}}>I'm proficient in the following Skills base on the bar.</p>
                <li>UI/UX Design.<ProgressBar variant="success" animated now={95}/></li>
                <li>HTML.<ProgressBar variant="success" animated now={91}/></li>
                <li>CSS.<ProgressBar variant="success" animated now={85}/></li>
                <li>Bootstrap.<ProgressBar variant="success" animated now={81}/></li>
                <li>Javascript.<ProgressBar variant="success" animated now={91}/></li>
                <li>PHP.<ProgressBar variant="success" animated now={67}/></li>
                <li>ReactJS.<ProgressBar variant="success" animated now={77}/></li>
                <li>Python.<ProgressBar variant="success" animated now={57}/></li>
                <li>NodeJS(Express).<ProgressBar variant="success" animated now={30}/></li>
                <li>PHP and MySQL.<ProgressBar variant="success" animated now={60}/></li>
            </div>
               
                    {
                    this.state.displayBio ? (
                  <div>
                      <div  className="container">
                       <h2 className="high">Soft Skills</h2>
                       <li>Collaboration.</li>
                       <li>Problem Solving.</li>
                       <li>Adaptability.</li>
                       <li>Ethusiasm.</li>
                       <li>Communication.</li>
                      </div>

                      <div className="container">
                      <h2 className="high">Education</h2>
                       <p>Adekunle Ajasin University, Ondo State.</p>
                       <p>B.sc (Mathematical science)</p>
                       <p>Second Class Upper(4.41)</p>
                       <p>2014-2018.</p>   
                      </div>

                      <div className="container">
                      <h2 className="high">Experience</h2>
                       <h5><b>Jamforte Technology.</b></h5>
                       <address>Wuse,Zone (2) Abuja.</address>
                       <label>position:</label>
                       <p>UI/UX Developer/Frontend Developer</p><br/>
                       <li>-Making a well and cool UI/UX design.</li>
                       <li>-Prototyping UI/UX design and makes it function like a real app.</li>
                       <li>-Designing and creating gif and video if needed.</li>
                       <li>-Converting the UI/UX to React Application with nice and cool animation.</li>
                      </div>

                    
                       
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