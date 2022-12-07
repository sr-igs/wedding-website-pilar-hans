const whatToDo = [
    {
        title:"City of arts and sciences",
        description:"One of the most popular and well known part of Valencia, it has been features in films such as Tomorrowland. This modern complex includes an Imax cinema, an opera house, a science museum and the biggest aquarium in Europe (see Oceanografic below). Even if you don't want to go inside any of these, it's still well worth a visit for its architecture.",
        image:"https://www.spain.info/.content/images/cabeceras-grandes/comunidad-valenciana/ciudad-artes-ciencias-noche-valencia-pexel256150.jpg",
        link:"https://www.visitvalencia.com/en/what-to-see-valencia/city-of-arts-and-ciences/city-of-arts-and-sciences-monuments"
    },
    {
        title:"Valencia cathedral",
        description:"The Valencia cathedral, in the city centre and very close to the venue, was built between the 13th and 15th centuries and although predominantly Gothic also shows many other styles. Inside, you can find what many believe to be the authentic Holy Grail. You can also climb the 207 steps of the Micalet tower to get great views of the city (not recommended if you're claustrophobic as the steps are very tight!)",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/_/_h3b9627_lr_b.jpg",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/catedral-valencia-cathedral"
    },
    {
        title:"City hall square (Plaza del ayuntamiento)",
        description:"You will struggle to not see this as it's next to the venue! The city hall square is the centre of the city and great for a leasury stroll. If you want, you can enter both the city hall and access its balcony, and the 'Edificio de Correos', the central post office. Both are worth a quick look.",
        image:"https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/06/plaza-ayuntamiento-valencia.jpg",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/city-hall"
    },
    {
        title:"Valencia Central Station (Estacion del Norte)",
        description:"The central Valencia station is located in the city centre, in an early 20th century modernist building. Worth a quick visit for its architecture and mosaic work. Of course, it's free to enter.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/v/valencia_renfe_3.jpg?itok=Z8B13xEE",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/norte-railway-station"
    },
    {
        title:"La Lonja (Silk Exchange)",
        description:"La lonja, a UNESCO world heritage site, is a gothic building from the 16th century that used to host the Valencia silk exchange. It is worth a visit for its architecture and long history.",
        image:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Llonja.jpg",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/lonja-silk-exchange"
    },
    {
        title:"Mercat Central (Central Market)",
        description:"The central market is a must visit for its architecture, food, and ambiance. Holding over 1200 stalls, you'll find all the food that Valencia and Spain have to offer in an amazing setting. It is free to enter, but please note that it is closed on Sundays and afternoons!",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/p/panorama_mcdocentral.jpg?itok=NwRoCSVH",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/central-market"
    },
    {
        title:"San Nicolas Church",
        description:"Known as the Valencian Sistine Chappel, this church was recently restored to show the beautiful pictorial display. You can get a joined ticket to see this and the silk museum.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/a/ali_1423.jpg?itok=HxSMpHD7",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/iglesia-san-nicolas-bari-san-pedro-martir-valencia"
    },
    {
        title:"Turia garden",
        description:"In the 1980s, the river that flowed through Valencia (river Turia) was converted into a garden after a particularly bad flood. You can now enjoy its 9 km of green space for a leisury walk across several landmarks. Please note that there are both dedicated bike paths and running paths, so it's great if you want a bike city tour or to go for a morning run. ",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/Jardi%CC%81n-del-Turia-VV-01011_1024-%20Photo_Josep_Gil.jpg?itok=8jLGFMmb",
        link:"https://www.visitvalencia.com/en/what-to-see-valencia/turia-gardens"
    },
    {
        title:"College of High Silk Art",
        description:"This recently restored gothic building hosted the guild of silk makers back in the 16th century. Now it hosts a museum that goes through the rich link between Valencia, silk and the silk road. It also hosts the largest guild archive in Europe. You can get a joint ticket for this and San Nicolas church. ",
        image:"https://www.valenciabonita.es/wp-content/uploads/2016/09/IMG_5437.jpg",
        link:"https://www.museodelasedavalencia.com/en/"
    },
    {
        title:"Oceanografic",
        description:"Part of the city of arts and sciences, the oceanografic is the largest aquarium in Europe. It has over 45000 animals from 500 different species, and is part of a beautiful architectural complex. If you fancy a nice dinner, you can also visit the underwater restaurant where you will be completely surrounded by the aquarium.",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/L%27Oceanografic_%28Valencia%2C_Spain%29_01.jpg/2560px-L%27Oceanografic_%28Valencia%2C_Spain%29_01.jpg",
        link:"https://www.oceanografic.org/en/"
    },
    {
        title:"Malvarrosa Beach",
        description:"The most famous of the Valencian beaches is about 6km from the city centre. It can be reached by public transport but we would recommend either a taxi or renting a bike. ",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/_/_mg_6724.jpg?itok=8ZE1OPui",
        link:"https://www.visitvalencia.com/en/what-to-see-valencia/beaches-in-Valencia/city-beaches/la-malvarrosa-beach"
    },
    {
        title:"Mestalla Stadium",
        description:"If you're into football (soccer), the Valencia Football Club stadium is a must see. If you are in Valencia prior to the wedding there will be a football game on the 28th of May. Otherwise, you can do the stadium tour and visit the museum. ",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/CAMP_DE_MESTALLA_2014.jpg/488px-CAMP_DE_MESTALLA_2014.jpg",
        link:"https://www.valenciacf.com/en/club/facilities/mestalla"
    },
    {
        title:"Bioparc (Valencia Zoo)",
        description:"The Bioparc was opened in 2008 and was designed to immerse visitors in the animal habitats and not viceversa. It consists mainly of African animals. It is situated at the end of the Turia garden so you can include a nice garden walk.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/b/bioparc-valencia-sabana-africana-elefantes-lago-elefantes-zooinmersion.jpg?itok=CfECzvuB",
        link:"https://www.visitvalencia.com/en/what-to-see-valencia/bioparc-cabecera-park-and-congress-park/what-is-bioparc"
    },
    {
        title:"Mercado de Colon (Colon Market)",
        description:"Visit this modernist market for a variety of stalls where to have a drink or something to eat. If you can, you can try the Valencia traditional drink 'Horchata' in Horchateria Daniel.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/m/mercat_colon_2.jpg?itok=H6yf5Fxz",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/colon-market"
    },
    {
        title:"Serranos Towers",
        description:"One of the old city gates (back when Valencia was a walled city), they were built in the 14th century. If you wish, you can go to the top to get a good view of the city.",
        image:"https://www.visitvalencia.com/sites/default/files/styles/gallery_default/public/media/media-images/images/t/torres-serrano.jpg?itok=Mbw1D3iA",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/serranos-towers"
    },
    {
        title:"Colon Street",
        description:"The main shopping street of Valencia. You can find most high street chains (both Spanish and international), as well as the 'El Corte Ingles' department store.",
        image:"https://www.lovevalencia.com/wp-content/uploads/2015/03/colon.jpg",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/shopping-in-valencia/streets-and-shopping-areas"
    },
    {
        title:"Quart Towers",
        description:"The other remaining old city gates, also dating from the 14th century. Although a bit away from the city centre, if you visit them you can note the cannon ball marks, fruit of the Spanish indepedence war against Napoleon.",
        image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/89/54/74/torres-de-quart.jpg?w=1400&h=-1&s=1",
        link:"https://www.visitvalencia.com/en/what-to-do-valencia/valencian-culture/monuments-in-valencia/quart-towers"
    }
]

export default whatToDo