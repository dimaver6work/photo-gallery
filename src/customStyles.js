export const customStyles = {
  option: (provided) => {
    return {
      ...provided,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",

      cursor: "pointer",
      color: "#000",
      backgroundColor: "transparent",
    };
  },
  menu: (provided) => {
    return {
      ...provided,
      backgroundColor: "#fff",
      overflow: "hidden",
    };
  },
  container: (provided) => {
    return {
      ...provided,
      margin: "0 10px 0 10px",
    };
  },
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    width: "100%",
  }),
  control: (provided) => {
    return {
      ...provided,
      backgroundColor: "transparent",
      minHeight: 24,
      border: `1px solid #000`,
      boxShadow: "none",
      borderRadius: "5px",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#000",
      },
    };
  },
  valueContainer: (provided) => {
    return {
      ...provided,
      padding: "0 10px 0 10px",
      flexWrap: "nowrap",
      width: "45px",
      height: "35px",
    };
  },
  singleValue: (provided) => {
    return {
      ...provided,
      color: "#000",
      fontSize: "14px",
      width: "100%",
    };
  },
  placeholder: (provided) => {
    return { ...provided, display: "none", color: "#000" };
  },
  dropdownIndicator: (provided) => {
    return {
      ...provided,
      color: "#000",

      padding: "1px 1px 1px 1px",
      "&:hover": { color: "#000" },
    };
  },

  indicatorSeparator: (provided) => {
    return {
      ...provided,
      display: "none",
    };
  },
};
