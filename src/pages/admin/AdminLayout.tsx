import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useStore';
import { LayoutGrid, Users, Package, Bell, Settings, LogOut } from 'lucide-react';
import { Link } from '../../components/ui/Link';

const AdminLayout: React.FC = () => {
  const { user, signOut } = useAuthStore();
  
  // Check if user is admin - you'll need to implement this check based on your user roles
  const isAdmin = user?.email?.endsWith('@indiamart.com');
  
  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: Package, label: 'Products', path: '/admin/products' },
    { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2E5B9A] text-white">
        <div className="p-4 border-b border-white/10">
          <Link href="/admin" className="text-xl font-bold flex items-center">
            <span className="text-[#F76B1C]">India</span>MART Admin
          </Link>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="mt-8 pt-4 border-t border-white/10">
            <button
              onClick={() => signOut()}
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors w-full text-left"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;