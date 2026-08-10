// components/KarakterOdasi.tsx
// 🎨 Karakter odası bileşeni — Saate göre değişir

'use client';

import { useEffect, useState } from 'react';

type Karakter = 'defne' | 'zeyna' | 'balim';
type ZamanDilimi = 'sabah' | 'ogle' | 'aksam' | 'gece';

interface OdaSahnesi {
  bg: string;
  gokyuzu: string;
  elinde: string;
  mobilya: string[];
  aktivite: string;
}

// Her karakter için 4 zaman dilimi sahnesi
const odaSahneleri: Record<Karakter, Record<ZamanDilimi, OdaSahnesi>> = {
  defne: {
    sabah: {
      bg: 'from-yellow-100 via-orange-50 to-green-50',
      gokyuzu: '☀️',
      elinde: '☕',
      mobilya: ['🪴', '📚', '🌱'],
      aktivite: 'Sabah kahvesi',
    },
    ogle: {
      bg: 'from-sky-100 via-blue-50 to-green-50',
      gokyuzu: '⛅',
      elinde: '📖',
      mobilya: ['🌿', '📚', '☕'],
      aktivite: 'Kitap okuyor',
    },
    aksam: {
      bg: 'from-orange-100 via-pink-50 to-purple-50',
      gokyuzu: '🌇',
      elinde: '🍵',
      mobilya: ['🕯️', '🌿', '📚'],
      aktivite: 'Akşam çayı',
    },
    gece: {
      bg: 'from-indigo-200 via-purple-100 to-blue-100',
      gokyuzu: '🌙',
      elinde: '💤',
      mobilya: ['🛏️', '⭐', '🌙'],
      aktivite: 'Uyku vakti',
    },
  },
  zeyna: {
    sabah: {
      bg: 'from-pink-100 via-rose-50 to-yellow-50',
      gokyuzu: '☀️',
      elinde: '🥤',
      mobilya: ['🏋️', '🎵', '💧'],
      aktivite: 'Sabah sporu',
    },
    ogle: {
      bg: 'from-purple-100 via-pink-50 to-orange-50',
      gokyuzu: '☀️',
      elinde: '💻',
      mobilya: ['🎨', '🏆', '📱'],
      aktivite: 'Enerji dolu',
    },
    aksam: {
      bg: 'from-pink-200 via-purple-100 to-indigo-100',
      gokyuzu: '🌆',
      elinde: '🎧',
      mobilya: ['🌸', '🎵', '📸'],
      aktivite: 'Müzik zamanı',
    },
    gece: {
      bg: 'from-purple-300 via-pink-200 to-indigo-200',
      gokyuzu: '🌙',
      elinde: '💤',
      mobilya: ['🛏️', '🌸', '⭐'],
      aktivite: 'Yatak zamanı',
    },
  },
  balim: {
    sabah: {
      bg: 'from-amber-100 via-yellow-50 to-emerald-50',
      gokyuzu: '🌅',
      elinde: '🍵',
      mobilya: ['📜', '🕯️', '🌿'],
      aktivite: 'Sabah meditasyonu',
    },
    ogle: {
      bg: 'from-emerald-100 via-green-50 to-amber-50',
      gokyuzu: '☀️',
      elinde: '📖',
      mobilya: ['📚', '🌳', '📜'],
      aktivite: 'Kitap ve düşünce',
    },
    aksam: {
      bg: 'from-amber-200 via-orange-100 to-emerald-100',
      gokyuzu: '🌆',
      elinde: '🕯️',
      mobilya: ['🕯️', '📖', '🍵'],
      aktivite: 'Akşam sohbeti',
    },
    gece: {
      bg: 'from-slate-300 via-emerald-100 to-indigo-100',
      gokyuzu: '🌙',
      elinde: '💤',
      mobilya: ['🌙', '⭐', '🕯️'],
      aktivite: 'Derin uyku',
    },
  },
};

// Karakter emoji
const karakterEmoji: Record<Karakter, string> = {
  defne: '🌱',
  zeyna: '🌸',
  balim: '🌳',
};

// Karakter rengi
const karakterRenk: Record<Karakter, string> = {
  defne: 'text-green-700',
  zeyna: 'text-pink-700',
  balim: 'text-emerald-800',
};

// Zaman dilimini hesapla
function getZamanDilimi(): ZamanDilimi {
  const saat = new Date().getHours();
  if (saat >= 6 && saat < 12) return 'sabah';
  if (saat >= 12 && saat < 18) return 'ogle';
  if (saat >= 18 && saat < 22) return 'aksam';
  return 'gece';
}

// Zaman etiketi
function getZamanEtiketi(zaman: ZamanDilimi): string {
  const etiketler: Record<ZamanDilimi, string> = {
    sabah: '🌅 Sabah',
    ogle: '☀️ Öğle',
    aksam: '🌆 Akşam',
    gece: '🌙 Gece',
  };
  return etiketler[zaman];
}

interface Props {
  karakter: Karakter;
}

export function KarakterOdasi({ karakter }: Props) {
  const [zaman, setZaman] = useState<ZamanDilimi>('sabah');

  useEffect(() => {
    // İlk yüklemede zamanı ayarla
    setZaman(getZamanDilimi());
    
    // Her dakika zamanı kontrol et
    const interval = setInterval(() => {
      setZaman(getZamanDilimi());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const sahne = odaSahneleri[karakter][zaman];
  const emoji = karakterEmoji[karakter];
  const renk = karakterRenk[karakter];

  return (
    <div className={`relative bg-gradient-to-b ${sahne.bg} rounded-2xl overflow-hidden`}>
      
      {/* Üst köşe: Zaman göstergesi */}
      <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm z-10">
        {getZamanEtiketi(zaman)}
      </div>
      
      {/* Sahne alanı */}
      <div className="p-6 pb-4 min-h-[220px] flex flex-col items-center justify-end relative">
        
        {/* Gökyüzü / Pencere */}
        <div className="absolute top-4 left-4 text-3xl opacity-80">
          {sahne.gokyuzu}
        </div>
        
        {/* Pencere efekti */}
        <div className="absolute top-8 right-8 text-2xl opacity-40">
          🪟
        </div>
        
        {/* Karakter ve eşyalar */}
        <div className="flex items-end justify-center gap-3 mb-2">
          
          {/* Sol eşya */}
          <span className="text-2xl md:text-3xl opacity-80 animate-pulse" style={{ animationDuration: '3s' }}>
            {sahne.mobilya[0]}
          </span>
          
          {/* Karakter */}
          <div className="relative">
            <span className="text-6xl md:text-7xl inline-block" style={{ 
              animation: zaman === 'gece' ? 'none' : 'bounce 2s infinite'
            }}>
              {emoji}
            </span>
            
            {/* Uyku Z'si */}
            {zaman === 'gece' && (
              <span className="absolute -top-2 -right-2 text-xl animate-pulse">
                💤
              </span>
            )}
          </div>
          
          {/* Elindeki eşya */}
          <span className="text-2xl md:text-3xl">
            {sahne.elinde}
          </span>
          
          {/* Sağ eşya */}
          <span className="text-2xl md:text-3xl opacity-80 animate-pulse" style={{ animationDuration: '4s' }}>
            {sahne.mobilya[1]}
          </span>
        </div>
        
        {/* Masa / Zemin */}
        <div className="w-full text-center text-xl text-amber-800 opacity-60 font-mono">
          ═══════════════
        </div>
        
        {/* Aktivite etiketi */}
        <div className="mt-2 text-xs font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
          {sahne.aktivite}
        </div>
      </div>
      
    </div>
  );
}
