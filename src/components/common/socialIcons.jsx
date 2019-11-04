import React, { Component} from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

class SocialIcons extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <IconButton onClick ={() => window.open('https://www.facebook.com/najmul.ahmed1', '_blank')} >
                        <FacebookIcon />
                  </IconButton>
                  <IconButton onClick ={() => window.open('https://www.twitter.com/najmul2022','_blank')}>
                        <TwitterIcon />
                  </IconButton>
                  <IconButton onClick ={() => window.open('https://www.linkedin.com/in/md-najmul-mollah-41920ab9/','_blank')}>
                        <LinkedInIcon />
                  </IconButton>
                  <IconButton onClick ={() => window.open('https://www.github.com/najmulcse', '_blank')}>
                        <GitHubIcon />
                  </IconButton>
                  <IconButton onClick ={() => window.open('https://www.pinterest.com/devnajmul/','_blank')}>
                        <PinterestIcon />
                  </IconButton>
            </React.Fragment>  
         );
    }
}
 
export default SocialIcons;