import React from "react";
import { HelperTooltip } from "./HelperTooltip";
import { PROJECT_STATUS } from "../../utils/constants";
import "./Header.css";

export const Header = (props) => {
  const {
    className,
    title,
    subTitle,
    status,
    dateTimeMessage,
    isDevMode,
    isDash,
    children,
  } = props;

  const getStatusClassName = () => {
    switch (status) {
      case PROJECT_STATUS.LIVE:
        return "inca-ui-text-green-600 inca-ui-bg-green-300";
      case PROJECT_STATUS.DRAFT:
        return "inca-ui-bg-orange-300 inca-ui-text-orange-600";
      case PROJECT_STATUS.PAUSED:
        return "inca-ui-bg-orange-300 inca-ui-text-orange-600";
      case PROJECT_STATUS.COMPLETE:
        return "inca-ui-bg-gray-700 inca-ui-text-white";
      default: {
        return "inca-ui-bg-blue inca-ui-text-white";
      }
    }
  };

  return (
    <div
      className={`inca-ui-relative inca-ui-flex inca-ui-flex-row inca-ui-lg:flex-row inca-ui-px-3 inca-ui-mb-4 inca-ui-items-center inca-ui-justify-between ${
        className ? className : ""
      } ${isDash ? "inca-ui-pt-6" : ""}`}
    >
      <div className="inca-ui-flex inca-ui-shrink-0">
        <div className="inca-ui-flex inca-ui-flex-col">
          <div className="inca-ui-flex inca-ui-mb-2">
            <div className="inca-ui-font-medium inca-ui-text-gray-700 inca-ui-text-sm">
              {subTitle} {dateTimeMessage && `(${dateTimeMessage})`}
            </div>
          </div>
          <div className="inca-ui-flex inca-ui-items-end">
            <HelperTooltip textSize="large" placement="bottom" pathname={title}>
              <h1 className="inca-ui-font-bold inca-ui-text-gray-700 inca-ui-text-3xl inca-ui-mb-0 inca-ui-leading-none">
                {title}
              </h1>
            </HelperTooltip>
            {status && (
              <HelperTooltip
                textSize="small"
                placement="center"
                pathname={status?.toLowerCase()}
              >
                <div
                  className={`inca-ui-flex inca-ui-flex-col inca-ui-justify-center inca-ui-ml-3 inca-ui-px-2 inca-ui-h-6 inca-ui-content-center inca-ui-leading-none inca-ui-text-sm inca-ui-rounded ${getStatusClassName()}`}
                >
                  {status?.toLowerCase()}
                </div>
              </HelperTooltip>
            )}
            {isDevMode && (
              <div className="project-status--block">
                <span className={`project-status-badge project-status--dev`}>
                  DEV
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="inca-ui-flex inca-ui-flex-1 inca-ui-flex-wrap inca-ui-justify-start inca-ui-lg:justify-end inca-ui-mt-3 inca-ui-lg:mt-0 inca-ui-space-x-2 inca-ui-max-w-fit">
        {children}
      </div>
    </div>
  );
};
