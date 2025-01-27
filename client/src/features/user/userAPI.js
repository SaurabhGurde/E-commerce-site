export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch( process.env.REACT_APP_SERVER_URL + '/orders/own/') 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser(user) {
  return new Promise(async (resolve) =>{
    const response = await fetch( process.env.REACT_APP_SERVER_URL + '/users/own', 
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      }
    ) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch( process.env.REACT_APP_SERVER_URL + '/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    resolve({ data });
  });
}


