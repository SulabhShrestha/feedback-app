import PropsTypes from 'prop-types';

function Button(props) {
    return (
        <button type={props.type} className={`btn btn-${props.version}`} disabled={props.isDisabled}>
            {props.children}
        </button>
    );
}

Button.defaultProps = {
    type: "button",
    version: 'primary',
    isDisabled: false,
}

Button.prototype = {
    isDisabled: PropsTypes.bool,
    children: PropsTypes.node.isRequired,
    version: PropsTypes.string,
    type: PropsTypes.string
}

export default Button;