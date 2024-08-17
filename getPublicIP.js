import { exec } from 'child_process';
import clipboardy from 'clipboardy';

exec('curl -4 -s ifconfig.me', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error ejecutando curl: ${error}`);
    return;
  }
  const ip = stdout.trim(); // Elimina saltos de línea
  clipboardy.writeSync(ip); // Copia la IP al portapapeles
  console.log(`${ip} - Copied! ✅`);
});
