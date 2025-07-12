'use client';

import {
  LayoutDashboard,
  Users,
  CreditCard,
  LogOut,
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { label: 'Dashboard', href: '/', icon: <LayoutDashboard size={20} /> },
  { label: 'Add teacher', href: '/teachers/new', icon: <UserPlus size={20} /> },
  { label: 'Teachers', href: '/teachers', icon: <Users size={20} /> },
  { label: 'Payments', href: '/payments', icon: <CreditCard size={20} /> },
];

// Helper function to decide active state
const isActive = (pathname: string, href: string) => {
  if (href === '/') return pathname === '/';
  if (href === '/teachers') return pathname.startsWith('/teachers') && pathname !== '/teachers/new';
  return pathname === href;
};

export default function Sidebar() {
  const pathname = usePathname();

  const linkClasses = (href: string) =>
    clsx(
      'flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-all ease-in-out duration-300 border-s-3 border-s-transparent',
      isActive(pathname, href) && 'bg-gray-800 border-s-white'
    );

  return (
    <aside className="w-64 bg-gray-900 text-white hidden md:flex flex-col min-h-screen">
      <nav>
        {navItems.map(({ label, href, icon }) => (
          <Link key={href} href={href} className={linkClasses(href)}>
            {icon}
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-3">
        <button className="flex items-center gap-2 px-4 py-3 text-md cursor-pointer text-red-300 hover:text-red-500">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
