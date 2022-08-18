const API_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

export const getExchange = ()=> {
  return fetch(API_URL)
  .then(res=>res.json())
  .catch(()=>({
    Response: 'False',
    Error: 'unexpected error'
  }));
}
