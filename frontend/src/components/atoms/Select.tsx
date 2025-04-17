interface SelectProps {
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
  }
  
  const Select = ({ options, onChange }: SelectProps) => {
    return (
      <select onChange={(e) => onChange(e.target.value)} className="p-2 border rounded">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Select;
  