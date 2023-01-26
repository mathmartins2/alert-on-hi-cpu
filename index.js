import 'dotenv/config'
import os from 'os'

const threshold = 90; 

setInterval(async () => {
  const usage = os.loadavg()[0];
  const percentage = usage * 100;
  console.log(`CPU usage is at ${percentage}%, which is above the threshold of ${threshold}%.`);
  if (percentage > threshold) {
    await sendDiscordMessage(`CPU usage is at ${percentage}%, which is above the threshold of ${threshold}%.`);
    console.log(`CPU usage is at ${percentage}%, which is above the threshold of ${threshold}%.`);
  }
}, 3000);


const sendDiscordMessage = async (message) => {
  await axios.post(process.env.DISCORD_URL, {
    username: 'LULA CAMARADA',
    content: message
  })
}