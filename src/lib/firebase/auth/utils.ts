import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config';
import { User as AppUser } from '@/lib/types/user';

export async function getUserProfile(user: User): Promise<AppUser | null> {
  try {
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (!userDoc.exists()) return null;
    
    return {
      id: user.uid,
      email: user.email!,
      roles: userDoc.data()?.roles,
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

export function formatAuthError(error: any): AuthError {
  const code = error.code || 'auth/unknown';
  let message = 'An unexpected error occurred';

  switch (code) {
    case 'auth/email-already-in-use':
      message = 'This email is already registered';
      break;
    case 'auth/invalid-email':
      message = 'Invalid email address';
      break;
    case 'auth/weak-password':
      message = 'Password should be at least 6 characters';
      break;
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      message = 'Invalid email or password';
      break;
  }

  return { code, message };
}