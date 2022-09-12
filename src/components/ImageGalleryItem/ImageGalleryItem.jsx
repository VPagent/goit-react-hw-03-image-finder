
import { Component } from "react"
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component{

    handleClick = (event) => {
        const {allItem, handleOpenModal} = this.props
        const currentId = Number(event.currentTarget.id)
        const targetElem = allItem.filter(elem => elem.id === currentId)
        handleOpenModal(...targetElem)
        
    }

    render(){
        const {id, web, tags } = this.props
        return(
            <li key={id} id={id} className="ImageGalleryItem" onClick={this.handleClick} >
                <img src={web} alt={tags}className="ImageGalleryItem-image" />
            </li>
        )
    };
}

export  default ImageGalleryItem

ImageGalleryItem.propTypes = {
    allItem: PropTypes.array,
    handleOpenModal: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    web: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}
