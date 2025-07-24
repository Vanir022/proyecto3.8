const destinosData = [
    // "La Libertad"
    {
        nombre: "Trujillo",
        descripcion: "Descubre Trujillo, la ciudad de la eterna primavera, famosa por su cultura, historia y marinera.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Freedom_Monument%2C_Trujillo.jpg/1024px-Freedom_Monument%2C_Trujillo.jpg",
        precio: "S/. 40.00",
        duracion: "2 horas",
        horarios: ["08:00", "14:00", "18:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741.83063412213!2d-79.01887830321101!3d-8.135423053667855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d7fe3fae92d%3A0xd3bc7d125d4e8508!2sTrujillo!5e1!3m2!1ses!2spe!4v1751306815902!5m2!1ses!2spe"
    },
    {
        nombre: "Chiclayo",
        descripcion: "La ciudad de la amistad, reconocida por su historia precolombina, museos y deliciosa comida norteña.",
        precio: "S/. 60.00",
        imagen: "https://www.usat.edu.pe/web/wp-content/uploads/2024/04/aniversario-de-chiclayo.jpg",
        duracion: "3 horas",
        horarios: ["07:30", "12:00", "06:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.5223964902447!2d-79.84390648309466!3d-6.776295152609277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef267e3836e3%3A0x344df867720b0c27!2sTransporte%20Flores!5e1!3m2!1ses!2spe!4v1751306931545!5m2!1ses!2spe"
    },
    {
        nombre: "Chimbote",
        descripcion: "El principal puerto pesquero del país, conocido por su bahía, islas y deliciosa comida marina.",
        precio: "S/. 45.00",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Plaza_de_armas_de_Chimbote_01.jpg/1024px-Plaza_de_armas_de_Chimbote_01.jpg",
        horarios: ["05:00 AM","11:00 AM", "04:30 PM"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.844821365143!2d-78.57363278744305!3d-9.090459989576374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8191f3f6c0db%3A0x844a771b91df09bb!2sTransporte%20santa%20rosa%20Chimbote!5e1!3m2!1ses!2spe!4v1751307088674!5m2!1ses!2spe"
    },

    // "Arequipa"
    {
        nombre: "Arequipa",
        descripcion: "La ciudad blanca del sur peruano, rodeada de volcanes y llena de historia.",
        imagen: "https://media.vogue.mx/photos/5e5c4abe25623100081c4374/master/w_1600%2Cc_limit/Arequipa--plaza--centro.jpg",
        precio: "S/. 90.00",
        duracion: "10 horas",
        horarios: ["06:00", "12:00", "22:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2175.666086652561!2d-71.5469045974569!3d-16.42227945307341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sArequipa%2C%20empresa%20de%20transporte!5e1!3m2!1ses!2spe!4v1751307215533!5m2!1ses!2spe"
    },
    // "Lima"
    {
        nombre: "Lima",
        descripcion: "La capital del Perú, moderna y llena de historia, famosa por su gastronomía y su costa sobre el Pacífico.",
        imagen: "https://www.infobae.com/resizer/v2/XJ6ON4Q6RFEHFCFWYE7QHZEAIQ.jpg?auth=2677fe511fcbae5f7dbf3a9312dd966fcd54a4ef2fa6c9540c9cb23fab3c1a9c&smart=true&width=992&height=558&quality=85",
        precio: "S/. 50.00",
        duracion: "3 horas",
        horarios: ["09:00", "15:00", "19:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1172.1496585000323!2d-77.07050385111647!3d-12.038918442349381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cecda54f5c05%3A0x4248546f3fd17583!2sTRANSPORTES%20PEREDA%20SRL!5e1!3m2!1ses!2spe!4v1751306523306!5m2!1ses!2spe"
    },
    // "Cusco"
    {
        nombre: "Cusco",
        descripcion: "Antigua capital del Imperio Inca, puerta de entrada a Machu Picchu y el Valle Sagrado.",
        imagen: "https://www.peruhike.com/wp-content/uploads/2020/10/Cusco-City-Tour-8-1000x500.jpg",
        precio: "S/. 120.00",
        duracion: "8 horas",
        horarios: ["07:00", "13:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5331.4332390797435!2d-71.9449734182949!3d-13.538557122786427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f5cc02b7d5b%3A0xda0aa561be013d9d!2sExpreso%20Marvisur%20Cusco!5e1!3m2!1ses!2spe!4v1751307315163!5m2!1ses!2spe"
    },
    // "Piura"
    {
        nombre: "Piura",
        descripcion: "Ciudad cálida y acogedora, famosa por sus playas y su cultura norteña.",
        imagen: "https://cdn.www.gob.pe/uploads/document/file/6764110/1002293-piura-2.jpg",
        precio: "S/. 80.00",
        duracion: "6 horas",
        horarios: ["08:00", "14:00", "18:00"],
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.9727920608857!2d-80.63873683906886!3d-5.187581953131967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904a1bdecfc82cd1%3A0x3d22b9b2f6d00fa3!2sCarga%20Andeskar%20-%20Piura!5e1!3m2!1ses!2spe!4v1751307419418!5m2!1ses!2spe"
    },
    // "Loreto"
    {
        nombre: "Iquitos",
        descripcion: "La mayor ciudad de la Amazonía peruana, solo accesible por río o aire, rodeada de selva.",
        imagen: "https://rutasturisticas.pe/wp-content/uploads/2022/08/lugares-para-visitar-en-iquitos.jpg",
        precio: "S/. 150.00",
        duracion: "12 horas",
        horarios: ["06:00", "12:00", "18:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11252.527027405442!2d-73.26577516452406!3d-3.7555146333248532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea11b133ec11c3%3A0xf5581eb34e63fe73!2sGPP%20Cargo%20-%20Iquitos!5e1!3m2!1ses!2spe!4v1751307776921!5m2!1ses!2spe"
    },
    // "Puno"
    {
        nombre: "Puno",
        descripcion: "A orillas del lago Titicaca, famosa por sus festividades y cultura altiplánica.",
        imagen: "https://www.hotelkatari.com/wp-content/uploads/2025/03/PLAZA-MAYOR-DE-PUNO.jpg",
        precio: "S/. 110.00",
        duracion: "7 horas",
        horarios: ["07:00", "13:00", "19:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39433.934660099134!2d-70.03785055034015!3d-15.830251835069406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9168edf8cb0f985b%3A0x9752f8d248d64ad6!2sSHALOM%20PUNO!5e1!3m2!1ses!2spe!4v1751307869033!5m2!1ses!2spe"
    },
    // "Junín"
    {
        nombre: "Huancayo",
        descripcion: "Corazón del Valle del Mantaro, conocida por su folclore y paisajes andinos.",
        imagen: "https://urbania.pe/blog/wp-content/uploads/2025/01/imovelwebcomunicacaoltda_quintoandarperu_image_636.jpeg",
        precio: "S/. 85.00",
        duracion: "6 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24600.458606922068!2d-75.22078204577384!3d-12.070314818919066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9763f2467453%3A0xf886db9e94672954!2sJR.%20CARGO%20HUANCAYO!5e1!3m2!1ses!2spe!4v1751307923882!5m2!1ses!2spe"
    },
    // "Ayacucho"
    {
        nombre: "Ayacucho",
        descripcion: "Ciudad de las 33 iglesias, famosa por su Semana Santa y su historia colonial.",
        imagen: "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/09/13172228/arco-ayacucho.jpg",
        precio: "S/. 95.00",
        duracion: "7 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16200.402934847823!2d-74.2415237842198!3d-13.137475344701278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9112875f2d904fa1%3A0x5e69532399e411d5!2sMarvisur%20Ayacucho!5e1!3m2!1ses!2spe!4v1751308002202!5m2!1ses!2spe"

    },
    // "Tacna"
    {
        nombre: "Tacna",
        descripcion: "Ciudad heroica del sur, conocida por su historia y su cercanía a la frontera con Chile.",
        imagen: "https://peru.info/archivos/publicacion/178-imagen-930171942022.jpg",
        precio: "S/. 100.00",
        duracion: "8 horas",
        horarios: ["07:00", "13:00", "19:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54980.969718523076!2d-70.28057227137597!3d-18.000466167581195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ac57ddd7aa3eb%3A0x1689777eef108704!2sTransportes%20Atlantic%20SCRL!5e1!3m2!1ses!2spe!4v1751308097754!5m2!1ses!2spe"
    },
    // "Tumbes"
    {
        nombre: "Tumbes",
        descripcion: "Puerta de entrada al norte, famosa por sus manglares y playas tropicales.",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3oy0EKFUk5ATgBS5iIXPQngNERq_AtLHPYiOuuWDvjWHHG37bYZ5IL7ACm-wT0wPdDe_FA7m0RNYfr7jRApgla9VODAihm-f3D-FGSBV03vj3v8Na-p2hyAROzwvEKMT-cYLyRMVmpOg/w1200-h630-p-k-no-nu/tumbes.jpg",
        precio: "S/. 130.00",
        duracion: "10 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10300.292605142431!2d-80.46282579546795!3d-3.566084945826222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90338dcc218846bf%3A0xe4a639f3e3cab0f5!2sTransportes%20Lama%20E.I.R.L.!5e1!3m2!1ses!2spe!4v1751319007887!5m2!1ses!2spe"
    },
    // "Cajamarca"
    {
        nombre: "Cajamarca",
        descripcion: "Escenario del encuentro de dos mundos, famosa por sus baños termales y carnavales.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Plaza_de_cajamarca.jpg/640px-Plaza_de_cajamarca.jpg",
        precio: "S/. 90.00",
        duracion: "6 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21665.150348770687!2d-78.50919725815496!3d-7.1830342104401685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25b38a39c8c23%3A0xa776a84f0dfeb8c6!2sTransgroup%20Cajamarca!5e1!3m2!1ses!2spe!4v1751319057868!5m2!1ses!2spe"
    },
    // "Moquegua"
    {
        nombre: "Moquegua",
        descripcion: "Ciudad tranquila del sur, conocida por sus viñedos y clima agradable.",
        imagen: "https://peru.angloamerican.com/~/media/Images/A/Anglo-American-Group-v5/Peru/social-media-image/moquegua-redes.jpeg",
        precio: "S/. 105.00",
        duracion: "7 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12838.166304914157!2d-70.93481943818142!3d-17.201380831432367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91449d7b1b63ec33%3A0x4836ae56e8ff4617!2sTransjoc%20Moquegua%20SAC!5e1!3m2!1ses!2spe!4v1751319129652!5m2!1ses!2spe"
    },
    // "Huánuco"
    {
        nombre: "Huánuco",
        descripcion: "Ciudad de clima primaveral, rodeada de montañas y rica en historia.",
        imagen: "https://www.netravel.pe/wp-content/uploads/2018/10/Visita-iglesias-huanuco.jpg",
        precio: "S/. 80.00",
        duracion: "5 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5678953921565!2d-76.24848129010996!3d-9.934783286821697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c3d3e7ad0c45%3A0xe3997986a285ba79!2sTEPSA%20HUANUCO!5e1!3m2!1ses!2spe!4v1751319231429!5m2!1ses!2spe"
    },
    // "Ucayali"
    {
        nombre: "Pucallpa",
        descripcion: "Capital de Ucayali, puerta de entrada a la selva central y el río Ucayali.",
        imagen: "https://i.ytimg.com/vi/-rszcJDAUoI/maxresdefault.jpg",
        precio: "S/. 140.00",
        duracion: "9 horas",
        horarios: ["07:00", "13:00", "19:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154.129885986054!2d-74.57503076866647!3d-8.385491500532348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3bdd8ecb76d77%3A0xc9f8722ba4bb25ed!2sTRANSBER%20S.A.C.%2C%20Estaci%C3%B3n%20Pucallpa!5e1!3m2!1ses!2spe!4v1751319343410!5m2!1ses!2spe"
    },
    // "Madre de Dios"
    {
        nombre: "Puerto Maldonado",
        descripcion: "Capital de Madre de Dios, punto de partida para explorar la selva amazónica.",
        imagen: "https://sotupa.pe/wp-content/uploads/2022/08/destacado-atractivos-turisticos-puerto-maldonado.jpg",
        precio: "S/. 160.00",
        duracion: "11 horas",
        horarios: ["06:00", "12:00", "18:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17403.03009842451!2d-69.20313274064962!3d-12.600530211887524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917b4f3e2897cded%3A0x210b960a9ec2233!2sMarvisur%20Puerto%20Maldonado!5e1!3m2!1ses!2spe!4v1751319550383!5m2!1ses!2spe"
    },
    // "Áncash"
    {
        nombre: "Huaraz",
        descripcion: "Capital de la región Áncash, famosa por la Cordillera Blanca y el Parque Nacional Huascarán.",
        imagen: "https://content.r9cdn.net/rimg/dimg/17/1d/38963bbb-city-58607-173326d42bf.jpg?width=1200&height=630&xhint=2671&yhint=1747&crop=true",
        precio: "S/. 100.00",
        duracion: "8 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.1115934690001!2d-77.5437141692023!3d-9.522100309643877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a90d6583fc5a6d%3A0xfb6a217cb8cdd240!2sGRUAS%20MORALES!5e1!3m2!1ses!2spe!4v1751319658400!5m2!1ses!2spe"
    },
    // "Ica"
    {
        nombre: "Ica",
        descripcion: "Ciudad del sol y el vino, famosa por la Huacachina y sus viñedos.",
        imagen: "https://propuestapais.pe/wp-content/uploads/2019/10/Ica-1024x511.jpg",
        precio: "S/. 95.00",
        duracion: "6 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9580.73422937056!2d-75.74815433730441!3d-14.067438017505914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e37fef9962fb%3A0xd967afb6ee097084!2sJatsa%20Cargo%20-%20Ica!5e1!3m2!1ses!2spe!4v1751319726075!5m2!1ses!2spe"
    },
    // "San Martín"
    {
        nombre: "Tarapoto",
        descripcion: "Ciudad de las palmeras, conocida por sus cataratas y naturaleza exuberante.",
        imagen: "https://heidi-schade-fotografie.de/wp-content/uploads/2014/07/Tarapoto-Laguna-Azul-05-1024x575.jpg",
        precio: "S/. 120.00",
        duracion: "8 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149.930683740797!2d-76.38118876131672!3d-6.489450328302621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ba0b213d793e49%3A0xf685143cafcc6326!2sMarvisur%20Tarapoto!5e1!3m2!1ses!2spe!4v1751319771704!5m2!1ses!2spe"
    },
    // "San Martín"
    {
        nombre: "Moyobamba",
        descripcion: "La ciudad de las orquídeas, capital de San Martín, rodeada de naturaleza y aguas termales.",
        imagen: "https://cdn.www.gob.pe/uploads/document/file/3108903/1234567777.jpg.jpg",
        precio: "S/. 110.00",
        duracion: "7 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4845.959531839781!2d-76.98187725188261!3d-6.050248499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b73b167fd3f93f%3A0x35021a1613433be8!2sMudanzas%20Becerra%20Moyobamba!5e1!3m2!1ses!2spe!4v1751320429385!5m2!1ses!2spe"
    },
    // "Pasco"
    {
        nombre: "Cerro de Pasco",
        descripcion: "La ciudad más alta del Perú, famosa por su historia minera y su clima frío.",
        imagen: "https://images.adsttc.com/media/images/62e8/3957/95a5/5101/66f1/72ed/newsletter/el-caso-de-cerro-de-pasco-una-ciudad-que-desaparece-por-la-mineria_1.jpg?1659386243",
        precio: "S/. 115.00",
        duracion: "8 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11008.388066200016!2d-76.25537346009168!3d-10.68860903833598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91086dcdbcb7dd75%3A0xf67519b9ca8f58a0!2sMARVISUR%20sucursal%20Cerro%20de%20Pasco!5e1!3m2!1ses!2spe!4v1751319989884!5m2!1ses!2spe"
    },
    // "Apurímac"
    {
        nombre: "Abancay",
        descripcion: "Capital de Apurímac, rodeada de montañas y conocida por su clima agradable.",
        imagen: "https://noticias-pe.laiglesiadejesucristo.org/media/960x540/Abancay-Plaza-principal-2.jpg",
        precio: "S/. 105.00",
        duracion: "7 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.9594057958802!2d-72.89232486349643!3d-13.63544743177018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d02d645056edf%3A0xcf4ab197fbe9da6f!2stransportes%20corsario!5e1!3m2!1ses!2spe!4v1751320068507!5m2!1ses!2spe"
    },
    // "Amazonas"
    {
        nombre: "Chachapoyas",
        descripcion: "Capital de Amazonas, famosa por la fortaleza de Kuélap y su entorno natural.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Chachapoyas.jpg",
        precio: "S/. 130.00",
        duracion: "9 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.2505031242185!2d-77.86805526023394!3d-6.226810500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b6ab1e904ccd5b%3A0xd7d6aa1fc48291d4!2sGPP%20Cargo%20-%20CHACHAPOYAS!5e1!3m2!1ses!2spe!4v1751320116330!5m2!1ses!2spe"
    },
    // "Loreto"
    {
        nombre: "Yurimaguas",
        descripcion: "Ciudad portuaria de Loreto, punto de partida para explorar la selva baja.",
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/47/1c/80/img-20191212-120618-largejpg.jpg?w=900&h=500&s=1",
        precio: "S/. 125.00",
        duracion: "8 horas",
        horarios: ["09:00", "15:00", "21:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14945.692177785688!2d-76.13948311032718!3d-5.897306504980859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b9ebef25494c57%3A0xa0a07830afd7678f!2sGPP%20Cargo%20-%20Yurimaguas!5e1!3m2!1ses!2spe!4v1751320350821!5m2!1ses!2spe"
    },
    // "Huánuco"
    {
        nombre: "Tingo María",
        descripcion: "Ciudad de la Bella Durmiente, rodeada de naturaleza y cuevas impresionantes.",
        imagen: "https://inforegion.net.pe/images/2024/05/03/Lanzan-marca-Tingo-Maria-para-promocionar-cultura-y-atractivos-turisticos-3.webp",
        precio: "S/. 115.00",
        duracion: "7 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.566523606642!2d-76.00049945438427!3d-9.294944480466691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a6418ef1ae4dd7%3A0x2d903d9e9a08562a!2sTransportes%20GM%20Internacional!5e1!3m2!1ses!2spe!4v1751305132338!5m2!1ses!2spe"
    },
    // "Huancavelica"
    {
        nombre: "Huancavelica",
        descripcion: "Ciudad andina famosa por su historia minera y tradiciones culturales.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Panor%C3%A1mica_de_Huancavelica.jpg/1200px-Panor%C3%A1mica_de_Huancavelica.jpg",
        precio: "S/. 85.00",
        duracion: "7 horas",
        horarios: ["08:00", "14:00", "20:00"],
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.0819001062823!2d-74.9674486161914!3d-12.784603400367313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910de149abb44011%3A0x708b5fb5f3129fb8!2sMARVISUR%20HUANCAVELICA!5e1!3m2!1ses!2spe!4v1751320548809!5m2!1ses!2spe"
    }

    // Puedes agregar más destinos de todos los departamentos del Perú aquí siguiendo el mismo formato

    

];


