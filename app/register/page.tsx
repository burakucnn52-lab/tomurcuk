// app/register/page.tsx
// 📝 Kayıt sayfası

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase-client';

export default function RegisterPage() {
  const router = useRouter();
  const supabase = createClient();

  const [isim, setIsim] = useState('');
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [yukleniyor, setYukleniyor] = useState(false);
  const [hata, setHata] = useState('');

  const handleKayit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHata('');
    setYukleniyor(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password: sifre,
        options: {
          data: {
            full_name: isim,
            username: email.split('@')[0],
          },
        },
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        // Kayıt başarılı → onboarding'e git (karakter seçimi)
        router.push('/onboarding');
        router.refresh();
      }
    } catch (err: any) {
      setHata(err.message || 'Bir hata oluştu, tekrar dene.');
    } finally {
      setYukleniyor(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-tomurcuk-50 to-green-100 px-4 py-12">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <div className="text-7xl mb-3 inline-block animate-bounce cursor-pointer">
              🌱
            </div>
          </Link>
          <h1 className="text-4xl font-bold text-tomurcuk-700">
            Tomurcuk
          </h1>
          <p className="text-tomurcuk-600 mt-2">
            Yolculuğuna başla, tomurcuklan
          </p>
        </div>

        {/* Kayıt Formu */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-tomurcuk-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            🌱 Hesap Oluştur
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Yeni bir yolculuk başlıyor
          </p>

          <form onSubmit={handleKayit} className="space-y-4">
            
            {/* İsim */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adın
              </label>
              <input
                type="text"
                value={isim}
                onChange={(e) => setIsim(e.target.value)}
                required
                placeholder="Burak"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tomurcuk-500 focus:ring-2 focus:ring-tomurcuk-200 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ornek@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tomurcuk-500 focus:ring-2 focus:ring-tomurcuk-200 outline-none transition-all"
              />
            </div>

            {/* Şifre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Şifre
              </label>
              <input
                type="password"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
                required
                minLength={6}
                placeholder="En az 6 karakter"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tomurcuk-500 focus:ring-2 focus:ring-tomurcuk-200 outline-none transition-all"
              />
            </div>

            {/* Hata mesajı */}
            {hata && (
              <div className="bg-red-50 text-red-700 text-sm px-4 py-3 rounded-xl border border-red-200">
                ⚠️ {hata}
              </div>
            )}

            {/* Kayıt butonu */}
            <button
              type="submit"
              disabled={yukleniyor}
              className="w-full bg-tomurcuk-500 hover:bg-tomurcuk-600 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {yukleniyor ? '🌱 Filizleniyor...' : '🌱 Hesap Oluştur'}
            </button>
          </form>

          {/* Giriş linki */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Zaten hesabın var mı?{' '}
              <Link href="/login" className="text-tomurcuk-600 hover:text-tomurcuk-700 font-medium">
                Giriş Yap
              </Link>
            </p>
          </div>
        </div>

        {/* Alt bilgi */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Hesap oluşturarak şartları kabul etmiş olursun.
        </p>
      </div>
    </main>
  );
}
