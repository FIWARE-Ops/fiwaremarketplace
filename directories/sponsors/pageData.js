var companies = [
        'BEOPEN',
        'CITIES TODAY',
        'DOME PROJECT',
        'DSBA',
        'ENERSHARE',
        'ESA',
        'INFINITI MONDI',
        'LATITUDO 40',
        'MEDITECH',
        'MUNICIPALITY OF NAPLES',
        'OPENDATASOFT',
        'RENEWABLE MATTER',
        'SMARTCITIESWORLD',
        'THE LISBON COUNCIL',
        'THE SMART CITY JOURNAL',
        'ULSIT',
]; var departments = [
]; var domains = [
]; var titles = [
        'Basic Sponsor',
        'Hosting Partner',
        'Media Partners',
        'Official Partner',
        'Premiere Sponsor',
]; var countries = [
]; var modalData = [
    { name: "MUNICIPALITY OF NAPLES", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-municipality-of-naples.png", "company-link": "https://www.comune.napoli.it/home", content: "Cursus eget nunc scelerisque viverra mauris in. Egestas tellus rutrum  tellus pellentesque eu tincidunt. Ut enim blandit volutpat maecenas  volutpat. Vitae aliquet nec ullamcorper sit amet. Eget egestas purus  viverra accumsan. Faucibus nisl tincidunt eget nullam non nisi. Viverra  justo nec ultrices dui sapien eget mi proin. Amet mauris commodo quis  imperdiet massa tincidunt. Velit euismod in pellentesque massa. Leo vel  orci porta non. Turpis in eu mi bibendum neque egestas congue quisque.  Amet purus gravida quis blandit turpis cursus in hac habitasse. Cursus  euismod quis viverra nibh cras pulvinar mattis nunc. Hendrerit dolor  magna eget est lorem. Pretium aenean pharetra magna ac placerat. Sed  vulputate odio ut enim blandit volutpat maecenas. Tempus quam  pellentesque nec nam aliquam sem. Id interdum velit laoreet id donec  ultrices tincidunt arcu. Erat imperdiet sed euismod nisi porta lorem  mollis aliquam.", linkedin: "https://www.linkedin.com/company/comune-di-napoli/", twitter: "", type: "Hosting Partner" },
    { name: "INFINITI MONDI", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-infiniti-mondi.png", "company-link": "https://www.casatecnologienapoli.it/it/", content: "Facilisi cras fermentum odio eu feugiat pretium. Tellus in metus  vulputate eu scelerisque. Pellentesque id nibh tortor id aliquet lectus  proin nibh. Vitae sapien pellentesque habitant morbi tristique senectus  et netus. Sit amet venenatis urna cursus eget nunc scelerisque. Amet  venenatis urna cursus eget nunc scelerisque viverra. Aliquam id diam  maecenas ultricies mi. Eget lorem dolor sed viverra ipsum nunc aliquet  bibendum enim. Est sit amet facilisis magna etiam. Magna eget est lorem  ipsum dolor sit amet consectetur. Egestas quis ipsum suspendisse  ultrices gravida dictum.", linkedin: "https://www.linkedin.com/company/infiniti-mondi-casa-delle-tecnologie-emergenti-di-napoli", twitter: "", type: "Official Partner" },
    { name: "MEDITECH", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-meditech.png", "company-link": "https://meditech4.com/", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet  aliquam id diam. Purus gravida quis blandit turpis. Id donec ultrices  tincidunt arcu non sodales. Aliquet lectus proin nibh nisl. Elementum  integer enim neque volutpat ac. Quam id leo in vitae turpis. A diam  maecenas sed enim ut sem viverra. Posuere sollicitudin aliquam ultrices  sagittis orci a. Purus in mollis nunc sed id semper. Massa vitae tortor  condimentum lacinia quis vel.", linkedin: "https://www.linkedin.com/company/meditechcompetencecenter/", twitter: "", type: "Official Partner" },
    { name: "LATITUDO 40", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-latitudo40.png", "company-link": "https://latitudo40.com/", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet  aliquam id diam. Purus gravida quis blandit turpis. Id donec ultrices  tincidunt arcu non sodales. Aliquet lectus proin nibh nisl. Elementum  integer enim neque volutpat ac. Quam id leo in vitae turpis. A diam  maecenas sed enim ut sem viverra. Posuere sollicitudin aliquam ultrices  sagittis orci a. Purus in mollis nunc sed id semper. Massa vitae tortor  condimentum lacinia quis vel.", linkedin: "https://www.linkedin.com/company/latitudo-40/", twitter: "", type: "Premiere Sponsor" },
    { name: "OPENDATASOFT", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-opendatasoft.png", "company-link": "https://www.opendatasoft.com/en/", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet  aliquam id diam. Purus gravida quis blandit turpis. Id donec ultrices  tincidunt arcu non sodales. Aliquet lectus proin nibh nisl. Elementum  integer enim neque volutpat ac. Quam id leo in vitae turpis. A diam  maecenas sed enim ut sem viverra. Posuere sollicitudin aliquam ultrices  sagittis orci a. Purus in mollis nunc sed id semper. Massa vitae tortor  condimentum lacinia quis vel.", linkedin: "https://www.linkedin.com/company/opendatasoft/", twitter: "", type: "Premiere Sponsor" },
    { name: "BEOPEN", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-beopen.png", "company-link": "https://beopen-dep.eu/", content: "BeOpen will enable the development of new digital and AI services by facilitating access to and use of EU Public Sector High Value Datasets. The BeOpen project Framework is expected to increase the availability and usability of Open Data provided by the public sector. Eight pilots will address mobility, urban security, environment, and natural disasters challenges in several EU regions.", linkedin: "https://www.linkedin.com/company/beopen-dep/", twitter: "", type: "Basic Sponsor" },
    { name: "DOME PROJECT", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-dome.png", "company-link": "https://dome-marketplace.eu/", content: "Cursus eget nunc scelerisque viverra mauris in. Egestas tellus rutrum  tellus pellentesque eu tincidunt. Ut enim blandit volutpat maecenas  volutpat. Vitae aliquet nec ullamcorper sit amet. Eget egestas purus  viverra accumsan. Faucibus nisl tincidunt eget nullam non nisi. Viverra  justo nec ultrices dui sapien eget mi proin. Amet mauris commodo quis  imperdiet massa tincidunt. Velit euismod in pellentesque massa. Leo vel  orci porta non. Turpis in eu mi bibendum neque egestas congue quisque.  Amet purus gravida quis blandit turpis cursus in hac habitasse. Cursus  euismod quis viverra nibh cras pulvinar mattis nunc. Hendrerit dolor  magna eget est lorem. Pretium aenean pharetra magna ac placerat. Sed  vulputate odio ut enim blandit volutpat maecenas. Tempus quam  pellentesque nec nam aliquam sem. Id interdum velit laoreet id donec  ultrices tincidunt arcu. Erat imperdiet sed euismod nisi porta lorem  mollis aliquam.", linkedin: "https://www.linkedin.com/company/dome-marketplace/", twitter: "", type: "Basic Sponsor" },
    { name: "DSBA", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-DSBA.png", "company-link": "https://data-spaces-business-alliance.eu/", content: "Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Diam  phasellus vestibulum lorem sed risus ultricies tristique. Fermentum leo  vel orci porta non pulvinar. Massa massa ultricies mi quis hendrerit  dolor magna. Habitasse platea dictumst vestibulum rhoncus est  pellentesque elit. Tempor id eu nisl nunc mi. Augue eget arcu dictum  varius. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo  nec. Risus in hendrerit gravida rutrum quisque non tellus. Sem viverra  aliquet eget sit. Amet volutpat consequat mauris nunc congue nisi vitae.  Nulla aliquet enim tortor at auctor urna nunc id cursus. Nibh nisl  condimentum id venenatis a condimentum. Amet luctus venenatis lectus  magna fringilla urna porttitor rhoncus dolor. Tellus id interdum velit  laoreet id donec.", linkedin: "", twitter: "", type: "Basic Sponsor" },
    { name: "ENERSHARE", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-enershare.png", "company-link": "https://enershare.eu/", content: "The Energy Data Space for Europe. Bringing together energy and data value chains to enable the energy transition The overall Enershare framework will be applied, implemented, demonstrated, and validated in seven real-life pilots, eleven use cases, across seven countries. The large geographical coverage of the pilot sites aims to support the large-scale EU-wide replicability and market take-up of energy data sharing technological solutions and data-driven services in different socio-economic contexts.", linkedin: "https://www.linkedin.com/company/enershare-eu/", twitter: "", type: "Basic Sponsor" },
    { name: "ESA", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-esa.png", "company-link": "https://www.esa.int/", content: "The European Space Agency (ESA) is Europe’s gateway to space. Its mission is to shape the development of Europe’s space capability and ensure that investment in space continues to deliver benefits to the citizens of Europe and the world.vulputate eu scelerisque. Pellentesque id nibh tortor id aliquet lectus  proin nibh. Vitae sapien pellentesque habitant morbi tristique senectus  et netus. Sit amet venenatis urna cursus eget nunc scelerisque. Amet  venenatis urna cursus eget nunc scelerisque viverra. Aliquam id diam  maecenas ultricies mi. Eget lorem dolor sed viverra ipsum nunc aliquet  bibendum enim. Est sit amet facilisis magna etiam. Magna eget est lorem  ipsum dolor sit amet consectetur. Egestas quis ipsum suspendisse  ultrices gravida dictum.", linkedin: "https://www.linkedin.com/company/european-space-agency/", twitter: "", type: "Basic Sponsor" },
    { name: "THE LISBON COUNCIL", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-the-lisbon-council.png", "company-link": "https://lisboncouncil.net/", content: "Cursus eget nunc scelerisque viverra mauris in. Egestas tellus rutrum  tellus pellentesque eu tincidunt. Ut enim blandit volutpat maecenas  volutpat. Vitae aliquet nec ullamcorper sit amet. Eget egestas purus  viverra accumsan. Faucibus nisl tincidunt eget nullam non nisi. Viverra  justo nec ultrices dui sapien eget mi proin. Amet mauris commodo quis  imperdiet massa tincidunt. Velit euismod in pellentesque massa. Leo vel  orci porta non. Turpis in eu mi bibendum neque egestas congue quisque.  Amet purus gravida quis blandit turpis cursus in hac habitasse. Cursus  euismod quis viverra nibh cras pulvinar mattis nunc. Hendrerit dolor  magna eget est lorem. Pretium aenean pharetra magna ac placerat. Sed  vulputate odio ut enim blandit volutpat maecenas. Tempus quam  pellentesque nec nam aliquam sem. Id interdum velit laoreet id donec  ultrices tincidunt arcu. Erat imperdiet sed euismod nisi porta lorem  mollis aliquam.", linkedin: "https://www.linkedin.com/company/the-lisbon-council", twitter: "", type: "Basic Sponsor" },
    { name: "ULSIT", img: "https://www.fiware.org/fiware-summit/naples-2024/images/sponsors/logo-unibit.png", "company-link": "https://www.unibit.bg/en", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet  aliquam id diam. Purus gravida quis blandit turpis. Id donec ultrices  tincidunt arcu non sodales. Aliquet lectus proin nibh nisl. Elementum  integer enim neque volutpat ac. Quam id leo in vitae turpis. A diam  maecenas sed enim ut sem viverra. Posuere sollicitudin aliquam ultrices  sagittis orci a. Purus in mollis nunc sed id semper. Massa vitae tortor  condimentum lacinia quis vel.", linkedin: "https://www.linkedin.com/company/national-security-department-ulsit/", twitter: "", type: "Basic Sponsor" },
    { name: "CITIES TODAY", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-cities-today.png", "company-link": "https://cities-today.com/", content: "Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Diam  phasellus vestibulum lorem sed risus ultricies tristique. Fermentum leo  vel orci porta non pulvinar. Massa massa ultricies mi quis hendrerit  dolor magna. Habitasse platea dictumst vestibulum rhoncus est  pellentesque elit. Tempor id eu nisl nunc mi. Augue eget arcu dictum  varius. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo  nec. Risus in hendrerit gravida rutrum quisque non tellus. Sem viverra  aliquet eget sit. Amet volutpat consequat mauris nunc congue nisi vitae.  Nulla aliquet enim tortor at auctor urna nunc id cursus. Nibh nisl  condimentum id venenatis a condimentum. Amet luctus venenatis lectus  magna fringilla urna porttitor rhoncus dolor. Tellus id interdum velit  laoreet id donec.", linkedin: "https://www.linkedin.com/showcase/cities-today/", twitter: "", type: "Media Partners" },
    { name: "RENEWABLE MATTER", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-renewable-matter.png", "company-link": "https://www.renewablematter.eu/en", content: "Cursus eget nunc scelerisque viverra mauris in. Egestas tellus rutrum  tellus pellentesque eu tincidunt. Ut enim blandit volutpat maecenas  volutpat. Vitae aliquet nec ullamcorper sit amet. Eget egestas purus  viverra accumsan. Faucibus nisl tincidunt eget nullam non nisi. Viverra  justo nec ultrices dui sapien eget mi proin. Amet mauris commodo quis  imperdiet massa tincidunt. Velit euismod in pellentesque massa. Leo vel  orci porta non. Turpis in eu mi bibendum neque egestas congue quisque.  Amet purus gravida quis blandit turpis cursus in hac habitasse. Cursus  euismod quis viverra nibh cras pulvinar mattis nunc. Hendrerit dolor  magna eget est lorem. Pretium aenean pharetra magna ac placerat. Sed  vulputate odio ut enim blandit volutpat maecenas. Tempus quam  pellentesque nec nam aliquam sem. Id interdum velit laoreet id donec  ultrices tincidunt arcu. Erat imperdiet sed euismod nisi porta lorem  mollis aliquam.", linkedin: "", twitter: "", type: "Media Partners" },
    { name: "SMARTCITIESWORLD", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-smart-cities-world.png", "company-link": "https://www.smartcitiesworld.net/", content: "Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Diam  phasellus vestibulum lorem sed risus ultricies tristique. Fermentum leo  vel orci porta non pulvinar. Massa massa ultricies mi quis hendrerit  dolor magna. Habitasse platea dictumst vestibulum rhoncus est  pellentesque elit. Tempor id eu nisl nunc mi. Augue eget arcu dictum  varius. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo  nec. Risus in hendrerit gravida rutrum quisque non tellus. Sem viverra  aliquet eget sit. Amet volutpat consequat mauris nunc congue nisi vitae.  Nulla aliquet enim tortor at auctor urna nunc id cursus. Nibh nisl  condimentum id venenatis a condimentum. Amet luctus venenatis lectus  magna fringilla urna porttitor rhoncus dolor. Tellus id interdum velit  laoreet id donec.", linkedin: "https://www.linkedin.com/company/smartcitiesworld/", twitter: "", type: "Media Partners" },
    { name: "THE SMART CITY JOURNAL", img: "https://www.fiware.org/fiware-summit/naples-2024/images/partners/logo-smart-city-journal.png", "company-link": "https://www.thesmartcityjournal.com/en/", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut pharetra sit amet  aliquam id diam. Purus gravida quis blandit turpis. Id donec ultrices  tincidunt arcu non sodales. Aliquet lectus proin nibh nisl. Elementum  integer enim neque volutpat ac. Quam id leo in vitae turpis. A diam  maecenas sed enim ut sem viverra. Posuere sollicitudin aliquam ultrices  sagittis orci a. Purus in mollis nunc sed id semper. Massa vitae tortor  condimentum lacinia quis vel.", linkedin: "https://www.linkedin.com/company/the-smart-city-journal/", twitter: "", type: "Media Partners" },
];
