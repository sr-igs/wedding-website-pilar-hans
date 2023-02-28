import Tab from '@mui/material/Tab';
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Divider } from '@mui/material';
import Disclaimer from '../ui/Disclaimer';
import RestaurantList from './RestaurantList';

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
                <TabPanel value="1"><RestaurantList data={favourites} /></TabPanel>
                <TabPanel value="2">Spanish cuisine</TabPanel>
                <TabPanel value="3">International cuisine</TabPanel>
                <TabPanel value="4">Paella</TabPanel>
            </TabContext>
        </div>
    )
}

const favourites = [
    {title:"Karak",link:"https://www.hoteloneshotmercat09.com/en/karak-restaurant",description:`For us this is one of the best restaurants in Valencia. It showcases a creative and original menu which fully reflects the personality of the chef, Rakel. The place itself has a modern look, with a great table service and a well chosen wine menu by Javier, the sommelier.
    The menus are all set. It is not a cheap option, but it is worth it if you’d like to have a unique food experience. We really can’t understand how it doesn’t yet have a Michelin star.
    `,address:"C/ del Músic Peydró, 9, 46001"},
    {title:"Toshi",link:"https://www.toshi.es/",description:`It is really challenging to define this restaurant: the chef and owner, Toshi, prepares the meals in front of the guests, just how it’s done in Japanese inns - this is, however, not a typical japanese restaurant.
    His food could be defined as Mediterranean and market driven, using the best produce from the nearby central market, but with Japanese soul in the way its carefully and skilfully prepared. This restaurant only offers a set menu and has a very limited capacity of 10 guests, so it’s essential to book with sufficient time.
    `,address:"C/ del Salvador, 5, 46003"},
    {title:"Xanglot",link:"https://xanglotrestaurant.com/en/",description:`Located very close to the Valencia Cathedral. Modern Valencian food skillfully created by chef Sandra Jorge. Great service led by Daniel and Aurora. They only have set menus which always including a creative rice (paella) that differs from the traditional paellas and is usually worth trying.
    The restaurant is split into different small rooms, which makes the experience homely. We think it’s one of the best restaurants where you can eat modern Valencian cuisine.  
    `,address:"C/ de les Avellanes, 9, 46003"},
    {title:"Navarro",link:"https://restaurantenavarro.com/en/",description:`If you’d like to try the traditional Valencian cuisine, this is, for us, the best place. Located very close to the city hall, it has been ran by the same family for decades, and you will be able to find all kinds of paellas and other Valencian dishes. It also offers a great selection of fish and seafood, as well as seasonal vegetables and dishes. 
    It is run by the Bayarri sisters, who are very professional but also close and friendly.
    `,address:"C/ del Arzobispo Mayoral 5, 46002"},
    {title:"Huerta y Huerta",link:"https://lahuerta-rte.es/",description:`This restaurant is located in the middle of the Ruzafa district, one of the up and coming districts in Valencia. Market based dishes crafted with creativity by the extravagant chef and owner Ramonet. The cuisine could be defined as Valencian but with international influences (the chef Ramonet has cooked all around the world).
    It has quite a laid back feel where you can be comfortable and enjoy the diverse cuisine and mix of tastes.
    `,address:"C/ de Cadiz, 61, 46006"},
    {title:"Marisqueria L'Odisea",link:"https://marisquerialodisea.business.site/",description:`If you’d like to eat fresh fish or seafood this is a great option. The restaurant works like a fishmonger: as you enter, you’ll find a display with all the available fish for the day. The guests can then choose what they want, it’s weighed and taken to the kitchen to be cooked.
    It is run by Leo and Pilar; we’ve known them since the restaurant opened and we’ve eaten there endless time, always leaving full and happy.
    `,address:"C/ del Editor Manuel Aguilar, 3, 46001"}
]