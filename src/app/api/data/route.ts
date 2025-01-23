import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  // Dynamic function to generate table data using faker
  const generateTableData = (count = 50) => {
    return Array.from({ length: count }, () => {
      return {
        name: faker.commerce.productName(),
        createdBy: faker.internet.email(),
        modified: faker.date.recent({ days: 30 }).toISOString().slice(0, 10),
        created: faker.date.recent({ days: 60 }).toISOString().slice(0, 10),
      };
    });
  };

  const tableData = generateTableData(50);

  return NextResponse.json(tableData);
}
