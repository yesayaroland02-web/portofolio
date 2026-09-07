import { useDark } from '@/context/Dark-Context';
import React from 'react'

export default function About() {
  const { isDark } = useDark();
  return (
     <section className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>

      <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
        About Me
      </h1>
       <br />

      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Brief Bio
      </h2>
      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       Saya Yesaya Roland Steven, mahasiswa Sistem Informasi di Universitas Atma Jaya Yogyakarta yang memiliki 
       ketertarikan kuat pada pengembangan web, khususnya full-stack development. Saat ini, saya sedang 
       memperdalam keahlian praktis melalui program Job Connector Fullstack Development di Purwadhika 
       untuk mempersiapkan diri menghadapi tantangan industri teknologi.
      </p>

      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Core Skills
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       1. Frontend: React.js, HTML, CSS

        <p></p>
        <br />
       2. Backend: Node.js, TypeScript
       
        <p></p>
        <br />

       3. Lainnya: RESTful API, Git, 
       <p></p>
        <br />
        Database: MySQL, MongoDB 
      </p>

      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Key Values
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       1. Attention to Detail: Berkomitmen menulis kode yang bersih, efisien, dan terstruktur dengan baik.

       <p></p>
       <br /> 
       2.Timeliness: Disiplin dalam mengelola waktu dan berpatokan pada tenggat waktu proyek.

       <p></p>
       <br />
       3. Clear Communication: Terbuka dalam berkolaborasi dan mampu menyampaikan ide teknis secara jelas dalam tim.
      </p>

    </section>
    
  )
}

