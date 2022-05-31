export type User = {
  authWalletAdress: string;
  username: string;
  imageUrl?: string;
  contactList?: ContactList;
  useCases?: UseCases;
  contactInfo?: UserContactInfo;
};

export type UseCases = UseCase[];
export type ContactList = Contact[];

export type UseCase = {
  name: string;
  items: UseCaseItem[];
};

export type UseCaseItem = {
  name: string;
  imageUrl: string;
  identifier: UseCaseItemIdentifier;
};

export type UseCaseItemIdentifier = {
  name: string;
  value: string;
};

export type UserContactInfo = {
  name: "contact";
  items: UseCaseItem[];
};

export type Contact = {
  authWalletAdress: string;
  username?: string;
  imageUrl?: string;
  useCases?: UseCase[];
  contactInfo?: UserContactInfo;
};
