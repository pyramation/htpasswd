import md5 from 'apache-md5';

export default (username, password) => {
  const auth = md5(password);
  return {
    auth,
    userauth: `${username}:${auth}`,
    header: Buffer.from(`${username}:${password}`).toString('base64')
  };
};
