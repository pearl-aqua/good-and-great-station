import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./index";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const popupLogin = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      window.localStorage.setItem("gas_id", user.uid);

      return { id: user.uid, email: user.email };
    })
    .catch((error) => {
      alert(error);
    });

export const userLogout = () =>
  signOut(auth)
    .then(() => {
      window.localStorage.removeItem("gas_id");
      alert("로그아웃 처리 되었습니다");
    })
    .catch((error) => {
      alert(error);
    });

export const getUserInfo = async ({ id, email }) => {
  const userRef = doc(store, "g_user", id);
  const userInfo = await getDoc(userRef);

  if (userInfo.exists()) {
    return userInfo.data();
  } else {
    const userData = {
      id,
      email,
      questionId: [],
      optionsId: [],
    };
    await setDoc(doc(store, "g_user", id), userData);
    return userData;
  }
};
