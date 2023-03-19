import Tab from '@mui/material/Tab';
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Divider } from '@mui/material';
import Disclaimer from '../ui/Disclaimer';
import RestaurantList from './RestaurantList';
import {Box} from '@mui/material';

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
                <Box display="flex" justifyContent="center" width="100%">
                    <TabList variant="scrollable" scrollButtons   allowScrollButtonsMobile
 onChange={handleChange}>
                        <Tab label="Our favourites" value="1" />
                        <Tab label="Spanish cuisine" value="2" />
                        <Tab label="International cuisine" value="3" />
                        <Tab label="Paella" value="4" />
                        <Tab label="Wine and Tapas" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1"><RestaurantList data={favourites} /></TabPanel>
                <TabPanel value="2"><RestaurantList data={spanish} /></TabPanel>
                <TabPanel value="3"><RestaurantList data={international} /></TabPanel>
                <TabPanel value="4">
                    <Disclaimer backgroundColor="#d5e9db" text="If you'd like to try an authentic Valencian paella, we are planning on doing a paella lunch the day after the wedding (Sunday 4th). This will start at 3pm (enough time to sleep the night off) and be at a restaurant in the city centre (TBC). The price per person will be 10-15€, depending on the number of attendees. If you are interested, please let us know. There will be a vegetarian option available." />
                    <Disclaimer backgroundColor="#ECECEC" text="Most people know Paella as one of the most traditional dishes in Spain. In fact, paella originated in the Valencian region and is considered a quintessentially Valencian dish. You can try authentic paella all around Valencia but, given its fame, there are also many tourist restaurants which don’t offer the authentic dish and have questionable quality." />
                    <Disclaimer backgroundColor="#ECECEC" text="The most traditional of paellas, the “Paella valenciana” (Valencian paella) is made with meat (chicken and rabbit, although it’s common to be able to find it without the latter) and vegetables (green beans, artichoke and lima beans). It is not common to mix meat and fish and chorizo and peas are completely forbidden. There are however hundreds of other types of traditional rices, including vegetables based (paella de verduras), fish based (arroz del senyoret, arroz a banda…) and many more combinations." />
                    <Disclaimer backgroundColor="#ECECEC" text="You can also try “fideuà”, a small vermicelli noodle dish cooked in a paella pan and usually served with fish or seafood, which is also very traditional.
This list includes restaurants where we have personally tried the paellas and can, as Valencians, confirm that they are offering the proper dish and experience:
" />
                    <Disclaimer backgroundColor="#ECECEC">{paellaRestaurants.map(p=>{return <p key={p}>{p}</p>})}</Disclaimer>
                </TabPanel>
                <TabPanel value="5"><RestaurantList data={wines} /></TabPanel>
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

const spanish = [
    {title:"Entrevins",link:"https://www.entrevins.es/en/",description:`Located on the first floor of a building in the “La Paz” street, one of the most beautiful streets in Valencia. It is run by Guillaume, who is one of the best sommeliers of Valencia; you can therefore pair exquisite dishes with one of the wine menus in the city.
    If you go Monday to Friday, it has a “menu del dia” (menu of the day) that enables you to eat at a very reasonable price for the quality of the food.
    `,address:"First floor, C/ de la Pau, 7, 46001"},
    {title:"Pelayo Gastro Trinquet",link:"https://grupogastrotrinquet.com/restaurantes/pelayo/",description:`This restaurant is worth it just to see the place itself; along with a modern restaurant, it is one of the oldest active sporting venues in the world, opened in 1868, where the Valencian sport of “pilota” is still played every week.
    The restaurant has a great variety of rice (paellas) and traditional Valencian tapas, along with a good selection of meat and fish. It is not a small restaurant nor is it run by its owners, but it’s a great place to eat and definitely worth a visit.`,address:"C/ Pelayo, 6, 46007"},
    {title:"El Encuentro",link:"https://www.restauranteelencuentro.es/",description:`A restaurant that offers classic Spanish cuisine in a homely environment with great service. Along with its usual menu, it also offers a daily traditional Spanish dish from around the country.`,address:"C/ San Vicente Martir, 28, 46002"},
    {title:"Asador de Aranda",link:"https://asadordearanda.net/restaurante/asador-de-aranda-valencia/",description:`A restaurant that offers typical food from the “Castilla” region of Spain. Its specialities are oven roasted “lechazo” (lamb) and “cochinillo” (pork), along with other central Spain classics such as “morcilla” (Black pudding with rice) and chorizo. The restaurant is decorated with a classical yet elegant style. It is a chain restaurant that is present all around Spain, but which still offers a quick and efficient service and great quality food.`,address:"C/ Felix Pizcueta, 6, 46004"},
    {title:"Sagardi",link:"https://gruposagardi.com/en/restaurant/sagardi-cocineros-vascos/valencia-2/",description:`Located in between the city hall and the cathedral, this restaurant is decorated as a traditional Basque cider restaurant. One of their specialities is the “txuletón”, an aged beef t-bone which, in our opinion, is one of the best meat dishes in Valencia. If you want to try something other than meat, it offers a selection of Basque traditional dishes.
    Even though it is part of a chain present all around Spain, it is well worth a visit for its food, ambiance and service. The ground floor offers “pintxos” (small tapas on slices of bread) where you can try a variety of dishes; be aware that this is usually full and you can not book in this area.
    `,address:"C/ San Vicente Martir, 6, 46002"},
    {title:"Armonia",link:"https://armoniarestaurante.eatbu.com/?lang=en",description:`Located very close to the city hall, it is run by Monia and Ernesto. They specialise in market based food with Valencian roots. The menu changes depending on whatever fresh food the market has to offer. They also offer a traditional dish that changes daily.`,address:"C/ Ribalta, 6, 46001"},
    {title:"Quesomentero",link:"https://quesomentero.com/",description:`If you like cheese, this is your place. They offer cheese boards with a variety of international cheeses, from classics to very unique ones (we’ve tried a cheese that was aged for X years). Although cheese is the main offering, it also offers charcuterie and tapas. If you order a cheese board, you will get a detailed explanation from the waiters going through each cheese - it might however be in Spanish only!`,address:"C/ Maestre Clavé, 8, 46001"}
]

