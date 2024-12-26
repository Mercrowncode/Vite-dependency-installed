import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config';
import { SignUpData, AuthResponse } from './types';
import { formatAuthError } from './utils';

export async function signIn(email: string, password: string): Promise<AuthResponse<User>> {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return { data: user };
  } catch (error) {
    console.error('Sign in error:', error);
    return { error: formatAuthError(error) };
  }
}

export async function signUp(email: string, password: string, userData: SignUpData): Promise<AuthResponse<User>> {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    
    // Create user profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      roles: {
        user: true,
        createdAt: new Date().toISOString()
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    return { data: user };
  } catch (error) {
    console.error('Sign up error:', error);
    return { error: formatAuthError(error) };
  }
}

export async function signOut(): Promise<AuthResponse> {
  try {
    await firebaseSignOut(auth);
    return {};
  } catch (error) {
    console.error('Sign out error:', error);
    return { error: formatAuthError(error) };
  }
}

export function onAuthStateChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}