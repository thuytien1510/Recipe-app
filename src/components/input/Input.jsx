import React from "react";
import _ from "lodash";

export function Input({ register, name, rules, label, errors, ...rest }) {
  return (
    <div>
      {label &&
        <label htmlFor={name} className="d-block">
          {label}
        </label>
      }
      <input
        type="text"
        {...register(name, rules)}
        id={name}
        className="border-dark w-100"
        {...rest}
      />
      {_.get(errors, name) && <div style={{ color: 'red' }}>{_.get(errors, name).message}</div>}
    </div>
  );
}
