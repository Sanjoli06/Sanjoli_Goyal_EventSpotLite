// src/data/events.js
import foodImage from '../assets/images/food_festival.jpeg'; // Ensure the path matches
import musicImage from '../assets/images/music_concert.jpeg';
import artImage from '../assets/images/art_exhibition.jpeg';
import jazzImage from '../assets/images/jazz_night.jpeg';
import paintingImage from '../assets/images/painting_workshop.jpeg';
import foodTruckImage from '../assets/images/food_truck_rally.jpeg';

const events = [
  {
    id: 1,
    name: 'Food Festival',
    date: '2024-10-30',
    location: 'City Park',
    description: 'A great festival for food lovers.',
    image: foodImage,
    category: 'Food',
  },
  {
    id: 2,
    name: 'Music Concert',
    date: '2024-11-05',
    location: 'Downtown Arena',
    description: 'Enjoy live music from top bands.',
    image: musicImage,
    category: 'Music',
  },
  {
    id: 3,
    name: 'Art Exhibition',
    date: '2024-11-12',
    location: 'Art Gallery',
    description: 'Explore stunning artworks from local artists.',
    image: artImage,
    category: 'Art',
  },
  {
    id: 4,
    name: 'Jazz Night',
    date: '2024-11-18',
    location: 'Jazz Club',
    description: 'A night filled with smooth jazz music.',
    image: jazzImage,
    category: 'Music',
  },
  {
    id: 5,
    name: 'Painting Workshop',
    date: '2024-11-25',
    location: 'Community Center',
    description: 'Join us for a fun painting workshop.',
    image: paintingImage,
    category: 'Art',
  },
  {
    id: 6,
    name: 'Food Truck Rally',
    date: '2024-12-01',
    location: 'City Square',
    description: 'A rally of the best food trucks in town.',
    image: foodTruckImage,
    category: 'Food',
  },
];

export default events;
