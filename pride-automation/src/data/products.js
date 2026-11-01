import logoImg from '../assets/logo/pride-logo-transparent.png'
import heroImg from '../assets/images/hero-arm-hires.jpg'
import buildingImg from '../assets/images/building-full.jpg'

// Category Images
import plcCatImg from '../assets/images/categories/plc.jpg'
import drivesCatImg from '../assets/images/categories/drives.jpg'
import hmiCatImg from '../assets/images/categories/hmi.jpg'
import sensorsCatImg from '../assets/images/categories/sensors.jpg'

// Product Images
import plcPanelImg from '../assets/images/products/plc-control-panel.jpg'
import autoTestRigImg from '../assets/images/products/automotive-test-rig.jpg'
import smartIrrigationImg from '../assets/images/products/smart-irrigation.jpg'
import weatherStationImg from '../assets/images/products/weather-station.jpg'

export const COMPANY_DETAILS = {
  name: "Pride Automation",
  legalEntity: "Pride Automation",
  address: "237, XION Mall, Near D-Mart, Behind Hotel Vivanta, Off Mumbai-Bangalore Highway, Hinjewadi, Pune - 411057",
  phone: "+91-77688 00333",
  phoneDisplay: "+91-77688 00333",
  callLink: "tel:+917768800333",
  emailSales: "support@prideautomation.in",
  whatsappNumber: "917768800333",
  whatsappUrl: "https://wa.me/917768800333?text=Hello%20Pride%20Automation%2C%20I%20am%20interested%20in%20your%20industrial%20automation%20solutions.",
  logo: logoImg,
  heroImage: heroImg,
  buildingImage: buildingImg,
  tagline: "Reliable Industrial Automation Solutions",
  shortDesc: "A trusted provider of advanced industrial automation hardware, custom control systems, and engineering integration across manufacturing industries.",
  stats: [
    { value: "15+", label: "Years of Industry Expertise" },
    { value: "500+", label: "Industrial Clients Served" },
    { value: "10,000+", label: "Automation Modules Supplied" },
    { value: "99.8%", label: "On-Time Engineering Support" }
  ]
};

export const CATEGORIES = [
  {
    id: "control-panels",
    name: "PLC & Automation Systems",
    shortName: "PLCs & Control",
    image: plcCatImg,
    description: "High-performance programmable logic controllers, modular I/O racks, and intelligent CPU units designed for zero-downtime manufacturing.",
    itemCount: 4,
    brands: ["Siemens", "Delta", "Omron"]
  },
  {
    id: "drives-vfd",
    name: "Variable Frequency Drives (VFDs)",
    shortName: "AC Drives",
    image: drivesCatImg,
    description: "Heavy-duty vector inverters and AC motor drives delivering optimal energy efficiency, precision torque management, and process control.",
    itemCount: 3,
    brands: ["INVT", "Frecon", "Delta"]
  },
  {
    id: "hmi-interfaces",
    name: "HMIs & Touch Operator Panels",
    shortName: "Touch HMIs",
    image: hmiCatImg,
    description: "Industrial touch displays and SCADA operator panels with vibrant graphics, multi-protocol communication, and rugged IP65 front bezels.",
    itemCount: 3,
    brands: ["Siemens SIMATIC", "Delta", "Mean Well"]
  },
  {
    id: "sensors-instruments",
    name: "Sensors & Instrumentation",
    shortName: "Sensors",
    image: sensorsCatImg,
    description: "Inductive proximity switches, photoelectric reflex sensors, rotary encoders, and temperature transducers for precise factory feedback.",
    itemCount: 3,
    brands: ["Omron", "Pepperl+Fuchs", "Autonics"]
  },
  {
    id: "custom-solutions",
    name: "Turnkey Automation Systems",
    shortName: "Turnkey Systems",
    image: autoTestRigImg,
    description: "Custom engineered industrial test benches, automated test rigs, and IoT-enabled monitoring solutions tailored to specific production lines.",
    itemCount: 4,
    brands: ["Pride Automation Custom Engineering"]
  }
];

