
// Styles

import { ReactNode } from "react";

const CustomButton = ({ children, startIcon, ...rest } : { children:ReactNode, startIcon: JSX.Element}) => {
  return (
    <div {...rest} className="flex items-center gap-2">
      {startIcon && <div>{startIcon}</div>}

      {children}
    </div>
  );
};

export default CustomButton;
