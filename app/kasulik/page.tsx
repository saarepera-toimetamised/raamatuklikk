import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function KasulikPage() {
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
            OLULINE TEADA
          </div>

          <div style={{ fontSize: '13px', lineHeight: 1.6, paddingBottom: '15px' }}>
            Juhendid ja nipid raamatupoodide sirvimiseks.
          </div>

          <div style={{ display: 'flex', gap: '15px', fontSize: '13px', paddingBottom: '15px' }}>
            <Link href="/" style={{ color: '#000000', textDecoration: 'underline' }}>
              ← TAGASI POODIDESSE
            </Link>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1320px', margin: '0 auto', padding: '30px 20px' }}>
        {/* COMET BROWSER */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            🌐 COMET BROWSER - HETKEL OPTIMAALNE MEIE LEHE PUHUL
          </h2>

          <div style={{
            border: '1px solid #000000',
            padding: '25px',
            marginBottom: '25px',
            background: '#FFFFFF'
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '15px' }}>
              Miks Comet?
            </h3>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '15px' }}>
              Comet on Chrome'i-põhine AI-brauser, mis blokeerib jälgimist ja reklaame. 
              Kõige olulisem: <strong>Cometil on sisseehitatud «AI-assistant»</strong>, millelt saad küsida mis tahes küsimusi 
              otse eesti keeles, lasta teha sisututvustusi, võrrelda hindu erinevates poodides, saada infot autorite kohta, avastada uusi...jne, jne...
            </p>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}>
              Comet on tasuta ja töötab Mac, Windows ja Linux süsteemides.
            </p>
          </div>

          <div style={{
            border: '1px solid #000000',
            padding: '25px',
            marginBottom: '25px',
            background: '#FFFFFF'
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '15px' }}>
              📥 Kuidas alla laadida ja paigaldada?
            </h3>
            <ol style={{ fontSize: '13px', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>Mine aadressile: <a href="https://www.perplexity.ai/comet" target="_blank" style={{ textDecoration: 'underline' }}>https://www.perplexity.ai/comet</a></li>
              <li>Vali oma operatsioonisüsteem (Mac / Windows / Linux)</li>
              <li>Lae alla ja paigalda nagu iga teine programm</li>
              <li>Käivita Comet ja OLE INTERAKTIIVNE!</li>
            </ol>
          </div>

          <div style={{
            border: '1px solid #000000',
            padding: '25px',
            marginBottom: '25px',
            background: '#FFFFFF'
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '15px' }}>
              ⚙️ Põhiseaded Cometis
            </h3>
            <ul style={{ fontSize: '13px', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li><strong>Ad-blocking:</strong> Automaatselt sisse lülitatud</li>
              <li><strong>Tracker blocking:</strong> Blokeerib jälgimissüsteeme</li>
              <li><strong>Google Translate tugi:</strong> Töötab sujuvalt</li>
              <li><strong>Kiirus:</strong> Kiire nagu Chrome</li>
            </ul>
          </div>

          <div style={{
            border: '1px solid #000000',
            padding: '25px',
            background: '#FFFFFF'
          }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '15px' }}>
              💡 Nipid
            </h3>
            <ul style={{ fontSize: '13px', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>Kasuta <strong>EESTI</strong> nuppu automaatseks tõlkimiseks</li>
              <li>Mõned poed ei lase Google Translate'i sisse - see on normaalne</li>
              <li>Kui <strong>EESTI</strong> leht ei tööta, kasuta <strong>ORIG</strong> nuppu ja tõlgi parema hiireklahviga valides rippmenüüst eesti keele</li>
              <li>Salvesta lemmikpoed järjehoidjatesse, sinna kus juba paremklikk.ee-st salvestatud ajakirjandusväljaanded</li>
            </ul>
          </div>
        </section>

        {/* GOOGLE TRANSLATE */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            🌍 GOOGLE TRANSLATE - KUIDAS TÖÖTAB?
          </h2>

          <div style={{
            border: '1px solid #000000',
            padding: '25px',
            background: '#FFFFFF'
          }}>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '15px' }}>
              Kui vajutad <strong>EESTI</strong> nuppu, avatakse pood Google Translate'i kaudu. 
              See tähendab, et:
            </p>
            <ul style={{ fontSize: '13px', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '15px' }}>
              <li>Kogu leht tõlgitakse automaatselt eesti keelde</li>
              <li>Võid vahetada keeli Google Translate'i ribal üleval</li>
              <li>Mõnikord pildid ei lae - see on Google Translate'i piirang</li>
              
            </ul>
            <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
              <strong>NB!</strong> Kui mõned poed blokeerivad Google Translate'i - kasuta ORIG nuppu ja tõlgi parema hiireklahviga
            </p>
          </div>
        </section>

        {/* PRIVAATSUS */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: 700,
            marginBottom: '20px',
            letterSpacing: '0.05em'
          }}>
            🔒 PRIVAATSUS & TEHISARU
          </h2>

          <div style={{
            border: '1px solid #000000',
            padding: '25px',
            background: '#FFFFFF'
          }}>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '15px' }}>
              Raamatuklikk ei jälgi sind ega kogu andmeid. Kui klõpsad nuppe poe lingil:
            </p>
            <ul style={{ fontSize: '13px', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>Avatakse uues aknas originaalleht või sama leht eestikeelsena läbi Google Translate'i</li>
              <li>Meie ei näe, mida sa seal teed</li>
              <li>Comet brauser blokeerib jälgimissüsteeme</li>
              <li>Eriti soovitame kasutada <strong>COMET</strong> brauserit just <strong>TEHISARU ASSISTENDI</strong> tõttu, mis avaneb <strong>ülevalt paremast nurgast</strong></li> ja töötab meie otsinguribaga paralleelselt
            </ul>
          </div>
        </section>

      </main>

      <SearchBar />
    </div>
  );
}