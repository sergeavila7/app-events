import React, { useState, SyntheticEvent } from 'react';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEvents } from '../hooks/useEvents';

export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export interface TabsProps {
  tabs: TabProps[];
}

export default function Tabs({ tabs }: TabsProps) {
  const { isAvailable } = useEvents();
  const [value, setValue] = useState('1');

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Stack sx={{ borderBottom: 1, borderColor: 'divider' }}>
            {isAvailable && (
              <>
                <TabList
                  onChange={handleChange}
                  aria-label='lab API tabs example'
                >
                  {tabs.map((tab, index) => (
                    <Tab
                      key={index}
                      label={tab.label}
                      value={(index + 1).toString()}
                      sx={{
                        color: 'white',
                        '&.Mui-selected': {
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </TabList>
              </>
            )}
          </Stack>
          {tabs.map((tab, index) => (
            <TabPanel
              key={index}
              value={(index + 1).toString()}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {tab.children}
            </TabPanel>
          ))}
        </TabContext>
      </Stack>
    </>
  );
}
