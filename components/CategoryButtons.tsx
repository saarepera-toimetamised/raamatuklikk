'use client';

interface Props {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  bookstoresData: any[];
}

export default function CategoryButtons({ activeCategory, onCategoryChange, bookstoresData }: Props) {
  // Loe poodide arv iga kategooria kohta
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return bookstoresData.length;
    return bookstoresData.filter(store => store.category === categoryId).length;
  };

  const categories = [
    { id: 'all', label: 'KÕIK' },
    { id: 'small-languages', label: 'BALTOSKANDIA' },
    { id: 'local-literature', label: 'IDA-EUROOPA' },
    { id: 'major-traditions', label: 'LÄÄNE-EUROOPA' },
    { id: 'south-europe', label: 'LÕUNA-EUROOPA' },
    { id: 'north-america', label: 'PÕHJA-AMEERIKA' },
    { id: 'asia', label: 'AASIA' },
    { id: 'latin-america', label: 'LADINA-AMEERIKA' },
    { id: 'specialty', label: 'ERIALANE' },
  ];

  return (
    <div>
      <h2 style={{
        fontSize: '15px',
        fontWeight: 700,
        marginBottom: '15px',
        letterSpacing: '0.05em'
      }}>
        KATEGOORIA:
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '12px',
        marginBottom: '30px'
      }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            style={{
              background: activeCategory === cat.id ? '#000000' : '#FFFFFF',
              color: activeCategory === cat.id ? '#FFFFFF' : '#000000',
              border: '2px solid #000000',
              padding: '12px 16px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '13px',
              fontWeight: 700,
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.1s',
              textTransform: 'uppercase',
              letterSpacing: '0.03em'
            }}
            onMouseEnter={(e) => {
              if (activeCategory !== cat.id) {
                e.currentTarget.style.backgroundColor = '#000000';
                e.currentTarget.style.color = '#FFFFFF';
              }
            }}
            onMouseLeave={(e) => {
              if (activeCategory !== cat.id) {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.color = '#000000';
              }
            }}
          >
            {cat.label} ({getCategoryCount(cat.id)})
          </button>
        ))}
      </div>
    </div>
  );
}