import { signInWithPopup, signOut }
from 'firebase/auth';

import { auth, provider }
from '../firebase';

export default function Login({
  user,
  setUser
}) {
  const login = async () => {
    try {
      const result =
        await signInWithPopup(
          auth,
          provider
        );

        setUser({
            name: result.user.displayName,
            email: result.user.email
          });
    } catch (err) {
        console.error('LOGIN ERROR:', err);
        alert(err.message);
      
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <button
          onClick={login}
          className="btn-primary"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">
            Welcome, {user.name}
          </span>

          <button
            onClick={logout}
            className="btn-primary"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}