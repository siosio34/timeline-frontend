import RequestApi from 'utils/request';

const register = registerEventData => {
  return RequestApi.post('/event', { ...registerEventData });
};

const deleteEvent = eventId => {
  return RequestApi.delete(`/events/${eventId}`);
};

export default {
  register,
  deleteEvent,
};
