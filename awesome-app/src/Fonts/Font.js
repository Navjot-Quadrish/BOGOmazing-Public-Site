import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGooglePlusG,faTwitter,faPinterestP,faVimeoV} from '@fortawesome/free-brands-svg-icons';
import { faMap} from '@fortawesome/free-solid-svg-icons';

 const Font=()=>{
    return (
    <>
  <div className="text-secondary">
  <FontAwesomeIcon icon={faFacebookF} className="me-4" size={'1x'} />
  <FontAwesomeIcon icon={faGooglePlusG} className="me-4" size={'1x'} />
  <FontAwesomeIcon icon={faTwitter} className="me-4" size={'1x'} />
  <FontAwesomeIcon icon={faPinterestP} className="me-4" size={'1x'} />
  <FontAwesomeIcon icon={faVimeoV} className="me-4" size={'1x'} />
  <FontAwesomeIcon icon={faMap} className="me-4" size={'1x'} />
  <span>|</span>
  </div> 
</>)
}
export default Font;