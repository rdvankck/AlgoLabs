'use client';

import React, { useState, useEffect } from 'react';
import { getUserProfile, calculateBadges, UserProfile } from '@/utils/localStorageUtils';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const lastLoggedInUser = localStorage.getItem('algolabs_last_logged_in_user');
    if (lastLoggedInUser) {
      const profile = getUserProfile(lastLoggedInUser);
      setUserProfile(profile);
      setLoading(false);
    } else {
      router.push('/'); // Redirect to home if no user is logged in
    }
  }, [router]);

  if (loading) {
    return <p className="text-center text-gray-600 py-12">Profil yükleniyor...</p>;
  }

  if (!userProfile) {
    return <p className="text-center text-gray-600 py-12">Profil bulunamadı.</p>;
  }

  const badges = calculateBadges(userProfile.solvedProblems);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Kullanıcı Profili</h2>
        <div className="mb-4">
          <p className="text-lg text-gray-200"><strong>Ad:</strong> {userProfile.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-200"><strong>Çözülen Problem Sayısı:</strong> {userProfile.solvedProblems.length}</p>
          {userProfile.solvedProblems.length > 0 && (
            <div className="mt-2">
              <h4 className="text-md font-semibold text-gray-300">Çözülen Problemler:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {userProfile.solvedProblems.map((problemId, index) => (
                  <li key={index}>{problemId}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mb-4">
          <p className="text-lg text-gray-200"><strong>Tamamlanan Konular:</strong> {userProfile.completedTopics.length}</p>
          {userProfile.completedTopics.length > 0 && (
            <div className="mt-2">
              <h4 className="text-md font-semibold text-gray-300">Tamamlanan Konular:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {userProfile.completedTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <p className="text-lg text-gray-200"><strong>Rozetler:</strong></p>
          {badges.length > 0 ? (
            <ul className="list-disc list-inside text-gray-300">
              {badges.map((badge, index) => (
                <li key={index}>{badge}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300">Henüz rozet kazanılmadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}
