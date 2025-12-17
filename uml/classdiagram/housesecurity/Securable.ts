export interface Securable {
  isSecured(): boolean;
  getSecurityStatus(): string;
}
