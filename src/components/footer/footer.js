import React, {Component} from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <p>These are some of Ricardo's favorite recipes</p>
          <p>mmm mmm, that's good food! © ℗®™</p>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFX3LbyNWCX2g/profile-displayphoto-shrink_800_800/0/1517548618379?e=1638403200&v=beta&t=ebs-bDk1QYSuCS6BI3eplnWRPxu_bokr1h3ZRWyRtQU" alt="ricardo with pink hair"/>
        </div>
  )}
}

export default Footer;
