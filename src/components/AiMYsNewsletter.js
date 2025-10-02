import React, { useState } from "react";
import "../styles/dots-pattern.css";
import "../styles/gradients.css";
import { downloadAsEML, downloadAsHTML, copyToClipboard } from "../utils/emailExport";

// Image imports
const imgFrame8 =
  "https://s3-alpha-sig.figma.com/img/8775/c0fb/f65c13f12849948c17965fa647c16919?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=baNCvxbjKRXNMQ3mh9sxBSL~RyslzdPNiEHKuX-w9DV0u3wE0CgLQiuR4RqY5PWlN7si8N3Ef5rBcKTEXlqeUua-bTW-cJ86ypeSLgVU1~9WjujrlXFTjjxHfx2b1NdiyTsfjQjzLwZF7593AeUYlyV0~mNXrM2qt~8qEDmLSY3xW6by5OVbtV4O69lNZk0gbNbofcWg8b3Zpr2wrZVFsWpX-LDYuxkXW4kSKnFidBTkE2z8Dz5epcpK95r-9a-Tw4fAHpxIZdVRL-h76v6sh-MtOfYDaWU2BtGe0vcaCxdODOh1peb~Uhpvh7m668sjdDbJEStfUHxIs0BD-w3QwQ__";
const imgScreenshot202509251832321RemovebgPreview1 =
  "https://s3-alpha-sig.figma.com/img/e7a0/7227/4a7905a812ea7f2bc91fcb98a9ea3155?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NvoUc4-K-0SPkbb03MXV-rQIYQ-k21hiFUW6ScwliQ1wLcQ8TdsDkTE7ioNwymVkDISRSAS17TUiUm0hWJO7hag3lJEwPxX7csCPmolvQu~jsxQn9tHVG8FnHAVvqb5xmPurj88xB3rBLCNrTWxZbf5d8~uDY5IfffHJshXAyvBBi~1N0Krl0LOpinfzvx9kF9kIScyHqsbYjIOGUnNsP5HUOb8E28bDL7NtjejbIPyPmcP82nYUHwKsSsMFEx0vAV8hyYiiQbez652ciEKzkdztKTF66tdGoNxzt8c-udd0foILhaokJrcgDBDcPkSK0ovOTVVMRU-uc~xbGhFHTg__";
const img3DFriendlyCuteRobotVirtualSmartAssistantBotChatbotMascotAiArtificialIntelligence1 =
  "https://s3-alpha-sig.figma.com/img/e052/84f2/ebaf90fadae81c48dc83cb846fb1dccf?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WnF5Z1W5mSG7yLfzn7PKAWbcOBb3MwSiURXlys3DvWAP5BtdHE1fLLkRlHu8dr3zinAxbMvXehNzNf9SI-73EzcVcBdKmVlqf2jiHZFDknBkXyjz0rnHsOSZ9rmuUQUQd1uijK1PFT-mHzpgGLD2a4eMOt7EFBIAfBLxU-GBA51Zhxe4aKpCVd6U~E3kwv76l1-fnS3vjqTCVP-p8uabJa6i0~aT1bycBIQ~AZaamVVtyywO3MVa1gVKOQHbf5dLvdRQZ4Ju66gPD~yupfIwpZMMYC7BertPZrUQKjkJO~DiJA3WegV0jqMt-i1tD56vSiKEjZwL~oHj9YjDvvUtjQ__";
const imgRectangle10 =
  "https://s3-alpha-sig.figma.com/img/4e9f/9422/a183ed3d1ebc7e6ddb14795ac8ac17ba?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PorJixHOCfTZ9m6z7ryEVQbE4WoSl5RI4izkNXE69VqrcjAtA4h4fcosZhw62-MxD6OnY3AidpE4ftI~KihPvfbY-LyMnmihS9j7YfIhHSLGP1pB6SXkaLdAqW9zv-f~manu8CcFo2mUCvcHerHPFj7Ga8hI8BUq7C5x5R7oTMRvCwljIOzP96VZomZ50f9LdPkRN32dpBMt6Of-nm2-XrI2BZ~uX5eQ0G80IW9jkCHuQy2nmKrCnhueTwsH154GCMoxBlG~YVtTzafvHiKMfDf0eJzT-C4A8AJ~rXWoJsJXqrVFWKc0BnnMZrXtDUDepeG0x9dILwZQ9hfb-h3F8g__";
