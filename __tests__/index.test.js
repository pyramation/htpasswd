import htpasswd from '../src';
import cases from 'jest-in-case';
import md5 from 'apache-md5';

cases(
  'md5',
  (opts) => {
    const { auth, header } = htpasswd('username', opts.name);
    expect(md5(opts.name, auth) === auth).toBe(true);
  },
  [
    { name: 'asdfsdf' },
    { name: 'psdfsasswsadfdrd2' },
    { name: 'pasdfsdfssword3' }
  ]
);
