exports.handler = async (event) => {
    try {
      const payload = JSON.parse(event.body || "{}");
      console.log("📞 Bland Event:", payload.type);
      console.log("🧠 Data:", payload.data);
  
      if (payload.type === "call.ended") {
        const phone = payload.data?.phone_number || "Unknown";
        const summary = payload.data?.summary || "No summary provided";
        const status = payload.data?.status || "completed";
        const duration = payload.data?.duration || 0;
        const transcript = payload.data?.transcription_text || "";
  
        const makeWebhook = "https://hook.us2.make.com/wf2ccxblnm27h6qa4x5goly0m7xq7gmk";
  
        console.log("🚀 Forwarding to Make:", makeWebhook);
  
        const response = await fetch(makeWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, summary, status, duration, transcript }),
        });
  
        console.log("✅ Make response status:", response.status);
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } catch (err) {
      console.error("❌ Webhook error:", err);
      return { statusCode: 400, body: "Invalid JSON" };
    }
  };
  