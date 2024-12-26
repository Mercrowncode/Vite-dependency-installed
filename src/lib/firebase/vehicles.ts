import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { db } from './config';
import { Vehicle } from '@/lib/types/vehicle';

const VEHICLES_COLLECTION = 'vehicles';

export async function createVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, VEHICLES_COLLECTION), {
    ...vehicle,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}

export async function updateVehicle(id: string, vehicle: Partial<Vehicle>): Promise<void> {
  await updateDoc(doc(db, VEHICLES_COLLECTION, id), {
    ...vehicle,
    updatedAt: new Date().toISOString(),
  });
}

export async function deleteVehicle(id: string): Promise<void> {
  await deleteDoc(doc(db, VEHICLES_COLLECTION, id));
}

export async function getVehicles(): Promise<Vehicle[]> {
  const q = query(
    collection(db, VEHICLES_COLLECTION),
    orderBy('createdAt', 'desc')
  );
  
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  } as Vehicle));
}