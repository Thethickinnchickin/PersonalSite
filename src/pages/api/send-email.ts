import {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {name, email, message} = req.body;

    // Set up the transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mattssitemail@gmail.com', // Your email address
        pass: process.env.NEXT_PUBLIC_APP_PASS, // Your app-specific password
      },
    });

    const mailOptions = {
      from: `"${name}" <mattssitemail@gmail.com>`, // Sender's name with your email
      to: 'mattreileydeveloper@gmail.com', // Recipient's email
      subject: `Personal Site Email from ${name}`,
      text: message,
      replyTo: email, // Set the reply-to address to the user's email
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({message: 'Email sent successfully!'});
    } catch (error) {
      console.error('Error sending email: ', error);
      return res.status(500).json({error: 'Failed to send email'});
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
