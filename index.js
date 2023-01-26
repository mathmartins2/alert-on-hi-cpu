import si from 'systeminformation';
const threshold = 90;

export default async function checkCPU() {
    setInterval(async () => {
        let { currentLoadSystem } = await si.currentLoad()
        currentLoadSystem = Math.round(currentLoadSystem * 100);
        console.log(`CPU usage is at ${currentLoadSystem}%, which is below the threshold of ${threshold}%.`);
        if (currentLoadSystem >= threshold && currentLoadSystem < 100) {
            console.log(`CPU usage is at ${currentLoadSystem}%, which is above the threshold of ${threshold}%.`);
        }
    }, 3000);
}
checkCPU()