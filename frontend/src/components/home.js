const Home = () => {
  const name = "Leon S Kennedy";

  // You can also store JSX syntax in variable to display
  const formula = (
    <h3>
      H<sub>2</sub>0
    </h3>
  );

  // You can call JS functions inside JSX using {}
  const sum = (a, b) => {
    return a + b;
  };

  // !!!!!!! Object cannot be displayed directly in JSX
  // You have to put individual key to display it
  const userdetails = {
    name: "Leon S Kennedy",
    email: "leon@mail.com",
    age: 23,
  };

  return (
    <div>
      <h1>Home Component</h1>
      <h2>{name}</h2>
      {formula}
      {sum(34, 345)}
      <br />
      {/* not valid */}
      {/* {userdetails} */}
      <h2>Name : {userdetails.name}</h2>
      <h2>Email : {userdetails.email}</h2>
      <h2>Age : {userdetails.age}</h2>
    </div>
  );
};

export default Home;
