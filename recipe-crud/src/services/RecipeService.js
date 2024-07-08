import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // No response received
      console.error('Network Error:', error.request);
      return Promise.reject({ message: 'Network Error' });
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject({ message: error.message });
    }
  }
);

export default {
  getRecipes() {
    return apiClient.get('/recipes')
  },
  // getRecipe(id) {
  //   return apiClient.get(`/recipes/${id}`)
  // }
  deleteRecipe(id) {
    return apiClient.delete(`/recipes/${id}`)
  },
  createRecipe(recipe) {
    return apiClient.post('/recipes', recipe)
  }
}
