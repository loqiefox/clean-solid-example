import { greetUseCase } from '@/application/use-cases/greet.usecase';
import { dayTypeUseCase } from '@/application/use-cases/dayType.usecase';
import { echoUseCase } from '@/application/use-cases/echo.usecase';

export type UseCases = {
  greet: typeof greetUseCase
  dayType: typeof dayTypeUseCase
  echo: typeof echoUseCase
}

// Всё, что наружные слои получают от application.
// Здесь нет repository/БД: у нас пока "без данных". Единственная
// "бизнес-операция" каждого сценария — одно доменное правило.
export interface ApplicationContainer {
  useCases: UseCases
}

export function buildApplication(): ApplicationContainer {
  return {
    useCases: {
      greet: greetUseCase,
      dayType: dayTypeUseCase,
      echo: echoUseCase,
    },
  }
}
