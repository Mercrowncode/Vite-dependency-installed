import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './config';

export async function checkAdminRole(userId: string): Promise<boolean> {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    return userDoc.exists() && userDoc.data()?.roles?.admin === true;
  } catch (error) {
    console.error('Error checking admin role:', error);
    return false;
  }
}

export async function grantAdminRole(userId: string): Promise<void> {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, {
    roles: {
      admin: true,
      createdAt: new Date().toISOString(),
    },
  }, { merge: true });
}