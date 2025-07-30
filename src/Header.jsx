function Header() {
  return (
    <header style={{ 
      padding: '1rem 2rem', 
      backgroundColor: '#2c3e50', 
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h2>Anudeep Nayak</h2>
      <nav>
        <a href="#about" style={{ color: 'white', margin: '0 1rem' }}>About</a>
        <a href="#projects" style={{ color: 'white', margin: '0 1rem' }}>Projects</a>
        <a href="#contact" style={{ color: 'white', margin: '0 1rem' }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
