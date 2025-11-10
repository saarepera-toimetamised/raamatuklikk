'use client';

interface Bookstore {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  language: string;
  description: string;
  url: string;
  tags: string[];
  needsTranslation: boolean;
}

export default function BookstoreCard({ store }: { store: Bookstore }) {
  return (
    <div
      style={{
        border: '1px solid #000000',
        padding: '20px',
        background: '#FFFFFF',
        transition: 'all 0.1s',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '3px 3px 0 #000000';
        e.currentTarget.style.transform = 'translate(-2px, -2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translate(0, 0)';
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px'
      }}>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
            {store.name}
          </div>
          <div style={{ fontSize: '11px', marginBottom: '8px' }}>
            {store.countryFlag} {store.country} [{store.language}]
          </div>
        </div>
      </div>

      <div style={{
        fontSize: '12px',
        lineHeight: 1.5,
        marginBottom: '12px'
      }}>
        {store.description}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '12px'
      }}>
        {store.tags.map((tag) => (
          <span
            key={tag}
            style={{
              border: '1px solid #000000',
              padding: '2px 8px',
              fontSize: '10px',
              textTransform: 'uppercase'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        gap: '8px'
      }}>
        <button
          onClick={() => window.open(store.url, '_blank')}
          style={{
            border: '1px solid #000000',
            background: '#FFFFFF',
            padding: '8px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.1s',
            textAlign: 'center'
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
          ORIG
        </button>
        
        {store.needsTranslation && (
          <button
            onClick={() => {
              // Google Translate URL
              const translateUrl = `https://translate.google.com/translate?sl=auto&tl=et&u=${encodeURIComponent(store.url)}`;
              window.open(translateUrl, '_blank');
            }}
            style={{
              border: '1px solid #000000',
              background: '#000000',
              color: '#FFFFFF',
              padding: '8px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.1s',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#333333';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000000';
            }}
          >
            EESTI
          </button>
        )}
      </div>
    </div>
  );
}