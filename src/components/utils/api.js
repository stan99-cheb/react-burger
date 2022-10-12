const getData = (url) => {

  return fetch(url)
    .then(checkRes);
};

const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  };

  return Promise.reject(`Ошибка: ${res.status}`);
};

export { getData };