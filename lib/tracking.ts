import { track } from "@vercel/analytics";

// Form events
export const trackFormStart = (formType: "hero form" | "contact form") => {
  track("form_start", { form_type: formType });
};

export const trackFormSubmit = (
  formType: "hero form" | "contact form",
  success: boolean
) => {
  track("form_submit", { form_type: formType, success });
};

export const trackFormError = (
  formType: "hero form" | "contact form",
  errorType: string
) => {
  track("form_error", { form_type: formType, error_type: errorType });
};

// Button click events
export const trackButtonClick = (
  buttonName: string,
  location: string,
  additionalData?: Record<string, string | number | boolean>
) => {
  track("button_click", {
    button_name: buttonName,
    location,
    ...additionalData,
  });
};

// Section view events
export const trackSectionView = (sectionId: string) => {
  track("section_view", { section_id: sectionId });
};

// CTA events
export const trackCTAClick = (ctaName: string, location: string) => {
  track("cta_click", { cta_name: ctaName, location });
};

// Phone call click
export const trackPhoneClick = (location: string) => {
  track("phone_click", { location });
};

// Language switch
export const trackLanguageSwitch = (from: string, to: string) => {
  track("language_switch", { from_language: from, to_language: to });
};

// Calculator interaction
export const trackCalculatorInteraction = (
  action: "slider_change" | "result_view",
  homeValue?: number,
  estimatedAmount?: number
) => {
  track("calculator_interaction", {
    action,
    home_value: homeValue,
    estimated_amount: estimatedAmount,
  });
};

// FAQ interaction
export const trackFAQClick = (questionIndex: number, questionText: string) => {
  track("faq_click", {
    question_index: questionIndex,
    question_preview: questionText.slice(0, 50),
  });
};

// Landing page unlock form
export const trackLandingUnlockStart = () => {
  track("landing_unlock_start", { form_type: "ads" });
};

export const trackLandingUnlockSubmit = (
  success: boolean,
  estimatedMin?: number,
  estimatedMax?: number
) => {
  track("landing_unlock_submit", {
    form_type: "ads",
    success,
    estimated_min: estimatedMin,
    estimated_max: estimatedMax,
  });
};

export const trackLandingUnlockError = (errorType: string) => {
  track("landing_unlock_error", { form_type: "ads", error_type: errorType });
};
