import embeddedImg from '../assets/images/services/embedded-systems.jpg'
import electronicImg from '../assets/images/services/electronic-solution.jpg'
import electricalImg from '../assets/images/services/electrical-solution.jpg'
import webMobileImg from '../assets/images/services/web-mobile-app.jpg'

export const SERVICES = [
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    subtitle: 'Firmware Architecture, Microcontrollers & Edge Intelligence',
    badge: 'Hardware & Firmware',
    image: embeddedImg,
    icon: 'Cpu',
    shortDesc: 'End-to-end embedded hardware and firmware engineering for industrial machinery, connected IoT devices, and real-time edge processing.',
    description: 'Pride Automation engineers mission-critical embedded systems tailored for extreme reliability and deterministic performance. From custom board bring-up and bare-metal C/C++ firmware to real-time operating systems (RTOS) and secure cloud connectivity, we build hardware-software synergies that power next-generation automated machinery.',
    highlights: [
      'Microcontroller & SoC Architecture (ARM Cortex-M, STM32, ESP32, PIC, NXP)',
      'Real-Time Firmware Development (FreeRTOS, Embedded Linux, Bare-Metal)',
      'Industrial Fieldbus Protocols (CAN bus, Modbus RTU/TCP, RS485, SPI, I2C)',
      'Edge Telemetry, Sensor Interfacing & Low-Power Battery Operation',
      'Secure Bootloader & Over-the-Air (OTA) Remote Firmware Updates',
      'Hardware-in-the-Loop (HIL) Testing & Precision Signal Acquisition'
    ],
    deliverables: [
      { label: 'Protocols', value: 'CAN, Modbus, RS485, MQTT, SPI' },
      { label: 'Cores', value: 'STM32, ARM Cortex-M, ESP32, PIC' },
      { label: 'OS Support', value: 'FreeRTOS, Bare Metal, Embedded Linux' },
      { label: 'Testing', value: 'HIL Emulation, Logic Analysis, CE Prep' }
    ],
    applications: [
      'Industrial DAQ systems & Automated Test Rigs',
      'Smart Irrigation & Agricultural Sensor Nodes',
      'Precision Motor Drives & Inverter Controllers',
      'Automotive Electronic Sub-systems & Telematics'
    ],
    technologies: ['STM32', 'ARM Cortex', 'FreeRTOS', 'C / C++', 'CAN Bus', 'Modbus', 'ESP32', 'MQTT', 'RS485']
  },
  {
    id: 'electronic-solution',
    title: 'Electronic Solution',
    subtitle: 'Custom Schematics, Multi-Layer PCB Layout & Prototyping',
    badge: 'Custom Electronics',
    image: electronicImg,
    icon: 'Microchip',
    shortDesc: 'Comprehensive electronics engineering, high-speed multi-layer PCB layout, component engineering, and rapid turnkey prototyping.',
    description: 'We deliver comprehensive electronic circuit design and PCB development engineered for severe industrial conditions. Our team handles every phase from initial schematic capture, mixed-signal layout, and thermal simulation to rapid prototype assembly, strict EMI/EMC compliance, and high-volume manufacturing readiness.',
    highlights: [
      'Multi-Layer High-Density PCB Design (Rigid, Flex, and Rigid-Flex)',
      'Analog, High-Speed Digital & Mixed-Signal Circuit Architecture',
      'Power Electronics Design (SMPS, DC-DC Converters, Inverter Stages)',
      'Signal Integrity (SI) & Power Integrity (PI) Simulation & Thermal Analysis',
      'Design for Manufacturability (DFM) & Design for Testability (DFT)',
      'Turnkey SMD/Through-Hole Prototype Assembly & Testing'
    ],
    deliverables: [
      { label: 'PCB Types', value: 'Multilayer 2-12 layers, Rigid-Flex, HDI' },
      { label: 'CAD Tools', value: 'Altium Designer, KiCad, OrCAD' },
      { label: 'Standards', value: 'IPC-A-600/610, CE, RoHS Compliant' },
      { label: 'Turnaround', value: 'Rapid Prototype Bring-Up in 5-10 Days' }
    ],
    applications: [
      'Custom Signal Conditioning & Sensor Interface Modules',
      'Optically Isolated Industrial Communication Repeaters',
      'High-Power Battery Management Systems (BMS)',
      'Specialized OEM Controller Boards'
    ],
    technologies: ['Altium Designer', 'KiCad', 'High-Speed Layout', 'SMD Assembly', 'EMI/EMC Shielding', 'DFM/DFT', 'Thermal Modeling']
  },
  {
    id: 'electrical-solution',
    title: 'Electrical Solution',
    subtitle: 'Industrial Control Panels, Switchgear & Power Engineering',
    badge: 'Electrical Panels & Power',
    image: electricalImg,
    icon: 'Zap',
    shortDesc: 'Certified electrical design, PLC/VFD control panel manufacturing, power distribution engineering, and turnkey factory commissioning.',
    description: 'Pride Automation builds world-class industrial control panels, motor control centers (MCC), and power distribution systems designed to international safety standards. With deep domain knowledge in industrial plants, we provide turnkey wiring diagrams, power quality audits, and on-site commissioning to eliminate production halts.',
    highlights: [
      'Custom PLC, VFD & MCC/PCC Industrial Control Panel Fabrication',
      'AutoCAD Electrical & EPLAN Schematics, Single-Line Diagrams & GA Layouts',
      'Variable Frequency Drive (VFD) Panels & Soft-Starter Cabinets',
      'Power Quality Audits, Harmonic Suppression & Surge Protection (SPD)',
      'Factory Electrical Retrofitting, Safety Interlocks & LOTO Compliance',
      'Complete On-Site Cable Tray Routing, Testing & Plant Commissioning'
    ],
    deliverables: [
      { label: 'Enclosures', value: 'IP55 / IP65 Powder Coated CRCA & SS' },
      { label: 'Panels', value: 'PLC Panels, VFD Inverter Racks, MCC, PCC' },
      { label: 'Switchgear', value: 'Siemens, Schneider, ABB, L&T' },
      { label: 'Compliance', value: 'IEC 61439, IS Standards, Factory Safety' }
    ],
    applications: [
      'Automated Assembly Lines & Robotic Cell Control Panels',
      'Pumping Stations, RO Plants & Water Treatment Systems',
      'Heavy Machinery Power Distribution & Starter Panels',
      'Legacy Relay Logic to Modern PLC Panel Upgrades'
    ],
    technologies: ['Siemens S7-1500', 'Delta PLCs', 'EPLAN Pro Panel', 'Schneider Switchgear', 'VFD Inverters', 'IP65 Panels', 'AutoCAD Electrical']
  },
  {
    id: 'web-mobile-app',
    title: 'Web & Mobile App',
    subtitle: 'Industrial IoT Dashboards, Cloud Telemetry & Mobile Control',
    badge: 'Digital & Cloud IoT',
    image: webMobileImg,
    icon: 'Smartphone',
    shortDesc: 'Custom cloud web platforms and mobile apps built for real-time equipment monitoring, machine telemetry, alarms, and industrial analytics.',
    description: 'Bridge your factory floor hardware to modern screens. We develop secure, high-performance web applications and mobile apps that stream live machine telemetry, trigger real-time fault notifications, analyze overall equipment effectiveness (OEE), and give management actionable insight anywhere in the world.',
    highlights: [
      'Real-Time Industrial IoT Dashboards & SCADA Cloud Web Viewers',
      'Native & Cross-Platform Mobile Apps (Android & iOS) for Operators',
      'MQTT, WebSockets & RESTful APIs for Live Hardware Telemetry Streaming',
      'Machine Health Tracking, Predictive Maintenance & Alert Dispatch',
      'Role-Based Access Control (RBAC), Device Provisioning & Audit Trails',
      'Edge-to-Cloud Integration (AWS IoT, Microsoft Azure, Google Cloud)'
    ],
    deliverables: [
      { label: 'Platforms', value: 'Web (React, Next.js), Mobile (React Native, Flutter)' },
      { label: 'Data Protocols', value: 'MQTT, WebSockets, Modbus TCP, REST API' },
      { label: 'Cloud Hosting', value: 'AWS IoT Core, Azure IoT Hub, Custom Server' },
      { label: 'Alerting', value: 'SMS, WhatsApp, Push Notifications & Email' }
    ],
    applications: [
      'Centralized Multi-Plant Telemetry & OEE Analytics',
      'Remote Pump & Energy Consumption Monitoring Apps',
      'Automated Test Rig Data Logging & PDF Report Generation',
      'Equipment Health, Vibration & Temperature Alert Dashboards'
    ],
    technologies: ['React', 'React Native', 'Node.js', 'MQTT', 'WebSockets', 'AWS IoT', 'Tailwind CSS', 'InfluxDB / Timescale']
  }
]
