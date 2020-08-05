import { poll } from './index';

async function fetchPolls() {
  try {
    const response = await poll.get('/polls');
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchPoll(pollId) {
  try {
    const response = await poll.get(`/polls/${pollId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function createPoll(data) {
  try {
    const response = await poll.post(`/polls`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export { fetchPolls, fetchPoll, createPoll };
