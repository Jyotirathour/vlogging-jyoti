import "./home.css";

const Home = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://source.unsplash.com/1400x500/?mobile,computer" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>WELCOME TO VIDEO BLOGGING</h1>
                    <p>Quick action join with us</p>
                    <button class="btn btn-danger">Get started</button>
                    <button class="btn btn-success">Free Demo</button>
                    
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1400x500/?mobile,computer" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>LET'S CREATE VLOG</h1>
                    <p>Creativity doesn't need limits </p>
                    <button class="btn btn-danger">Get started</button>
                    <button class="btn btn-primary">Free Demo</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1400x500/?mobile,computer" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h1>EXPLORE YOUR VIDEO</h1>
                    <p>The best way to predict the future is to create it</p>
                    <button class="btn btn-danger">Get started</button>
                    <button class="btn btn-primary">Free Demo</button>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>



     
  );
};

export default Home;
