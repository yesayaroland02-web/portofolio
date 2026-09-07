import React from "react";
import { useDark } from '@/context/Dark-Context';

export default function TailwindIntro() {
  // Gunakan isDark sesuai nama properti di Context
  const { isDark } = useDark();

  return (
    <div className={`p-6 ${isDark ? 'bg-gray-900' : 'bg-slate-50'} min-h-screen space-y-8`}>
      {/* Title */}
      <div className="border-b border-slate-300 pb-4">
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
          Tailwind CSS Utility Framework
        </h1>

        <p className={isDark ? 'text-gray-400' : 'text-slate-600'}>
          Panduan visual class dasar sebelum masuk ke Logiswift.
        </p>
      </div>

      {/* Grid container untuk demo styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 1. Background Color */}
        <div className={`p-4 rounded-lg border shadow-sm space-y-2 ${isDark ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-slate-200 text-slate-700'}`}>
          <h2 className="text-lg font-semibold text-indigo-400">
            1. Background Color
          </h2>

          <div className="bg-indigo-600 text-white p-3 rounded">
            Test untuk background indigo dengan teks putih
          </div>

          <p>
            Mengatur warna latar belakang (bg-*) dan warna teks (text-*)
          </p>
        </div>

        {/* 2. Margin dan Padding */}
        <div className={`p-4 rounded-lg border shadow-sm space-y-2 ${isDark ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-slate-200 text-slate-700'}`}>
          <h2 className="text-lg font-semibold text-emerald-400">
            2. Margin & Padding
          </h2>

          <div className="bg-emerald-100 text-emerald-900 border border-emerald-300 p-4 m-2 rounded text-sm font-mono">
            Test untuk p-4 dan m-2
          </div>

          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
            p-4 untuk mengatur jarak di dalam elemen (padding), sedangkan
            m-2 mengatur jarak di luar elemen (margin).
          </p>
        </div>

        {/* 3. Flexbox */}
        <div className={`p-4 rounded-lg border shadow-sm space-y-2 ${isDark ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-slate-200 text-slate-700'}`}>
          <h2 className="text-lg font-semibold text-cyan-400">
            3. Flexbox Layout
          </h2>

          <div className={`flex items-center justify-between p-3 rounded border text-xs font-mono ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-slate-100 border-slate-300'}`}>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded">
              Flex Item 1
            </span>

            <span className="bg-cyan-600 text-white px-3 py-1 rounded">
              Flex Item 2
            </span>

            <span className="bg-cyan-600 text-white px-3 py-1 rounded">
              Flex Item 3
            </span>
          </div>

          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
            flex items-center justify-between untuk meratakan elemen secara
            horizontal dan membagi dengan rapi.
          </p>
        </div>

      </div>
    </div>
  );
}