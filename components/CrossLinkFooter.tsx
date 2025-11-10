export default function CrossLinkFooter() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '90px', // SearchBar on 80px kõrge + 10px gap
      right: '20px',
      zIndex: 999,
    }}>
      <a 
        href="https://paremklikk.ee" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#FFFFFF',
          border: '2px solid #000000',
          padding: '10px 16px',
          textDecoration: 'none',
          color: '#000000',
          fontFamily: 'Space Mono, monospace',
          fontSize: '12px',
          fontWeight: 700,
          boxShadow: '3px 3px 0 #000000',
          transition: 'all 0.1s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#000000';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#FFFFFF';
          e.currentTarget.style.color = '#000000';
        }}
      >
        <img 
          src="/mu_logo_1024.png" // KASUTA SEDA ÕIGET FAILINIME!
          alt="Paremklikk Logo" 
          style={{ width: '18px', height: '18px', marginRight: '4px' }} />
        
        MAAILMAUUDISED
      </a>
    </div>
  );
}