import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  console.log('Form submission received:', body);

  // Example: Use Resend, Nodemailer, or any email service here
  // For now, just log it
  return NextResponse.json({ status: 'success' });
}
