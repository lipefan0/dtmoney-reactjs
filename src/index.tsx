import React from 'react';
import ReactDOM from 'react-dom';
import { App }from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Conta de luz',
          type: 'withdraw',
          category: 'Casa',
          amount: 300,
          createdAt: new Date('2021-02-17 12:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody)

      return schema.create('transactions', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);