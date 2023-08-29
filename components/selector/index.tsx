import React from "react";
import Select from "react-select";


const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#0360C5" : "white",
    cursor: "pointer",
    innerWidth: "100%",
    outerWidth: "100%",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "white",
    cursor: "pointer",
    outline: state.isFocused ? "2px solid #0360C5" : "none",
    padding: "0.3rem 0.3rem",
    width: "26rem",
  }),
};

const Selector = ({options, placeholder, name, onChange}:{options:any, placeholder:string, name:string, onChange:any}) => {
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption.value);
  };


  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Selector;
