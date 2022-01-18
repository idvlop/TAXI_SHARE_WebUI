import { Container, Grid } from '@mui/material';
import { mockListTaxiTrips, mockPersons } from 'App';
import tripItemVm from 'models/tripItemVm';
import { useContext, useState } from 'react';
import { MyGlobalContext } from './globalContext';
import { Header } from './Header';
import { ListTaxis } from './ListOfTaxis';
import { RideChat } from './RideChat';
import { RideInfo } from './RideInfo';

export function Main() {
  const { selectedTrip, setTripItemSelected, allTrips } = useContext(MyGlobalContext);
  return (
    <div className="App" style={{ background: '#FAFAFE', height: '100vh' }}>
      <Header person={mockPersons[0]} />
      <Container maxWidth="xl" className="mt-12">
        <Grid
          container
          spacing={2}
          className="mt-8"
          style={{ height: '80vh' }}
          /*             style={{
        border: '0.5px solid rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',

        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
        borderRadius: '16px',
        height: '80vh',
      }} */
        >
          <ListTaxis />
          {selectedTrip != undefined ? (
            <Grid item xs={8} spacing={2}>
              <Grid container className="bg-white rounded-xl" style={{ height: '100%' }}>
                <Grid item xs style={{ height: '100%' }}>
                  <RideChat />
                </Grid>
                <Grid item xs style={{ height: '100%' }}>
                  <RideInfo />
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={8} spacing={2}>
              <div
                className="grid bg-white rounded-xl text-center  content-center"
                style={{ height: '100%' }}
              >
                <span className="text-2xl font-bold">Информация о поездке</span>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}
