import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
  try {
    const result = await sql`
      SELECT download_count, last_updated 
      FROM cv_downloads 
      WHERE id = 1;
    `;

    return NextResponse.json({
      downloads: result.rows[0]?.download_count || 0,
      lastUpdated: result.rows[0]?.last_updated,
    });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
