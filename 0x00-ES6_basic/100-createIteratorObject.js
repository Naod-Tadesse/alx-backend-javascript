export default function createIteratorObject(report) {
  return (function* lll() {
    for (const dep of Object.values(report.allEmployees)) {
      for (const emp of dep) {
        yield emp;
      }
    }
  }());
}
