const API_KEY = 'ZvwFUDsE.Jzb2WU0QPw2v9iJHyCBJKd5BjXKFCigL';
const TRACKING_URL = 'https://api.smalk.ai/api/v1/tracking/visit';

export interface RequestMetadata {
  request_path: string;
  request_method: string;
  request_headers: Record<string, string>;
}

export class TrackingService {
  private static instance: TrackingService;

  private constructor() {}

  public static getInstance(): TrackingService {
    if (!TrackingService.instance) {
      TrackingService.instance = new TrackingService();
    }
    return TrackingService.instance;
  }

  /**
   * Track a visit to the API - non-blocking
   * @param metadata Request metadata to send
   */
  public async trackVisit(metadata: RequestMetadata): Promise<void> {
    try {
      // Make the API call in the background without blocking
      fetch(TRACKING_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Api-Key ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metadata),
      }).catch((error) => {
        // Silently handle errors to ensure non-blocking behavior
        console.debug('Tracking API call failed:', error);
      });
    } catch (error) {
      // Silently handle any synchronous errors
      console.debug('Tracking service error:', error);
    }
  }

  /**
   * Track current page visit
   * @param path Current page path
   */
  public trackPageVisit(path: string): void {
    const metadata: RequestMetadata = {
      request_path: path,
      request_method: 'GET',
      request_headers: {
        'user-agent': navigator.userAgent,
        'referer': document.referrer || '',
        'accept-language': navigator.language,
        'host': window.location.host,
      },
    };

    this.trackVisit(metadata);
  }
}

export const trackingService = TrackingService.getInstance();