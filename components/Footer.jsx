const Footer = () => (
    <footer style={{ backgroundColor: '#f0f4f8', padding: '2rem', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Licensed Tutor Directory. All rights reserved.</p>
      <nav>
        <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
      </nav>
    </footer>
  );
  
  export default Footer;
  