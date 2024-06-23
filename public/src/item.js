const vehicles = {
  electricCar: [
    {
      media: [
        "assets/electricCar/Taycan/1 (6).jpg",
        "assets/electricCar/Taycan/1 (1).jpg",
        "assets/electricCar/Taycan/1 (2).jpg",
        "assets/electricCar/Taycan/1 (3).jpg",
      ],
      name: "Porsche Taycan",
      pricePerDay: "$100",
      description: "High performance electric car with a range of 370 miles.",
      location: "San Francisco, CA",
    },
    {
      media: [
        "assets/electricCar/chevroletblt/1 (5).jpg",
        "assets/electricCar/chevroletblt/1 (8).jpg",
        "assets/electricCar/chevroletblt/1 (7).jpg",
        "assets/electricCar/chevroletblt/1 (5).jpg",
      ],
      name: "Chevrolet Bolt EV",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/ioniq5/1 (2).jpg",
        "assets/electricCar/ioniq5/1 (1).jpg",
        "assets/electricCar/ioniq5/1 (3).jpg",
        "assets/electricCar/ioniq5/1 (4).jpg",
      ],
      name: " Hyundai Ioniq 5",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/sonata/1 (2).jpg",
        "assets/electricCar/sonata/1 (1).jpg",
        "assets/electricCar/sonata/1 (3).jpg",
        "assets/electricCar/sonata/1 (4).jpg",
      ],
      name: "Hyundai Sonata",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/TeslaRoadster/1 (10).jpg",
        "assets/electricCar/TeslaRoadster/1 (1).jpg",
        "assets/electricCar/TeslaRoadster/1 (5).jpg",
        "assets/electricCar/TeslaRoadster/1 (3).jpg",
      ],
      name: "Tesla Roadster",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/BMW i5/1 (8).jpg",
        "assets/electricCar/BMW i5/1 (5).jpg",
        "assets/electricCar/BMW i5/1 (2).jpg",
        "assets/electricCar/BMW i5/1 (10).jpg",
      ],
      name: "BMW I5",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/Fisker Ocean/1 (10).jpg",
        "assets/electricCar/Fisker Ocean/1 (1).jpg",
        "assets/electricCar/Fisker Ocean/1 (9).jpg",
        "assets/electricCar/Fisker Ocean/1 (8).jpg",
      ],
      name: "Fisker Ocean",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/hyundai stragezer/1 (7).jpg",
        "assets/electricCar/hyundai stragezer/1 (3).jpg",
        "assets/electricCar/hyundai stragezer/1 (6).jpg",
        "assets/electricCar/hyundai stragezer/1 (5).jpg",
      ],
      name: "Hyundai Stragezer",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
    {
      media: [
        "assets/electricCar/Wuling Air EV/1 (9).webp",
        "assets/electricCar/Wuling Air EV/1 (3).webp",
        "assets/electricCar/Wuling Air EV/1 (4).webp",
        "assets/electricCar/Wuling Air EV/1 (6).webp",
      ],
      name: "Wuling Air EV",
      pricePerDay: "$100",
      description: "Compact electric car perfect for city driving.",
      location: "Los Angeles, CA",
    },
  ],
  normalCar: [
    {
      media: "path/to/normal_car_media1.jpg",
      name: "Toyota Camry",
      pricePerDay: "$40",
      description: "Reliable and comfortable sedan for everyday use.",
      location: "New York, NY",
    },
    {
      media: "path/to/normal_car_media2.jpg",
      name: "Honda Accord",
      pricePerDay: "$45",
      description: "Spacious and fuel-efficient car.",
      location: "Chicago, IL",
    },
    // Add more normal cars here
  ],
  electricMoped: [
    {
      media: "path/to/electric_moped_media1.jpg",
      name: "Vespa Elettrica",
      pricePerDay: "$30",
      description: "Stylish electric moped with a range of 62 miles.",
      location: "Miami, FL",
    },
    {
      media: "path/to/electric_moped_media2.jpg",
      name: "Gogoro 2 Series",
      pricePerDay: "$35",
      description: "Efficient and eco-friendly electric moped.",
      location: "Seattle, WA",
    },
    // Add more electric mopeds here
  ],
  sports: [
    {
      media: "path/to/sports_car_media1.jpg",
      name: "Ferrari 488",
      pricePerDay: "$1000",
      description: "High-performance sports car with stunning design.",
      location: "Las Vegas, NV",
    },
    {
      media: "path/to/sports_car_media2.jpg",
      name: "Lamborghini Huracan",
      pricePerDay: "$600",
      description: "Luxurious and powerful sports car.",
      location: "Los Angeles, CA",
    },
    // Add more sports cars here
  ],
  scooter: [
    {
      media: "path/to/scooter_media1.jpg",
      name: "Yamaha XMAX",
      pricePerDay: "$25",
      description: "Comfortable scooter with excellent handling.",
      location: "Orlando, FL",
    },
    {
      media: "path/to/scooter_media2.jpg",
      name: "Honda PCX1100",
      pricePerDay: "$20",
      description: "Efficient and easy-to-ride scooter.",
      location: "Austin, TX",
    },
    // Add more scooters here
  ],
  snowmobile: [
    {
      media: "path/to/snowmobile_media1.jpg",
      name: "Polaris 8100 RMK",
      pricePerDay: "$1100",
      description: "Powerful snowmobile for extreme conditions.",
      location: "Denver, CO",
    },
    {
      media: "path/to/snowmobile_media2.jpg",
      name: "Ski-Doo Summit",
      pricePerDay: "$140",
      description: "Agile and responsive snowmobile.",
      location: "Anchorage, AK",
    },
    // Add more snowmobiles here
  ],
};

export default vehicles;
