const APP_ID = "97053747cb414a02bb27de8e55549466";
const APP_CERTIFICATE = "2e62982b423148b582d9a9d71cd33606";
const { RtcTokenBuilder, RtcRole } = require("agora-access-token");

export default function handler(req, res) {
    // res.status(200).json({ message: "Hello, World!" });

    const channelName = req.query.channelName;
    if (!channelName) {
        return res.status(400).json({ error: "Channel name is required" });
    }

    const uid = 0; // uid 0 means the Agora server will assign one
    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 24 * 60 * 60;
    const currentTime = Math.floor(Date.now() / 1000);
    const privilegeExpireTime = currentTime + expirationTimeInSeconds;

    const token = RtcTokenBuilder.buildTokenWithUid(
        APP_ID,
        APP_CERTIFICATE,
        channelName,
        uid,
        role,
        privilegeExpireTime
    );
    return res.json({ token });
}
