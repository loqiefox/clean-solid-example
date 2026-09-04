export type DayType = 'рабочий' | 'выходной';

export function classifyDay(date: Date): DayType {
  const weekday = date.getDay();
  const isWeekend = weekday === 0 || weekday === 6;

  if (isWeekend) {
    return 'выходной';
  }

  return 'рабочий';
}
