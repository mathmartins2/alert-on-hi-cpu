import 'dotenv/config'
import si from 'systeminformation';
import axios from 'axios';
const threshold = 90;
let lastNotificationTime = null;

export default async function checkCPU() {
  setInterval(async () => {
    let { currentLoad: currentLoadSystem } = await si.currentLoad();
    currentLoadSystem = Math.round(currentLoadSystem);
    console.log(`CPU usage is at ${currentLoadSystem}%, which is below the threshold of ${threshold}%.`);
    if (currentLoadSystem >= threshold) {
      const currentTime = Date.now();
      if (!lastNotificationTime || currentTime - lastNotificationTime > 300000) {
        sendDiscordMessage(`CPU usage is at ${currentLoadSystem}%, which is above the threshold of ${threshold}%. CORRE Q O SGEDU TA PEGANDO FOGO @everyone`);
        lastNotificationTime = currentTime;
      }
    }
  }, 3000);
}
checkCPU();

const sendDiscordMessage = async (message) => {
  await axios.post(process.env.DISCORD_URL, {
    username: 'LULA CAMARADA',
    content: message
  });
};
