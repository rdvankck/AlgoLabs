'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

export default function Header() {
  const router = useRouter();
  const { userName, setUserName } = useUser();

  const handleLogout = () => {
    setUserName(null);
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-teal-600 cursor-pointer">
            AlgoLabs
          </h1>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6">
            {userName && (
              <>
                <Link href="/ogren" className="text-green-500 hover:text-blue-500 transition-colors">Öğren</Link>
                <Link href="/pratik" className="text-green-500 hover:text-blue-500 transition-colors">Pratik</Link>
                <Link href="/test" className="text-green-500 hover:text-blue-500 transition-colors">Test</Link>
                <Link href="/profile" className="text-green-500 hover:text-green-600 transition-colors">Kullanıcı Profili</Link>
              </>
            )}
            <Link href="/daily-challenge" className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">Günün Sorusu</Link>
          </nav>
          {userName ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 ml-auto"
            >
              Çıkış
            </button>
          ) : (
            <Link href="/">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 ml-auto"
              >
                Giriş
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
