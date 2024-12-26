import { ThemeProvider } from 'next-themes';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/providers/AuthProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { VehicleListingPage } from '@/pages/VehicleListingPage';
import { VehicleDetailsPage } from '@/pages/VehicleDetailsPage';
import { FinancingPage } from '@/pages/FinancingPage';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { AdminProtectedRoute } from '@/components/admin/AdminProtectedRoute';
import { Toaster } from '@/components/ui/toaster';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicles" element={<VehicleListingPage />} />
            <Route path="/vehicles/:id" element={<VehicleDetailsPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/admin"
              element={
                <AdminProtectedRoute>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;