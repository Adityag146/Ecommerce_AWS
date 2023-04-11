import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddressTab from './addressTab';
import CardPayment from '../Payment/cardPayment';
import Payment from './payment';
import { TabsWrapper } from '../Banner/style';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Buynow() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabsWrapper sx={{ width: '100%',padding:"20px" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='cart-tabs'>
          <Tab label="Address" {...a11yProps(0)} />
          <Tab label="Payment" {...a11yProps(1)} />
          <Tab label="Place Order" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className="0 tab-panel" value={value} index={0} sx={{background:"#f1f1f1"}}>
        <AddressTab
        
        />
      </TabPanel>
      <TabPanel  className="0 tab-panel" value={value} index={1} sx={{background:"#f1f1f1"}}>
        <Payment/>
      </TabPanel>
      <TabPanel  className="0 tab-panel" value={value} index={2} sx={{background:"#f1f1f1"}}>
        Place Order
      </TabPanel>
    </TabsWrapper>
  );
}