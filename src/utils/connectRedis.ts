import Redis from 'ioredis';

async function connectRedis(): Promise<Redis> {
  try {
    const redis = new Redis();
    // Do any initialization or configuration here if needed.
    return redis;
  } catch (error) {
    console.error('Error connecting to Redis:', error);
    throw error;
  }
}

export default connectRedis;
