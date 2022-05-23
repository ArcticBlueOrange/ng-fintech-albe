
export function dateToString(d: Date, locale: 'eu' | 'us') {
  // console.log(d)
  try {
    let month = leftPad(d.getMonth() + 1)
    let day = leftPad(d.getDate())
    let year = leftPad(d.getFullYear());
    if (locale === 'us')
      return `${month}/${day}/${year}`;
    else return `${day}/${month}/${year}`;
  } catch (e) {
    console.log("Dato: " + d);
    return "" + d;
  }
}

export function leftPad(n: number, d: number = 2) {
  // console.log("Dato: " + n);
  let o = n.toString();
  const l = o.length;
  if (l >= d) return o;
  return '0'.repeat(d - l) + o;
}
