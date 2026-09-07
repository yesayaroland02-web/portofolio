import React from 'react'
import { useDark } from "../../context/Dark-Context";
export default function Skill() {
  const { isDark } = useDark();
  return (
   <section className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
    <h1 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
    Skills
    </h1>
    <br />

    <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
     Front-End Development
    </h2>
      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
      1. Languages & Core: HTML, CSS, TypeScript
      <p></p>
      <br />
      
      2. Libraries & Frameworks: React.js, Tailwind CSS
      <p></p>
      <br />
      3. Key Focus: Responsive Design and Interactive UI 
      </p>

      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
       Back-End Development
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       1. Framework: Node.js

        <p></p>
        <br />
       2. Language: TypeScript
       
        <p></p>
        <br />

       3. Key Focus: RESTful APIs and Database Management
       <p></p>
       
      </p>

      <br />
      <h2 className={`text-2xl font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
        Tools & Utilities
      </h2>

      <p className={`mt-6 text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>
       1. Version Control: Git, GitHub

       <p></p>
       <br /> 
       2.Development Environment: Visual Studio Code

       <p></p>
       <br />
       3. Workflow & API Testing: Thunder Client and npm
      </p>
    </section>
  )
}
