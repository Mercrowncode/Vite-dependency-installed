import { useState, useEffect } from 'react';
import { useAuthContext } from '@/providers/AuthProvider';
import { checkAdminRole } from '@/lib/firebase/admin';

export function useAdmin() {
  const { user } = useAuthContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAdmin() {
      if (!user) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      const hasAdminRole = await checkAdminRole(user.uid);
      setIsAdmin(hasAdminRole);
      setLoading(false);
    }

    checkAdmin();
  }, [user]);

  return { isAdmin, loading };
}