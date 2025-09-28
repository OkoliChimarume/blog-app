import axios from 'axios';

const API_BASE_URL = 'http://localhost:1337/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Posts API
export const postsAPI = {
  // Get all posts (get request)
  getAll: async (searchQuery = '') => {
    try {
      const params = searchQuery ? { search: searchQuery } : {};
      const response = await api.get('/posts?populate=PostImage', { params });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  // Get single post by ID
  getById: async (id) => {
    try {
      const response = await api.get(`/posts/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  },

  // Create new post
  create: async (postData) => {
    try {
      const response = await api.post('/posts', postData);
      return response.data.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },

  // Update existing post
  update: async (id, postData) => {
    try {
      const response = await api.put(`/posts/${id}`, postData);
      return response.data.data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  },

  // Delete post
  delete: async (id) => {
    try {
      const response = await api.delete(`/posts/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  },
};

// Health check
export const healthCheck = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

export default api;