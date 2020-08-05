import { poll } from './index';

async function createVote(data) {
  try {
    const response = await poll.post('/votes', data);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { createVote };
