'use server'

import nodemailer from 'nodemailer'

interface EmailData {
  name: string
  email: string
  message: string
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function sendContactEmail(data: EmailData) {
  try {
    // Validate environment variables
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      throw new Error('SMTP configuration is missing. Please check your environment variables.')
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Escape user input to prevent XSS
    const safeName = escapeHtml(data.name)
    const safeEmail = escapeHtml(data.email)
    const safeMessage = escapeHtml(data.message)

    // Get the base URL for logo (you may need to update this with your actual domain)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const logoUrl = `${baseUrl}/assets/images/logo/kitslogo-bg.png`

    // Email template with modern monochromatic design
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 40px 40px 30px; text-align: center;">
              <img src="${logoUrl}" alt="KITS Logo" style="max-width: 180px; height: auto; margin-bottom: 20px; background-color: #ffffff; padding: 12px; border-radius: 8px;" />
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Contact Form Submission</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 40px 30px;">
              <p style="margin: 0 0 30px; color: #64748b; font-size: 16px; line-height: 1.6;">
                You have received a new message from the Campus Guide contact form.
              </p>
              
              <!-- Information Cards -->
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 20px; background-color: #f1f5f9; border-left: 4px solid #1e293b; border-radius: 8px; margin-bottom: 16px;">
                    <p style="margin: 0 0 8px; color: #475569; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                    <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 500;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0; height: 16px;"></td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #f1f5f9; border-left: 4px solid #1e293b; border-radius: 8px; margin-bottom: 16px;">
                    <p style="margin: 0 0 8px; color: #475569; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                    <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 500;">
                      <a href="mailto:${safeEmail}" style="color: #1e293b; text-decoration: none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0; height: 16px;"></td>
                </tr>
                <tr>
                  <td style="padding: 20px; background-color: #f1f5f9; border-left: 4px solid #1e293b; border-radius: 8px;">
                    <p style="margin: 0 0 8px; color: #475569; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                    <p style="margin: 0; color: #0f172a; font-size: 16px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Action Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="text-align: center; padding-top: 20px;">
                    <a href="mailto:${safeEmail}" style="display: inline-block; padding: 14px 32px; background-color: #1e293b; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; letter-spacing: 0.3px;">Reply to ${safeName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f8f9fa; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0 0 8px; color: #64748b; font-size: 14px;">
                <strong style="color: #1e293b;">KKR & KSR Institute of Technology and Sciences</strong>
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                Campus Guide Contact Form
              </p>
              <p style="margin: 16px 0 0; color: #cbd5e1; font-size: 11px;">
                This is an automated email. Please do not reply directly to this message.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    const emailText = `
New Contact Form Submission

Name: ${safeName}
Email: ${safeEmail}

Message:
${safeMessage}

---
KKR & KSR Institute of Technology and Sciences
Campus Guide Contact Form
    `

    // Send email
    const info = await transporter.sendMail({
      from: `"KITS Campus Guide" <${smtpUser}>`,
      to: smtpUser,
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailText,
      html: emailHtml,
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    }
  }
}
