'use client';

import { auth } from '../firebase';

export default function Home() {
  console.log(auth.currentUser);
  return <div>Hello</div>;
}
