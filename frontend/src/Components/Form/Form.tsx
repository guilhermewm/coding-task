import React, { FC, useState } from "react";
import { FormProps } from "./types";
import './styles.scss';

const Form: FC<FormProps> = ({type, submit, error, success, loading}) => {
  const [value, setValue] = useState<string>('');

  return (    
    <div className="form">
      <form onSubmit={(event) => {
        event?.preventDefault();
        submit(value);
        setValue('');
      }}>
        <input onChange={(evt) => setValue(evt.target.value)} name='field' value={value} type="text" placeholder={type}></input>
        <button type="submit">{`Add ${type}!`}</button>        
      </form>
      {error && (<span className="error">{error}</span>)}
      {success && (<span className="success">{success}</span>)}
      {loading && (<span>Loading...</span>)}
    </div> 
  );
};

export default Form;
