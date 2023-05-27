export const getIngredients = (url) => {
  return fetch(`${url}/ingredients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getOrderNumber = (url, idIngredients) => {
  return fetch(`${url}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: idIngredients
    }),
  });
};

export const loginUser = (url, formField) => {
  return fetch(`${url}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": formField.email,
      "password": formField.password,
    }),
  });
};

export const updateTokens = (url, refreshToken) => {
  return fetch(`${url}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "token": refreshToken
    }),
  });
};

export const getUser = (url, accessToken) => {
  return fetch(`${url}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    },
  });
};

export const updateUser = (url, accessToken, formField) => {
  return fetch(`${url}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    },
    body: JSON.stringify({
      "email": formField.email,
      "password": formField.password,
      "name": formField.name,
    }),
  });
};

export const registrationUser = (url, formField) => {
  return fetch(`${url}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": formField.email,
      "password": formField.password,
      "name": formField.name,
    }),
  });
};

export const forgotPassword = (url, formField) => {
  return fetch(`${url}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": formField.email,
    }),
  });
};

export const resetPassword = (url, formField) => {
  return fetch(`${url}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "password": formField.password,
      "token": formField.token,
    }),
  });
};
