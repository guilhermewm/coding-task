import React, { FC } from "react";
import { KeywordProps } from "./types";
import './styles.scss';

const keyword: FC<KeywordProps> = ({ children }) => {
  return (
    <div className="keyword">
      <span>{children}</span>
      <div> <button> X </button> </div>
    </div>
  );
};

export default keyword;
