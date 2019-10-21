// Seconds to Hours:Minutes
export function secondsToHms(d: number): string {
  d = Number(d);

  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);

  const hDisplay = h > 10 ? h : '0' + h;
  const mDisplay = m > 10 ? m : '0' + m;

  return hDisplay + ':' + mDisplay;
}

// ngFor performance
export function trackByFn(index: any, item: any) {
  return item.id;
}
