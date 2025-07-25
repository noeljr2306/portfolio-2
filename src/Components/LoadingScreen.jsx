import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const LoadingScreen = ({ isFadingOut }) => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      if (isFadingOut) isFadingOut();
    }, 2000);
    return () => clearTimeout(timer);
  }, [isFadingOut]);
  return (
    <div
       className={`fixed inset-0 h-[70vh] flex flex-col items-center justify-center bg-black z-50 transition-opacity duration-700 ${
        loadingComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 className="text-4xl mb-4 noel-font">Welcome!</h1>
      <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-64 bg-zinc-700 animate-loading-bar"></div>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  isFadingOut: PropTypes.bool.isRequired,
};

export default LoadingScreen;
