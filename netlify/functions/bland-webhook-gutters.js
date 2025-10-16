exports.handler = async (event) => {
    console.log("🔥 Incoming Bland webhook!");
    console.log("Headers:", event.headers);
    console.log("Raw body:", event.body);
  
    try {
      // Try to parse the body; if it fails, we'll log the error
      const payload = JSON.parse(event.body || "{}");
      console.log("✅ Parsed payload:", payload);
  
      // Extract event type in every possible way
      const eventType = payload.type || payload.event || "unknown";
      const data = payload.data || payload.call || payload || {};
  
      console.log("📞 Bland Event:", eventType);
      console.log("🧠 Data:", data);
  
      // Fire only when we clearly have a phone number
      if (data.phone_number || data.phone) {
        const phone = data.phone_number || data.phone || "Unknown";
        const summary = data.summary || "No summary";
        const status = data.status || eventType || "unknown";
        const duration = data.duration || 0;
        const transcript =
          data.transcription_text || data.transcript || "";
  
        const makeWebhook =
          "https://hook.us2.make.com/wf2ccxblnm27h6qa4x5goly0m7xq7gmk";
  
        console.log("🚀 Sending to Make:", makeWebhook);
        console.log("➡️ Payload to Make:", {
          phone,
          summary,
          status,
          duration,
          transcript,
        });
  
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
      } else {
        console.log("⚠️ No phone number found, skipping Make call");
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } catch (err) {
      console.error("❌ JSON parse or fetch error:", err);
      return { statusCode: 400, body: "Invalid JSON" };
    }
  };
  