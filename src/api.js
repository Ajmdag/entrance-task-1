import { mapServerData } from './mappers';

const loadList = () => {
  return fetch('/api/stations')
    .then(response => response.json())
    .then(mapServerData);
}

const loadDetails = id => {
  return fetch(`/api/stations/${id}`).then(response => response.json());
}
export { loadList };
export { loadDetails };