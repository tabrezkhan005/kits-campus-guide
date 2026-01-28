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
    // Validate input data
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        error: 'Please fill in all required fields (name, email, and message).'
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        error: 'Please provide a valid email address.'
      }
    }

    // Validate environment variables
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      const missing = []
      if (!smtpHost) missing.push('SMTP_HOST')
      if (!smtpPort) missing.push('SMTP_PORT')
      if (!smtpUser) missing.push('SMTP_USER')
      if (!smtpPass) missing.push('SMTP_PASS')
      
      console.error('Missing SMTP environment variables:', missing.join(', '))
      throw new Error(`SMTP configuration is missing: ${missing.join(', ')}. Please check your .env file.`)
    }

    // Validate port is a valid number
    const port = parseInt(smtpPort, 10)
    if (isNaN(port) || port <= 0 || port > 65535) {
      throw new Error(`Invalid SMTP_PORT: ${smtpPort}. Must be a number between 1 and 65535.`)
    }

    // Create transporter with connection timeout
    // For Gmail SMTP with port 587, we need to use STARTTLS
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: port,
      secure: port === 465, // true for 465, false for other ports (587 uses STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
    })

    // Verify transporter configuration (optional - can skip if causing issues)
    // This helps catch configuration errors early
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError)
      // Don't throw here - let the actual sendMail attempt handle the error
      // Some SMTP servers don't support verify() but still work for sending
    }

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
    // Log detailed error for debugging
    console.error('Error sending email:', error)
    
    // Provide user-friendly error messages
    let errorMessage = 'Failed to send email'
    
    if (error instanceof Error) {
      // Check for specific error types
      if (error.message.includes('SMTP configuration')) {
        errorMessage = error.message
      } else if (error.message.includes('connection') || error.message.includes('ECONNREFUSED')) {
        errorMessage = 'Unable to connect to email server. Please check your internet connection and try again.'
      } else if (error.message.includes('authentication') || error.message.includes('Invalid login')) {
        errorMessage = 'Email authentication failed. Please check your SMTP credentials in the .env file.'
      } else if (error.message.includes('timeout')) {
        errorMessage = 'Email server connection timed out. Please try again later.'
      } else {
        errorMessage = error.message
      }
    }
    
    return { 
      success: false, 
      error: errorMessage
    }
  }
}
