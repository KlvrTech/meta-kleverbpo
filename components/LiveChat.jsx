import React from "react";

const LiveChat = () => {
  return (
    <div>
      <chat-widget
        style={{
          "--chat-widget-primary-color": "#A509FF",
          "--chat-widget-active-color": "#A509FF",
          "--chat-widget-bubble-color": "#A509FF",
        }}
        location-id="P3kOwFVjFdjKMt4YAvfQ"
        use-email-field="true"
        prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
        agency-name="KleverBPO"
        agency-website=""
      ></chat-widget>{" "}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      >
        {" "}
      </script>
    </div>
  );
};

export default LiveChat;
