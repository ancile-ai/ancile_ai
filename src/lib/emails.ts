// Professional email templates with government branding - Email client compatible

export function generateCustomerConfirmationEmail(
  name: string,
  company?: string
): string {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Thank you for contacting Ancile AI</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #fef3ed;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f7fa;">
          <tr>
            <td>
              <!-- Main Container -->
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; margin: 20px auto; border-radius: 8px; overflow: hidden; border: 1px solid #e1e5e9;">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #d75519; padding: 40px 30px; text-align: center;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <h1 style="color: #ffffff; font-size: 28px; font-weight: bold; margin: 0 0 8px 0; font-family: Arial, sans-serif; letter-spacing: -0.5px;">Ancile AI</h1>
                          <p style="color: #ffffff; font-size: 15px; margin: 0; font-weight: 500; font-family: Arial, sans-serif; opacity: 0.95;">Consulting &amp; Solutions</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 35px 30px; background-color: #ffffff;">
                    
                    <!-- Greeting -->
                    <h2 style="color: #1f2937; font-size: 20px; font-weight: 600; margin: 0 0 20px 0; font-family: Arial, sans-serif;">Dear ${name},</h2>
                    
                    <!-- Message -->
                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0; font-family: Arial, sans-serif;">
                      Thanks for getting in touch with Ancile AI. We’re excited to learn more about ${
                        company ? `${company}'s` : "your"
                      } operational needs and how AI can help accelerate results.
                    </p>
                    
                    <!-- What Happens Next Section -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border-left: 4px solid #d75519; margin: 25px 0;">
                      <tr>
                        <td style="padding: 25px;">
                          <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 18px 0; font-family: Arial, sans-serif;">Next Steps</h3>
                          
                          <!-- Step 1 -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                            <tr>
                              <td width="20" style="vertical-align: top; padding-top: 2px;">
                                <div style="width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 16px; color: #ffffff; font-weight: bold; font-size: 10px;">1</div>
                              </td>
                              <td style="color: #4b5563; font-size: 15px; line-height: 1.5; font-family: Arial, sans-serif; padding-left: 12px;">
                                Your inquiry is important to us. Our team will review your request within two business days.
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Step 2 -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                            <tr>
                              <td width="20" style="vertical-align: top; padding-top: 2px;">
                                <div style="width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 16px; color: #ffffff; font-weight: bold; font-size: 10px;">2</div>
                              </td>
                              <td style="color: #4b5563; font-size: 15px; line-height: 1.5; font-family: Arial, sans-serif; padding-left: 12px;">
                                An Ancile team will connect with you through your preferred method of contact.
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Step 3 -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                            <tr>
                              <td width="20" style="vertical-align: top; padding-top: 2px;">
                                <div style="width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 16px; color: #ffffff; font-weight: bold; font-size: 10px;">3</div>
                              </td>
                              <td style="color: #4b5563; font-size: 15px; line-height: 1.5; font-family: Arial, sans-serif; padding-left: 12px;">
                                We’ll schedule a short consultation to align on your priorities.
                              </td>
                            </tr>
                          </table>
                          
                          <!-- Step 4 -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td width="20" style="vertical-align: top; padding-top: 2px;">
                                <div style="width: 16px; height: 16px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 16px; color: #ffffff; font-weight: bold; font-size: 10px;">4</div>
                              </td>
                              <td style="color: #4b5563; font-size: 15px; line-height: 1.5; font-family: Arial, sans-serif; padding-left: 12px;">
                                You’ll receive a tailored proposal focused on opperational-specific AI solutions.
                              </td>
                            </tr>
                          </table>
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Closing Message -->
                    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0 0 0; font-family: Arial, sans-serif;">
                      If you have questions before then, just drop us a line at <a href="mailto:sales@ancile.io" style="color: #d75519; text-decoration: none; font-weight: 500;">sales@ancile.io</a>. — we’re here to help.
                    </p>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e5e7eb; text-align: center;">
                    
                    <!-- Signature -->
                    <p style="color: #374151; font-size: 16px; margin: 0 0 12px 0; font-family: Arial, sans-serif;">
                      Sincerely,<br>
                      <strong style="color: #d75519; font-size: 16px;">The Ancile AI Team</strong>
                    </p>
                    
                    <!-- Divider -->
                    <div style="height: 1px; background-color: #e5e7eb; margin: 15px 0;"></div>
                    
                    <!-- Contact Info -->
                    <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.5; font-family: Arial, sans-serif;">
                      <a href="mailto:sales@ancile.io" style="color: #d75519; text-decoration: none;">sales@ancile.io</a> | <a href="https://ancile.io" style="color: #d75519; text-decoration: none;">ancile.io</a><br>
                      This email was sent in response to your inquiry on our website.
                    </p>
                    
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

export function generateContactEmail(
  name: string,
  email: string,
  company: string,
  message: string,
  phone?: string,
  submissionId?: number,
  submittedAt?: string
): string {
  const id = submissionId || Math.floor(Math.random() * 100000);
  const time =
    submittedAt ||
    new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>New Government Inquiry - ${company || name}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f7fa;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f7fa;">
          <tr>
            <td>
              <!-- Main Container -->
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="700" style="background-color: #ffffff; margin: 20px auto; border-radius: 8px; overflow: hidden; border: 1px solid #e1e5e9;">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #d75519; padding: 30px; text-align: center;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="text-align: center;">
                          <h1 style="color: #ffffff; font-size: 24px; font-weight: bold; margin: 0 0 6px 0; font-family: Arial, sans-serif;">New Government Inquiry</h1>
                          <p style="color: #ffffff; font-size: 15px; margin: 0 0 12px 0; font-weight: normal; font-family: Arial, sans-serif;">${
                            company || "Government Prospect"
                          } - Lead Notification</p>
                          <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.95); color: #dc2626; padding: 6px 14px; border-radius: 15px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Urgent - Action Required</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 30px; background-color: #ffffff;">
                    
                    <!-- Contact Information Section -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 20px;">
                      <tr>
                        <td style="padding: 20px; border-left: 4px solid #d75519;">
                          <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 15px 0; padding-bottom: 8px; border-bottom: 1px solid #f3f4f6; font-family: Arial, sans-serif;">Contact Information</h2>
                          
                          <!-- Name -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                            <tr>
                              <td width="100" style="color: #4b5563; font-weight: 600; font-size: 14px; vertical-align: top; font-family: Arial, sans-serif;">Name:</td>
                              <td style="color: #1f2937; font-size: 14px; font-weight: normal; font-family: Arial, sans-serif;">${name}</td>
                            </tr>
                          </table>
                          
                          <!-- Email -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                            <tr>
                              <td width="100" style="color: #4b5563; font-weight: 600; font-size: 14px; vertical-align: top; font-family: Arial, sans-serif;">Email:</td>
                              <td style="color: #d75519; font-size: 14px; font-weight: 600; font-family: Arial, sans-serif;"><a href="mailto:${email}" style="color: #d75519; text-decoration: none;">${email}</a></td>
                            </tr>
                          </table>
                          
                          <!-- Company -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 10px;">
                            <tr>
                              <td width="100" style="color: #4b5563; font-weight: 600; font-size: 14px; vertical-align: top; font-family: Arial, sans-serif;">Organization:</td>
                              <td style="color: #1f2937; font-size: 14px; font-weight: normal; font-family: Arial, sans-serif;">${
                                company || "Not specified"
                              }</td>
                            </tr>
                          </table>
                          
                          ${
                            phone
                              ? `
                          <!-- Phone -->
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td width="100" style="color: #4b5563; font-weight: 600; font-size: 14px; vertical-align: top; font-family: Arial, sans-serif;">Phone:</td>
                              <td style="color: #d75519; font-size: 14px; font-weight: 600; font-family: Arial, sans-serif;"><a href="tel:${phone}" style="color: #d75519; text-decoration: none;">${phone}</a></td>
                            </tr>
                          </table>
                          `
                              : ""
                          }
                          
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message Section -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 25px;">
                      <tr>
                        <td style="padding: 20px;">
                          <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 12px 0; font-family: Arial, sans-serif;">Inquiry Details</h2>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 4px;">
                            <tr>
                              <td style="padding: 16px; color: #374151; font-size: 15px; line-height: 1.6; font-family: Arial, sans-serif; white-space: pre-wrap;">${message}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Action Buttons -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="text-align: center; padding: 15px 0;">
                          
                          <!-- Reply Button -->
                          <table border="0" cellpadding="0" cellspacing="0" style="display: inline-block; margin-right: 8px;">
                            <tr>
                              <td style="background-color: #d75519; border-radius: 4px;">
                                <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; font-family: Arial, sans-serif;">Reply to Prospect</a>
                              </td>
                            </tr>
                          </table>
                          
                          ${
                            phone
                              ? `
                          <!-- Call Button -->
                          <table border="0" cellpadding="0" cellspacing="0" style="display: inline-block; margin-left: 8px;">
                            <tr>
                              <td style="background-color: #6b7280; border-radius: 4px;">
                                <a href="tel:${phone}" style="display: inline-block; padding: 10px 20px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 14px; font-family: Arial, sans-serif;">Call Now</a>
                              </td>
                            </tr>
                          </table>
                          `
                              : ""
                          }
                          
                        </td>
                      </tr>
                    </table>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
                    
                    <!-- Submission Meta -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 4px; margin-bottom: 12px;">
                      <tr>
                        <td style="padding: 12px; text-align: center;">
                          <p style="margin: 0; color: #6b7280; font-size: 12px; line-height: 1.4; font-family: Arial, sans-serif;">
                            <strong style="color: #374151; font-size: 13px;">Submission ID: #${id
                              .toString()
                              .padStart(6, "0")}</strong><br>
                            <span style="color: #9ca3af;">Received: ${time}</span>
                          </p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- System Info -->
                    <p style="color: #9ca3af; font-size: 11px; text-align: center; margin: 0; line-height: 1.3; font-family: Arial, sans-serif;">
                      Ancile AI Contact Management System<br>
                      This notification was automatically generated from your website contact form.
                    </p>
                    
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
