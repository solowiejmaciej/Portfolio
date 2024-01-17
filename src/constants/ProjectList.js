// Define your project objects
const projects = [
    {
        title: 'BloodRush',
        description: 'BloodRush is a API for mobile application. Its all about notifying people about blood needs in their area. Purpose of this application is to help people in need of blood and share awareness about blood donation. If you register, you will be notified when there is a need for blood in your area within specified radius. After successful donation you will receive notification with information about your examination results. Resting period will be calculated based on your sex. While resting you will not receive notifications about blood needs. You will be notified when you can donate blood again.',
        url: 'https://github.com/solowiejmaciej/BloodRush',
        creationDate: '18.11.2023',
        icon: '🩸',
        isLive: false,
        technologies : ['.NET', 'Azure', 'Docker', 'RabbitMQ', 'Redis', 'SQL Server'],
        images: [],
        tags: ['#backend', '#api']
    },
    {
        title: 'HomeManagementService',
        description: 'HomeManagementService is a API for home automation. It is a part of my home automation project. It is responsible for managing devices, it integrates with Philips Hue, and my own devices based on Esp32. It uses Azure CosmosDb to store automation rules, automation can be triggered by time, or by location. It runs on Docker, and is deployed on my own server. ',
        url: 'https://github.com/solowiejmaciej/HomeManagementService',
        creationDate: '19.10.2023',
        icon: '🏠',
        isLive: true,
        liveUrl: 'https://hms.solowiejmaciej.com/swagger/index.html',
        technologies : ['.NET', 'Azure', 'Docker', 'RabbitMQ', 'Redis', 'Mqtt', 'SQL Server'],
        images: [],
        tags: ['#backend', '#api']
    },
    {
        title: 'ExampleSystem',
        description: 'This is a example system based on events and microservices. It is a simple system for managing users and their data. It is based on the CQRS pattern and the Mediator pattern, it uses RabbitMQ to communicate between services. It also uses Redis to cache data. Users can be created, updated, and deleted. It is a simple system that I created to learn more about microservices and event driven architecture.',
        url: 'https://www.google.com',
        creationDate: '03.04.2023',
        icon: '💻',
        isLive: false,
        technologies : ['.NET', 'RabbitMQ', 'Redis', 'SQL Server', 'Firebase'],
        images: [],
        tags: ['#backend', '#api', '#microservices']
    },
    {
        title:'SmartKnob',
        description: 'SmartKnob is a project that I created to learn more about Esp32, and home automation. It is a simple device that can be used to control lights in your home. It is based on Esp32, and uses Mqtt to communicate with other services.',
        url: 'https://github.com/solowiejmaciej/SmartKnob',
        creationDate: '07.11.2023',
        icon: '🔌',
        isLive: false,
        technologies : ['Esp32', 'Mqtt', 'C++'],
        images: ['https://i.imgur.com/U5KOut6.jpg', 'https://i.imgur.com/SMTS8Hz.png'],
        tags: ['#hardware']
    },
    {
        title: 'SmartWeatherStation',
        description: 'SmartWeatherStation is a project that I created to learn more about Esp32, and home automation. It is a simple device that can be used to measure temperature, humidity, and pressure. It is based on Esp32, and uses Mqtt to communicate with other services.',
        url: 'https://github.com/solowiejmaciej/SmartWeatherStation',
        creationDate: '23.11.2023',
        icon: '🌡️',
        isLive: false,
        technologies : ['Esp32', 'Mqtt', 'C++'],
        images: ['https://i.imgur.com/9JWkqB7.jpeg','https://i.imgur.com/0jDzREd.png'],
        tags: ['#hardware']

    },
    {
        title: 'Portfolio',
        description: 'This is my portfolio website. It is a simple website that I created to showcase my projects. It is based on Vue.js, it it uses Vue Router to navigate between pages. You are currently on this website.',
        url: 'https://github.com/solowiejmaciej/Portfolio',
        creationDate: '17.01.2024',
        icon: '💼',
        isLive: true,
        liveUrl: 'https://solowiejmaciej.com',
        technologies : ['Vue.js'],
        images: [],
        tags: ['#frontend']
    }
];

export default projects;
