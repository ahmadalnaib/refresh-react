import { ReactNode } from "react";

interface AlertProps {
children:ReactNode
}
function Alert({children}:AlertProps) {
  return ( <><h1>{children}</h1></> );
}

export default Alert;