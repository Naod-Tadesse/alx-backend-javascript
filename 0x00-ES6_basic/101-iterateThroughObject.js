export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const emp of reportWithIterator) {
    result += `${emp} | `;
  }

  return result.slice(0, -3);
}
