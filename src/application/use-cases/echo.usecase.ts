import { echoText, type EchoResult } from '@/domain/echo';

export async function echoUseCase(message: string): Promise<EchoResult> {
  return echoText(message);
}
