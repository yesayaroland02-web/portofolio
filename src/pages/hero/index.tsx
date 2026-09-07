import React from 'react'
import profilePicture from "../../assets/Pas_Foto_Yesaya_Roland.png";
import { useDark } from "../../context/Dark-Context";
export default function Home() {
  const { isDark } = useDark();
  return (
    <section>
       <img className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
        src={profilePicture}
        alt="Profile Picture"
      />

      <p></p>
      <br />
      
      <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
        Hero 
      </h1>
       <br />

      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Developer’s Name
      </h2>
      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       Yesaya Roland Steven
      </p>

      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Job Title
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       Information System di Universitas Atma Jaya Yogyakarta | Job Connector Fullstack Development di Purwadhika
      </p>
      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Brief Introduction
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       Mahasiswa Sistem Informasi Universitas Atma Jaya Yogyakarta & Peserta Job Connector Fullstack Development di Purwadhika.
       Berfokus pada pembangunan aplikasi web yang efisien, responsif, dan mudah digunakan menggunakan Node.js, TypeScript, 
       dan React.js.
       <p></p>
       <br /> 
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://to-do-app-gqqt-9zq7ppm03-yesayaroland02-webs-projects.vercel.app/login" target="_blank"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}
