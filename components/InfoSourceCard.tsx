'use client';

interface InfoSource {
  id: string;
  name: string;
  url: string;
  country: string;
  flag: string;
  language: string;
  description: string;
}

export default function InfoSourceCard({ source }: { source: InfoSource }) {
  const needsTranslation = source.language !== 'eesti';

  return (
    <div
      style={{
        border: 'var(--border-width) solid #000000',
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
            {source.name}
          </div>
          <div style={{ fontSize: '11px', marginBottom: '8px' }}>
            {source.flag} {source.country} [{source.language}]
          </div>
        </div>
      </div>

      <div style={{
        fontSize: '12px',
        lineHeight: 1.5,
        marginBottom: '12px'
      }}>
        {source.description}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: needsTranslation ? '3fr 1fr' : '1fr',
        gap: '8px'
      }}>
        <button
          onClick={() => window.open(source.url, '_blank')}
          style={{
            border: 'var(--border-width) solid #000000',
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
        
        {needsTranslation && (
          <button
            onClick={() => {
              const translateUrl = `https://translate.google.com/translate?sl=auto&tl=et&u=${encodeURIComponent(source.url)}`;
              window.open(translateUrl, '_blank');
            }}
            style={{
              border: 'var(--border-width) solid #000000',
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