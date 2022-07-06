import { auth, signInWithEmailAndPassword } from "../../services/firebase.js";

const authorization = async (req, res) => {
  const { email, password } = req.body.formData;

  try {
    const loginResult = await signInWithEmailAndPassword(auth, email, password);
    res.json({
      data: loginResult.user,
    });
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

export default { authorization };
