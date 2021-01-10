import React, { FC } from "react";
import { HeaderProps } from "./types";
import './styles.scss';

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <div className="header">{children}</div>
    </>
  );
};

export default Header;
