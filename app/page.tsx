import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full px-10 flex-col items-center justify-between py-32 bg-whit sm:items-start">
        <Dashboard />
      </main>
    </div>
  );
}
