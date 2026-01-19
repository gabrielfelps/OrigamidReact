const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    const { checked, value } = target;

    setValue((prev) => {
      if (checked) {
        return [...prev, value];
      } else return prev.filter((item) => item !== value);
    });
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
