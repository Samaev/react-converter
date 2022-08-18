export const Convert = ({ taxes }) => {
  return (
    <>
    <p>Choose the amount</p>
      <from>
        <input type="number" ></input>
        <select>
          {taxes.map(tax=>(
            <option>{tax.txt}</option>
          ))}
        </select>

      </from>

      <p>Choose the amount</p>
      <from>
        <input type="number" ></input>
        <select>
        {taxes.map(tax=>(
            <option>{tax.txt}</option>
          ))}
        </select>
      </from>
      <h2>List of all Exchange Values</h2>
      {taxes.map(tax=>(
            <li key={tax.r030}>{tax.txt}  -  {tax.rate}</li>
          ))}
    </>
  )
}