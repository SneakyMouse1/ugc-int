import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// API Endpoint for Contact Form
app.post('/api/contact', async (req, res) => {
  const { name, company, email, message, turnstileToken } = req.body;

  // 1. Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Required fields are missing.' });
  }

  // 2. Validate Turnstile Token
  if (!turnstileToken) {
    return res.status(400).json({ success: false, error: 'Security token is missing.' });
  }

  try {
    const verificationUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const response = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const verificationResult = await response.json();

    if (!verificationResult.success) {
      console.warn('Turnstile verification failed:', verificationResult);
      return res.status(400).json({ success: false, error: 'Security check failed. Please try again.' });
    }

    // 3. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false, // true for port 465, false for other ports like 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_TOKEN,
      },
    });

    // 4. Construct Email Message
    const mailOptions = {
      from: `"${name} (via Website)" <${process.env.SMTP_USER}>`, // Send on behalf of the user, but using authenticated SMTP user
      to: process.env.CONTACT_EMAIL,
      replyTo: email, // Allow replying directly to the user's email
      subject: `New Contact Enquiry from ${name} (${company})`,
      text: `
Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}
      `,
      html: `
<h3>New Contact Enquiry</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<br/>
<p><strong>Message:</strong></p>
<p style="white-space: pre-wrap; font-family: sans-serif; background: #f5f5f5; padding: 15px; border-left: 3px solid #bf973e;">${message}</p>
      `,
    };

    // 5. Send Mail
    await transporter.sendMail(mailOptions);
    console.log(`Enquiry email successfully sent from ${email}`);
    
    return res.status(200).json({ success: true, message: 'Your enquiry has been sent successfully.' });

  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({ success: false, error: 'Internal server error. Please try again later.' });
  }
});

app.get('/api/health', (req, res) => res.status(200).json({ ok: true }));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
