import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'NO_NEED_FOR_API_KEY_BECAUSE_ITS_DEMO',
  projectId: 'demo-test',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');
