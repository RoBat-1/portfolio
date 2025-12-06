export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Using Web3Forms API (free, no backend needed)
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', `Portfolio Contact: ${subject}`);
    formData.append('message', `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`);
    formData.append('redirect', 'false');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully!' 
      });
    } else {
      throw new Error(data.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again.' 
    });
  }
}
