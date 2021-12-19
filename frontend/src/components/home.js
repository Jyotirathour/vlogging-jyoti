import "./home.css";

const Home = () => {
  return (
    <div class="container">
      <div class="navbar">
        <div class="icon">
          <h2 class="logo">VloG</h2>
        </div>
        <div class="menu">
          <ul>
            <li>
              <a herf="#">HOME</a>
            </li>
            <li>
              <a herf="#">ABOUT</a>
            </li>
            <li>
              <a herf="#">INFO</a>
            </li>
            <li>
              <a herf="#">COMMUNITY</a>
            </li>
            <li>
              <a herf="#">CONTACT</a>
            </li>
          </ul>
        </div>
        <div class="btn">
          <button class="btn-1">Login</button>
          <button class="btn-2">Signup</button>
        </div>
      </div>
      <div class="content">
        <h1>
          VIDEO
          <br />
          <span>Blogging</span>
        </h1>
        <p class="para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.Libero <br />{" "}
          dolor reiciendis facilis sit voluptas distinctio quia odio illum{" "}
          <br /> dolore! Adipisci eveniet distinctio optio doloremque <br />
          saepe perferendis deleniti accusamus architecto quis
          <br />.
        </p>
        <button class="btn1">Get Started</button>
        <button class="btn2">Free demo</button>
        <div class="img">
          <img
            src="https://cdn.dribbble.com/users/3639405/screenshots/9685335/media/dc97db3a11721dcd8241cfe564b6ec30.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
