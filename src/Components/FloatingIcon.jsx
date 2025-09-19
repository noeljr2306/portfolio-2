import PropTypes from "prop-types";

const FloatingIcon = ({ children, className, animationDelay = "0s" }) => {
  return (
    <div
      className={`absolute text-gray-400/20 hover:text-gray-400/40 transition-colors duration-500 ${className}`}
      style={{
        animationDelay,
        animation: "float 20s ease-in-out infinite",
      }}
    >
      {children}
    </div>
  );
};

FloatingIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  animationDelay: PropTypes.string,
};

export default FloatingIcon;
