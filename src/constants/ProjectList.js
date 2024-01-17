// Define your project objects
const projects = [
    {
      "id": 720435321,
      "title": "BloodRush",
      "description": "BloodRush is a API for mobile application. Its all about notifying people about blood needs in their area. Purpose of this application is to help people in need of blood and share awareness about blood donation. If you register, you will be notified when there is a need for blood in your area within specified radius. After successful donation you will receive notification with information about your examination results. Resting period will be calculated based on your sex. While resting you will not receive notifications about blood needs. You will be notified when you can donate blood again.",
      "gitHubUrl": "https://github.com/solowiejmaciej/BloodRush",
      "createdAt": "11/18/2023",
      "icon": "Blood",
      "isLive": false,
      "liveUrl": "",
      "technologies": [
        "asp-net-core",
        "docker",
        "rabbitmq",
        "redis",
        "sql-server"
      ],
      "images": [
        ""
      ],
      "tags": [
        "#backend",
        "#api"
      ]
    },
    {
      "id": 722597011,
      "title": "ExampleSystem",
      "description": "This is a example system based on events and microservices. It is a simple system for managing users and their data. It is based on the CQRS pattern and the Mediator pattern, it uses RabbitMQ to communicate between services. It also uses Redis to cache data. Users can be created, updated, and deleted. It is a simple system that I created to learn more about microservices and event driven architecture.",
      "gitHubUrl": "https://github.com/solowiejmaciej/ExampleSystem",
      "createdAt": "11/23/2023",
      "icon": "Laptop",
      "isLive": false,
      "liveUrl": "",
      "technologies": [
        "asp-net-core",
        "firebase",
        "rabbitmq",
        "redis",
        "sql-server"
      ],
      "images": [
        ""
      ],
      "tags": [
        "#backend",
        "#api",
        "#microservices"
      ]
    },
    {
      "id": 706939953,
      "title": "HomeManagementService",
      "description": "HomeManagementService is a API for home automation. It is a part of my home automation project. It is responsible for managing devices, it integrates with Philips Hue, and my own devices based on Esp32. It uses Azure CosmosDb to store automation rules, automation can be triggered by time, or by location. It runs on Docker, and is deployed on my own server.",
      "gitHubUrl": "https://github.com/solowiejmaciej/HomeManagementService",
      "createdAt": "10/18/2023",
      "icon": "Home",
      "isLive": true,
      "liveUrl": "https://hms.solowiejmaciej.com/swagger",
      "technologies": [
        "asp-net-core",
        "azure",
        "docker",
        "mqtt",
        "rabbitmq",
        "redis",
        "sql-server"
      ],
      "images": [
        ""
      ],
      "tags": [
        "#backend",
        "#api"
      ]
    },
    {
      "id": 744449078,
      "title": "Portfolio",
      "description": "This is my portfolio website. It is a simple website that I created to showcase my projects. It is based on Vue.js, it it uses Vue Router to navigate between pages. You are currently on this website.",
      "gitHubUrl": "https://github.com/solowiejmaciej/Portfolio",
      "createdAt": "01/17/2024",
      "icon": "Suitcase",
      "isLive": true,
      "liveUrl": "https://solowiejmaciej.com/",
      "technologies": [
        "vue"
      ],
      "images": [
        ""
      ],
      "tags": [
        "#frontend"
      ]
    },
    {
      "id": 715790788,
      "title": "SmartKnob",
      "description": "SmartKnob is a project that I created to learn more about Esp32, and home automation. It is a simple device that can be used to control lights in your home. It is based on Esp32, and uses Mqtt to communicate with other services.",
      "gitHubUrl": "https://github.com/solowiejmaciej/SmartKnob",
      "createdAt": "11/07/2023",
      "icon": "Plug",
      "isLive": false,
      "liveUrl": "",
      "technologies": [
        "cpp",
        "esp32",
        "mqtt"
      ],
      "images": [
        "https://i.imgur.com/U5KOut6.jpg",
        "https://i.imgur.com/SMTS8Hz.png"
      ],
      "tags": [
        "#hardware"
      ]
    },
    {
      "id": 722326104,
      "title": "SmartWeatherStation",
      "description": "SmartWeatherStation is a project that I created to learn more about Esp32, and home automation. It is a simple device that can be used to measure temperature, humidity, and pressure. It is based on Esp32, and uses Mqtt to communicate with other services.",
      "gitHubUrl": "https://github.com/solowiejmaciej/SmartWeatherStation",
      "createdAt": "11/22/2023",
      "icon": "Temperature",
      "isLive": false,
      "liveUrl": "",
      "technologies": [
        "cpp",
        "esp32",
        "mqtt"
      ],
      "images": [
        "https://i.imgur.com/9JWkqB7.jpeg",
        "https://i.imgur.com/0jDzREd.png"
      ],
      "tags": [
        "#hardware"
      ]
    }
  ]
export default projects;
