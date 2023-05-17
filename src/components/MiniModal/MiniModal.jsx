import React, { useRef } from "react";
import { UilTimes } from "@iconscout/react-unicons";
import handleOutsideClick from "../../utils/HandleOutsideClick";

export function MiniModal({ isOpen, isClosable = true, onClose, children }) {
  // TODO: Re-implement handleOutsideClick after refactoring to make work with link when connecting locally
  // const ref = useRef();
  // handleOutsideClick(ref, onClose, "mousedown");

  return (
    isOpen && (
      <div
        className={`inca-ui-flex inca-ui-justify-center inca-ui-items-center inca-ui-fixed inca-ui-left-0 inca-ui-top-0 inca-ui-bg-black/25 inca-ui-h-screen inca-ui-w-screen inca-ui-z-100`}
        // ref={ref}
      >
        <div
          // ref={ref}
          className="inca-ui-bg-white inca-ui-p-10 inca-ui-flex inca-ui-flex-col"
        >
          <div className="inca-ui-flex inca-ui-justify-end inca-ui-min-h-6">
            {isClosable ? (
              <button className="inca-ui-unstyled" onClick={onClose}>
                <UilTimes className="inca-ui-text-default" />
              </button>
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
          <div className="inca-ui-h-full">{children}</div>
        </div>
      </div>
    )
  );
}

export function MiniModalContent({ header, body, children }) {
  return (
    <div className="inca-ui-flex inca-ui-flex-col inca-ui-flex-grow inca-ui-w-80 inca-ui-min-h-48 inca-ui-mx-10">
      <div>
        <div className="inca-ui-mb-4">
          <h2 className="inca-ui-font-bold inca-ui-text-3xl">{header}</h2>
          <p className="inca-ui-mt-1 inca-ui-text-md">{body}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
export function MiniModalActions({ children }) {
  return <div className="inca-ui-flex inca-ui-justify-end">{children}</div>;
}
export default MiniModal;
