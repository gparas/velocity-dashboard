const ERROR_CODE = {
  'auth/user-not-found': 'User not found',
  'auth/email-already-in-use': 'Email already in use',
  'auth/wrong-password': 'Wrong password',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/too-many-requests':
    'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
};

export default {
  ERROR_CODE,
};
