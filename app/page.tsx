export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center">
        
        {/* Logo / Emoji */}
        <div className="text-8xl mb-6 animate-bounce">
          🌱
        </div>
        
        {/* Başlık */}
        <h1 className="text-5xl md:text-6xl font-bold text-tomurcuk-700 mb-4">
          Tomurcuk
        </h1>
        
        {/* Alt başlık */}
        <p className="text-xl md:text-2xl text-tomurcuk-600 mb-2 font-medium">
          Alışkanlık kazan, tomurcuklan
        </p>
        
        {/* Açıklama */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Bilimsel alışkanlık takibi ile hedeflerine ulaş,
          gerçek dünyada fidan diktir, sevdiklerine tohum gönder.
          <br />
          <span className="text-tomurcuk-600 font-medium">
            Her alışkanlık bir tomurcuktur. 🌸
          </span>
        </p>
        
        {/* Özellikler */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-tomurcuk-100">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="font-semibold text-tomurcuk-700 mb-1">
              Bilimsel Takip
            </h3>
            <p className="text-sm text-gray-600">
              66 gün kuralı ile alışkanlık kazan
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-tomurcuk-100">
            <div className="text-4xl mb-2">🌳</div>
            <h3 className="font-semibold text-tomurcuk-700 mb-1">
              Fidan Dik
            </h3>
            <p className="text-sm text-gray-600">
              Her başarında gerçek fidan dikilsin
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-tomurcuk-100">
            <div className="text-4xl mb-2">🎁</div>
            <h3 className="font-semibold text-tomurcuk-700 mb-1">
              Hediye Gönder
            </h3>
            <p className="text-sm text-gray-600">
              Sevdiklerine tohum paketi
            </p>
          </div>
        </div>
        
        {/* CTA Butonu */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-tomurcuk-500 hover:bg-tomurcuk-600 text-white font-medium py-3 px-8 rounded-xl transition-colors shadow-sm">
            🌱 Hemen Başla
          </button>
          <button className="bg-white hover:bg-tomurcuk-50 text-tomurcuk-700 font-medium py-3 px-8 rounded-xl transition-colors border border-tomurcuk-200">
            Nasıl Çalışır?
          </button>
        </div>
        
        {/* Alt bilgi */}
        <p className="mt-12 text-sm text-gray-400">
          🚧 Uygulama geliştiriliyor. Yakında kullanıma açılacak.
        </p>
        
      </div>
    </main>
  );
}
