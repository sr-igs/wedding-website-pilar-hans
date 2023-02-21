import Tab from '@mui/material/Tab';
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Divider } from '@mui/material';
import Disclaimer from '../ui/Disclaimer';

export default function EatingTabs(){

    const [value,setValue] = useState(1);

    function handleChange(event,newValue){
        setValue(newValue)
    }

    return(
        <div>
            <Divider />
            <Disclaimer text="Valencia has many restaurants where you can have some wonderful food. This list, writen and curated by Ignacio's parents, focuses on restaurants that we've tried and tested many times and where we've had some wonderful food and moments. Most of the restaurants in this list are small, in the city centre and managed directly by their owners who, in many cases, are friends of ours. " />
            <TabContext value={value}>
                <div>
                    <TabList onChange={handleChange} centered>
                        <Tab label="Our favourites" value="1" />
                        <Tab label="Spanish cuisine" value="2" />
                        <Tab label="International cuisine" value="3" />
                        <Tab label="Paella" value="4" />
                    </TabList>
                </div>
                <TabPanel value="1">Our favourites</TabPanel>
                <TabPanel value="2">Spanish cuisine</TabPanel>
                <TabPanel value="3">International cuisine</TabPanel>
                <TabPanel value="4">Paella</TabPanel>
            </TabContext>
        </div>
    )
}