export const PRODUCTS = [
  {
    id: "plc-control-panel-system",
    name: "Custom PLC Control Panel",
    category: "control-panels",
    categoryLabel: "PLC & Automation Systems",
    image: plcPanelImg,
    badge: "Engineered In-House",
    shortDesc: "Complete industrial grade electrical panel featuring Siemens S7-1500 PLC, circuit breakers, SITOP industrial power supply, and organized wiring loom.",
    description: "Pride Automation manufactures robust, IP55/IP65 certified custom electrical control panels engineered for severe plant environments. Equipped with world-class Siemens/Delta PLC architecture, surge suppression, DIN rail modules, and ventilated thermal management.",
    specs: [
      { label: "Controller Type", value: "Siemens S7-1200 / S7-1500 Modular" },
      { label: "Protection Rating", value: "IP55 / IP65 Powder-Coated Mild Steel" },
      { label: "Power Supply", value: "Integrated SITOP 24V DC 10A" },
      { label: "Communication", value: "PROFINET, Modbus TCP/IP, RS485" },
      { label: "Cooling", value: "Thermostatically Controlled Filtered Fan" }
    ],
    features: [
      "Rigorous pre-dispatch factory testing & point-to-point verification",
      "Neat color-coded ferruling and comprehensive schematic documentation",
      "Expandable modular backplate for future I/O growth",
      "Integrated emergency stop and safety interlock circuits"
    ]
  },
  {
    id: "automotive-test-rig",
    name: "Automotive Endurance Test Rig",
    category: "custom-solutions",
    categoryLabel: "Turnkey Automation Systems",
    image: autoTestRigImg,
    badge: "Turnkey Rig",
    shortDesc: "Heavy-duty automated powertrain and transmission testing rig with multi-display real-time telemetry, torque load dyno, and HMI supervisory console.",
    description: "Engineered specifically for automotive component manufacturers, this test rig performs automated continuous cycle testing, vibration analysis, and high-precision torque-speed characterization with synchronous multi-screen data acquisition.",
    specs: [
      { label: "Application", value: "Transmission & Gearbox QA Testing" },
      { label: "Drive Motor", value: "Heavy Duty Synchronous Vector Drive" },
      { label: "Telemetry", value: "Triple Monitor Real-Time Curve Graphing" },
      { label: "Safety Frame", value: "T-Slot Extruded Aluminum with Polycarbonate Guards" },
      { label: "Data Logging", value: "Automated CSV/Excel Report Export to Plant MES" }
    ],
    features: [
      "High-speed digital torque & RPM optical sensors",
      "Programmable multi-step test sequences with threshold pass/fail alarms",
      "Ergonomic operator cockpit with physical safety stop switches",
      "Closed-loop oil temperature and lubrication control module"
    ]
  },
  {
    id: "smart-irrigation-controller",
    name: "Smart Agri-Flo IoT Controller",
    category: "custom-solutions",
    categoryLabel: "Turnkey Automation Systems",
    image: smartIrrigationImg,
    badge: "IoT & Smart Control",
    shortDesc: "Intelligent precision flow automation system with multi-zone solenoid valves, dual soil moisture probes, pressure sensors, and digital interface.",
    description: "Designed for commercial agriculture, greenhouse operations, and municipal water plants, this IoT-enabled system monitors soil moisture and line pressure in real-time to automate valve cycling with millimeter precision.",
    specs: [
      { label: "Zones Supported", value: "Up to 16 Solenoid Valve Channels" },
      { label: "Sensor Inputs", value: "Dual Soil Moisture (IoT-SMT) & Pressure Transducer" },
      { label: "Connectivity", value: "4G LTE / Wi-Fi Cloud Gateway + Modbus" },
      { label: "Display", value: "Backlit High-Contrast Industrial OLED Matrix" },
      { label: "Enclosure", value: "Weatherproof IP66 UV-Stabilized Polycarbonate" }
    ],
    features: [
      "Automated volumetric dosing based on real-time soil absorption",
      "Remote valve actuation and flow rate telemetry via smartphone or PC",
      "Burst pipe detection with instantaneous emergency shutoff",
      "Solar battery backup compatibility for remote off-grid farms"
    ]
  },
  {
    id: "industrial-weather-station",
    name: "DATASAT-5000 Industrial Weather Station",
    category: "custom-solutions",
    categoryLabel: "Turnkey Automation Systems",
    image: weatherStationImg,
    badge: "Environmental Telemetry",
    shortDesc: "Autonomous solar-powered environmental monitoring station equipped with ultrasonic wind anemometer, tipping bucket rain gauge, and solar telemetry.",
    description: "A commercial meteorological station built for solar farms, seaport logistics, agricultural research, and open-cast mining sites. Features autonomous photovoltaic power and military-grade sensor heads.",
    specs: [
      { label: "Solar Array", value: "Integrated 20W Polycrystalline PV with MPPT" },
      { label: "Wind Sensors", value: "Dual Anemometer & 360° Direction Vane" },
      { label: "Precipitation", value: "Aerodynamic Tipping Bucket Rain Gauge" },
      { label: "Ambient Metrics", value: "Temperature, Relative Humidity, Barometric Pressure, Solar Irradiance" },
      { label: "Mounting", value: "Marine-Grade 316 Stainless Steel Mast" }
    ],
    features: [
      "Zero-maintenance solar battery pack designed for continuous 24/7/365 telemetry",
      "Cellular NB-IoT / LoRaWAN long-range data uplink",
      "Lightning surge arrestor and grounding clamp included",
      "Real-time cloud dashboard access with automated PDF weekly audits"
    ]
  },
  {
    id: "siemens-simatic-s7-1500",
    name: "Siemens SIMATIC S7-1500 & S7-1200 PLCs",
    category: "control-panels",
    categoryLabel: "PLC & Automation Systems",
    image: plcCatImg,
    badge: "Authorized Hardware",
    shortDesc: "Industry-standard programmable logic controllers featuring rapid backplane communications, built-in PROFINET ports, and high-density digital/analog I/O.",
    description: "The gold standard in factory automation. Pride Automation stocks, programs, and integrates the complete Siemens SIMATIC lineup to ensure seamless synchronization across manufacturing assembly lines.",
    specs: [
      { label: "Brand", value: "Siemens" },
      { label: "Processors", value: "CPU 1511 / 1515 / 1214C / 1215C" },
      { label: "Bus Speed", value: "Ultra-fast backplane bus for cycle times down to nanoseconds" },
      { label: "Programming", value: "TIA Portal V17 / V18 / V19" },
      { label: "Compliance", value: "CE, UL, cULus, ATEX Zone 2" }
    ],
    features: [
      "Integrated web server for online diagnostics without engineering software",
      "Built-in trace functions for fast troubleshooting and performance tuning",
      "Fail-safe safety CPUs available for SIL 3 / PL e requirements",
      "Direct replacement warranty and original factory packaging"
    ]
  },
  {
    id: "invt-goodrive-vfd",
    name: "INVT & Frecon Vector Inverters (VFD)",
    category: "drives-vfd",
    categoryLabel: "Variable Frequency Drives (VFDs)",
    image: drivesCatImg,
    badge: "High Torque Control",
    shortDesc: "Rugged 0.75kW to 315kW variable frequency drives engineered for high starting torque, spindle machinery, pump stations, and textile looms.",
    description: "Engineered to withstand unstable grid voltages and hot industrial plant conditions. Pride Automation supplies high-torque sensorless vector inverters that reduce motor operating temperatures and lower energy bills by up to 35%.",
    specs: [
      { label: "Power Range", value: "0.75 kW to 315 kW (3-Phase 380V - 480V)" },
      { label: "Control Modes", value: "Sensorless Vector Control (SVC), V/F, Torque Control" },
      { label: "Overload Capacity", value: "150% for 60s, 180% for 10s" },
      { label: "Braking Unit", value: "Built-in dynamic braking chopper up to 30kW" },
      { label: "Protections", value: "Overcurrent, Overvoltage, Undervoltage, Phase Loss, Thermal" }
    ],
    features: [
      "Dual keypad options: LED parameter screen and detachable LCD",
      "Coated PCBs for dust and moisture resistance in harsh factory air",
      "Built-in RS485 Modbus-RTU communication standard",
      "Auto-tuning of motor parameters at standstill"
    ]
  },
  {
    id: "siemens-ktp-touch-hmi",
    name: "SIMATIC & Delta Touch Screen HMIs",
    category: "hmi-interfaces",
    categoryLabel: "HMIs & Touch Operator Panels",
    image: hmiCatImg,
    badge: "Intuitive Operator UI",
    shortDesc: "Vibrant 7-inch to 15-inch widescreen TFT touch panels with 64k colors, intuitive graphical user interfaces, and USB logging.",
    description: "Empower factory floor machine operators with responsive, crystal clear touch screen displays. Built with IP65 oil-resistant front panels and robust aluminum alloy or polycarbonate casing.",
    specs: [
      { label: "Screen Sizes", value: "7.0\", 9.0\", 12.1\", 15.6\" Widescreen TFT" },
      { label: "Resolution", value: "800x480 up to 1920x1080 Full HD" },
      { label: "Front Bezel", value: "IP65 Chemical & Oil Resistant" },
      { label: "Ports", value: "Ethernet RJ45, USB 2.0 Host, RS-232/485 Serial" },
      { label: "Recipe Storage", value: "Internal Flash + SD Card Expansion" }
    ],
    features: [
      "Pre-engineered graphic widget libraries for pumps, valves, and gauges",
      "Multi-level password protection for operator, technician, and admin roles",
      "Real-time historical trend logging with alarms timeline",
      "VNC remote access capability from tablet or office PC"
    ]
  },
  {
    id: "omron-industrial-sensors",
    name: "Omron & Autonics Proximity & Photo Sensors",
    category: "sensors-instruments",
    categoryLabel: "Sensors & Instrumentation",
    image: sensorsCatImg,
    badge: "Precision Sensing",
    shortDesc: "High-speed inductive metal proximity switches, laser through-beam photo-eyes, and fiber optic sensors rated IP67/IP69K for harsh factory washdowns.",
    description: "Pride Automation delivers precision sensing components to ensure zero missed parts on conveyor lines and CNC machines. Long sensing distances with exceptional optical noise immunity.",
    specs: [
      { label: "Sensor Types", value: "Inductive Proximity (M8, M12, M18, M30) & Photoelectric" },
      { label: "Sensing Distance", value: "2mm up to 30 meters (Through-beam)" },
      { label: "Output Mode", value: "NPN / PNP, NO / NC Selectable" },
      { label: "Response Speed", value: "< 1 ms Ultra-Rapid Response" },
      { label: "Rating", value: "IP67 Washdown Proof Stainless Steel / Brass Housing" }
    ],
    features: [
      "Bright 360-degree visible operation indicator LED rings",
      "Short-circuit and reverse polarity electronic circuit protection",
      "Oil-resistant flexible PUR cables or gold-plated M12 quick-disconnects",
      "High immunity against ambient fluorescent lighting and inverter noise"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "quality",
    title: "Quality Products",
    description: "100% authentic, brand-certified components sourced directly from globally recognized manufacturers with full factory warranties.",
    icon: "ShieldCheck"
  },
  {
    id: "expertise",
    title: "Technical Expertise",
    description: "Over 15 years of practical hands-on engineering experience in PLC programming, drive commissioning, and electrical design.",
    icon: "Cpu"
  },
  {
    id: "support",
    title: "Reliable Support",
    description: "Dedicated rapid technical guidance, swift component replacement dispatch, and responsive telephone/WhatsApp assistance.",
    icon: "Headphones"
  },
  {
    id: "customer",
    title: "Customer-Focused Solutions",
    description: "Tailored component sizing and custom control panel architecture designed to match your specific production environment.",
    icon: "Users"
  }
];

export const SERVICES = [
  { name: "PLC & Drive Integration", path: "/products" },
  { name: "Custom Control Panel Fabrication", path: "/products" },
  { name: "Turnkey Automation Systems", path: "/products" },
  { name: "Sensors & Instrumentation", path: "/products" }
];

export const INDUSTRIES_SERVED = [
  { name: "Textile & Weaving", desc: "Precision loom motor sync & yarn break optical sensors" },
  { name: "Diamond Processing", desc: "High-speed laser control & precision micro-stepper drives" },
  { name: "Packaging & Conveyors", desc: "High-throughput sorting lines, batch counting & safety light curtains" },
  { name: "CNC & Metal Forming", desc: "Heavy hydraulic press controls, servo feeders & safety relays" },
  { name: "Plastics & Extrusion", desc: "PID temperature zones, torque inverters & blown film controls" },
  { name: "Pharmaceutical & Cleanroom", desc: "Stainless steel HMI enclosures, batch audit logging & sterile pumps" }
];

