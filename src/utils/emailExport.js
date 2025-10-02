/**
 * Email Export Utilities
 * Functions to export newsletter as email-compatible formats
 */

// HTML Email Template
export const getEmailTemplate = () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AiMY Newsletter</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#f5f5f5">
      <tr>
        <td align="center">
          <!-- Main container -->
          <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#ffffff" style="border-radius:8px; overflow:hidden;">
            
            <!-- Header Image -->
            <tr>
              <td align="center">
                <img src="https://s3-alpha-sig.figma.com/img/8775/c0fb/f65c13f12849948c17965fa647c16919?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=baNCvxbjKRXNMQ3mh9sxBSL~RyslzdPNiEHKuX-w9DV0u3wE0CgLQiuR4RqY5PWlN7si8N3Ef5rBcKTEXlqeUua-bTW-cJ86ypeSLgVU1~9WjujrlXFTjjxHfx2b1NdiyTsfjQjzLwZF7593AeUYlyV0~mNXrM2qt~8qEDmLSY3xW6by5OVbtV4O69lNZk0gbNbofcWg8b3Zpr2wrZVFsWpX-LDYuxkXW4kSKnFidBTkE2z8Dz5epcpK95r-9a-Tw4fAHpxIZdVRL-h76v6sh-MtOfYDaWU2BtGe0vcaCxdODOh1peb~Uhpvh7m668sjdDbJEStfUHxIs0BD-w3QwQ__" alt="AiMY Team" width="600" style="display:block; max-width:100%;" />
              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td align="center" style="padding:20px;">
                <h1 style="margin:0; font-size:24px; color:#333;">Smarter Teams Start Here</h1>
                <p style="margin:10px 0 0; font-size:16px; color:#666;">Meet AiMY's AI Agents</p>
              </td>
            </tr>

            <!-- Section with Image + Text -->
            <tr>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="50%" align="center" style="padding:20px;">
                      <img src="https://s3-alpha-sig.figma.com/img/4e9f/9422/a183ed3d1ebc7e6ddb14795ac8ac17ba?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PorJixHOCfTZ9m6z7ryEVQbE4WoSl5RI4izkNXE69VqrcjAtA4h4fcosZhw62-MxD6OnY3AidpE4ftI~KihPvfbY-LyMnmihS9j7YfIhHSLGP1pB6SXkaLdAqW9zv-f~manu8CcFo2mUCvcHerHPFj7Ga8hI8BUq7C5x5R7oTMRvCwljIOzP96VZomZ50f9LdPkRN32dpBMt6Of-nm2-XrI2BZ~uX5eQ0G80IW9jkCHuQy2nmKrCnhueTwsH154GCMoxBlG~YVtTzafvHiKMfDf0eJzT-C4A8AJ~rXWoJsJXqrVFWKc0BnnMZrXtDUDepeG0x9dILwZQ9hfb-h3F8g__" alt="AiMY QA" width="200" style="display:block; max-width:100%;" />
                    </td>
                    <td width="50%" style="padding:20px; font-size:14px; color:#444;">
                      <h2 style="margin:0; font-size:18px; background: linear-gradient(90deg, #4F63DD 0%, #7F5DC9 50%, #AB58B4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">AiMY QA</h2>
                      <p style="margin:10px 0 0;">Your performance coach in the background, analyzing interactions and turning them into insights.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Feature List -->
            <tr>
              <td style="padding:20px; font-size:14px; color:#444;">
                <h2 style="margin:0 0 10px; font-size:18px; background: linear-gradient(90deg, #4F63DD 0%, #7F5DC9 50%, #AB58B4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Key Features</h2>
                <ul style="padding-left:20px; margin:0; line-height:1.8;">
                  <li>Understands every call and ticket – reviews 100% of interactions.</li>
                  <li>Learns your KPIs – adapts to what matters most to your team.</li>
                  <li>Fair, unbiased evaluations – consistent scoring without human bias.</li>
                  <li>Real-time alerts – spots performance issues instantly.</li>
                  <li>Insight-led graphs on demand – just type a question into the chat.</li>
                </ul>
              </td>
            </tr>

            <!-- Other Agents -->
            <tr>
              <td style="padding:20px; background-color:#f9f9f9;">
                <h2 style="margin:0 0 15px; font-size:20px; text-align:center; background: linear-gradient(90deg, #4F63DD 0%, #7F5DC9 50%, #AB58B4 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">More AiMY Agents</h2>
                
                <table width="100%" cellpadding="10" cellspacing="0" border="0">
                  <tr>
                    <td style="padding:10px; background-color:#ffffff; border-radius:8px; margin-bottom:10px;">
                      <h3 style="margin:0 0 5px; font-size:16px; color:#4F63DD;">AiMY Recruitment</h3>
                      <p style="margin:0; font-size:13px; color:#666;">The recruiter's best buddy, matching open roles with great talent in record time.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px; background-color:#ffffff; border-radius:8px; margin-bottom:10px;">
                      <h3 style="margin:0 0 5px; font-size:16px; color:#4F63DD;">AiMY Knowledge</h3>
                      <p style="margin:0; font-size:13px; color:#666;">Your team's brainy sidekick, ready with instant answers and insights whenever you need them.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px; background-color:#ffffff; border-radius:8px;">
                      <h3 style="margin:0 0 5px; font-size:16px; color:#4F63DD;">AiMY Sales</h3>
                      <p style="margin:0; font-size:13px; color:#666;">Your digital deal-hunter, finding the right people and starting the right conversations.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" bgcolor="#f0f0f0" style="padding:20px; font-size:12px; color:#666;">
                <p style="margin:0;">Contact Us: Egypt: +202-2527-3003</p>
                <p style="margin:5px 0 0;">
                  <a href="mailto:info@flairstech.com" style="color:#4F63DD; text-decoration:none;">info@flairstech.com</a>
                </p>
                <p style="margin:10px 0 0; color:#999;">AiMY © 2025</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

// Download HTML as .eml file (Email file format)
export const downloadAsEML = () => {
  const htmlContent = getEmailTemplate();
  const date = new Date().toUTCString();
  
  // Create proper .eml format
  const emlContent = `From: AiMY Newsletter <newsletter@aimy.com>
To: recipient@example.com
Subject: AiMY Newsletter - Meet Our AI Agents
Date: ${date}
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8

${htmlContent}`;

  const blob = new Blob([emlContent], { type: 'message/rfc822' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'aimy-newsletter.eml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Download HTML file
export const downloadAsHTML = () => {
  const htmlContent = getEmailTemplate();
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'aimy-newsletter.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Copy HTML to clipboard
export const copyToClipboard = async () => {
  const htmlContent = getEmailTemplate();
  try {
    await navigator.clipboard.writeText(htmlContent);
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
};

// Open in default email client
export const openInEmailClient = () => {
  const htmlContent = getEmailTemplate();
  const subject = encodeURIComponent('AiMY Newsletter - Meet Our AI Agents');
  const body = encodeURIComponent(htmlContent);
  
  // For most email clients, we'll use mailto with HTML
  // Note: This has limitations - consider using downloadAsEML instead
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};
