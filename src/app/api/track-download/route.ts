import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const result = await sql`
      UPDATE cv_downloads 
      SET download_count = download_count + 1, 
          last_updated = CURRENT_TIMESTAMP 
      WHERE id = 1
      RETURNING download_count;
    `;

    return NextResponse.json({
      downloads: result.rows[0]?.download_count || 0,
    });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
