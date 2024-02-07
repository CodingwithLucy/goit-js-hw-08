const _ = require('lodash.throttle');

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const FFS_KEY = 'feedback-form-state';
    
    const backState = localStorage.getItem(FFS_KEY);
    if (backState) {
      const { email, message } = JSON.parse(backState);
      emailInput.value = email;
      messageInput.value = message;
    }
    
    const saveState = _.throttle(() => {
      const state = {
        email: emailInput.value,
        message: messageInput.value,
      };
      localStorage.setItem(FFS_KEY, JSON.stringify(state));
    }, 500);
    
    form.addEventListener('input', saveState);
    
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const state = {
        email: emailInput.value,
        message: messageInput.value,
      };
      console.log(state);
      emailInput.value = '';
      messageInput.value = '';
      localStorage.removeItem(FFS_KEY);
    });
  });
  