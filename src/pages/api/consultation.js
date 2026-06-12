// src/pages/api/consultation.js
// This endpoint receives the consultation form data and stores it in Supabase
// Then sends an email notification to the firm

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();

    // Validate required fields
    const required = ['name', 'email', 'phone', 'area', 'message'];
    for (const field of required) {
      if (!data[field]) {
        return new Response(JSON.stringify({ error: `Missing field: ${field}` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Store in Supabase
    const SUPABASE_URL = import.meta.env.SUPABASE_URL;
    const SUPABASE_KEY = import.meta.env.SUPABASE_ANON_KEY;

    if (SUPABASE_URL && SUPABASE_KEY) {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/consultations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          client_name: data.name,
          client_email: data.email,
          client_phone: data.phone,
          preferred_language: data.language || 'es',
          practice_area: data.area,
          description: data.message,
          urgency: data.urgency || 'normal',
          meeting_type: data.meeting_type || 'office',
          preferred_office: data.office || 'arrecife',
          status: 'pending', // pending → accepted → scheduled → paid → confirmed
          created_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('Supabase error:', await response.text());
      }
    }

    // Send email notification via Netlify function (optional)
    // This can be connected to Resend, SendGrid, or a simple SMTP relay
    try {
      await fetch('/.netlify/functions/notify-consultation', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (e) {
      // Email notification is non-blocking
      console.log('Email notification skipped:', e.message);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
