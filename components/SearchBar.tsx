'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      setQuery('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#000000',
      borderTop: '2px solid #00ff00',
      boxShadow: '0 -4px 20px rgba(0, 255, 0, 0.3)',
      padding: '12px 10px',
      zIndex: 50,
      fontFamily: 'Space Mono, monospace'
    }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ color: '#00ff00', fontSize: '16px', fontWeight: 'bold', flexShrink: 0 }}>{'>'}</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search_query..."
            style={{
              flex: 1,
              minWidth: 0,
              padding: '8px 12px',
              color: '#00ff00',
              backgroundColor: '#0a0a0a',
              border: '1px solid #00ff00',
              fontSize: 'clamp(13px, 3.5vw, 16px)',
              fontFamily: 'Space Mono, monospace',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              backgroundColor: '#000000',
              color: '#00ff00',
              border: '2px solid #00ff00',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(11px, 3vw, 16px)',
              transition: 'all 0.2s',
              flexShrink: 0
              
              
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00ff00';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#000000';
              e.currentTarget.style.color = '#00ff00';
            }}
          >
            [LEIA]
          </button>
        </form>
      </div>
    </div>
  );
}