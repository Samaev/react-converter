/* eslint-disable array-callback-return */
import { useState } from "react";

export const Convert = ({ taxes }) => {
  const[inputFirst, setInputFirst] = useState(1);
  const[inputSecond, setInputSecond] = useState(1);
  const[multiplier1, setMultiplier1] = useState(25.1866);
  const[multiplier2, setMultiplier2] = useState(25.1866);

  return (
    <>
    <p>Choose the amount</p>
      <form>
        <input
          type="number"
          value={inputFirst}
          onFocus={e => e.currentTarget.select()}
          onChange={(event)=>{
            setInputFirst(event.target.value);
            setInputSecond('');
            setInputSecond((event.target.value * multiplier1 / multiplier2).toFixed(2))
          }}
        ></input>
        <select
          onChange={(event)=>{
            taxes.map(tax => {
              if (event.target.value === tax.txt) {
                setMultiplier1(tax.rate);
                setInputSecond((inputFirst * tax.rate / multiplier2).toFixed(3))
              }
            }
          )
          }}
        >
          {taxes.map(tax=>(
            <option>{tax.txt}</option>
          ))}
        </select>
      <p>{inputFirst}</p>
      </form>

      <p>Choose the amount</p>
      <form>
        <input
          type="number"
          value={inputSecond}
          onFocus={e => e.currentTarget.select()}
          onChange={(event)=>{
            setInputSecond(event.target.value)
            setInputFirst(0);
            setInputFirst((event.target.value * multiplier2 / multiplier1).toFixed(2))
          }}
        ></input>
          
        <select
          onChange={(event)=>{
            taxes.map(tax => {
              if (event.target.value === tax.txt) {
                setMultiplier2(tax.rate);
                setInputFirst((inputSecond * tax.rate / multiplier1).toFixed(2))
              }
            });
            
          }}>
        {taxes.map(tax=>(
            <option>{tax.txt}</option>
          ))}
        </select>

        <p>{inputSecond}</p>
      </form>
      <h2>List of all Exchange Values</h2>
     <ol>
        {taxes.map(tax=>(
          <li className="item" key={tax.r030}>{tax.txt}  -  {tax.rate}</li>
        ))}
     </ol>
    </>
  )
}