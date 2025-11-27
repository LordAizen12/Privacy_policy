import { PolicySectionData, ContactInfo } from './types';

export const APP_NAME = "QuickMentor AI";
export const DEVELOPER_NAME = "Aizen";
export const LAST_UPDATED = "27 Nov 2025";

export const CONTACT_INFO: ContactInfo = {
  name: "Aizen",
  email: "singhimoksh1212@gmail.com"
};

export const POLICY_SECTIONS: PolicySectionData[] = [
  {
    id: "collection",
    title: "1. Information We Collect",
    content: "The App does NOT collect, store, or share any personally identifiable information (PII).",
    subsections: [
      {
        title: "The App may process the following (depending on features):",
        items: [
          "Text entered by the user to generate responses (sent to AI APIs).",
          "Basic, non-identifiable app usage data (app opens, button clicks)."
        ]
      },
      {
        items: [
          "No names, emails, phone numbers, or sensitive personal data are collected."
        ]
      }
    ]
  },
  {
    id: "usage",
    title: "2. How We Use Information",
    content: "Any information entered in the App is used only to provide app functionality, such as:",
    subsections: [
      {
        items: [
          "Generating AI responses",
          "Improving app experience"
        ]
      }
    ]
  },
  {
    id: "third-party",
    title: "3. Third-Party Services",
    content: "The App may use the following external services:",
    subsections: [
      {
        items: [
          "OpenAI / Gemini / other AI APIs (for generating responses)"
        ]
      },
      {
        items: [
          "These services may receive text you enter, only for processing.",
          "Each service follows its own privacy policy."
        ]
      }
    ]
  },
  {
    id: "storage",
    title: "4. Data Storage",
    content: [
      "The App does not store any user data on our servers.",
      "All data stays on the user’s device or is used temporarily by third-party AI APIs."
    ]
  },
  {
    id: "children",
    title: "5. Children’s Privacy",
    content: [
      "The App is not intended for children under 13.",
      "We do not knowingly collect data from children."
    ]
  },
  {
    id: "changes",
    title: "6. Changes to This Policy",
    content: "We may update this privacy policy. Any changes will be posted on this page."
  }
];
