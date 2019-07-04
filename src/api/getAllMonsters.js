import axios from 'axios';
import { mhwIcons } from '../assets/images';

import { sluggify } from '../utils/sluggify';

export function getAllMonsters() {
  return axios.get('https://mhw-db.com/monsters?q={"type":"large"}');
}

export function getAllMonstersWithImages() {
  return getAllMonsters().then(res => {
    return res.data.map(monster => ({
      ...monster,
      image: mhwIcons[`${sluggify(monster.name)}_icon`],
    }));
  });
}
