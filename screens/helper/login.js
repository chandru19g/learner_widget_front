const API = 'https://learner-widget.herokuapp.com/api';

export const loginHelper = input => {
  return fetch(`${API}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};

export const createAccountHelper = input => {
  return fetch(`${API}/createAccount`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};

export const getOTP = email => {
  return fetch(`${API}/forgotpassword`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};

export const savePasswordtoDB = input => {
  return fetch(`${API}/set/password`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};
