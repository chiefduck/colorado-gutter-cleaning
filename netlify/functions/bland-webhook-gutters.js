// /netlify/functions/bland-webhook-gutters.js
exports.handler = async (event) => {
    try {
      const payload = JSON.parse(event.body || "{}");
      console.log("📞 Bland Event:", payload.type);
      console.log("🧠 Data:", payload.data);
  
      const phone = payload.data?.phone_number || "Unknown";
      const summary = payload.data?.summary || "No summary";
      const transcript = payload.data?.transcription_text || "";
  
      // Example: forward to your Make webhook for Sheets logging
      await fetch("https://hook.us2.make.com/YOUR_MAKE_WEBHOOK_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, summary, transcript })
      });
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } catch (err) {
      console.error("❌ Webhook error:", err);
      return { statusCode: 400, body: "Invalid JSON" };
    }
  };
  