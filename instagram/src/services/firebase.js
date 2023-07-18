import { Profiler } from 'react';
import { firebase, FieldValue } from '../lib/firebase';

export const doesUsernameExist = async (username) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  // return result.docs.map((user) => user.data().length > 0);
  return result.docs.length > 0;
};

// get user from the firestore where userid === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userid', '==', userId)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  // console.log('getUserByUserId User', user);
  return user;
}

export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection('users').limit(10).get();

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userid !== userId && !following.includes(profile.userid)
    );
}
