const Footer = () => {
  return (
    <footer style={{
      textAlign: "center",
      padding: "15px",
      marginTop: "40px",
      backgroundColor: "#222",
      color: "white"
    }}>
      © {new Date().getFullYear()}<a href="https://github.com/Anish-D1" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}> Anish D1 | GitHub: @Anish-D1</a>
    </footer>
  );
};

export default Footer;