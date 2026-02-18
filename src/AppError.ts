export interface LocalizedResource {
  type: 'localizedResource';
  key: string;
  args?: Array<string | number | LocalizedResource>; // Note the recursion here
}

export interface GenericError {
  type: 'generic';
  message: string;
}

export type BackendErrorDetail = LocalizedResource | GenericError;

export interface BackendErrorResponse {
  message: string;
  status?: number;
  timestamp?: number;
  errors?: BackendErrorDetail[];
  stackTrace?: string;
  exceptionClass?: string;
}

export class AppError extends Error {
  readonly status: number;
  readonly timestamp: number;
  readonly errors: BackendErrorDetail[];
  readonly stackTrace?: string;
  readonly exceptionClass?: string;
  readonly cause?: unknown;

  constructor(data: BackendErrorResponse, cause?: unknown) {
    super(data.message);

    this.name = 'AppError';
    this.status = data.status ?? 500;
    this.timestamp = data.timestamp ?? Date.now();
    this.errors = data.errors || [];
    this.stackTrace = data.stackTrace;
    this.exceptionClass = data.exceptionClass;
    this.cause = cause;
  }

  static isLocalized(error: BackendErrorDetail): error is LocalizedResource {
    return error.type === 'localizedResource';
  }
}