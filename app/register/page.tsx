import { bugunkuSozuGetir } from "@/data/karakter-sozleri";
import { KarakterOdasi } from "@/components/KarakterOdasi";
import Link from "next/link";

export default function HomePage() {
  const defneSozu = bugunkuSozuGetir('defne');
  const zeynaSozu = bugunkuSozuGetir('zeyna');
  const balimSozu = bugunkuSozuGetir('balim');

  return (
    <main className="min-h-screen">
      
      {/* HERO BÖLÜMÜ */}
      <section className="flex items-center justify-center px-6 pt-16 pb-20">
        <div className="max-w-3xl w-full text-center">
          
          <div className="text-8xl mb-6 animate-bounce">
            🌱
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-tomurcuk-700 mb-4">
            Tomurcuk
          </h1>
          
          <p className="text-xl md:text-2xl text-tomurcuk-600 mb-4 font-medium">
            Alışkanlık kazan, tomurcuklan
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            Bilimsel alışkanlık takibi ile hedeflerine ulaş,
            gerçek dünyada fidan diktir, sevdiklerine tohum gönder.
            <br />
            <span className="text-tomurcuk-600 font-medium">
              Her alışkanlık bir tomurcuktur. 🌸
            </span>
          </p>
          
          {/* BUTONLAR — LİNK OLARAK */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link 
              href="/register"
              className="bg-tomurcuk-500 hover:bg-tomurcuk-600 text-white font-medium py-3 px-8 rounded-xl transition-colors shadow-md text-lg inline-block"
            >
              🌱 Hemen Başla
            </Link>
            <Link 
              href="/login"
              className="bg-white hover:bg-tomurcuk-50 text-tomurcuk-700 font-medium py-3 px-8 rounded-xl transition-colors border-2 border-tomurcuk-200 text-lg inline-block"
            >
              👋 Giriş Yap
            </Link>
          </div>
          
          <p className="text-sm text-gray-500">
            🚧 Uygulama geliştiriliyor. Yakında kullanıma açılacak.
          </p>
          
        </div>
      </section>

      {/* KARAKTER TANITIM BÖLÜMÜ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-tomurcuk-700 mb-4">
              🎭 Rehberini Seç
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
              Tomurcuk'ta yalnız değilsin. Sana yolculuğunda eşlik edecek 
              <span className="text-tomurcuk-600 font-semibold"> 3 karakter</span> arasından birini seçeceksin.
            </p>
            <p className="text-sm text-gray-500">
              💡 Karakterlerin odaları saate göre değişir. Şu an ne yapıyorlar? 👇
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* DEFNE */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-2xl hover:-translate-y-1">
              <KarakterOdasi karakter="defne" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-700 text-center mb-1">
                  DEFNE
                </h3>
                <p className="text-center text-green-600 font-medium mb-4 text-sm">
                  Sabırlı Rehberin
                </p>
                <p className="text-sm text-gray-600 italic text-center mb-5">
                  "Küçük adımlar, büyük yolculuklar yapar."
                </p>
                <div className="border-t border-green-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-green-700 mb-1 uppercase">
                    Kişilik
                  </p>
                  <p className="text-sm text-gray-700">
                    Nazik, cesaretlendirici, sabırlı. Mükemmelliği değil, 
                    ilerlemeyi kutlar.
                  </p>
                </div>
                <div className="border-t border-green-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-green-700 mb-1 uppercase">
                    Kimin İçin?
                  </p>
                  <p className="text-sm text-gray-700">
                    Yeni başlayanlar, mükemmeliyetçi kişiler, nazik motivasyon 
                    isteyenler.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                  <p className="text-xs font-semibold text-green-700 mb-2">
                    🌟 BUGÜNKÜ SÖZÜM:
                  </p>
                  <p className="text-sm text-gray-800 italic leading-relaxed">
                    "{defneSozu.soz}"
                  </p>
                </div>
              </div>
            </div>
            
            {/* ZEYNA */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-2xl hover:-translate-y-1">
              <KarakterOdasi karakter="zeyna" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-700 text-center mb-1">
                  ZEYNA
                </h3>
                <p className="text-center text-pink-600 font-medium mb-4 text-sm">
                  Enerjik Şampiyonun
                </p>
                <p className="text-sm text-gray-600 italic text-center mb-5">
                  "Bugün değişmek için mükemmel bir gün!"
                </p>
                <div className="border-t border-pink-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-1 uppercase">
                    Kişilik
                  </p>
                  <p className="text-sm text-gray-700">
                    Enerjik, coşkulu, motivasyoncu. Her başarını kutlar,
                    hedef odaklıdır.
                  </p>
                </div>
                <div className="border-t border-pink-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-pink-700 mb-1 uppercase">
                    Kimin İçin?
                  </p>
                  <p className="text-sm text-gray-700">
                    Rekabetçi, hedef odaklı, sosyal, enerji arayan kişiler.
                  </p>
                </div>
                <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <p className="text-xs font-semibold text-pink-700 mb-2">
                    🌟 BUGÜNKÜ SÖZÜM:
                  </p>
                  <p className="text-sm text-gray-800 italic leading-relaxed">
                    "{zeynaSozu.soz}"
                  </p>
                </div>
              </div>
            </div>
            
            {/* BALIM */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-2xl hover:-translate-y-1">
              <KarakterOdasi karakter="balim" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-800 text-center mb-1">
                  BALIM
                </h3>
                <p className="text-center text-emerald-700 font-medium mb-4 text-sm">
                  Bilge Meşen
                </p>
                <p className="text-sm text-gray-600 italic text-center mb-5">
                  "Ağaç, rüzgarda eğilir ama kırılmaz."
                </p>
                <div className="border-t border-emerald-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-emerald-800 mb-1 uppercase">
                    Kişilik
                  </p>
                  <p className="text-sm text-gray-700">
                    Bilge, sakin, derin. Felsefe ve alıntılarla konuşur. 
                    Uzun vadeli düşünür.
                  </p>
                </div>
                <div className="border-t border-emerald-100 pt-4 mb-4">
                  <p className="text-xs font-semibold text-emerald-800 mb-1 uppercase">
                    Kimin İçin?
                  </p>
                  <p className="text-sm text-gray-700">
                    Derin düşünenler, zor alışkanlıklarla mücadele edenler, 
                    meditasyon meraklıları.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <p className="text-xs font-semibold text-emerald-800 mb-2">
                    🌟 BUGÜNKÜ SÖZÜM:
                  </p>
                  <p className="text-sm text-gray-800 italic leading-relaxed">
                    "{balimSozu.soz}"
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600">
              💡 Karakterini istediğin zaman değiştirebilirsin. Sözler her gün yenilenir.
            </p>
          </div>
          
        </div>
      </section>

      {/* ÖZELLİKLER BÖLÜMÜ */}
      <section className="bg-tomurcuk-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-tomurcuk-700 mb-4">
              ✨ Neden Tomurcuk?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sıradan bir alışkanlık uygulamasından çok daha fazlası.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-tomurcuk-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-bold text-xl text-tomurcuk-700 mb-3">
                Bilimsel Takip
              </h3>
              <p className="text-gray-600">
                21 gün efsanesi değil, gerçek bilim. 66 gün kuralı ile 
                alışkanlığını kalıcı hale getir.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-tomurcuk-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="font-bold text-xl text-tomurcuk-700 mb-3">
                Fidan Dik
              </h3>
              <p className="text-gray-600">
                Her başarında TEMA ve ÇEKÜL ile gerçek fidan dikilir. 
                Sertifika + GPS koordinatı seni bekler.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-tomurcuk-100 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="font-bold text-xl text-tomurcuk-700 mb-3">
                Hediye Gönder
              </h3>
              <p className="text-gray-600">
                Sevdiklerine tohum paketi veya hediye gönder. 
                Başarın onlarınla paylaşılsın.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-tomurcuk-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-2xl font-bold mb-2">Tomurcuk</h3>
          <p className="text-tomurcuk-100 mb-6">
            Alışkanlık kazan, tomurcuklan.
          </p>
          <p className="text-sm text-tomurcuk-200">
            © 2025 Tomurcuk. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>

    </main>
  );
}
