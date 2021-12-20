import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="row">
          <div className="col-md-5">
            <h1>
              VIDEO
              <br />
              <span>Blogging</span>
            </h1>
            <p className="para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Libero{" "}
              <br /> dolor reiciendis facilis sit voluptas distinctio quia odio
              illum <br /> dolore! Adipisci eveniet distinctio optio doloremque{" "}
              <br />
              saepe perferendis deleniti accusamus architecto quis
              <br />.
            </p>
            <button className="btn1">Get Started</button>
            <button className="btn2">Free demo</button>
          </div>
          <div className="col-md-7">
            <img
              className="img-fluid"
              src="https://cdn.dribbble.com/users/3639405/screenshots/9685335/media/dc97db3a11721dcd8241cfe564b6ec30.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
