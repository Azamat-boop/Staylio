import React from "react";
import { auth } from "../../firbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./GoogleSignIn.css";
// import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
    //  const navigate = useNavigate();
     const handleGoogleSignIn = async () => {
         const provider = new GoogleAuthProvider();
         try {
        // navigate('/')
      const result = await signInWithPopup(auth, provider);
      console.log("Данные пользователя:", result.user);
    } catch (error) {
        console.log("Ошибка входа:", error);
    }
  };

  return (
      <main>
      <div className="register">
        <div className="form_container">
          <form className="register_form">
            <h1 className="register_title">Вход в аккаунт</h1>
            <div className="form_item">
              <p>Email:</p>
              <input
                type="email"
                placeholder="Введите ваш email"
                required
              />
            </div>
            <div className="form_item">
              <p>Пароль:</p>
              <input
                type="password"
                placeholder="Введите пароль"
                required
              />
            </div>
            <div className="Voity_cpomoshy"><h2 className="text-[20px] font-bold">Войти с помощью</h2></div>
            <div style={{  textAlign: "center" }}>
              <button
                type="button"
                className="google-btn"
                onClick={handleGoogleSignIn}
                >
                <img
                  src="/src/assets/image.png"
                  alt="Google"
                  className="google-icon"
                  />
                <span>Войти через Google</span>
              </button>
            </div>
            <div className="form_submit">
              <button className="form_btn" type="submit">
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default GoogleSignIn;