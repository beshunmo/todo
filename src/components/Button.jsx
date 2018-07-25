import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} type={props.type}>
            {props.icon ?
                <i className="material-icons">{props.icon}</i>
                :
                props.children
            }
        </button>
    );
}

Button.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    onClcik: PropTypes.func,
    children: PropTypes.node
}

export default Button;