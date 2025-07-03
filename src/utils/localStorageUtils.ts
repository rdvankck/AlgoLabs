export interface UserProfile {
  name: string;
  solvedProblems: string[];
  completedTopics: string[];
  badges: string[];
}

const STORAGE_KEY_PREFIX = 'algolabs_user_';

export const getUserProfile = (name: string): UserProfile => {
  const key = `${STORAGE_KEY_PREFIX}${name.toLowerCase()}`;
  const storedProfile = localStorage.getItem(key);
  if (storedProfile) {
    return JSON.parse(storedProfile);
  }
  // Default profile for a new user
  return {
    name: name,
    solvedProblems: [],
    completedTopics: [],
    badges: [],
  };
};

export const saveUserProfile = (profile: UserProfile): void => {
  const key = `${STORAGE_KEY_PREFIX}${profile.name.toLowerCase()}`;
  localStorage.setItem(key, JSON.stringify(profile));
};

export const updateUserProfile = (name: string, updates: Partial<UserProfile>): UserProfile => {
  let profile = getUserProfile(name);
  profile = { ...profile, ...updates };
  saveUserProfile(profile);
  return profile;
};

export const calculateBadges = (solvedProblems: string[]): string[] => {
  const badges: string[] = [];
  const solvedCount = solvedProblems.length;

  if (solvedCount >= 1) {
    badges.push("İlk Problem Çözücü");
  }
  if (solvedCount >= 5) {
    badges.push("Acemi Kodlayıcı");
  }
  if (solvedCount >= 10) {
    badges.push("Orta Seviye Kodlayıcı");
  }
  // Add more badge criteria as needed
  return badges;
};
