import { buildGreeting } from '@/domain/hello';

export async function greetUseCase(name?: string): Promise<string> {
  return buildGreeting(name);
}
