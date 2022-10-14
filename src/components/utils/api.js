const fetchIngredients = (baseUrl) => {

  return fetch(`${baseUrl}/ingredients`)
    .then(checkRes);
};

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  };

  return Promise.reject(`Ошибка: ${res.status}`);
};

export { fetchIngredients };