exports.handler = async (event) => {
    try {
      const payload = JSON.parse(event.body || "{}");
      console.log("📞 Raw Payload:", payload);
  
      // Support both 'type' and 'event' keys from Bland
      const eventType = payload.type || payload.event || "unknown";
      const data = payload.data || payload.call || payload || {};
  
      console.log("📞 Bland Event:", eventType);
      console.log("🧠 Data:", data);
  
      if (eventType === "call.ended" || data.status === "completed") {
        const phone = data.phone_number || data.phone || "Unknown";
        const summary = data.summary || "No summary provided";
        const status = data.status || "completed";
        const duration = data.duration || 0;
        const transcript =
          data.transcription_text || data.transcript || "";
  
        const makeWebhook =
          "https://hook.us2.make.com/wf2ccxblnm27h6qa4x5goly0m7xq7gmk";
  
        console.log("🚀 Forwarding to Make:", makeWebhook);
  
        const response = await fetch(makeWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone,
            summary,
            status,
            duration,
            transcript,
          }),
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
  
  



  