const international = [
    {title:"DeeVinoteca",link:"https://deevinoteca.com/",description:`If you are after some Italian food, this restaurant is located next to “La Lonja” (the silk exchange), one of Valencia’s most historic buildings. The menu changes every day and is displayed on a blackboard. Chef Claudia offers fresh pasta created in house, as well as traditional Italian trattoria dishes. Very good selection of Italian wines, grappas and liquors.`,address:"C/ de Ercilla,25,46001"},
    {title:"Il giardino del Carmen",link:"https://giardinodelcarmen.es/restaurant-menu/",description:`Another Italian restaurant specialising in food from South Italy. They also offer fresh pasta and what might be the best caponata in Valencia. They cook many of their meals in a “Josper” coal oven which gives the dishes a special flavour.`,address:"Plaza de Joan de Vila-rasa,6,46001"},
    {title:"El café de le bourse",link:"https://restaurantguru.com/CAFE-DE-LA-BOURSE-Valencia",description:`Finding a good French restaurant in Valencia is not easy, but we think eating here is like eating in France. They offer a small menu with dishes based on a traditional French brasserie.
    The restaurant is run by Francoise whose eccentric personality makes the dinner a great experience.`,address:"C/ dels Llibrers, 3, 46002"},
    {title:"Lima",link:"https://www.restaurantelima.com/en",description:`A modern Peruvian restaurant of Nikei cuisine that also stands out for their ceviches, maquis and an amazing tuna tataki. They also have good meat cooked in a “Josper” oven and even some rice and paella dishes. The restaurant is run by Jan and Vanessa.`,address:"Plaza de la Merced,6,46001"},
    {title:"Asador el Porteño",link:"https://elporteno.es/",description:`Located close to the city hall, it is a classic restaurant where you can eat some of the best coal grilled meat in Valencia. They also have several Argentinian entrees, such as empanadas or provolone. `,address:"C/ d'en Llop,4,Bajo Derecha,46002"}
]

const wines = [
    {title:"La Piccola Enoteca",link:"https://www.tripadvisor.com/Restaurant_Review-g652037-d2436657-Reviews-La_Piccola_Enoteca-Montecarlo_Province_of_Lucca_Tuscany.html",description:`A quaint and cozy wine bar exquisitely decorated by the owners, Roberto and Maria, being an accurate reflection of their eccentric personalities. An ample selection of Italian wines and a food menu based on cheese, charcuterie and some Italian classics such as Bruscetta and Parmigiana. `,address:"C/ del Pintor Salvador Abril, 13,46005"},
    {title:"Cantina Matiz",link:"https://www.carteleraturia.com/cantina-matizvariedad-y-calidad/",description:`Small restaurant located very close to the city hall, with an excellent wine selection curated and recommended by Tizziana. In the kitchen, located just behind the bar, Marco cooks some simple but delicious food, based around salads and cheese and charcuterie boards. Their variety of carpaccios are also worth noting.`,address:"Plaza dels Porxets,1,46001"},
    {title:"Vinorte Wine Bar",link:"https://www.instagram.com/vinorte_winebar/",description:`Vinorte is a place where people go to drink good wine. Their extensive wine menu is impressive and has a great selection of both Spanish and worldwide wines. Cesar, the owner, will be able to recommend whichever wine best adapts to your taste and budget. If you are after some food, they also offer a good selection of cheeses, charcuterie and “tostas” (bread with toppings)`,address:"C/ de Cervantes,10,46007"}
]

const paellaRestaurants = ["Navarro","Pelayo Gastrotrinquet","La Riua","La Voe","Restaurante de Anna","Casa Roberto","Goya Gallery","Palace Fesol"]
//{title:"",link:"",description:``,address:""}