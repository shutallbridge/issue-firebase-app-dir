This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

# Starting the Firebase Emulator

Install the Firebase CLI

```
npm install -g firebase-tools
```

Start the emulator as a demo project

```
firebase emulators:start --project demo-test
```

# Warning

```
warn  - ./node_modules/node-fetch/lib/index.js
Module not found: Can't resolve 'encoding' in '/Users/shuhighbridge/Development/JS-Sandbox/issue-firebase-app-dir/node_modules/node-fetch/lib'

Import trace for requested module:
./node_modules/node-fetch/lib/index.js
./node_modules/@firebase/auth/dist/node-esm/index.js
./node_modules/firebase/auth/dist/index.mjs
./firebase.ts
./app/page.tsx
```
