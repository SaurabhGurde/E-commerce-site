export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const response = await fetch( process.env.REACT_APP_SERVER_URL + 'http://') 
    const data = await response.json()
    resolve({data})
  }
  );
}
