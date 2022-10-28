import React from "react";
import _ from "lodash";

export function Select({ register, label, errors, rules, options, name, ...rest }) {
  return (
    <div style={{ width: '80%' }}>
      {label &&
        <label htmlFor={name} className="d-block">
          {label}
        </label>
      }
      <select
        {...register(name, rules)}
        {...rest}
        style={{ height: 45, width: '100%' }}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      {_.get(errors, name) && <div style={{ color: 'red' }}>{_.get(errors, name).message}</div>}
    </div>
  );
}
