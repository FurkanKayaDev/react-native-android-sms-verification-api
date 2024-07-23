declare module '@furkan-kaya/react-native-android-sms-verification-api' {
    type Callback = (error: Error | null, message: string | null) => any;
  
    export function receiveVerificationSMS(callback: Callback): void;
    export function startSmsRetriever(): Promise<boolean>;
    export function startSmsUserConsent(
      senderPhoneNumber?: string,
      userConsentRequestCode?: number
    ): Promise<boolean>;
    export function removeAllListeners(): void;
  }
  