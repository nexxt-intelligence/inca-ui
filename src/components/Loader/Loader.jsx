import * as React from "react";
import classnames from "classnames";
import ReactLoading from "react-loading";
import "./Loader.css";

export const Loader = ({
  type = "cubes",
  color = "#2D67CB",
  text,
  height = 64,
  width = 64,
  bgColor = "rgba(0, 0, 0, 0.5)",
  textColor = "white",
  packages,
  size,
  className,
}) => {
  switch (packages) {
    case "dashboard":
      return (
        <div
          className="inca-ui-fixed inca-ui-w-full inca-ui-h-full inca-ui-top-0 inca-ui-left-0 inca-ui-right-0 inca-ui-bottom-0 inca-ui-z-999"
          style={{ backgroundColor: bgColor }}
        >
          <div className="inca-ui-flex inca-ui-justify-center inca-ui-items-center inca-ui-h-screen">
            <div>
              <ReactLoading
                className="loading-bar"
                type={type}
                color={color}
                height={height}
                width={width}
              />
              <p className="inca-ui-text-base" style={{ color: textColor }}>
                {text}
              </p>
            </div>
          </div>
        </div>
      );
      break;

    case "bot":
      return (
        <div className="inca-ui-h-4 inca-ui-w-10 inca-ui-mt-[10%] inca-ui-ml-auto inca-ui-mr-auto inca-ui-z-999">
          <div className="inca-ui-my-0 inca-ui-mx-auto inca-ui-w-16 inca-ui-text-left">
            <div className="ball ball1"></div>
            <div className="ball ball2"></div>
            <div className="ball ball3"></div>
          </div>
        </div>
      );
      break;

    // case "portal":
    default:
      return (
        <div
          className={classnames("spinner", {
            [size]: true,
            className,
          })}
        >
          <div
            className={classnames("spinningCircle", {
              [size]: true,
              className,
            })}
          />
        </div>
      );
  }
};

/**
 *
 * Backdrop for the spinner
 * Relative when backdrop is relative to specific area only
 * Fix when backdrop cover all the area of the screen
 * @param {boolean} isOpen - Open Backdrop. Part of props
 * @param {boolean} isAbsolute -  Relative to area or fix to the screen
 *
 */
export const Backdrop = ({ isOpen, isAbsolute }) => {
  return (
    <div
      className={classnames("modal-backdrop fade", {
        show: isOpen,
      })}
    ></div>
  );
};
