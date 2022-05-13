const FIELDS = [
  {
    id: 'fullName',
    type: 'text',
    label: 'Full Name',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email Address',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
  },
];

const AVAILABLE_ROLES = {
  ADMINISTRATOR: 'Administrator',
  OPERATOR: 'Operator',
};

const ROLES = [
  {
    title: AVAILABLE_ROLES.ADMINISTRATOR,
    text: 'Full access to all settings',
  },
  {
    title: AVAILABLE_ROLES.OPERATOR,
    text: 'Service desk and chat permissions',
  },
];

export default {
  AVAILABLE_ROLES,
  FIELDS,
  ROLES,
};
