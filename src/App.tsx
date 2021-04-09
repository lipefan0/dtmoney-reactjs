import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransacionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "../src/hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransacionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}