const getErrorMessage = error => {
  switch (error) {
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/wrong-password':
      return 'Wrong password';
    case 'auth/invalid-email':
      return 'Invalid Email';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters';
    case 'auth/too-many-requests':
      return 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.';
    default:
      return error;
  }
};

export default {
  getErrorMessage,
};
