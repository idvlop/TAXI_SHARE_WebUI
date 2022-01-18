import { Grid, Stack, Box, InputBase, List, ListItem } from '@mui/material';
import { useContext, useState } from 'react';
import DefaultCard from './cards/defaultCard';
import SelectedCard from './cards/selectedCard';
import { MyGlobalContext } from './globalContext';

const ariaLabel = { 'aria-label': 'description' };

export function ListTaxis() {
  const { selectedTrip, setTripItemSelected, allTrips } = useContext(MyGlobalContext);

  const [searchFild, setSearchField] = useState<string>();
  return (
    <Grid item xs={4} style={{ height: '100%' }}>
      <Stack>
        <Box className="max-h-12  rounded-full" style={{ background: '#6F6CD933' }}>
          <Box className="flex items-center mb-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 ml-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              color="#6F6CD9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <InputBase
              sx={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#222222',
                width: '100%',
                marginRight: '16px',
              }}
              value={searchFild}
              onInput={(x) => {
                setSearchField(x.target.value.toLowerCase());
                /*                 setFilteredList(
                  allTrips?.filter((item) =>
                    item.title.toLowerCase().includes(x.target.value.toLowerCase())
                  ) ?? filteredList
                ); */
              }}
              placeholder="Поиск по комментарию..."
              inputProps={ariaLabel}
              className="text-black text-lg ml-4"
            />
          </Box>
        </Box>
        <List className="w-full">
          {searchFild
            ? allTrips
                ?.filter((x) => x.title.toLowerCase().includes(searchFild))
                .map((x, y) => {
                  return (
                    <ListItem key={y} className="w-full">
                      {selectedTrip?.id == x.id}
                      <button
                        className="w-full"
                        onClick={() => {
                          console.log(`clicked on: ${y}`);
                          setTripItemSelected(x);
                        }}
                      >
                        {selectedTrip == x ? (
                          <div
                            style={{
                              background: '#6F6CD9E5',
                              width: '100%',
                              border: '0.5px solid #9391E2',
                              boxSizing: 'border-box',
                              boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
                              borderRadius: '16px',
                            }}
                          >
                            <SelectedCard item={x} />
                          </div>
                        ) : (
                          <div
                            style={{
                              background: '#FFFFFF',
                              width: '100%',
                              border: ' 0.5px solid rgba(0, 0, 0, 0.2)',
                              boxSizing: 'border-box',
                              boxShadow: ' 2px 2px 4px rgba(0, 0, 0, 0.15)',
                              borderRadius: '16px',
                            }}
                          >
                            <DefaultCard item={x} />{' '}
                          </div>
                        )}
                      </button>
                    </ListItem>
                  );
                })
            : allTrips?.map((x, y) => {
                return (
                  <ListItem key={y} className="w-full">
                    {selectedTrip?.id == x.id}
                    <button
                      className="w-full"
                      onClick={() => {
                        console.log(`clicked on: ${y}`);
                        setTripItemSelected(x);
                      }}
                    >
                      {selectedTrip == x ? (
                        <div
                          style={{
                            background: '#6F6CD9E5',
                            width: '100%',
                            border: '0.5px solid #9391E2',
                            boxSizing: 'border-box',
                            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
                            borderRadius: '16px',
                          }}
                        >
                          <SelectedCard item={x} />
                        </div>
                      ) : (
                        <div
                          style={{
                            background: '#FFFFFF',
                            width: '100%',
                            border: ' 0.5px solid rgba(0, 0, 0, 0.2)',
                            boxSizing: 'border-box',
                            boxShadow: ' 2px 2px 4px rgba(0, 0, 0, 0.15)',
                            borderRadius: '16px',
                          }}
                        >
                          <DefaultCard item={x} />{' '}
                        </div>
                      )}
                    </button>
                  </ListItem>
                );
              })}
        </List>
      </Stack>
    </Grid>
  );
}
