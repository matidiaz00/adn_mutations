export interface jwt_response_interface {
    uid: string;
    emailVerified: boolean;
    disabled: boolean;
    metadata: {
      lastSignInTime: string | Date;
      creationTime: string | Date;
    },
    tokensValidAfterTime: string | Date;
    providerData: Array<any>;
}