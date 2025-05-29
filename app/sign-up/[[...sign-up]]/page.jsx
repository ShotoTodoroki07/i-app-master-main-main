"use client";

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center text-blue-700 mb-4">
          สมัครสมาชิก
        </h1>
        <p className="text-center text-gray-500 mb-6">
          สร้างบัญชีของคุณเพื่อเริ่มต้นใช้งาน
        </p>
        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#3b82f6",
              colorText: "#1f2937",
            },
            elements: {
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
              card: "shadow-none",
            },
          }}
        />
      </div>
    </div>
  );
}
