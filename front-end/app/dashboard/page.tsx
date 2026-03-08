"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { Column, ReactVirtualizedTable } from "./_components/table";
import { Button, Link } from "@mui/material";
import TemporaryDrawer from "./_components/drawer";
import Navbar from "./_components/navbar";

export default function Dashboard() {
  interface Data {
    id: number;
    name: string;
    quantity: number;
    totalCost: number;
    currentValue: number;
    costPerUnit: number;
    currentCost: number;
    gainLoss: number;
  }

  // Sample data
  const rows: Data[] = [
    {
      id: 1,
      name: "Item A",
      quantity: 10,
      totalCost: 100,
      currentValue: 120,
      costPerUnit: 10,
      currentCost: 120,
      gainLoss: 20,
    },
    {
      id: 2,
      name: "Item B",
      quantity: 5,
      totalCost: 50,
      currentValue: 45,
      costPerUnit: 10,
      currentCost: 45,
      gainLoss: -5,
    },
    {
      id: 2,
      name: "Item B",
      quantity: 5,
      totalCost: 50,
      currentValue: 45,
      costPerUnit: 10,
      currentCost: 45,
      gainLoss: -5,
    },
    {
      id: 2,
      name: "Item B",
      quantity: 5,
      totalCost: 50,
      currentValue: 45,
      costPerUnit: 10,
      currentCost: 45,
      gainLoss: -5,
    },
    {
      id: 2,
      name: "Item B",
      quantity: 5,
      totalCost: 50,
      currentValue: 45,
      costPerUnit: 10,
      currentCost: 45,
      gainLoss: -5,
    },
  ];

  // Columns
  const columns: Column<Data>[] = [
    { width: 100, label: "Name", dataKey: "name" },
    { width: 100, label: "Quantity", dataKey: "quantity" },
    { width: 100, label: "Total Cost", dataKey: "totalCost" },
    { width: 150, label: "Current Value", dataKey: "currentValue" },
    { width: 100, label: "Cost/Unit", dataKey: "costPerUnit" },
    { width: 130, label: "Current Cost", dataKey: "currentCost" },
    { width: 100, label: "Gain/Loss", dataKey: "gainLoss" },
  ];
  return (
    <section className="w-full">
      {/* <Button
        variant="contained"
        startIcon={<MenuIcon />}
        className="mb-4"
        onClick={() => console.log("Clicked")}
      ></Button> */}

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
      <ReactVirtualizedTable columns={columns} data={rows} height={500} />
    </section>
  );
}
