export function getDaysFrom1970(time: number): number {
  return time / (60 * 60 * 1000 * 24);
}

export function getWeeksFrom1970(time: number): number {
  let dayNumber = getDaysFrom1970(time);
  dayNumber += 3; // Prima settimana in assoluto (Lunedì 5 gennaio 1970)
  return dayNumber / 7;
}
