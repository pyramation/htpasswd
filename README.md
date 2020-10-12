# htpasswd ![Build Status](https://travis-ci.org/pyramation/htpasswd.svg?branch=master)

Utilities for htpasswd username password generation

## Installation

```sh
npm install @pyramation/htpasswd
```

## Usage 

```js
import htpasswd from '@pyramation/htpasswd';

const { auth, header } = htpasswd(username, password);
```

You will get the auth hash, as well as the header you'll need for basic-auth