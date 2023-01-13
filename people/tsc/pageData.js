var companies = [
  'Atos',
  'AWS',
  'City of Herne',
  'Easy Global Market',
  'Engineering',
  'eProsima',
  'Eridanis',
  'Ficodes',
  'FIWARE Foundation',
  'Martel Innovation',
  'NEC Lab Europe',
  'Orange',
  'Red Hat',
  'Secmotic',
  'Telefonica',
  'Universidad Politécnica de Madrid'
];
var departments = [];
var domains = ['Associates', 'Gold', 'Gold SEU', 'Platinum'];
var titles = [
  'Architect',
  'Assistant Professor',
  'Associate Professor',
  'Business Developer',
  'CEO',
  'Cloud Expert',
  'Co-Founder',
  'COO',
  'CTO',
  'Data Modeling Expert',
  'Director',
  'Evangelist',
  'Innovation Manager',
  'IoT Specialist',
  'Platform Expert',
  'Researcher',
  'Smart Cities Specialist',
  'Software Engineering Manager',
  'Solution Architect',
  'Technical Expert',
  'Technical Lead'
];
var countries = [
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Sweden',
  'Switzerland'
];
var modalData = [
  {
    name: 'Alberto Abella',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/alberto-abella.png',
    position: 'Data Modeling Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Alberto Abella is PhD in Business (Open data) and Telecommunications Engineer and Master in Total Quality Management, Business Administration and Business Organization. He works as a Data Modelling Expert and Technical Evangelist at FIWARE and currently is the responsible person for the smart data models initiative.',
    linkedin: 'https://www.linkedin.com/in/albertoabella/',
    twitter: 'https://twitter.com/aabella',
    domain: '',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Álvaro Alonso',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/alvaro-alonso.png',
    position: 'Assistant Professor',
    company: 'Universidad Politécnica de Madrid',
    'company-link': 'https://www.upm.es/internacional',
    content:
      'Álvaro Alonso is currently an Assistant Professor with the UPM. His research interests include Multi Video Conferencing Systems, Security Management in Smart Context scenarios, and Public Open Data.',
    linkedin: 'https://www.linkedin.com/in/alvaroalonsogonzalez',
    twitter: '',
    domain: 'Associates',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Álvaro Arranz',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'Co-Founder &amp; Chief Executive Officer',
    company: 'Ficodes',
    'company-link': 'https://www.ficodes.com/en/',
    content: '',
    linkedin:
      'https://www.linkedin.com/in/%C3%A1lvaro-arranz-garc%C3%ADa-33858536/',
    twitter: '',
    domain: 'Gold',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Martin Bauer',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/martin-bauer.png',
    position: 'Senior Researcher',
    company: 'NEC Lab Europe',
    'company-link': 'https://www.neclab.eu/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/martin-bauer-a722141/',
    twitter: '',
    domain: 'Platinum',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Ali Benfattoum',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/ali-benfattoum.png',
    position: 'IoT &amp; Smart Cities Specialist',
    company: 'AWS',
    'company-link': 'https://aws.amazon.com/',
    content:
      'Ali Benfattoum is a Technology Evangelist for IoT and Smart Cities at Amazon Web Services. With over 12 years of experience in IoT and Smart Cities, Ali brings his technical expertise to enable and help customers and partners to accelerate their IoT and Smart Cities projects. Ali also holds an executive MBA, giving him the ability to zoom out and help customers and partners at a strategic level.',
    linkedin: 'https://www.linkedin.com/in/alibenfattoum/',
    twitter: 'https://twitter.com/alifrugal',
    domain: 'Platinum',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Flavio Cirillo',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/flavio-cirillo.png',
    position: 'Senior Researcher',
    company: 'NEC Lab Europe',
    'company-link': 'https://www.neclab.eu/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/flaviocirillo/',
    twitter: '',
    domain: 'Platinum',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Carlos Corrales',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/carlos-corrales.png',
    position: 'Co-Founder &amp; Chief Operations Officer',
    company: 'Secmotic',
    'company-link': 'https://secmotic.com/',
    content:
      'Carlos Corrales is the CEO of FIWOO, the no-code Smart Platform that allows you to connect all your data sources, standardize them and perform analysis based on that data. Previously, in 2015 he cofounded Secmotic (Gold Member of the FIWARE Foundation) where he acts as Chief Operating Officer, working on several projects related to IoT and the usage of FIWARE Technologies. In 2017 he leaded the creation of the FIWOO platform together with Emergya. He received a master degree in Telecommunications Engineering at University of Sevilla, with one year at KTH (Stockholm).',
    linkedin: 'https://www.linkedin.com/in/carlos-corrales-yerpes/',
    twitter: 'https://twitter.com/carloscorri11',
    domain: 'Gold',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Piero Corte',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'Software Engineering Manager',
    company: 'Engineering',
    'company-link': 'https://www.eng.it/en/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/piero-corte-b4430132/',
    twitter: '',
    domain: 'Platinum',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Davide Dalle Carbonare',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/davide-dalle-carbonare.png',
    position: 'Senior Researcher &amp; Business Developer',
    company: 'Engineering',
    'company-link': 'https://www.eng.it/en/',
    content:
      'Davide Dalle Carbonare is Senior Researcher and Business Developer for the R&amp;D Department at Engineering Ingegneria Informatica SpA. He’s been involved in FIWARE since the very first EU project, he is member of the FIWARE Technical Steering Committee and he is promoting the adoption of FIWARE concepts and technologies. In addition to that, he is active on data-related topics (Big Data, AI, Data Sharing Spaces) and manufacturing, as vertical domain. He supports the preparation and development of national and European research projects related to Data and AI topics for developing and evolving solutions to transfer from the research lab to the company business units. He is member of the Board of Directors of the Big Data Value Association (BDVA/DAIRO) where he also co-leads the Smart Manufacturing Industry working group.',
    linkedin: 'https://www.linkedin.com/in/davidedallecarbonare/',
    twitter: 'https://twitter.com/davdalle',
    domain: 'Platinum',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Francisco de la Vega',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/francisco-de-la-vega.png',
    position: 'Chief Technology Officer',
    company: 'Ficodes',
    'company-link': 'https://www.ficodes.com/en/',
    content:
      'Francisco de la Vega (male) is co-founder and CTO of the spanish startup FICODES as well as FIWARE architect. Francisco held a Master of Science in Computer Science from Universidad Politécnica de Madrid in 2015. Currently, he is making his Ph.D. in Computer Science in Universidad Politécnica de Madrid focusing on digital service management and monetization, automated revenue sharing, and value chain aggregation. As a researcher of the Computer Networks and Web Technologies Laboratory (CoNWeT Lab.) of UPM, he was engaged in several EU projects around the FIWARE platform starting in 2012, including FI-WARE and FI-CORE. Later, as CTO of FICODES he has been involved in multiple projects as FIWARE Architect, with a special focus in logistics, Smart Port and Smart City platforms. He has been actively participating on the FIWARE Community initially as the FIWARE Business Framework GEs owner (Store, Marketplace, Repository, and Revenue Settlement and Sharing system), and later as the FIWARE/TMF Business API Ecosystem GE owner, which integrates the aforementioned GEs with standard TMForum technologies. He is a member of the Data/API Management, Publication and Monetization FIWARE’s Technical Steering Committee.',
    linkedin: 'https://www.linkedin.com/in/fdelavegagarcia',
    twitter: 'https://twitter.com/frandlvega',
    domain: 'Gold',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Gabriele De Luca',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/gabriele-de-luca.png',
    position: 'Senior Researcher',
    company: 'Engineering',
    'company-link': 'https://www.eng.it/en/',
    content:
      'Gabriele De Luca graduated as Doctor with Laude in Computer Engineering from the University of Salento. He has been working in the R&amp;D Lab for Engineering Ingegneria Informatica S.p.A. since 2014 as part of the “Digital Industry and Agrifood” Unit. He has been involved in different Italian and European research projects playing several roles, such as software developer, solution designer, system architect and information expert. Currently, he acts as Technology Manager and Team Leader. The main application fields are Advanced Manufacturing, Smart Farming, Supply Chain Management, Operational Intelligence, Artificial Intelligence, Internet of Things and Food Safety whereas the main activities are correlated to Event Processing, Sensor Data Processing (OGC standards such as Sensor Web Enablement), Decision Support Systems, Internet of Things (mainly in the FIWARE context), Data Sovereignty and Data Spaces (IDSA-based). His relevant expertise and experiences include Architecture Design, System Integration, and Collaborative Working Environment, from both software engineering and technological points of view. Main research fields are applied to Digital Industry, including Operational Intelligence (especially in Complex Event Processing and Process Mining), Supply Chain Integration, and so on.',
    linkedin: 'https://www.linkedin.com/in/gabriele-de-luca-b4132861/',
    twitter: 'https://twitter.com/gabrielede_luca',
    domain: 'Platinum',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Stefano De Panfilis',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/stefano-depanfilis.png',
    position: 'Chief Operations Officer',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Stefano joined Engineering Ingegneria Informatica S.p.A. in 1984 and went from Director of R&amp;D Laboratories Department (overseeing 100+ researchers in Europe and beyond) to Chief Innovation Officer of the Engineering Group in 2011. In 2016 he is among the founders of the FIWARE Foundation. Besides his role as COO, he is responsible for the FIWARE Lab Nodes and is also a member of the FIWARE Technical Steering Committee.',
    linkedin: 'https://www.linkedin.com/in/stefano-de-panfilis-1928a11/',
    twitter: 'https://twitter.com/depa01',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Marc Despland',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/marc-despland.png',
    position: 'Solution Architect',
    company: 'Orange',
    'company-link': 'https://www.orange.com/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/marc-despland-969a3b13/',
    twitter: 'https://twitter.com/desplandmarc',
    domain: 'Gold',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Christian Drucks',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'Chief Technology Officer',
    company: 'City of Herne',
    'company-link': 'https://www.herne.de/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/christian-drucks/',
    twitter: '',
    domain: 'Gold SEU',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Federico Facca',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/federico-facca.png',
    position: 'Chief Technology Officer',
    company: 'Martel Innovation',
    'company-link': 'https://www.martel-innovate.com/',
    content:
      'Federico is the CTO of Martel, leading internal IT projects and acting as strategic lead consultant to customers, including the European Commission. Federico’s current core project is Orchestra Cities, a modular and flexible cloud-native IoT platform (mostly used in the Smart City domain). He has an extensive experience on Cloud-Native architectures, Infrastructure as a Code approach, continuous testing and monitoring to ensure infrastructure reliability. He is a strong advocate of Open Source and thrive to use and contribute to Open Source solutions. In his career he lead different large R&amp;D projects, ranging from industrial systems integration to data center deployment and federation. Before joining Martel Innovate, Federico has been area head in different FBK-CREATE-NET and STI Innsbruck. He holds a PhD and MSc in Computer Science.',
    linkedin: 'https://www.linkedin.com/in/federicofacca/',
    twitter: 'https://twitter.com/chicco785',
    domain: 'Gold',
    location: 'Switzerland',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Switzerland.png'
  },
  {
    name: 'Jason Fox',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/jason-fox.png',
    position: 'Senior Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Joined the FIWARE Foundation three years ago in the role of Senior Technical Evangelist. He is a Software Engineer with over twenty years experience in mobile and IT having previously worked at Nokia and HERE Technologies. Jason’s current role encompasses the development and assessment of FIWARE Technologies and technical coaching and training.',
    linkedin: 'https://www.linkedin.com/in/jason-fox-8a79563/',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Fermín Galán',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'Smart Cities Specialist',
    company: 'Telefonica',
    'company-link': 'https://www.telefonica.com/en/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/fermingalan/',
    twitter: '',
    domain: 'Platinum',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Alain Galdemas',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'Chief Technology Officer',
    company: 'Eridanis',
    'company-link': 'https://www.eridanis.com/en/home-2/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/alain-galdemas-28468b19/',
    twitter: '',
    domain: 'Gold',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Juanjo Hierro',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/juanjo-hierro.png',
    position: 'Chief Technology Officer',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Juanjo is the Chief Technology Officer (CTO) of FIWARE Foundation. He is also the chairman of the FIWARE Technical Steering Committee and coordinates the FIWARE Tech Roadmap. He also supports the FIWARE Community in developing the vision and value proposition of FIWARE in the several domains where it is being applied. Juanjo is also part of the Technical Advisory Council of the Open and Agile Smart Cities (OASC) initiative which he helped to found. OASC is aimed at creating a Digital Single Market for Smart Cities, based on the adoption of common Minimum Interoperability Mechanisms (MIMs) that enable smart city services to be replicable across cities and portable across platforms.',
    linkedin: 'https://www.linkedin.com/in/jhierro/',
    twitter: 'https://twitter.com/JuanjoHierro',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Franck Le Gall',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/franck-le-gall.png',
    position: 'Chief Executive Officer',
    company: 'Easy Global Market',
    'company-link': 'https://www.egm.io/en/egm-the-innovation-factory',
    content:
      'Franck Le Gall is CEO at Easy Global Market, an innovative SME focused on integration and validation of emerging technologies. He is driving company development to deploy IoT and data technologies over vertical markets (water, agriculture, smart territories, environment, etc.). He involves himself in the standardization area including ETSI where he is co-chairman of the ETSI ISG-CIM working group on NGSI-LD. He is also chairing the interfaces working group of the FIWARE Technical Steering Committee (TSC) as well as the joint ETSI-FIWARE Foundation working group on Digital Twins. Finally, he is the Co-chair of the Smart Water working group of the ICT4Water European research cluster. He continuously contributes and drives several projects for public and private customers.',
    linkedin: 'https://www.linkedin.com/in/francklegall/',
    twitter: 'https://twitter.com/franck_le_gall',
    domain: 'Gold',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Sylvie Le Guyader',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/sylvie-le-guyader.png',
    position: 'Global Research and Development Director',
    company: 'Atos',
    'company-link': 'https://atos.net/en/',
    content:
      'With more than 36 years’ experience in IT services my leadership allows me to drive organizational transformation through persuasive communication and entrepreneurial skills. Being a result-oriented and structured thinker, I’m able to define a vision and lead a project from strategy definition to successful implementation. I’ve been working in an international environment for the past 23 years. This enabled me to develop valuable and extensive experience in leading international teams and working in a virtual and remote environment, setting up complex programs and community with proven success.',
    linkedin: 'https://www.linkedin.com/in/sylvie-le-guyader-colliot-b970786/',
    twitter: 'https://twitter.com/guyadersylvie',
    domain: 'Platinum',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Fernando López Aguilar',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/fernando-lopez-aguilar.png',
    position: 'Cloud &amp; Platform Expert',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Fernando López de Aguilar (male) is FIWARE Cloud and Platform Senior Expert at the FIWARE Foundation. He obtained a Bachelor Degree in computer science summa cum laude by E.P.S. Córdoba and Master Degree in Computer Science from the E.T.S Ingeniería Informática - University of Málaga in 1998. In March 2000, he started working in Meta4 S.A. as a Software Engineer at R&amp;D Department as a Database Expert and Java developer. In May 2001, he joined Telefónica I+D where he participated in multiple R&amp;D project lines covering advanced broadband communications, NGN, IPv4/IPv6 compatibility, Mobile IP, multimedia applications, new mobile services, M2M communication, semantic web sensors, NoSQL DB and definition of IoT reference architecture. Since 2011 and until he joined the FIWARE Foundation.',
    linkedin: 'https://www.linkedin.com/in/fernandolopezaguilar/',
    twitter: 'https://twitter.com/flopezaguilar',
    domain: '',
    location: 'Germany',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Germany.png'
  },
  {
    name: 'Jaime Martin-Losa',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/ico_user.png',
    position: 'Chief Executive Officer',
    company: 'eProsima',
    'company-link': 'https://www.eprosima.com/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/jaime-martin-losa-216817/',
    twitter: '',
    domain: 'Gold',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Francisco Meléndez',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/francisco-melendez.png',
    position: 'Technical Expert &amp; Evangelist',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/franmelfer/',
    twitter: '',
    domain: '',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Benoit Orihuela',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/benoit-orihuela.png',
    position: 'Research Engineer',
    company: 'Easy Global Market',
    'company-link': 'https://www.egm.io/en/egm-the-innovation-factory',
    content:
      'Benoit Orihuela is an engineer in aeronautics, with more than 20 years of experience in Web architecture and development. He joined EGM at the beginning of 2019, mainly to drive the development and deployment of a reactive data platform relying on the NGSI-LD industry standard. Today lead architect of the Stellio FIWARE GE, he is also a representative in the FIWARE core chapter and contributor for some other GEs (Sigfox IoT Agent, Draco). Finally, he is deeply implied in the deployment of FIWARE-based data platforms in French (Saint Quentin, SMBT) and European projects (FIWARE4Water, Graced, Astral, …).',
    linkedin: 'https://www.linkedin.com/in/benoitorihuela/',
    twitter: 'https://twitter.com/bobeal',
    domain: 'Gold',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Miguel Ángel Pedraza',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/miguel-angel-pedraza.png',
    position: 'FIWARE Technical Expert',
    company: 'Telefonica',
    'company-link': 'https://www.telefonica.com/en/',
    content:
      'Miguel Angel Pedraza is a FIWARE Expert and the Telefonica Representative at TSC. he is involved in the support and development of a big amount of FIWARE components maintained by Telefónica, among other activities related with innovation hubs. He holds a degree in electronics engineering from University of Malaga, and, after some internships in industrial companies, he founded a couple of tech start-up developing solutions and products based on FIWARE. After that, he also worked at FIWARE Zone iHub as tech expert, delivering FIWARE training to companies, students, professors, and public institutions technicians.',
    linkedin: 'https://www.linkedin.com/in/miguelangpedraza/',
    twitter: '',
    domain: 'Platinum',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Alfonso Pietropaolo',
    img: '',
    position: 'Innovation Manager',
    company: 'Engineering',
    'company-link': 'https://www.eng.it/en/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/alfonsopietropaolo/',
    twitter: '',
    domain: 'Platinum',
    location: 'Italy',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Italy.png'
  },
  {
    name: 'Joaquín Salvachúa',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/joaqui%CC%81n-salvachu%CC%81a.png',
    position: 'Associate Professor',
    company: 'Universidad Politécnica de Madrid',
    'company-link': 'https://www.upm.es/internacional',
    content:
      'Prof. Joaquín Salvachúa received a master degree in Computer Science. He holds the Orange Chair for the “Science of Complex Networks” and the Kairos Chair on “Bank Middleware and Blockchain” at UPM and is a member of the UPM-ING and CyberAula groups. He has participated in several European research projects with several publications at international magazines, books and conferences. (https://orcid.org/0000-0002-7269-8079). Also have participated in several standardization activities, including been coauthor one RFC ( RFC 8802 ).His research focuses today on WebRTC, Cloud infrastructure, social graphs and recommendation, agile cloud infrastructures, P2P, DHT (Distributed HashTables), IOT, Non SQL Data Bases, Big data processing architectures, Identity Management and BlockChain distributed agreement algorithms.His teaching duties includes cloud computing, distributed application development, Databases, Web Full-stack development, Blockchain architecture, Data Engineering and Big data architecture and applications. Has been involved in the FIWARE Initiative since it started (2010) and he is architect and developer of several GE related to security, data persistence and Big Data analysis.',
    linkedin: 'https://es.linkedin.com/in/jsalvachua',
    twitter: 'https://twitter.com/jsalvachua',
    domain: 'Associates',
    location: 'Spain',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Spain.png'
  },
  {
    name: 'Cyrille Sauvignac',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/cyrille-sauvignac.png',
    position: 'Innovation Manager',
    company: 'Atos',
    'company-link': 'https://atos.net/en/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/cyrillesauvignac/',
    twitter: '',
    domain: 'Platinum',
    location: 'France',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_France.png'
  },
  {
    name: 'Dennis Wendland',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/dennis-wendland.png',
    position: 'Technical Lead &amp; Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content:
      'Dr. Dennis Wendland is a Technical Lead and Architect at the FIWARE Foundation where he is involved in a variety of projects in the field of data spaces. He holds a doctorate in high energy physics from Humboldt University of Berlin gaining a broad experience in the development of particle collision data analysis software and the statistical analysis of large data sets. His doctoral dissertation was about the search of new elementary particles at high-energy collisions at the CERN Large Hadron Collider in Geneva. After his doctorate, he has also worked at T-Systems and Deutsche Telekom AG acquiring expertise in the development, architecture and management of large software projects.',
    linkedin: 'https://www.linkedin.com/in/dennis-wendland/',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag: 'https://www.fiware.org/wp-content/uploads/2020/07/flag_Germany.png'
  },
  {
    name: 'Johnny Westerlund',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/johnny-westerlund.png',
    position: 'Solution Architect',
    company: 'Red Hat',
    'company-link': 'https://www.redhat.com/en',
    content: '',
    linkedin: 'https://www.linkedin.com/in/johnny-westerlund-7ba34633/',
    twitter: '',
    domain: 'Platinum',
    location: 'Sweden',
    flag:
      'https://www.fiware.org/wp-content/directories/people/images/flag/flag_Sweden.png'
  },
  {
    name: 'Stefan Wiedemann',
    img:
      'https://www.fiware.org/wp-content/directories/people/images/tsc/stefan-wiedemann.png',
    position: 'Technical Lead &amp; Architect',
    company: 'FIWARE Foundation',
    'company-link': 'https://www.fiware.org/',
    content: '',
    linkedin: 'https://www.linkedin.com/in/stefan-wiedemann-37a0ba13a/',
    twitter: '',
    domain: '',
    location: 'Germany',
    flag: 'https://www.fiware.org/wp-content/uploads/2020/07/flag_Germany.png'
  }
];
