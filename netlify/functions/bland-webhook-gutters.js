// /netlify/functions/bland-webhook-gutters.js
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
  
        // Forward this data to Make
        await fetch("https://hook.us2.make.com/3bmt81lb6iavo6obh7nvmir22cudn43o", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, summary, status, duration, transcript })
        });
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } catch (err) {
      console.error("❌ Webhook error:", err);
      return { statusCode: 400, body: "Invalid JSON" };
    }
  };
  