const baseOptions = {
  method: 'GET',
  credentials: 'include',
};

const validateRequest = async (res) => {
  if (res.status === 204) return '';

  const response = await res.json();
  if (res.status >= 200 && res.status < 400) return response;

  if (res.status >= 500)
    throw new Error('Server error. Detals: ' + response.message);
  if (res.status >= 400)
    throw new Error('Client error. Detals: ' + response.message);
  throw new Error('Unknown error. Details: ' + response.message);
};

const makeRequest = async (url, method = 'GET', formData, options) => {
  const requestOptions = {
    ...baseOptions,
    method,
    ...options,
    body: formData,
  };

  return fetch(url, requestOptions).then(validateRequest);
};

export const httpClientFormData = {
  post: (url, formData) => makeRequest(url, 'POST', formData),
  put: (url, formData) => makeRequest(url, 'PUT', formData),
  patch: (url, formData) => makeRequest(url, 'PATCH', formData),
};
