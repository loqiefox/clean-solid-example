export interface EchoResult {
  received: string;
  length: number;
}

export function echoText(message: string): EchoResult {
  return { received: message, length: message.length };
}
