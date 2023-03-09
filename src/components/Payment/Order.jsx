import React from 'react';
import { PayByRazorPay } from './Payment';

export const Order = ({ options, buyer, cart, setPaymentStatus }) => <PayByRazorPay newOptions={options} buyer={buyer} cart={cart} setPaymentStatus={setPaymentStatus} />
