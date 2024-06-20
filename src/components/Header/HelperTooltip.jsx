import * as React from "react";
import { HELPER_TOOLTIP_MAPPING } from "../../utils/constants";
import "./HelperTooltip.css";

export const HelperTooltip = (props) => {
  let timeout;
  const [active, setActive] = React.useState(false);
  const content = props.helperText
    ? props.helperText
    : HELPER_TOOLTIP_MAPPING[props.pathname.toLocaleLowerCase()];
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const renderContent = () =>
    active && (
      <div
        className={`helper-tooltip helper-tooltip-${props.placement}`}
        style={{
          fontSize: props.textSize === "large" ? "16px" : "14px",
        }}
      >
        {content}
      </div>
    );
  if (content) {
    return (
      <div
        className="helper-tooltip-wrapper"
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {props.children}
        {content && renderContent()}
      </div>
    );
  } else {
    return <>{props.children}</>;
  }
};
