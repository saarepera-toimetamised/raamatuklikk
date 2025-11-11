'use client';

import { useState } from 'react';
import Link from 'next/link';
import BookstoreCard from '@/components/BookstoreCard';
import SearchBar from '@/components/SearchBar';
import CategoryButtons from '@/components/CategoryButtons';
import bookstoresData from '@/data/bookstores.json';
import CrossLinkFooter from '@/components/CrossLinkFooter';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtreeri poed kategooria järgi
  const filteredStores = activeCategory === 'all' 
    ? bookstoresData 
    : bookstoresData.filter(store => store.category === activeCategory);

  return (
    <div>
      <header style={{
        borderBottom: '2px solid #000000',
        padding: '30px 20px 20px'
      }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
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
                  width: '75%', 
                  height: '75%', 
                  objectFit: 'contain' 
                }} 
              />
            </div>
            <h1 style={{
              fontSize: '40px',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>
              RAAMATUKLIKK
            </h1>
          </div>

          <div style={{ fontSize: '17px', marginBottom: '12px', fontWeight: 700 }}>
            Valitud raamatupoed üle maailma
          </div>

          <div style={{ fontSize: '13px', lineHeight: 1.6, paddingBottom: '15px' }}>
            Leia parimad raamatud igas riigis ja keeles. 
            Fookus: kohalik kirjandus ja kultuuriline eripära. Ka väiksemates keeltes 
             → klõpsa ja ava pood → brauseri tõlge. Kui tõrgub, siis tekita. See on lihtne ja juhistes kirjas.
          </div>
                  <div style={{ 
            display: 'flex', 
            gap: '15px', 
            fontSize: '13px', 
            paddingBottom: '15px',
            borderTop: '1px solid #000000',
            paddingTop: '15px'
          }}>
            <Link href="/info" style={{ 
              color: '#000000', 
              textDecoration: 'underline',
              fontWeight: 700
            }}>
              KRIITIKA & KIRJASTUSED →
            </Link>
            <Link href="/kasulik" style={{ 
              color: '#000000', 
              textDecoration: 'underline',
              fontWeight: 700
            }}>
              OLULINE TEADA →
            </Link>
          </div>
        </div>
      </header>

            <main style={{ maxWidth: '1320px', margin: '0 auto', padding: '30px 20px' }}>
        <CategoryButtons 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          bookstoresData={bookstoresData}
        />
        
        <p style={{ fontSize: '13px', marginBottom: '25px' }}>
          Näitan {filteredStores.length} poodi
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {filteredStores.map((store) => (
            <BookstoreCard key={store.id} store={store} />
          ))}
        </div>
      </main>

      <SearchBar />
      <CrossLinkFooter />
    </div>
  );
}