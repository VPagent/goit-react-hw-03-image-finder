import PropTypes from 'prop-types';


function Button ({onClickLoad}){
    return(
        <button className="Button" onClick={onClickLoad}>Load more</button>
    )
}

export default Button

Button.propTypes = {
    onClickLoad: PropTypes.func.isRequired
}