const imgRectangle11 =
  "https://s3-alpha-sig.figma.com/img/2c61/2c9f/0ae39f5d6e9909bcbec1844dde5763ed?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N3-z8yvK1PVXilB5xzIwIE3IiBmhUT6JooBy0zcre0cCSMpBT8ZqH-6SesyYd1EO4ARAK7Zezq4-UdT69pm~yfOW6lIcFmxKIq70J-fJbUpPTKcumDkDOz29BdKUbe14mM4f1BvCqmgH4xrRK3pxXEJ5gFazzSS6WC957RD9ZC780jiNvzRV5RpTicRoMaksFwKICwNuOO9OlRq7gvUOX-BDDHR5S~0FGvVDVDWDiv1aqZz~xm~B7tJMjOcE9jUhVOucLVOqBIVqn~-QnsG6kDh60nYqKBZQUxf8jgcsrMubTs5BW3MQz19dm1UxpTWWPzD8FDWkoEyVga6HH0gTAQ__";
const imgAimyLogo =
  "https://s3-alpha-sig.figma.com/img/7bed/2726/d3e8e927320bffd6c2afcb1042dfe499?Expires=1760313600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Wb861ZD0fGM3M5ogSJYamKyZbmMqFQVENfkcoCgjYexR3l~pmuWoxoKxaFb8lRxkLotA4HoEJVAsVB8Ux8CZFu9mqfAME6rYaPa7nx7yPuqPO28Nbx~AnjA-Hhg8fCvDp~fV1puoTG65QIEHZQ4f0Zaorp2pWJaYCbr-QlOtafu2r3fJcjxde49xnw4~AgRF1UWaoZMjs5TpV~cO~kjwJvpUPqfl1wUGga15CtOXdndAZ-Xe76OmlK30dT5oRRRdgSi~NM66jHIbtVgNvZfQIGVf~ShK8lXyFgxF~hqtiLr-7orHCvrKzqp--eHk3ihjIbJTsc-zNYR1I6PL6meKNQ__";

