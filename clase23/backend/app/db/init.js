const crearDatos = async (Hoteles) => {
    await Hoteles.truncate();
    await Hoteles.bulkCreate([
        {nombre:"Yuna Porte-Maillot", ciudad:"Paris", plazas:"215"},
        {nombre:"Villa Fontaine Haneda", ciudad:"Tokio", plazas:"320"},
        {nombre:"Ours Inn Hankyu ", ciudad:"Tokio", plazas:"120"},
        {nombre:"Hotel Des Deux Continents", ciudad:"Paris", plazas:"180"},
        {nombre:"JR Shinjuku Station", ciudad:"Tokio", plazas:"426"},
        {nombre:"Villa Royale Montsouris", ciudad:"Paris", plazas:"112"},
        {nombre:"Native Kings Wardrobe", ciudad:"Londres", plazas:"146"},
        {nombre:"Hôtel Saint-Pétersbourg Opéra & Spa", ciudad:"Paris", plazas:"230"},
        {nombre:"Hotel & Resort Ryogoku Eki", ciudad:"Tokio", plazas:"142"},
        {nombre:"Hotel Tokyo Shiodome", ciudad:"Tokio", plazas:"912"},
        {nombre:"Hostal Santa Cruz", ciudad:"Madrid", plazas:"321"},
        {nombre:"Sonder Camden Road", ciudad:"Londres", plazas:"118"},
        {nombre:"Sonder Edgware Road", ciudad:"Londres", plazas:"230"},
        {nombre:"Gem Langham Court Hotel", ciudad:"Londres", plazas:"235"},
        {nombre:"Commodore Hotel", ciudad:"Londres", plazas:"224"},
        {nombre:"Fuencarral Adeco", ciudad:"Madrid", plazas:"112"},
        {nombre:"Castilla Vieja", ciudad:"Madrid", plazas:"98"},
        {nombre:"Soho Boutique Opera", ciudad:"Madrid", plazas:"144"},
        {nombre:"Gem Fitzrovia Hotel", ciudad:"Londres", plazas:"98"},
        {nombre:"Hotel Gracery Shinjuku ", ciudad:"Tokio", plazas:"225"},
        {nombre:"Villa Royale Montsouris", ciudad:"Paris", plazas:"118"},
        {nombre:"Mayerling Hotel", ciudad:"Madrid", plazas:"241"},
        {nombre:"Puerta del Sol Hotel", ciudad:"Madrid", plazas:"123"},
    
    ]);
}

module.exports = crearDatos;
