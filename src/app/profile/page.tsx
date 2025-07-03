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
    <div className="min-h-screen p-4 bg-blue-700 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/30">
        <div className="p-8 md:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-5xl font-extrabold mb-2">Hoş Geldin, {userProfile.name}!</h1>
              <p className="text-xl text-gray-300">Algoritma yolculuğunda gösterdiğin ilerleme:</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-4xl font-bold text-teal-400">{userProfile.solvedProblems.length}</p>
              <p className="text-lg text-gray-300">Çözülen Problem</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Çözülen Problemler Kartı */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-white mb-4">Çözülen Problemler</h3>
              {userProfile.solvedProblems.length > 0 ? (
                <ul className="list-disc list-inside text-gray-300 max-h-48 overflow-y-auto custom-scrollbar">
                  {userProfile.solvedProblems.map((problemId, index) => (
                    <li key={index} className="mb-1">{problemId}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">Henüz çözülmüş problem yok. Hadi bir tane çöz!</p>
              )}
            </div>

            {/* Rozetler Kartı */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/30">
              <h3 className="text-2xl font-bold text-white mb-4">Kazanılan Rozetler</h3>
              {badges.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {badges.map((badge, index) => (
                    <div key={index} className="bg-gray-700 rounded-md p-3 flex items-center space-x-3 shadow-md">
                      {/* Basit bir rozet ikonu */}
                      <span className="text-yellow-400 text-2xl">⭐</span>
                      <p className="text-gray-200 font-medium">{badge}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">Henüz rozet kazanılmadı. Daha fazla problem çözerek rozetleri topla!</p>
              )}
            </div>

            {/* Tamamlanan Konular Kartı (İsteğe bağlı, eğer verisi varsa) */}
            {userProfile.completedTopics.length > 0 && (
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg border border-white/30 md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Tamamlanan Öğrenme Konuları</h3>
                <ul className="list-disc list-inside text-gray-300 max-h-48 overflow-y-auto custom-scrollbar">
                  {userProfile.completedTopics.map((topic, index) => (
                    <li key={index} className="mb-1">{topic}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}