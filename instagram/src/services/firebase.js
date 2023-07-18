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

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, //currently logged in user doc id(karl's profile)
  profileId, // the user that karl requests to follow
  isFollowingProfile //true/false (am I currently followinf the person?)
) {
  // const result = await firebase.firestore().collection('users').limit(10).get();

  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers() {
  // const result = await firebase.firestore().collection('users').limit(10).get();

  return;
}
