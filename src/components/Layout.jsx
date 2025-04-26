import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>React Quiz App</h1>
        <nav>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/quiz" style={styles.link}>Quiz</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} React Quiz App</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    background: '#282c34',
    padding: '1rem',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    marginBottom: '0.5rem',
  },
  link: {
    margin: '0 10px',
    color: '#61dafb',
    textDecoration: 'none',
  },
  main: {
    padding: '20px',
    minHeight: '80vh',
  },
  footer: {
    background: '#eee',
    padding: '1rem',
    textAlign: 'center',
  },
};

export default Layout;
