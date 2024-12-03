import { Navbar } from "@/components/Navbar";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">欢迎访问我们的网站</h1>
          <p className="mt-4 text-xl text-gray-500">
            我们提供专业的解决方案和服务
          </p>
        </div>
      </main>
    </div>
  );
}