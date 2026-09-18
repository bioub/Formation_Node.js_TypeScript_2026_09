interface Contact {
  id: number;
  firstName: string;
  birthdate: Date;
}

type ContactWithoutId = Omit<Contact, 'id'>;

const newContact: ContactWithoutId = {
  firstName: 'Romain',
  birthdate: new Date(),
};

type ContactWithoutId2 = Pick<Contact, 'firstName' | 'birthdate'>;

const newContact2: ContactWithoutId2 = {
  firstName: 'Romain',
  birthdate: new Date(),
};

// Les Utility Types les plus utilisés :
// Omit, Pick, Readonly, Partial
