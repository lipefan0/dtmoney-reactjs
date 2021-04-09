import Modal from 'react-modal';
import Income from '../../assets/income.svg';
import Outcome from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import CloseImg from '../../assets/close.svg';
import { FormEvent, useState, useContext } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransacionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransacionModal({ isOpen, onRequestClose }: NewTransacionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={CloseImg} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadatrar Transação</h2>
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    placeholder="Valor"
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={Income} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={Outcome} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
      </Modal>
    )
}