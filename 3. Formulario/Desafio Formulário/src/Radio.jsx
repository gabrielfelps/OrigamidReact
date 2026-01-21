const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) return null;

  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: '2px solid #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            value={option}
            type="radio"
            name=""
            id={id}
            onChange={onChange}
            checked={value === option}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
