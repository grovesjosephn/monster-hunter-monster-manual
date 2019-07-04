/**
 *
 * @param {string} name
 */
export function sluggify(name) {
  return name
    .toLowerCase()
    .replace('-', '_')
    .replace('-', '_')
    .replace(' ', '_')
    .replace("'", '');
}
