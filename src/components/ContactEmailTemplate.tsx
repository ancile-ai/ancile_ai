
import React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  company: string;
  message: string;
  phone?: string;
  submissionId: number;
  submittedAt: string;
}

export function ContactEmailTemplate({
  name,
  company,
  message,
  phone,
  submissionId,
  submittedAt
}: ContactEmailTemplateProps) {
  return (
    <div style={emailContainer}>
      {/* Header */}
      <div style={header}>
        <h1 style={headerTitle}>
          🚀 New Lead: {company || name}
        </h1>
        <p style={headerSubtitle}>
          New contact form submission received
        </p>
      </div>

      {/* Content */}
      <div style={content}>
        {/* Contact Information */}
        <div style={section}>
          <h2 style={sectionTitle}>💼 Contact Information</h2>
          <div style={infoGrid}>
            <p style={infoItem}>
              <strong style={label}>Name:</strong>
              <span style={value}>{name}</span>
            </p>
            <p style={infoItem}>
              <strong style={label}>Company:</strong>
              <span style={value}>{company || 'Not provided'}</span>
            </p>
            {phone && (
              <p style={infoItem}>
                <strong style={label}>Phone:</strong>
                <span style={value}>{phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div style={messageSection}>
          <h2 style={sectionTitle}>📝 Message</h2>
          <div style={messageBox}>
            <p style={messageText}>{message}</p>
          </div>
        </div>

        {/* Footer */}
        <div style={footer}>
          <div style={submissionDetails}>
            <p style={detailTitle}>📊 Submission Details</p>
            <p style={detailText}>
              ID: {submissionId} • {submittedAt}
            </p>
          </div>
          <p style={systemLabel}>
            🔧 Ancile AI Contact System
          </p>
        </div>
      </div>
    </div>
  );
}

interface CustomerConfirmationTemplateProps {
  name: string;
  company?: string;
}

export function CustomerConfirmationTemplate({ name, company }: CustomerConfirmationTemplateProps) {
  return (
    <div style={confirmationContainer}>
      <h2 style={confirmationTitle}>Thanks for your interest in Ancile AI!</h2>
      <p style={confirmationText}>Hi {name},</p>
      <p style={confirmationText}>
        We&apos;ve received your message and we&apos;re excited to learn more about how we can help {company ? company : "your business"}.
      </p>

      <div style={nextStepsBox}>
        <p style={nextStepsTitle}><strong>What happens next?</strong></p>
        <ul style={nextStepsList}>
          <li style={nextStepsItem}>Our sales team will review your inquiry within 4 hours</li>
          <li style={nextStepsItem}>We&apos;ll reach out via email or phone (if provided)</li>
          <li style={nextStepsItem}>We&apos;ll schedule a demo tailored to your needs</li>
        </ul>
      </div>

      <p style={signature}>
        Best regards,<br/>
        <strong>The Ancile AI Team</strong>
      </p>
    </div>
  );
}

// Styles (converted to inline styles for email compatibility)
const emailContainer: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
};

const header: React.CSSProperties = {
  background: 'linear-gradient(to right, #d97706, #b45309)',
  padding: '40px 30px',
  textAlign: 'center',
};

const headerTitle = {
  color: '#ffffff',
  margin: '0',
  fontSize: '28px',
  fontWeight: 'bold',
};

const headerSubtitle = {
  color: '#fed7aa',
  margin: '10px 0 0 0',
  fontSize: '16px',
};

const content = {
  padding: '30px',
};

const section = {
  backgroundColor: '#f8fafc',
  padding: '25px',
  borderRadius: '8px',
  marginBottom: '25px',
  border: '1px solid #e2e8f0',
};

const sectionTitle = {
  color: '#1e293b',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 20px 0',
};

const infoGrid = {
  lineHeight: '1.6',
};

const infoItem = {
  margin: '0 0 10px 0',
};

const label = {
  color: '#475569',
  width: '120px',
  display: 'inline-block',
};

const value = {
  color: '#1e293b',
};

const messageSection = {
  backgroundColor: '#ffffff',
  padding: '25px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
};

const messageBox = {
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '6px',
  border: '1px solid #e2e8f0',
};

const messageText = {
  margin: 0,
  whiteSpace: 'pre-wrap',
  lineHeight: '1.6',
  color: '#374151',
};

const footer: React.CSSProperties = {
  marginTop: '30px',
  paddingTop: '25px',
  borderTop: '2px solid #e2e8f0',
  textAlign: 'center',
};

const submissionDetails = {
  display: 'inline-block',
  backgroundColor: '#f1f5f9',
  padding: '15px 25px',
  borderRadius: '6px',
  marginBottom: '15px',
};

const detailTitle = {
  margin: 0,
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '500',
};

const detailText = {
  margin: '5px 0 0 0',
  color: '#64748b',
  fontSize: '12px',
};

const systemLabel = {
  margin: '20px 0 0 0',
  color: '#64748b',
  fontSize: '14px',
};

// Customer confirmation styles
const confirmationContainer = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  color: '#2563eb',
};

const confirmationTitle: React.CSSProperties = {
  textAlign: 'center',
};

const confirmationText = {
  margin: '15px 0',
};

const nextStepsBox = {
  backgroundColor: '#f0f9ff',
  borderLeft: '4px solid #2563eb',
  padding: '20px',
  margin: '20px 0',
};

const nextStepsTitle = {
  marginTop: 0,
};

const nextStepsList = {
  margin: '15px 0',
};

const nextStepsItem = {
  margin: '8px 0',
};

const signature = {
  marginTop: '20px',
};
