import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiUser } from "react-icons/fi";
import { FcBusinessContact } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";

function App() {
  const [user, setUser] = useState();

  function handleRefresh() {
    window.location.reload(); // Sayfayı yenile
  }

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?nat=tr");
      setUser(data.results[0]);
    } catch {
      alert("Veriler alınırken hata oluştu!!");
    }
  };

  const showData = (key) => {
    if (key === "user") {
      document.getElementById(
        "showDiv"
      ).innerHTML = `Merhaba, benim adım ${user.name.first} ${user.name.last}`;
    }
    if (key === "contact") {
      document.getElementById(
        "showDiv"
      ).innerHTML = `E-mail adresim : ${user.email}`;
    }
    if (key === "calendar") {
      document.getElementById("showDiv").innerHTML = `Doğum günüm : ${new Date(
        user.registered.date
      ).toLocaleDateString()}`;
    }
    if (key === "globe") {
      document.getElementById(
        "showDiv"
      ).innerHTML = `Adresim : ${user.location.street.number} ${user.location.street.name}`;
    }
    if (key === "phone") {
      document.getElementById(
        "showDiv"
      ).innerHTML = `Telefon numaram : ${user.phone}`;
    }
    if (key === "lock") {
      document.getElementById(
        "showDiv"
      ).innerHTML = `Şifrem : ${user.login.password}`;
    }
  };

  return (
    <div className="App">
      {user ? (
        <>
          <div className="Container">
            <div className="Main">
              <div>
                <img
                  className="userPhoto"
                  src={`${user.picture.large}`}
                  alt="userPhoto"
                />
              </div>
              <div>
                <h2 id="showDiv">
                  Merhaba, benim adım {user.name.first} {user.name.last}
                </h2>
              </div>
              <div className="icons">
                <div
                  onMouseOver={() => {
                    showData("user");
                  }}
                >
                  <FiUser />
                </div>
                <div
                  onMouseOver={() => {
                    showData("contact");
                  }}
                >
                  <FcBusinessContact />
                </div>
                <div
                  onMouseOver={() => {
                    showData("calendar");
                  }}
                >
                  <FcCalendar />
                </div>
                <div
                  onMouseOver={() => {
                    showData("globe");
                  }}
                >
                  <FcGlobe />
                </div>
                <div
                  onMouseOver={() => {
                    showData("phone");
                  }}
                >
                  <FcPhone />
                </div>
                <div
                  onMouseOver={() => {
                    showData("lock");
                  }}
                >
                  <FcLock />
                </div>
              </div>
            </div>
            <button className="RefleshButton" onClick={handleRefresh}>
              Yenile
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="Loader-Container"></div>
        </>
      )}
    </div>
  );
}

export default App;
