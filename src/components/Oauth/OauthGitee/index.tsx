import { loginByGiteeUsingGet } from '@/services/xnbi/loginController';
import { message } from 'antd';

export const OauthGitee = {
  getCode() {
    const authorize_uri = 'https://gitee.com/oauth/authorize';
    const client_id = 'b362ff5e6876e63ab4bc217f94bf0d05158f20f1ceadad0c8be8fd90299a7c44';
    const redirect_uri = 'http://localhost:8000/user/login';
    location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    localStorage.setItem('login_state', 'GITEE');
  },

   async getToken(code: string) {
    const state = localStorage.getItem('login_state') || '';
    const params: API.loginByGiteeUsingGETParams = { code: code, state: state };
    let msg = await loginByGiteeUsingGet(params);
    // console.log('params', params);
    if (msg.code === 200) {
      console.log('result : ', msg);
      // 保存token到localStorage
      let token:string = msg.data ?? '';
      localStorage.setItem('accessToken', token);
      // message.success(defaultLoginSuccessMessage);
      message.success('登录成功');
      return token;
    }
  },
};

export default OauthGitee;
