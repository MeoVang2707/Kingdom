import axios from 'src/utils/axios';

class AuthService {
  setAxiosInterceptors = ({ onLogout }: { onLogout: Function }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      },
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    this.setSession(accessToken);
  }

  loginWithEmailAndPassword = (email: string, password: string) =>
    new Promise((resolve, reject) => {
      axios
        .post('/api/account/login', { email, password })
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.accessToken);
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

  loginInWithToken = async () => {
    try {
      const res = await axios.get('/Account/Info');
      return res.data;
    } catch (e) {
      return '';
    }
  };
  // new Promise((resolve, reject) => {

  //     .then((response) => {
  //       if (response.data.user) {
  //         resolve(response.data);
  //       } else {
  //         reject(response.data.error);
  //       }
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  // });

  loginInWithAddress = async (address: string) => {
    try {
      const res = await axios.post('/LoginWithAddress', { address });
      return res.data.message;
    } catch (e) {
      return '';
    }
  };

  validateSignature = async (body: {
    address: string;
    signature: string;
    message: string;
  }) => {
    try {
      const res = await axios.post('/ValidateSignature', body);
      this.setSession(res.data.token);
      this.loginInWithToken();
      return res.data.token;
    } catch (e) {
      return '';
    }
  };

  logout = () => {
    this.setSession(null);
  };

  setSession = (accessToken?: string | null) => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem('accessToken');

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
