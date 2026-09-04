import { classifyDay, type DayType } from '@/domain/day-type';

export async function dayTypeUseCase(date: Date): Promise<DayType> {
  return classifyDay(date);
}
