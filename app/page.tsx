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
        borderBottom: 'var(--border-width) solid #000000',
        padding: '30px 20px 20px'
      }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              minWidth: '45px',
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
              fontSize: 'clamp(38px, 6vw, 50px)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              fontFamily: 'Space Mono, monospace'
            }}>
              RAAMATUKLIKK
            </h1>
          </div>

          <div style={{ fontSize: 'clamp(15px, 3.5vw, 18px)', marginBottom: '12px', }}>
            Valitud raamatupoed üle maailma
          </div>

          <div style={{ fontSize: 'clamp(12px, 3vw, 13px)', lineHeight: 1.6, paddingBottom: '15px' }}>
            Leia vajalikud raamatud igas riigis ja keeles. 
            Fookus: kohalik kirjandus ja kultuuriline eripära. Ka väiksemates keeltes 
             → klõpsa ja ava pood → brauseri tõlge. Kui tõrgub, siis tekita. See on lihtne ja juhistes kirjas.
          </div>
                  <div style={{ 
            display: 'flex', 
            gap: '15px', 
            fontSize: '13px', 
            paddingBottom: '15px',
            borderTop: 'var(--border-thin) solid #000000',
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

      {/* 1. Nool ÜLESPOOLE (Viib lehe algusesse) */}
      <a 
        href="#"
        style={{
          position: 'fixed', 
          top: '100px',
          right: '15px', 
          zIndex: 9999, 
          backgroundColor: 'black', 
          color: 'white', 
          width: '30px', 
          height: '30px', 
          lineHeight: '30px', 
          textAlign: 'center', 
          borderRadius: '4px', 
          fontSize: '20px', 
          textDecoration: 'none', 
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          display: 'block' 
        }}
      >
        ↑
      </a>

      {/* 2. Nool ALLAPOOLE (Viib lehe lõppu) */}
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }}
        style={{
          position: 'fixed', 
          top: '150px',
          right: '15px', 
          zIndex: 9999, 
          backgroundColor: 'black', 
          color: 'white', 
          width: '30px', 
          height: '30px', 
          lineHeight: '30px', 
          textAlign: 'center', 
          borderRadius: '4px', 
          fontSize: '20px', 
          textDecoration: 'none', 
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          display: 'block' 
        }}
      >
        ↓
      </a>

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
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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