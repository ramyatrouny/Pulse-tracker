import { Logger } from '@ubio/framework';
import { dep } from 'mesh-ioc';

/**
 * Handles errors thrown during the application's runtime, specifically within
 * the HTTP request processing pipeline. This class provides a method to format
 * and respond with a consistent error structure across the application.
 */
export class ErrorHandler {
  @dep() private logger!: Logger;

  handle(error: any): { name: string; message: string; details?: object } {
      this.logger.error('An error occurred:', error);

      if (error instanceof Error) {
          return {
              name: error.name || 'InternalServerError',
              message: error.message || 'An unexpected error occurred',
              details: {
                  stack: error.stack
              }
          };
      }

      return new Error('An unexpected error occurred');
  }
}

