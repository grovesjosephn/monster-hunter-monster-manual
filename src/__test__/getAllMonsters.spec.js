import { sluggify } from '../utils/sluggify';

describe('sluggify monster names', () => {
  test('given a monster name, it should return the sluggified name', () => {
    expect(sluggify('Great Jagras')).toBe('great_jagras');
    expect(sluggify('Tobi-Kadachi')).toBe('tobi_kadachi');
    expect(sluggify('Tzitzi-Ya-Ku')).toBe('tzitzi_ya_ku');
    expect(sluggify('Pukei-Pukei')).toBe('pukei_pukei');
    expect(sluggify('Kulu-Ya-Ku')).toBe('kulu_ya_ku');
    expect(sluggify("Xeno'jiiva")).toBe('xenojiiva');
  });
});
