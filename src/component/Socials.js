import React,{Component} from 'react';
import SOCIAL from '../socials.js';

class Social extends Component{
    render(){
        const { Image,Link} = this.props.social;
        return(
            
            <span style={{display:'inline-block',width:12,margin:15,marginLeft:15,padding:0,}}>
                
                <a href={Link}><img src={Image} alt='profile' style={{width:27, height:30,borderRadius:100, }}></img></a>
            </span>
        )
    }
}

class Socials extends Component{
    render(){
        return (
            
                <div><h2 style={{fontStyle:'bold',}}>
                
                    {SOCIAL.map (SOCIAL => {
                              return (
                            <Social key={SOCIAL.id} social={SOCIAL}/>
                          );
                        }
                      )
                    }
                
             </h2></div>
        )
    }
}

export default Socials;