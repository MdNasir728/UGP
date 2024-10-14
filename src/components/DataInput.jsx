import React from "react";
import { Input } from "./ui/input";

const DataInput = ({ label, value, setter, ion }) => {
  return (
    <div className="w-full p-2 space-y-1">
      <h5>{label}</h5>
      <Input
        onChange={(e) => setter(e.target.value, ion)}
        className="bg-[#262730]"
        type="number"
        placeholder={value}
        value={value}
        min={0.0}
        max={1000}
        step={20.0}
      />
    </div>
  );
};

export default DataInput;
