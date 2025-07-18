import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch('https://api.meshtastic.org/resource/deviceHardware');
    const data = await response.json();
    
    res.setHeader('Access-Control-Allow-Origin', 'https://flasher.meshcn.net');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch device hardware' });
  }
}