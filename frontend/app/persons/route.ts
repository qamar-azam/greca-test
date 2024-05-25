import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.json();

  const res = await fetch(`${process.env.BACKEND_URL}/api/people`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const data = await res.json();

  return NextResponse.json(data);
}
