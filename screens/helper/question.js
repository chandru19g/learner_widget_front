const API = 'https://learner-widget.herokuapp.com/api';

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

export const getQuestionByUserHelper = userId => {
  return fetch(`${API}/questions/${userId}`, {
    method: 'GET',
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};

export const addCommentHelper = input => {
  return fetch(`${API}/add/answer/question/${input.user}/${input.question}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};

export const getQuestionHelper = questionId => {
  return fetch(`${API}/question/${questionId}`, {
    method: 'GET',
  })
    .then(result => result.json())
    .catch(error => console.error(error));
};
