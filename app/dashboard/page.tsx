"use client";
import ReactVirtualizedTable from "./_components/table";

export default function Dashboard() {
  return (
    <section className="w-full">
      <div className="flex justify-between py-4">
        <div>
          <p className="text-black">
            Current Value of Investment: <span>100,000</span>
          </p>
          <p className="text-black">
            Total Value of Investment: <span>200,000</span>
          </p>
        </div>

        <p className="text-black">
          Total Return on Shares: <span>30,000</span>
        </p>
      </div>
      <ReactVirtualizedTable />
    </section>
  );
}
