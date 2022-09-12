import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const portal = document.getElementById('modal');

class Modal extends Component {

    handleClickOwerlay = (event) =>{
        const {handleCloseModal} = this.props
        if(event.target === event.currentTarget){
            handleCloseModal()
        }
    }
    
    render(){
        const {currentItem: {largeImageURL, tags}}  = this.props;
        const {handleClickOwerlay} = this
        return createPortal(
            
            <div className="Overlay" onClick={handleClickOwerlay}>
              <div className="Modal">
                <img src={largeImageURL} alt={tags} />
              </div>
            </div>,
            portal
          );
    }
  
}

export default Modal;

Modal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  currentItem: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
  })
}