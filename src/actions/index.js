export const USER = 'USER';

export const emailToStore = (email) => ({
  type: USER,
  payload: email,
});

export const WALLET = 'WALLET';

export const walletToStore = (email) => ({
  type: WALLET,
  payload: { ...email }
});
