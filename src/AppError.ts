interface AppErrorOptions {
  status?: number;
  cause?: Error;
  payload?: any;
}

export class AppError extends Error {
  status?: number;
  cause?: Error;
  payload?: any;

  constructor(message: string, options: AppErrorOptions = {}) {
    super(message);
    this.name = 'AppError';
    this.status = options?.status;
    this.cause = options?.cause;
    this.payload = options?.payload;
  }
}
