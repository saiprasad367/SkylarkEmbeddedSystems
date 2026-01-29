import { Train, Building2, Heart, Clock, Monitor, Thermometer, Volume2, MapPin, Cpu, Wifi, Zap } from 'lucide-react';

// Import product images
import bankInterestDisplay from '@/assets/products/bank-interest-display.webp';
import tidsTrainInformation from '@/assets/products/tids-train-information.webp';
import publicAnnouncement from '@/assets/products/public-announcement.webp';
import gpsPapis from '@/assets/products/gps-papis.webp';
import ipisIntegrated from '@/assets/products/ipis-integrated.webp';
import electronicCharting from '@/assets/products/electronic-charting.webp';
import covicureFght from '@/assets/products/covicure-fght.webp';
import uvSterilizer from '@/assets/products/uv-sterilizer.webp';
import nurseCalling from '@/assets/products/nurse-calling.webp';
import gpsDigitalClock from '@/assets/products/gps-digital-clock.webp';
import productionParameters from '@/assets/products/production-parameters.webp';
import psisPassengerStation from '@/assets/products/psis-passenger-station.webp';
import gpsRailwayClock from '@/assets/products/gps-railway-clock.webp';
import emuPis from '@/assets/products/emu-pis.webp';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription?: string;
  specs: string[];
  features: { icon: React.ComponentType<{ className?: string }>; label: string }[];
  image: string;
  applications?: string[];
  model?: string;
  powerRating?: string;
  dimensions?: string;
  connectivity?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Bank Interest Rate Display Board',
    category: 'Banking & Industrial',
    description: 'LED-based digital display boards for banks showing real-time interest rates with remote update capability.',
    fullDescription: 'High-visibility LED display board designed specifically for banks to showcase current interest rates. Features IR remote control for easy updates, 12 rows for displaying various rate types, and professional aluminum/acrylic cabinet construction. Suitable for all major banks and financial institutions.',
    specs: [
      'Model: SKY/03/2024',
      'Display: High Brightness LED',
      'Size: 42" x 19" x 2"',
      'Power: AC 220V',
      'Remote Update via IR',
      '12 Rows Display + Date',
      'Cabinet: Aluminum/Acrylic',
      'Indoor/Semi-Outdoor Use'
    ],
    features: [
      { icon: Monitor, label: 'LED Display' },
      { icon: Building2, label: 'Banking Grade' },
      { icon: Clock, label: 'Real-time Update' },
    ],
    image: bankInterestDisplay,
    applications: ['Banks', 'Financial Institutions', 'Credit Unions', 'Exchange Centers'],
    model: 'SKY/03/2024',
    powerRating: 'AC 220V',
    dimensions: '42" x 19" x 2"',
  },
  {
    id: 2,
    name: 'APIs Based Live Train Information Display System (TIDS)',
    category: 'Railway Infrastructure',
    description: 'Live train information display system for railway stations with real-time arrival/departure updates via APIs.',
    fullDescription: 'Advanced Train Information Display System that fetches live train data via APIs to display train number, name, platform number, arrival/departure times, and delay status. Supports multi-language display including Hindi, English, and regional languages. Network connected for seamless real-time updates.',
    specs: [
      'Live API Integration',
      'Multi-language Support (Hindi/English/Regional)',
      'Platform, Coach Position Display',
      'Delay/Reschedule Information',
      'Network Connected',
      'Weather Resistant Enclosure',
      'High Brightness LED/LCD',
      'Central Monitoring System'
    ],
    features: [
      { icon: Train, label: 'Railway Grade' },
      { icon: Monitor, label: 'Live Display' },
      { icon: Wifi, label: 'API Connected' },
    ],
    image: tidsTrainInformation,
    applications: ['Railway Stations', 'Metro Stations', 'Bus Terminals', 'Airports'],
    connectivity: 'Ethernet/WiFi',
  },
  {
    id: 3,
    name: 'Public Announcement System',
    category: 'Railway Infrastructure',
    description: 'Digital voice public announcement system with pre-recorded and live announcement capabilities.',
    fullDescription: 'Windows/Android based Public Announcement System featuring 16-bit digital voice quality with user-friendly interface for special announcements. Supports multi-zone audio distribution with emergency override functionality. Perfect for railway stations and large public venues.',
    specs: [
      '16-bit Digital Voice Quality',
      'Windows/Android Based',
      'Multi-zone Audio Distribution',
      'Pre-recorded Announcements',
      'Live Announcement Support',
      'Emergency Override Function',
      'User-friendly Interface',
      'Network Capable'
    ],
    features: [
      { icon: Volume2, label: 'Clear Audio' },
      { icon: Train, label: 'Railway Certified' },
      { icon: Monitor, label: 'Digital Control' },
    ],
    image: publicAnnouncement,
    applications: ['Railway Stations', 'Airports', 'Hospitals', 'Factories', 'Malls'],
  },
  {
    id: 4,
    name: 'GPS Based PAPIS & LED Destination Boards',
    category: 'Railway Infrastructure',
    description: 'Passenger Automatic Position Information System with GPS-based LED destination displays for trains.',
    fullDescription: 'Complete GPS-based Passenger Automatic Position Information System including Main Processing Unit (MPU), Display Units, and Web Server monitoring. Designed for AC and Non-AC coaches with automatic next station announcements and destination board updates based on GPS position.',
    specs: [
      'GPS Tracking Accuracy',
      'Main Processing Unit (MPU)',
      'LED Destination Boards',
      'Web Server Monitoring',
      'AC/Non-AC Coach Compatible',
      'Auto Station Announcements',
      'Multi-language Support',
      'Low Power Consumption'
    ],
    features: [
      { icon: MapPin, label: 'GPS Based' },
      { icon: Train, label: 'PAPIS System' },
      { icon: Monitor, label: 'LED Board' },
    ],
    image: gpsPapis,
    applications: ['Express Trains', 'Long Distance Trains', 'Metro Rail', 'Mono Rail'],
    connectivity: 'GPS/GSM',
  },
  {
    id: 5,
    name: 'Integrated Passenger Information System (IPIS)',
    category: 'Railway Infrastructure',
    description: 'Complete passenger information solution integrating displays, announcements, and real-time updates.',
    fullDescription: 'Comprehensive Integrated Passenger Information System for railway stations featuring Control Console, arrival/departure displays, platform indicators, and CCTV integration. Central monitoring with real-time synchronization across all station displays and audio systems.',
    specs: [
      'Central Control Console',
      'Arrival/Departure Displays',
      'Platform Information Boards',
      'CCTV Integration Ready',
      'Synchronized Audio-Visual',
      'Multi-display Network',
      'Real-time Data Sync',
      'Scalable Architecture'
    ],
    features: [
      { icon: Train, label: 'Integrated' },
      { icon: Monitor, label: 'Multi-display' },
      { icon: Volume2, label: 'Audio Visual' },
    ],
    image: ipisIntegrated,
    applications: ['Large Railway Stations', 'Junction Stations', 'Terminal Stations'],
  },
  {
    id: 6,
    name: 'APIs Based Electronic Charting Display System',
    category: 'Railway Infrastructure',
    description: 'Electronic display system showing PNR, passenger details, and coach/seat information via live APIs.',
    fullDescription: 'Modern Electronic Charting Display System that fetches live reservation data to display PNR number, Passenger Name/Age, Coach number, Seat/Berth number, and boarding status. Replaces traditional paper charts with digital displays for improved passenger convenience.',
    specs: [
      'Live API Data Fetch',
      'PNR Information Display',
      'Passenger Name/Age',
      'Coach & Seat Details',
      'Boarding Status Updates',
      'Network Connected',
      'Easy Chart Updates',
      'Weather Resistant Display'
    ],
    features: [
      { icon: Monitor, label: 'Digital Charts' },
      { icon: Train, label: 'Railway System' },
      { icon: Clock, label: 'Live Updates' },
    ],
    image: electronicCharting,
    applications: ['Railway Coaches', 'Platforms', 'Waiting Areas'],
    connectivity: 'Ethernet/4G',
  },
  {
    id: 7,
    name: 'COVICURE FGHT - UVC Disinfectant Terminal',
    category: 'Healthcare & Pharma',
    description: 'UV-C based disinfection terminal for Foot, Hands, Gadgets, and Temperature screening.',
    fullDescription: 'Advanced UVC Disinfectant Terminal designed for comprehensive sanitization of feet, hands, and gadgets with integrated temperature screening. Features less than 8 seconds disinfection cycle, making it ideal for high-traffic areas in hospitals, offices, and public spaces.',
    specs: [
      'UVC Germicidal Technology',
      'Foot/Hands/Gadgets Disinfection',
      'Integrated Temperature Sensor',
      '<8 Seconds Disinfection Cycle',
      'Touchless Operation',
      'Safety Sensors',
      'Medical Grade Components',
      'Portable Design'
    ],
    features: [
      { icon: Heart, label: 'Healthcare' },
      { icon: Thermometer, label: 'Sterilization' },
      { icon: Monitor, label: 'Auto Control' },
    ],
    image: covicureFght,
    applications: ['Hospitals', 'Offices', 'Hotels', 'Schools', 'Factories'],
    model: 'COVICURE FGHT',
    powerRating: 'AC 220V',
  },
  {
    id: 8,
    name: 'UV Sterilizer (45L/65L)',
    category: 'Healthcare & Pharma',
    description: 'High-capacity UV sterilization chambers for medical instruments and equipment.',
    fullDescription: 'Medical grade UV Sterilizer with UVC germicidal technology providing 360° coverage for complete sterilization. Available in 45L and 65L capacities with less than 5 minute disinfection cycle. Ideal for sterilizing medical instruments, PPE, electronics, and more.',
    specs: [
      'UVC Germicidal Technology',
      '360° Coverage',
      '45L/65L Capacity Options',
      '<5 Minutes Cycle',
      'Timer Control',
      'Safety Door Interlock',
      'Stainless Steel Interior',
      'Digital Control Panel'
    ],
    features: [
      { icon: Heart, label: 'Medical Grade' },
      { icon: Thermometer, label: 'UV-C Rays' },
      { icon: Clock, label: 'Auto Timer' },
    ],
    image: uvSterilizer,
    applications: ['Hospitals', 'Clinics', 'Labs', 'Dental Offices', 'Salons'],
    dimensions: '45L / 65L Capacity',
  },
  {
    id: 9,
    name: 'Digital Nurse Calling System',
    category: 'Healthcare & Pharma',
    description: 'Advanced nurse calling system for hospitals with digital display and prioritized alerts.',
    fullDescription: 'Digital Nurse Calling System designed to monitor multiple patient signals and ensure positive patient attendance. Utilizes existing wiring infrastructure, reducing installation costs. Features priority-based alerts, zone management, and central monitoring display.',
    specs: [
      'Digital Display Panel',
      'Priority-based Alerts',
      'Zone Management',
      'Uses Existing Wiring',
      'Central Monitoring',
      'Wireless Option Available',
      'Patient Bed Integration',
      'Audio-Visual Alerts'
    ],
    features: [
      { icon: Heart, label: 'Hospital Grade' },
      { icon: Volume2, label: 'Alert System' },
      { icon: Monitor, label: 'Central Display' },
    ],
    image: nurseCalling,
    applications: ['Hospitals', 'Nursing Homes', 'Clinics', 'Care Facilities'],
  },
  {
    id: 10,
    name: 'GPS Master-Slave Digital Clocks',
    category: 'General Purpose',
    description: 'GPS synchronized digital clocks with master-slave configuration, available in IP65 and Flameproof variants.',
    fullDescription: 'High-precision GPS synchronized digital clocks with accuracy up to 500ms. Available in display sizes from 2.3" to 22", supporting 12/24 hour formats with RTC battery backup. Master-slave configuration ensures all clocks in facility show synchronized time.',
    specs: [
      'GPS Synchronization',
      'Accuracy: 500ms',
      'Sizes: 2.3" to 22"',
      '12/24 Hour Format',
      'RTC Battery Backup',
      'IP65 Rating Available',
      'Flameproof Variant',
      'Master-Slave Configuration'
    ],
    features: [
      { icon: Clock, label: 'GPS Accurate' },
      { icon: MapPin, label: 'Auto Sync' },
      { icon: Monitor, label: 'Multi-size' },
    ],
    image: gpsDigitalClock,
    applications: ['Factories', 'Offices', 'Hospitals', 'Schools', 'Hazardous Areas'],
    model: 'Various Sizes',
    powerRating: 'AC 220V / DC 24V',
  },
  {
    id: 11,
    name: 'Passenger & Station Information System (PSIS)',
    category: 'Railway Infrastructure',
    description: 'Comprehensive system showing arrival/departure information and coach positions at stations.',
    fullDescription: 'Passenger & Station Information System providing complete station information including train arrivals, departures, platform allocations, and coach position indicators. Designed for seamless passenger guidance at railway stations of all sizes.',
    specs: [
      'Arrival/Departure Display',
      'Platform Information',
      'Coach Position Indicators',
      'Multi-language Support',
      'Network Connected',
      'Scalable Design',
      'Centralized Control',
      'Weather Resistant'
    ],
    features: [
      { icon: Train, label: 'Station System' },
      { icon: Monitor, label: 'Info Display' },
      { icon: MapPin, label: 'Coach Position' },
    ],
    image: psisPassengerStation,
    applications: ['Railway Stations', 'Metro Stations'],
  },
  {
    id: 12,
    name: 'Production Parameter Display Board',
    category: 'Industrial',
    description: 'Real-time production parameter displays with RS-485/Ethernet connectivity for manufacturing floors.',
    fullDescription: 'Industrial-grade Production Parameter Display Board featuring RS-485 and Ethernet communication for real-time machine data display. High brightness LED ensures visibility in bright factory environments. PLC compatible with support for multiple parameters display.',
    specs: [
      'RS-485/Ethernet Interface',
      'Real-time Machine Data',
      'High Brightness LED',
      'PLC Compatible',
      'Multi-parameter Display',
      'Industrial Grade',
      'Customizable Layout',
      'Remote Monitoring'
    ],
    features: [
      { icon: Building2, label: 'Industrial' },
      { icon: Monitor, label: 'Parameter Display' },
      { icon: Cpu, label: 'PLC Ready' },
    ],
    image: productionParameters,
    applications: ['Manufacturing', 'Factories', 'Process Plants', 'Assembly Lines'],
    connectivity: 'RS-485/Ethernet',
  },
  {
    id: 13,
    name: 'Digital Clock with GPS Synchronization (Railway)',
    category: 'Railway Infrastructure',
    description: 'GPS synchronized digital clocks for railway platforms, offices, and master clock applications.',
    fullDescription: 'Railway-certified GPS Digital Clock system with Master-Slave synchronization capability. Designed for platforms, station offices, and control rooms. Ensures all clocks across the station network display accurate, synchronized time.',
    specs: [
      'GPS Synchronization',
      'Master-Slave Config',
      'Platform Grade',
      'Station Office Clocks',
      'Control Room Display',
      'High Visibility',
      'Weather Resistant',
      'Network Capable'
    ],
    features: [
      { icon: Clock, label: 'GPS Synced' },
      { icon: Train, label: 'Railway Grade' },
      { icon: Monitor, label: 'Multi-Location' },
    ],
    image: gpsRailwayClock,
    applications: ['Railway Platforms', 'Station Offices', 'Control Rooms'],
  },
  {
    id: 14,
    name: 'EMU/MEMU/DEMU Passenger Information System',
    category: 'Railway Infrastructure',
    description: 'Driver Desk Console, Head Code Display, and in-coach audio/visual units for local trains.',
    fullDescription: 'Complete Passenger Information System for EMU, MEMU, and DEMU trains including Driver Desk Console for control, Head Code Display for train identification, and in-coach audio-visual units for passenger announcements and destination information.',
    specs: [
      'Driver Desk Console',
      'Head Code Display',
      'In-coach Display Units',
      'Audio Announcement System',
      'Destination Boards',
      'GPS Integration',
      'Low Power Design',
      'Vibration Resistant'
    ],
    features: [
      { icon: Train, label: 'EMU/MEMU/DEMU' },
      { icon: Monitor, label: 'Coach Display' },
      { icon: Volume2, label: 'PA System' },
    ],
    image: emuPis,
    applications: ['EMU Trains', 'MEMU Trains', 'DEMU Trains', 'Metro Coaches'],
  },
];

export const categories = [
  'All',
  'Railway Infrastructure', 
  'Healthcare & Pharma', 
  'Banking & Industrial', 
  'Industrial', 
  'General Purpose'
];
