"use client";
import { Column, ReactVirtualizedTable } from "../dashboard/_components/table";

export default function Detail() {
  interface Dividend {
    date: number;
    percent: string;
    total: number;
    zakatTax: number;
  }

  const dividends: Dividend[] = [
    {
      date: 2024,
      percent: "5%",
      total: 5000,
      zakatTax: 250,
    },
    {
      date: 2024,
      percent: "5%",
      total: 5000,
      zakatTax: 250,
    },
  ];

  const dividendColumns: Column<Dividend>[] = [
    { width: 100, label: "Date", dataKey: "date" },
    { width: 100, label: "Percent", dataKey: "percent" },
    { width: 100, label: "Total", dataKey: "total" },
    { width: 150, label: "Zakat Tax", dataKey: "zakatTax" },
  ];
  return (
    <section className="w-full px-6">
      {/* <Button
          variant="contained"
          startIcon={<MenuIcon />}
          className="mb-4"
          onClick={() => console.log("Clicked")}
        ></Button> */}

      <div className="flex justify-between py-4">
        <div>
          <p className="text-black">UBL</p>
          <p className="text-black">
            No of Shares: <span>200</span>
          </p>
        </div>
        <div className="flex gap-8">
          <p className="text-black">
            Total Value: <span>30,000</span>
          </p>
          <p className="text-black">
            Current Value: <span>30,000</span>
          </p>
          <p className="text-black">
            Gain/Loss: <span>30</span>
          </p>
        </div>
      </div>
      <ReactVirtualizedTable
        columns={dividendColumns}
        data={dividends}
        height={180}
      />
      <div className="w-full h-80 bg-white my-10"></div>
    </section>
  );
}
