import PropTypes from "prop-types";

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isBeam: PropTypes.bool,
  containerClass: PropTypes.string,
};

export default Button;
