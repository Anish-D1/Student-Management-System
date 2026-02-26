import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/add" style={{ color: "white" }}>
        Add Student
      </Link>
      
    </nav>
  );
}

export default Navbar;