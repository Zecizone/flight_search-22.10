import { useEffect } from 'react';
import { fetchTicketsAsync } from '../../features/tickets/ticketsAsyncThunk';
import styles from './style.module.scss';
import Filter from '../../components/TariffSelector/TariffSelector';
import Tickets from '../Tickets/Tickets';
import { Sidebar } from '../Sidebar/Sidebar';
import { useAppDispatch } from '../../hooks/hooks';
import Header from '../Header/Header.tsx';

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTicketsAsync());
  }, [dispatch]);

  return (
    <main className={styles.home}>
      <Header />
      <Sidebar />
      <Filter />
      <Tickets />
    </main>
  );
};

