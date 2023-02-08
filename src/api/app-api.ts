import axios from 'api/axiosHelper';

export const loginApi = {
  signIn() {
    return axios.get('*****', {
      params: {
        clientCode: '***',
        username: '***',
        password: '*****',
        request: '****',
      },
    });
  },
};
