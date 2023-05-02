# Rastgele Kullanici Olusturma

### 💡 Kazanımlar

- useState kullanımı

- useEffect kullanımı

- axios ile api ye istek atma

- json tipindeki veriyi okuma ve kullanma


### Proje Adımları

Projenizin için bir klasör oluşturun ve bu klasör içinde React projenizi oluşturun.

`npx create-react-app .`

Sondaki nokta bulunduğunuz klasör içinde projenizi kurmak için gereklidir. Bu komutu kullandığınız klasör boş olmalıdır.

Projeniz kurulduktan sonra `src` klasörü içindeki şu dosyalar hariç diğer dosyaları silin: `App.css`, `App.js`,`index.css`, `index.js`.

`public` klasörü içindeki `index.html` hariç diğer dosyaları silin.

Şimdi de bu dosyaların içlerini temizleyelim.

`App.css` içini tamamen silin.

`App.js`
```javascript
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
```

`index.css`
```css
body {
  margin: 0;
}
```

`index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

`index.html`
```html
<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Random Kullanıcı Bilgileri</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

Uygulamamızı en basit haliyle çalışır hale getirdik. Şimdi terminalden uygulamamızı başlatalım.

`npm start`

Şimdi api'ye istek atıp gelen verileri kullanacağız. **https://randomuser.me/** adresine bir göz atmanızı öneririm.

Önce API isteğini yapacak olan paketimizi yükleyelim.

```
npm install axios
```

`App.js` e axios u import edelim.

```js
import axios from "axios";
```

Aldığınız değeri tutmak için `App` fonksiyonu içinde bir state parçası oluşturalım.

```js
const [user, setUser] = useState();
```

`App.js` e useState i import edelim.

```js
import { useState } from "react";
```

Şimdi de bu API isteğini yapacak `getUserData` isimli bir fonksiyon oluşturalım.
Veriyi başarılı bir şekilde aldığında ise az önce oluşturduğumuz state parçası içine kaydedecek.


```js
const getUserData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?nat=tr");
      setUser(data.results[0]);
    } catch {
      alert("Veriler alınırken hata oluştu!!");
    }
  };
```

`App.js` içerisinde `useEffect` kullanarak API isteğimizi gerçekleştirelim.

```js
useEffect(() => {
    getUserData();
  }, []);
```

Gelen veriyi konsola yazdırdığınızda şuna benzer bir veriyle karşılaşacaksınız.

```js
{
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "TR"
    }
```

Verilerin detaylı açıklaması için [şu adrese](https://randomuser.me/documentation)  göz atabilirsiniz.

Şu an için bizim ihtiyacımız olan değerler şunlar:

```js
name.first;
name.last;
email;
registered.date;
location.street.number;
location.street.name;
phone;
login.password;
```

Şimdi `name.first` ü ekrana yazdıralım. Api den veriler yüklenene kadar `Yükleniyor...` şeklinde bir metin göstermek istiyorum.

```js
return <div className="App">
    {user ?(
      <>{user.name.first}</>
    ):(
      <>Yükleniyor...</>
    )}
  </div>;
```

Herhangi bir sorun yok, o halde biraz düzenleme yapalım. 

Ekranda bir profil resmi ve onun altında 6 tane ikon koymak istiyorum. 

İkonları kullanabilmek için önce terminale şunu yazıyorum:

`npm install react-icons`

Kullanacağım uygun ikonları bulup import ediyorum

```js
import { FiUser } from "react-icons/fi";
import { FcBusinessContact } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
```

Her bir ikonun üzerine geldiğinde onunla alakalı olan veriyi, profil resmi ile ikonlar arasına yazdırmak istiyorum. 

Bunun için ise her bir ikona ait bir anahtar kelimeyi (örneğin `contact` gibi) fare üzerine geldiğinde `onMouseOver` fonksiyonu ile `showData` adlı fonksiyona
gönderelim.

Bu fonksiyonda ilgili anahtar kelimeyle id si `showDiv` olan elementin içine yazdırılmak isteneni `innerHTML` kullanarak yazdıralım.

```js
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
```


**Bu kadardı. [Buradan](https://CenkMerk.github.io/Rastgele-Kullanici-Olusturma) projenin çalışır halini inceleyebilirsiniz.**



