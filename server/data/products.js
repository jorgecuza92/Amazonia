const products = [
  {
    name: "Teenage Engineering OP-1",
    imageUrl:
      "https://images.unsplash.com/photo-1560849915-481da5066045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    description: 
      "OP-1 is the all-in-one portable synthesizer, sampler and controller. with additional features like a built-in FM radio and an assignable G-force sensor for motion controlled effects, there is nothing quite like it.",
      price: 1299,
      countInStock: 1,
  },
  {
    name: "Teenage Engineering OP-Z",
    imageUrl:
      "https://images.prismic.io/teenageengineering/709b41ab-a758-4188-9f69-eb471fcfe22a_1x1-OPZ1-01.jpg?auto=compress,format&w=4096&h=1",
    description: 
      "OP–Z is a portable 16-track multimedia synthesizer and sequencer with a range of sample based and synthesis based sounds. the world's first stand-alone sequencer of its kind that lets you sequence music, visuals, lights and more. iOS and android companion app available.",
      price: 599,
      countInStock: 12,
  },
  {
    name: "Teenage Engineering OB-4",
    imageUrl:
      "https://images.prismic.io/teenageengineering/e1216db8-be05-4a8c-bc54-c4083cff81cf_OB-4_red_front-bg.png?auto=compress,format&w=4096&h=1",
    description: 
      "introducing OB–4, magic radio. the incredible sounding portable hifi stereo with line-in, wireless audio, and the evolution of radio. OB–4 memorizes everything you play on an endless looping tape. rewind the radio and remix anything. comes with a folding handle that doubles as a stand. ultra power efficient with up to a week of music listening.",
      price: 649,
      countInStock: 4,
  },
  {
    name: "Teenage Engineering PO-133 Street Fighter",
    imageUrl:
      "https://images.prismic.io/teenageengineering/63f15086-d669-4cb8-b3a1-6647d3a258ed_streetfighter_front_4k.png?auto=compress,format&w=4096&h=1",
    description: 
      "the Street Fighter pocket operator is based on the ultra popular PO–33 K.O.!, a micro sampler with 40 seconds sample memory and built-in microphone for instant sampling. this special edition comes with 16 Street Fighter sound tracks and genuine samples from the original Street Fighter arcade game by Capcom®",
      price: 89,
      countInStock: 2,
  },
  {
    name: "Teenage Engineering PO-137 Rick and Morty",
    imageUrl:
      "https://images.prismic.io/teenageengineering/413ae3af-7606-4deb-81da-1cd0ab776234_PO-137_front.png?auto=compress,format&w=4096&h=1",
    description: 
      "vocal synthesizer and sequencer with built-in microphone for 8 different voice character sampling, voiced by justin roiland, creator of the rick and morty show. pocket operators are small, ultra portable music devices.",
      price: 89,
      countInStock: 15,
  },
  {
    name: "Splash Curl Strap",
    imageUrl:
      "https://images.prismic.io/teenageengineering/34a08ce7-4979-4298-9557-9872fda2b694_curly+strap+1_1+%281%29.png?auto=compress,format&w=4096&h=1",
    description: 
      "black curl strap for attaching and carrying the clear splash pockets. the strap can also double as a keychain.",
      price: 19,
      countInStock: 22,
  },
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
];

module.exports = products;