export default function AiMYsNewsletter() {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyToClipboard = async () => {
    const success = await copyToClipboard();
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div
      className="bg-gradient-aimy-vertical relative min-h-screen w-[600px] mx-auto"
      data-name="AiMY's Newsletter"
    >
      <div className="dots-pattern absolute inset-0 pointer-events-none"></div>

      {/* Export Buttons */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={downloadAsEML}
          className="px-4 py-2 bg-gradient-aimy text-white rounded-lg shadow-aimy hover:shadow-xl transition-all text-sm font-urbanist font-medium"
        >
          📧 Download as Email (.eml)
        </button>
        <button
          onClick={downloadAsHTML}
          className="px-4 py-2 bg-gradient-aimy text-white rounded-lg shadow-aimy hover:shadow-xl transition-all text-sm font-urbanist font-medium"
        >
          💾 Download as HTML
        </button>
        <button
          onClick={handleCopyToClipboard}
          className="px-4 py-2 bg-gradient-aimy text-white rounded-lg shadow-aimy hover:shadow-xl transition-all text-sm font-urbanist font-medium"
        >
          {copySuccess ? '✅ Copied!' : '📋 Copy HTML'}
        </button>
      </div>

      {/* Header Section */}
      <header className="px-3 py-1.5 w-full">
        <div className="flex justify-between items-center font-urbanist text-xs text-black">
          <span>Date: 00/00/0000</span>
          <span>Version: V-00000</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 pt-16 pb-12 relative">
        <div className="relative flex justify-between items-start">
          {/* Team Image */}
          <div className="w-[280px] h-[180px] rounded-xl overflow-hidden shadow-aimy z-10">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-aimy opacity-10" />
              <div className="absolute inset-0 glass-effect" />
              <img
                src={imgFrame8}
                alt="Team AiMY"
                className="absolute h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-20 flex-1 pl-8">
            <h1 className="font-urbanist font-extralight text-4xl text-aimy-text mb-4">
              Team AiMY;
              <br />
              what we're
              <span className="gradient-text"> building.</span>
            </h1>

            {/* Meet AiMY Box */}
            <div className="relative mt-6 max-w-[360px]">
              <div className="glass-effect rounded-xl p-5 relative z-10">
                <div className="flex flex-col gap-3">
                  <img
                    src={imgScreenshot202509251832321RemovebgPreview1}
                    alt="AiMY Logo"
                    className="w-28"
                  />
                  <div>
                    <h2 className="text-xl font-urbanist font-bold mb-2">
                      <span className="text-[#4F63DD]">Meet</span>
                      <br />
                      <span className="gradient-text">AiMY</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-gradient-aimy opacity-20 z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Introduction */}
      <section className="px-12 py-8">
        <div className="relative">
          <div className="glass-effect rounded-xl p-8 mb-8 relative z-20">
            <h2 className="font-urbanist font-bold text-2xl gradient-text mb-4">
              Smarter Teams Start Here
              <br />
              Meet AiMY's AI Agents
            </h2>
            <p className="font-urbanist text-sm text-aimy-gray max-w-[70%]">
              AiMY agents aren't here to replace you — they're here to lift you
              up. They take care of routine tasks, surface insights, and free
              you to focus on the work that really makes a difference.
            </p>
          </div>
          <div className="absolute right-16 top-0 z-10">
            <div className="relative">
              <div className="glass-effect rounded-xl p-4 bg-white/5">
                <img
                  src={
                    img3DFriendlyCuteRobotVirtualSmartAssistantBotChatbotMascotAiArtificialIntelligence1
                  }
                  alt="AI Assistant"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 rounded-xl bg-gradient-aimy opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Cards */}
      <section className="px-12 space-y-8">
        {/* AiMY QA */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-urbanist font-extrabold text-xl gradient-text mb-2">
                  AiMY QA
                </h3>
                <p className="font-urbanist text-sm text-aimy-gray max-w-md">
                  Your performance coach in the background, analyzing
                  interactions and turning them into insights.
                </p>
              </div>
              <div className="w-24 h-24">
                <img
                  src={imgRectangle10}
                  alt="AiMY QA"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Understands every call and ticket - reviews 100% of interactions so nothing gets missed.",
                "Learns your KPIs - adapts to what matters most to your team, whether that's speed, quality, or comp.",
                "Fair, unbiased evaluations - consistent scoring without human bias.",
                "Real-time alerts - spots performance issues as they happen.",
                "Insight-led graphs and performance metrics - Instantly understand your performance trends.",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-aimy flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Video Section */}
            <div className="mt-6 relative rounded-xl overflow-hidden aspect-video bg-gradient-aimy-card">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-gradient-aimy flex items-center justify-center shadow-aimy transform transition-transform hover:scale-110">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AiMY Recruitment */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-urbanist font-extrabold text-xl gradient-text mb-2">
                AiMY Recruitment
              </h3>
              <p className="font-urbanist text-sm text-aimy-gray max-w-md">
                The recruiter's best buddy, matching open roles with great
                talent in record time.
              </p>
            </div>
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-gradient-aimy opacity-10 rounded-lg"></div>
              <img
                src={imgRectangle11}
                alt="AiMY Recruitment"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* AiMY Knowledge */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-urbanist font-extrabold text-xl gradient-text mb-2">
                AiMY Knowledge
              </h3>
              <p className="font-urbanist text-sm text-aimy-gray max-w-md">
                Your team's brainy sidekick, ready with instant answers and
                insights whenever you need them.
              </p>
            </div>
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-gradient-aimy opacity-10 rounded-lg"></div>
              <img
                src={imgRectangle11}
                alt="AiMY Knowledge"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* AiMY Sales */}
        <div className="glass-effect rounded-xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-urbanist font-extrabold text-xl gradient-text mb-2">
                AiMY Sales
              </h3>
              <p className="font-urbanist text-sm text-aimy-gray max-w-md">
                Your digital deal-hunter, finding the right people and starting
                the right conversations.
              </p>
            </div>
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-gradient-aimy opacity-10 rounded-lg"></div>
              <img
                src={imgRectangle10}
                alt="AiMY Sales"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 w-full glass-effect p-5">
        <div className="flex justify-between items-center max-w-[500px] mx-auto">
          <div className="text-xs">
            <h4 className="font-urbanist text-aimy-gray">Contact Us</h4>
            <p className="text-aimy-gray my-1">Egypt: +202-2527-3003</p>
            <a
              href="mailto:info@flairstech.com"
              className="text-aimy-teal hover:text-aimy-purple transition-colors"
            >
              info@flairstech.com
            </a>
          </div>
          <img src={imgAimyLogo} alt="AiMY Logo" className="h-6" />
        </div>
      </footer>
    </div>
  );
}
