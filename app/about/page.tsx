"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">About This Project</h1>
        <p className="text-gray-700 mb-4">
          This website allows Purdue students to view and rate menu items from Hillenbrand Dining Court.
          The goal is to provide real-time feedback to help students make informed dining choices.
        </p>
        <p className="text-gray-700">
          Users can post comments, share their thoughts on meals, and contribute to a better dining experience.
        </p>
      </div>
      <div className="mt-6 text-gray-600 text-sm">
        Created by: Peter Kaya Gretchikha, Connor Schmutz, and Oladimeji Aiyegbusi
      </div>
    </div>
  );
}
