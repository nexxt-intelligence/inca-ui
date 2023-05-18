import * as React from "react";
import classnames from "classnames";
import "./toggle.css";

export const Toggle = (props) => {
  const { label, checked, className, disabled, position, ...attr } = props;
  return (
    <>
      {(!position || position === "left") && (
        <label className="switch--label">{label || ""}</label>
      )}
      <label
        className={classnames("switch", {
          [className]: !!className,
          disabled: disabled,
        })}
      >
        <input
          type="checkbox"
          checked={checked}
          {...attr}
          onChange={(event) => {
            props.onChange(event.target.checked);
          }}
          disabled={disabled}
        />
        <span className="slider round" data-test="slider">
          <span></span>
        </span>
      </label>
      {position === "right" && (
        <label className="switch--label">{label || ""}</label>
      )}
    </>
  );
};
