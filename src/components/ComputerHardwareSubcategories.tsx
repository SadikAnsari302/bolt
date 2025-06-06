const computerHardwareSubcategories = [
  {
    name: 'Software',
    icon: '💽',
    items: [
      'Cold Storage Software', 'Library Management System', 'Market Analysis Software', 'Store Management...'
    ]
  },
  {
    name: 'Computer Cables & Connectors',
    icon: '🔌',
    items: [
      'D Sub Connector', 'Edge Connector', 'Din Usb Data Cable', 'Rf Connectors'
    ]
  },
  {
    name: 'Printer',
    icon: '🖨️',
    items: [
      'Magicard Id Card Printer', 'Portable Printers', 'Citizen Label Printer', 'Kodak Inkjet Printer', 'Canon Wireless Printer'
    ]
  },
  {
    name: 'Hardware Components',
    icon: '🖥️',
    items: [
      'Frontech Cabinet', 'Thin Client', 'Hard Disk', 'Xfx Graphics Card', 'Gainward Graphics Card'
    ]
  },
  {
    name: 'Computer Monitors & Display',
    icon: '🖥️',
    items: [
      'Open Frame Lcd Monitor', 'Used Lcd Monitor', 'Anti Glare Screen', 'Lcd Backlight', 'Plasma Display'
    ]
  },
  {
    name: 'Laptops/Notebooks',
    icon: '💻',
    items: [
      'Fujitsu Laptops', 'Msi Laptop', 'Laptop Accessories', 'Asus Laptop', 'Hp Laptop'
    ]
  },
  {
    name: 'Computer',
    icon: '🖲️',
    items: [
      'Personal Computers', 'Industrial Panel Pc', 'Foot Pedals', 'Apple Imac', 'Samsung Desktop'
    ]
  },
  {
    name: 'Data Storage Devices',
    icon: '💾',
    items: [
      'Hitachi Hard Disk', 'Laptop Ram', 'Transcend Hard Disk', 'Strontium Pen Drive', 'Adata Hard Disk'
    ]
  },
  {
    name: 'Computer Printers & Scanners',
    icon: '🖨️',
    items: [
      'Data Scanner', 'Cutting Plotter', 'Photo Printer', 'Zebra Barcode Printer', 'Wireless Printer'
    ]
  },
  {
    name: 'UPS & Power Supply',
    icon: '🔋',
    items: [
      'Atx Power Supply', 'Hitachi Ups', 'Sensorless Vector Inverter', 'Emerson Ups', 'Smps Power Supply'
    ]
  },
  {
    name: 'Projectors',
    icon: '📽️',
    items: [
      'Dmd Chips', 'Portable Mini Projector', '3d Projector', 'Viewsonic Projector', 'Samsung Projector'
    ]
  },
  {
    name: 'Computer Keyboards',
    icon: '⌨️',
    items: [
      'Cordless Keyboard', 'Lenovo Keyboard', 'Metal Keypad', 'Iball Computer Keyboard', 'Zebronics Keyboard'
    ]
  },
  {
    name: 'Computer Networking',
    icon: '🌐',
    items: [
      'Cisco Network Switch', 'Ethernet Cable', 'Epon Olt', 'Cisco Firewall', 'Wireless Lan'
    ]
  },
  {
    name: 'Printer Parts & Accessories',
    icon: '🧩',
    items: [
      'Laser Toner Cartridges', 'Printer Adaptor', 'Ricoh Printer Cartridge', 'Sheet Feeder', 'Printer Cartridge'
    ]
  },
  {
    name: 'Modems',
    icon: '📡',
    items: [
      'Lan Extender', 'Pocket Router', 'Lan Modem', 'Gprs Modem', 'Internal Modems'
    ]
  },
  {
    name: 'Computer Mouse',
    icon: '🖱️',
    items: [
      'Targus Wireless Mouse', 'Intex Computer Mouse', 'Dell Computer Mouse', 'Intex Wireless Mouse', 'Hp Mouse'
    ]
  },
  {
    name: 'Printers & Binders',
    icon: '🖨️',
    items: [
      'Binding Cloth', 'Cheque Printer', 'Textile Printing Binders', 'Acrylic Binders', 'Datamax Barcode Printer'
    ]
  },
  {
    name: 'Computer Accessories',
    icon: '🧰',
    items: [
      'Leather Mouse Pad', 'Lcd Monitor Stand'
    ]
  },
  {
    name: 'CAD CAM Design Services',
    icon: '📐',
    items: [
      'Animation Design Services', '3d Design Services', 'Cam Designing Solution'
    ]
  },
  {
    name: 'Computer Stationery',
    icon: '📎',
    items: [
      'Docking Station', 'Portable Usb Kit', 'Belkin Laptop Cooling Pad', 'Inkjet Paper', 'Laptop Accessories'
    ]
  },
  {
    name: 'Server & WorkStation',
    icon: '🖥️',
    items: [
      'Dell Server', 'L Shape Workstation', 'Hp Server', 'Network Attached Storage', 'Ibm Server'
    ]
  },
  {
    name: 'Server Racks',
    icon: '🗄️',
    items: [
      'Network Rack', 'Computer Server Rack', 'Telecom Racks', 'Wall Mount Server Rack', 'Network Cabinet'
    ]
  },
  {
    name: 'I/O Card',
    icon: '💳',
    items: [
      'Smart Card Reader', 'Multimedia Memory Card', 'Serial Port Card', 'Pcmcia Card', 'Memory Cards'
    ]
  },
  {
    name: 'Used Computer Accessories',
    icon: '♻️',
    items: [
      'Used Ram', 'Computer Monitor Scrap', 'Computer Scrap', 'Printer Scrap', 'Used Lcd Monitor'
    ]
  },
  {
    name: 'Network Engineering',
    icon: '🌐',
    items: [
      'Network Interface Controller', 'Networking Cable', 'Wan Router', 'Data Center Solutions', 'Lan Router'
    ]
  },
  {
    name: 'IC Card',
    icon: '💳',
    items: [
      'Computer Chips', 'Memory Card Reader', 'Contact Ic Card', 'Pci Cards', 'Motion Control Card'
    ]
  },
  {
    name: 'PDA',
    icon: '📱',
    items: [
      'Industrial Pda', 'Pda Phones', 'Pda Pen'
    ]
  },
  {
    name: 'Multimedia',
    icon: '🎵',
    items: [
      'Multimedia Speaker', 'Multimedia Projector', 'Multimedia Headphone', 'Multimedia Card'
    ]
  },
  {
    name: 'Computer Peripherals',
    icon: '🖲️',
    items: [
      'High Resolution Monitors', 'Bluetooth Mouse', 'External Cd Drive', 'Wireless Keyboard', 'Led Monitor'
    ]
  },
  {
    name: 'Computer & Software Agents',
    icon: '🧑‍💻',
    items: [
      'Computer Components', 'Computer Scrap', 'Mini Laptops', 'Computer Motherboards', 'New Product'
    ]
  },
  {
    name: 'New Product',
    icon: '🆕',
    items: []
  },
];

const ComputerHardwareSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Computer Hardware & Software Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {computerHardwareSubcategories.map((sub, idx) => (
        <div key={idx} className="flex flex-col p-4 bg-white rounded shadow">
          <div className="flex items-center mb-2">
            <span className="text-3xl mr-3">{sub.icon}</span>
            <span className="text-lg font-semibold">{sub.name}</span>
          </div>
          {sub.items && (
            <div className="text-gray-600 text-sm">
              {sub.items.join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ComputerHardwareSubcategories; 