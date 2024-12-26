import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/providers/AuthProvider';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

export function AdminProtectedRoute({ children }: AdminProtectedRouteProps) {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  // TODO: Add proper admin role check
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}