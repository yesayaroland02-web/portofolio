import { useDark } from '@/context/Dark-Context';
import React from 'react'

export default function Portfolio() {
  const { isDark } = useDark();
  return (
     <section className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>

      <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
        Portfolio
      </h1>
       <br />

      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Project Title: Interactive To-Do List Application
      </h2>
      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
      Technologies: React.js, TypeScript, Node.js, Tailwind CSS, and Vercel
      </p>

      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Brief Description
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       Aplikasi manajemen tugas (To-Do List) berbasis web yang dirancang untuk membantu pengguna mengatur, 
       memantau, dan mengelola produktivitas harian secara efisien melalui antarmuka yang responsif dan fleksibel.
      <p></p>
      <br />
      </p>
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        STAR Method Breakdown
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       1. Situation:

       <p></p>
       <br /> 
       Banyak pengguna menghadapi kendala dalam mengelola jadwal dan prioritas harian karena kurangnya 
       alat pelacak tugas yang responsif, terstruktur, dan mudah diakses dari berbagai perangkat
       
       <p></p>
       <br /> 

       2. Task:
       <p></p>
       <br />

       Membangun aplikasi web To-Do App yang memungkinkan pengguna menambahkan, 
       mengedit, menghapus, serta menandai status penyelesaian tugas secara real-time 
       dengan sistem otentikasi/manajemen data yang aman.

       <p></p>
       <br />

       3. Action:
       <p></p>
       <br />
       
       1. Merancang antarmuka yang bersih dan responsif menggunakan React.js dan Tailwind CSS.
       <p></p>
       <br />

       2. Menggunakan TypeScript untuk memastikan type-safety dan meminimalkan bug pada logika aplikasi.
       <p></p>
       <br />
       3. Membangun server backend menggunakan Node.js untuk menangani otentikasi serta operasi CRUD (Create, Read, Update, Delete) data tugas.
       <p></p>
       <br />
       4. Melakukan deployment aplikasi menggunakan platform cloud Vercel agar dapat diakses secara online dan terintegrasi dengan workflow Git.
       <p></p>
       <br />
       4. Result: 
       <p></p>
       <br />
        Berhasil meluncurkan aplikasi manajemen tugas yang cepat, stabil, serta mendukung berbagai 
        ukuran layar (mobile & desktop) dengan waktu muat halaman yang optimal.
       <p></p>
       <br />
        
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Visuals & Links
      </h2>

        <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
           Live Demo:
           <p></p>
           <br />
            <a
                href="https://to-do-app-gqqt-9zq7ppm03-yesayaroland02-webs-projects.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
                <span>To-Do App Online</span>
            </a>
           <p></p>
           <br />
        </p>
           GitHub:
           <p></p>
           <br />
           <a
                href="https://github.com/yesayaroland02-web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
                <span>My Repository</span>
            </a>
        </p>
    </section>
    
  )
}

