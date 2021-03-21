const API = 'https://the-learner-widget.herokuapp.com/api';

export const getAllQuestionHelper = () => {
  return fetch(`${API}/all/questions`, {
    method: 'GET',
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};

export const addQuestionHelper = input => {
  return fetch(`${API}/add/question/${input.user}`, {
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
