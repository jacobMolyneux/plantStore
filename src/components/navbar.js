const Navbar = () => {
  return (
    <div id="navbarHolder">
      <div id="logoHolder">
        <h1 id="storeName">Plant Store</h1>
      </div>
      <ul id="linkHolder">
        <li className="navItem">Home</li>
        <li className="navItem">Catalog</li>
        <li className="navItem">About</li>
      </ul>
      <p>Cart</p>
    </div>
  );
};

export { Navbar };
