import InfoSourceCard from '@/components/InfoSourceCard';
import SearchBar from '@/components/SearchBar';
import infoSourcesData from '@/data/info-sources.json';
import Link from 'next/link';

export const metadata = {
  title: 'Kriitika & Kirjastused - Raamatuklikk',
  description: 'Kirjandusajakirjad, raamatuuudised ja kirjastused.',
  alternates: {
    canonical: 'https://raamatuklikk.ee/info',
  },
};
export default function InfoPage() {
  return (
    <div>
      <header style={{
        borderBottom: '2px solid #000000',
        padding: '30px 20px 20px'
      }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px'
              }}>
                <img 
                  src="/Raamatuklikk_logo.png" 
                  alt="R" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: '#000000'
              }}>
                RAAMATUKLIKK
              </h1>
            </Link>
          </div>

          <div style={{ fontSize: '15px', marginBottom: '12px', fontWeight: 700 }}>
            KRIITIKA & KIRJASTUSED
          </div>

          <div style={{ fontSize: '13px', lineHeight: 1.6, paddingBottom: '15px' }}>
            Kirjandusajakirjad, raamatuuudised ja kirjastused.
          </div>

          <div style={{ display: 'flex', gap: '15px', fontSize: '13px', paddingBottom: '15px' }}>
            <Link href="/" style={{ color: '#000000', textDecoration: 'underline' }}>
              ← TAGASI POODIDESSE
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1320px', margin: '0 auto', padding: '30px 20px' }}>
        {/* LITERARY MAGAZINES */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            KIRJANDUSAJAKIRJAD ({infoSourcesData['literary-magazines'].length})
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {infoSourcesData['literary-magazines'].map((source) => (
              <InfoSourceCard key={source.id} source={source} />
            ))}
          </div>
        </section>

        {/* BOOK NEWS */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            RAAMATUUUDISED ({infoSourcesData['book-news'].length})
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {infoSourcesData['book-news'].map((source) => (
              <InfoSourceCard key={source.id} source={source} />
            ))}
          </div>
        </section>

        {/* PUBLISHERS */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            KIRJASTUSED ({infoSourcesData.publishers.length})
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {infoSourcesData.publishers.map((source) => (
              <InfoSourceCard key={source.id} source={source} />
            ))}
          </div>
        </section>
      </main>

      <SearchBar />
    </div>
  );
}