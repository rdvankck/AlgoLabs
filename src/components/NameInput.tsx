'use client';

import React, { useState } from 'react';
import { getUserProfile, saveUserProfile } from '@/utils/localStorageUtils';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';

const NameInput: React.FC = () => {
  const [name, setName] = useState('');
  const router = useRouter();
  const { setUserName } = useUser();

  const handleLogin = () => {
    if (name.trim()) {
      const userProfile = getUserProfile(name.trim());
      saveUserProfile(userProfile); // Ensure the profile exists or is updated
      setUserName(name.trim()); // Update global user state
      router.push('/'); // Redirect to home, which will now show main content
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lütfen Adınızı Girin</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 text-gray-800"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleLogin();
            }
          }}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Başla
        </button>
      </div>
    </div>
  );
};

export default NameInput;