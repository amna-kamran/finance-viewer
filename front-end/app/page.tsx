import Navbar from "./dashboard/_components/navbar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <section>
      <div className="py-2 px-4 bg-gray-200">
        <Navbar />
      </div>

      <div className="flex min-h-screen items-center justify-center  font-sans">
        <main className="flex min-h-screen w-full px-10 flex-col items-center justify-between bg-whit sm:items-start">
          <Dashboard />
        </main>
      </div>
    </section>
  );
}
