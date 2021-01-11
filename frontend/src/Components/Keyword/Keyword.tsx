import React, { FC } from "react";
import { KeywordProps } from "./types";
import './styles.scss';

const keyword: FC<KeywordProps> = ({ children, removeKeyword }) => {
  return (
    <div className="keyword">
      <span>{children}</span>
      <div> <button onClick={() => removeKeyword(children)}> X </button> </div>
    </div>
  );
};

export default keyword;
