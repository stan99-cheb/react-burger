const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  };

  return Promise.reject(`Ошибка: ${res.status}`);
};

const Api = ((checkRes) => {

  const getData = (url) => {

    return fetch(url)
      .then(checkRes);
  }

  return {
    getData
  };

})(checkRes);

export default Api;