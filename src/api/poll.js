import { poll } from './index';

async function fetchPolls() {
  try {
    const response = await poll.get('/polls');
    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchPolls };
