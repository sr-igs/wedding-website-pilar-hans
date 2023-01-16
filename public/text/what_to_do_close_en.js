const whatToDo = [
    {
        title:"🏖️ Playa de El Saler",
        description:"The “El Saler” beach is just south of Valencia, it is a somewhat more quiet and natural beach. You can access it by bus or by car.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/_/_mg_6763.jpg?itok=8z0D2GhR",
        link:"https://www.visitvalencia.com/en/what-to-see-valencia/beaches-in-Valencia/beaches-on-the-outskirts/el-saler-beach"
    },
    {
        title:"🏖️🌲 Costa Blanca/Javea",
        description:"The “Costa Blanca” is the coast that belongs mostly to the province of “Alicante”, in the south of the Valencia Community. This is one of the most popular coasts of Spain, with many tourists from all across Europe coming here every year. This also means you should be able to find a lot of information. For us, the stand out is Javea/Xabia, with its beautiful landscape and mostly pebble beaches, it is a good place for a combination of amenities, stunning nature and all kinds of beaches.",
        image:"https://multimedia.comunitatvalenciana.com/10EA70D35F1948BAA0E9E2AF78DF2C84/img/5004C7C61CEC4515964D437E66E2C890/Xabia_ruta_miradores_cap_negre_Sant_Antoni_y_Prim7H9A3981_20171206.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/alacant-alicante/xabia-javea"
    },
    {
        title:"🏖️ Costa de Azahar/Peñiscola",
        description:"The “Costa de Azahar” is the coast that belongs mostly to the province of “Castellon” in the north of the Valencian Community. It should be more quiet and less touristy, mostly used by local people. For us, the standouts are Benicarlo and Peñiscola. While Benicarlo is a fairly average town, it has a Parador (national Spanish hotel) which is a guarantee of quality. From there you can visit the historic town of Peñiscola, with its castle and old town surrounded by the sea - this was one of the locations used for recording Game of Thrones.",
        image:"https://multimedia.comunitatvalenciana.com/4227232089574BDDA564B8A8298B286E/img/FC4F7B4DEBBB4FEAB635DCEA6C7FA5DD/Peniscola_desde_playa_Norte_-_Noche7H9A7695_20180222.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/castello-castellon/peniscola-peniscola"
    },
    {
        title:"🏖️ Benidorm",
        description:"What if New York was by the sea? A super popular destination, especially in the UK, Benidorm is an oddity in Spain: with its many skyscrappers and long sandy beach, you'll find all the hotels and amenities you'd want.",
        image:"https://multimedia.comunitatvalenciana.com/F94D3F07B5BF4A7A8DB7B58A9E49BF6E/img/56688EC5C4A24689A1EC36F054E616A7/D_C_BND_PL_T_PIK_29-32_Pan_orig_.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/alacant-alicante/benidorm"
    },
    {
        title:"🌲 La Albufera",
        description:"La Albufera is a freshwater lagoon just 10km south of Valencia. Famous for its rice fields, it is a natural park with numerous wild birds. Ideal for a romantic sunset, you can rent a boat and explore the lagoon and its woodland. It is also known as the place where paella was created, so you can venture here to try paellas that are as authentic as they come. You can get here by bus or by car.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/wysiwyg_large/public/media/media-images/images/pesca.webp?itok=mcySGaGN",
        link:"https://www.visitvalencia.com/en/what-to-see-valencia/albufera-natural-park"
    },
    {
        title:"🌲 Alto Palancia",
        description:"The Alto Palancia region is where a lot of Ignacio’s family originally comes from, and we think it’s a beautiful region with stunning mediterranean nature and quaint villages. There are lots of nice walks around here (Catherine is an expert as she regularly runs long distance), with stand-out attractions such as the “Salto de la novia” waterfall or the “Via verde ojos negros”, a 160km long green way which used to have a railway connecting an iron mine with the blast furnaces in the coast of Valencia. You can get here by train, albeit there’s only a couple a day and are quite slow, or by car, with a nice highway connecting it with Valencia. If this sounds interesting, please let us know and we’ll happily tell you more.",
        image:"https://multimedia.comunitatvalenciana.com/4D610A23C2504CF788772A162ECAD2FE/img/423B028E42AF4080B4070C3F87F9A920/Vistas_Generales_7H9A9531_423B028E42AF4080B4070C3F87F9A920size-big.jpg",
        link:"https://www.comunitatvalenciana.com/en/castello-castellon/barracas/rural-tourism/alto-palancia"
    },
    {
        title:"🏰 Sagunto",
        description:"The town where Ignacio was born - a historic Roman town that played a significant part in the second Punic Wars, it now has a rich Roman heritage. You can visit its big Roman castle which lords over the city, as well as its Roman theatre, forum and museum. It even has a Michelin star restaurant: Arrels. Easily accessible from Valencia by train or driving",
        image:"https://multimedia.comunitatvalenciana.com/2DB286109CC441F085AE288EC03C3272/img/A575E232AF104473A760B57A5DAE3A79/Castillo_7H9A3131.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/valencia/sagunt-sagunto"
    },
    {
        title:"🏰 Segorbe",
        description:"Segorbe is the town where a lot of Ignacio’s family comes from, and where Ignacio and Catherine spend a lot of time when in Spain. It is a historic town nested around nature - there is a Cathedral, an old wall, the remains of an aqueduct, parts of the old castle, an old town of narrow colourful streets… If you’d like to see it, let us know and we will give you more information (we might even be there some time around the wedding!). You can get here by a slow train (that runs 2-4 times a day) or by car (fully through motorways).",
        image:"https://multimedia.comunitatvalenciana.com/F4B31E3AF4524D2B97B773B774DB14E6/img/9BADCCF23CF248D693FB4A8CE7C08DBC/3.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/castello-castellon/segorbe"
    },
    {
        title:"🏰 Játiva/Xàtiva",
        description:"About an hour south of Valencia, Xàtiva is worth a visit for its spectacular castle and old town. The castle's origins date back to Roman times and has since been used and modified by the mediaeval arabs and Christians, and even during the independence war against Napoleon. You will also find many historic building in the old town, like the basilica or the natal house of pope Alexander VI.",
        image:"https://multimedia.comunitatvalenciana.com/57BE834B966B4FD0A1AF9858C68A796B/img/131F1A84EB6B4A30BD1643CA4414AF55/2.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/valencia/xativa"
    },
    {
        title:"🏰 Morella",
        description:"Although quite a long and windy drive from Valencia - it takes about an hour and a half by car - it is one of the most stunning towns in Spain. Placed on a hill, completed surrounded by mediaeval walls and with an impressive castle looking over it, going to Morella feels like going back 1000 years in time. ",
        image:"https://multimedia.comunitatvalenciana.com/B3C4584E1FF84BC6B5DDB13B7158C1CA/img/6750D27A7967423FBB8DFEF013AA4A28/Morella_panoramica_1.jpg?responsive",
        link:"https://www.comunitatvalenciana.com/en/castello-castellon/morella"
    },
    
      
    
]

export default whatToDo