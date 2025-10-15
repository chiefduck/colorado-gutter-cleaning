// Analytics tracking utilities
// These functions can be connected to Google Analytics, Facebook Pixel, or other analytics services

export type TrackingEvent = 
  | 'page_view'
  | 'form_view'
  | 'form_submit'
  | 'form_error'
  | 'cta_click'
  | 'phone_click'
  | 'service_view'
  | 'exit_intent_shown'
  | 'exit_intent_converted';

interface TrackingData {
  event: TrackingEvent;
  data?: Record<string, any>;
}

/**
 * Track conversion events for ads platforms
 * This can be connected to Google Analytics, Facebook Pixel, etc.
 */
export const trackEvent = ({ event, data = {} }: TrackingData) => {
  // Console log for development - replace with actual analytics in production
  if (import.meta.env.DEV) {
    console.log(`📊 Analytics Event: ${event}`, data);
  }

  // Google Analytics 4 (gtag.js)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, data);
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', event, data);
  }

  // Add other analytics platforms as needed
};

/**
 * Track page views
 */
export const trackPageView = (path: string) => {
  trackEvent({
    event: 'page_view',
    data: { page_path: path }
  });
};

/**
 * Track form interactions
 */
export const trackFormView = () => {
  trackEvent({
    event: 'form_view',
    data: { timestamp: Date.now() }
  });
};

export const trackFormSubmit = (serviceType?: string) => {
  trackEvent({
    event: 'form_submit',
    data: { 
      service_type: serviceType,
      timestamp: Date.now()
    }
  });
};

export const trackFormError = (error: string) => {
  trackEvent({
    event: 'form_error',
    data: { error_message: error }
  });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (ctaLocation: string, ctaType: string) => {
  trackEvent({
    event: 'cta_click',
    data: { 
      location: ctaLocation,
      type: ctaType
    }
  });
};

/**
 * Track phone number clicks
 */
export const trackPhoneClick = (location: string) => {
  trackEvent({
    event: 'phone_click',
    data: { location }
  });
};

/**
 * Track service views
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent({
    event: 'service_view',
    data: { service_name: serviceName }
  });
};

/**
 * Track exit intent popup
 */
export const trackExitIntentShown = () => {
  trackEvent({
    event: 'exit_intent_shown',
    data: { timestamp: Date.now() }
  });
};

export const trackExitIntentConverted = (action: 'form' | 'phone') => {
  trackEvent({
    event: 'exit_intent_converted',
    data: { 
      action,
      timestamp: Date.now()
    }
  });
};
