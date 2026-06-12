// netlify/functions/notify-consultation.js
// Sends email notification when a new consultation is received
// Uses Resend API (free tier: 100 emails/day)

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@lanzarotelawyers.com';

    if (!RESEND_API_KEY) {
      console.log('No RESEND_API_KEY configured, skipping email');
      return { statusCode: 200, body: JSON.stringify({ skipped: true }) };
    }

    const urgencyBadge = data.urgency === 'urgent' ? '🔴 URGENTE' : '🟢 Normal';
    const meetingLabels = {
      office: '🏢 Presencial en oficina',
      video: '💻 Videollamada (Google Meet)',
      phone: '📞 Llamada telefónica',
    };

    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0A1628; padding: 24px 32px;">
          <h1 style="color: #C4A265; font-size: 20px; margin: 0;">Nueva consulta recibida</h1>
        </div>
        <div style="padding: 32px; background: #F5F3EF;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Cliente</td>
              <td style="padding: 8px 0; font-size: 15px;"><strong>${data.name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Idioma</td>
              <td style="padding: 8px 0; font-size: 15px;">${data.language?.toUpperCase() || 'ES'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Área</td>
              <td style="padding: 8px 0; font-size: 15px;">${data.area}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Urgencia</td>
              <td style="padding: 8px 0; font-size: 15px;">${urgencyBadge}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Reunión</td>
              <td style="padding: 8px 0; font-size: 15px;">${meetingLabels[data.meeting_type] || 'No especificado'}</td>
            </tr>
            ${data.office ? `<tr>
              <td style="padding: 8px 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Oficina</td>
              <td style="padding: 8px 0; font-size: 15px;">${data.office}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px; padding: 16px; background: white; border-left: 3px solid #C4A265;">
            <p style="margin: 0; font-size: 13px; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Consulta</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6;">${data.message}</p>
          </div>

          <div style="margin-top: 32px; text-align: center;">
            <a href="${process.env.URL || 'https://lanzarotelawyers.com'}/admin/"
               style="display: inline-block; background: #0A1628; color: #F5F3EF; padding: 12px 32px; text-decoration: none; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;">
              Gestionar en panel
            </a>
          </div>
        </div>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Lanzarote Lawyers <noreply@lanzarotelawyers.com>',
        to: NOTIFICATION_EMAIL,
        subject: `${urgencyBadge} Nueva consulta: ${data.name} — ${data.area}`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      console.error('Resend error:', await response.text());
    }

    return { statusCode: 200, body: JSON.stringify({ sent: true }) };
  } catch (error) {
    console.error('Notification error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}
