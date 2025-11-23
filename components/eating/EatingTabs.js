import Tab from '@mui/material/Tab';
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Divider } from '@mui/material';
import Disclaimer from '../ui/Disclaimer';
import RestaurantList from './RestaurantList';
import {Box} from '@mui/material';
import { useTranslation } from 'next-i18next';

export default function EatingTabs(){
    const { t } = useTranslation('eating');
    const paellaRestaurants = t('paellaRestaurants', { returnObjects: true }) || [];
    const [value,setValue] = useState(1);

    function handleChange(event,newValue){
        setValue(newValue)
    }


    return(
        <div>
            <Divider />
            <Disclaimer text={t('disclaimer')} />
            <TabContext value={value}>
                <Box display="flex" justifyContent="center" width="100%">
                    <TabList variant="scrollable" scrollButtons   allowScrollButtonsMobile
 onChange={handleChange}>
                        <Tab label={t('ourFavouritesLabel')} value="1" />
                        <Tab label={t('spanishCuisineLabel')} value="2" />
                        <Tab label={t('internationalCuisineLabel')} value="3" />
                        <Tab label={t('paellaLabel')} value="4" />
                        <Tab label={t('almuerzoLabel')} value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1"><RestaurantList data={t('favourites', { returnObjects: true })} /></TabPanel>
                <TabPanel value="2"><RestaurantList data={t('spanish', { returnObjects: true })} /></TabPanel>
                <TabPanel value="3"><RestaurantList data={t('international', { returnObjects: true })} /></TabPanel>
                <TabPanel value="4">
                    <Disclaimer backgroundColor="#f8d3c9" text={t('paellaDisclaimer1')} />
                    <Disclaimer backgroundColor="#f8d3c9" text={t('paellaDisclaimer2')} />
                    <Disclaimer backgroundColor="#f8d3c9">
                        <p>{t('paellaDisclaimer3')}</p>
                        {Array.isArray(paellaRestaurants) && paellaRestaurants.map(p => <p key={p}>{p}</p>)}
                    </Disclaimer>

                </TabPanel>
                <TabPanel value="6">
                    <Disclaimer backgroundColor="#f8d3c9" text={t('almuerzoDisclaimer')} />
                    <RestaurantList data={t('almuerzo', { returnObjects: true })} />
                </TabPanel>
            </TabContext>
        </div>
    )
}