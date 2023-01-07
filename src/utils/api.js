const fetchIngredients = (baseUrl) => {

  return fetch(`${baseUrl}/ingredients`)
    .then(checkRes);
};

const fetchOrderNumber = (baseUrl, ingredientsId) => {

  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      // authorization: '5743d2b2-8d60-4e50-9a9c-7a3ab60b2c12',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ingredients": ingredientsId
    })
  })
    .then(checkRes);
}

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  };

  return Promise.reject(`Ошибка: ${res.status}`);
};

export { fetchIngredients, fetchOrderNumber };