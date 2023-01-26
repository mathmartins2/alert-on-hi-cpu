import si from 'systeminformation';
const threshold = 80;

export default async function checkCPU() {
    setInterval(async () => {
        let { currentLoad: currentLoadSystem } = await si.currentLoad()
        currentLoadSystem = Math.round(currentLoadSystem)
        console.log(`CPU usage is at ${currentLoadSystem}%, which is below the threshold of ${threshold}%.`);
        if (currentLoadSystem >= threshold && currentLoadSystem < 100) {
            sendDiscordMessage(`CPU usage is at ${currentLoadSystem}%, which is above the threshold of ${threshold}%.`)
        }
    }, 3000);
}
checkCPU()

const sendDiscordMessage = async (message) => {
  await axios.post(process.env.DISCORD_URL, {
    username: 'LULA CAMARADA',
    content: message
  })
}