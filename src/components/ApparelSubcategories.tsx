const apparelSubcategories = [
  {
    name: 'Women Wear',
    icon: '👗',
    items: [
      'Maternity Clothes', 'Ladies Short Top', 'Girls Cotton Dress', 'Lace Leggings', 'Ladies Palazzo'
    ]
  },
  {
    name: 'T-Shirts',
    icon: '👕',
    items: [
      'Printed Polo T Shirt', 'Louis Philippe T Shirts', 'Roadster T Shirts', 'High Neck T Shirts', 'Puma T Shirt'
    ]
  },
  {
    name: 'Sarees',
    icon: '🥻',
    items: [
      'Cotton Silk Sarees', 'Georgette Sarees', 'Lazer Saree', 'Kantha Sarees', 'Zari Work Saree'
    ]
  },
  {
    name: 'Kurtis',
    icon: '👚',
    items: [
      'Designer Cotton Kurti', 'Trendy Kurtis', 'Printed Cotton Kurti', 'Cotton Kurtis', 'Short Kurti'
    ]
  },
  {
    name: 'Shirts',
    icon: '👔',
    items: [
      'Slim Fit Shirts', 'Winter Shirt', 'Cargo Shirts', 'Mens Cotton Shirts', 'Mens Poplin Shirt'
    ]
  },
  {
    name: 'Bags & Cases',
    icon: '👜',
    items: [
      'Abacus Bag', 'Rope Handle Bag', 'Handle Bag', 'Wine Cases', 'Peperone Sling Bags'
    ]
  },
  {
    name: 'Salwar Kameez',
    icon: '👘',
    items: [
      'Printed Churidar Suit', 'Ladies Sherwani Suit', 'Ladies Stitched Suits', 'Girls Salwar Kameez', 'Ladies Salwar'
    ]
  },
  {
    name: 'Jeans',
    icon: '👖',
    items: [
      'London Looks Jeans', 'Printed Denim Jeans', 'Regular Fit Jeans', 'Women Ripped Jeans', 'Blue Denim Jean'
    ]
  },
  {
    name: 'Children Clothing',
    icon: '🧒',
    items: [
      'Kids Cotton Shirts', 'Knitted Kids Wear', 'Girls Garments', 'Kids Hoodies', 'Kids Quilts'
    ]
  },
  {
    name: 'Skirts & Tops',
    icon: '👗',
    items: [
      'Stylish Tops', 'Halter Top', 'Ladies V Neck Top', 'Readymade Dresses', 'Cotton Ladies Tops'
    ]
  },
  {
    name: 'Gloves & Mittens',
    icon: '🧤',
    items: [
      'Hand Knitted Gloves', 'Nylon Gloves', 'Nitrile Hand Gloves', 'Driving Gloves', 'Embroidered Gloves'
    ]
  },
  {
    name: 'Menswear',
    icon: '👨',
    items: [
      'Mens Denim Short', 'Round Neck Kurta', 'Mens Churidar Suits', 'Man Hoodies', 'Mens Knit Shorts'
    ]
  },
  {
    name: 'Pants & Trousers',
    icon: '👖',
    items: [
      'Elastic Waist Pants', 'Afgani Trousers', 'Jeans Pants', 'Mens Leather Pants', 'Linen Trousers'
    ]
  },
  {
    name: 'Watches & Clocks',
    icon: '⌚',
    items: [
      'Stainless Steel Watch', 'Watch Strap', 'Porthole Desk Clocks', 'Watch Spring Bar', 'Mechanical Watches'
    ]
  },
  {
    name: 'Baby & Infant Products',
    icon: '🍼',
    items: [
      'Himalaya Baby Lotion', 'Baby Oil', 'Himalaya Baby Cream', 'Infant Romper', 'Tissue Wipe'
    ]
  },
  {
    name: 'Jackets',
    icon: '🧥',
    items: [
      'Stylish Coats', 'Fleece Jackets', 'Men Nylon Jacket', 'Long Jackets', 'Security Jacket'
    ]
  },
  {
    name: 'Ladies Handbags',
    icon: '👜',
    items: [
      'Designer Handbags', 'Beaded Bags', 'Nylon Tote Bag', 'Beaded Work Bags', 'Hand Embroidered Purses'
    ]
  },
  {
    name: 'Leather Bags',
    icon: '🧳',
    items: [
      'Red Leather Bags', 'Fashion Leather Bags', 'Leather Satchel', 'Leather Hobo Handbag', 'Leather Hobo Bags'
    ]
  },
  {
    name: 'Undergarments',
    icon: '🩲',
    items: [
      'Custom Boxer', 'Satin Panties', 'Maternity Bras', 'Macroman Vest', 'Feeding Bra'
    ]
  },
  {
    name: 'Uniforms & Workwear',
    icon: '👔',
    items: [
      'Work Suit', 'Boxing Uniform', 'Industrial Coverall', 'Work Apron', 'Flame Resistant Coveralls'
    ]
  },
  {
    name: 'Athletic Wear',
    icon: '🏃',
    items: [
      'Adidas Track Pants', 'Jogging Sets', 'Ladies Tracksuits', 'Sports Skirt', 'Athletic Shorts'
    ]
  },
  {
    name: 'Slippers',
    icon: '🥿',
    items: [
      'Ladies Fancy Slipper', 'Pu Slippers', 'Bathroom Slippers', 'Kids Slippers', 'Pvc Slippers'
    ]
  },
  {
    name: "Men's Shoes",
    icon: '👞',
    items: [
      'Mens Casual Shoes', 'Mens Formal Shoes', 'Leather Dress Shoes', 'Pu Leather Shoes', 'Wedding Shoes'
    ]
  },
  {
    name: 'Ethnic Wear',
    icon: '🥻',
    items: [
      'Ghagra Choli', 'Gents Kurta', 'Short Kurta', 'Mens Chikan Kurta', 'Cotton Sherwani'
    ]
  },
  {
    name: 'Safety Shoes',
    icon: '🥾',
    items: [
      'Skechers Safety Shoes', 'Men Safety Shoes', 'Anti Static Footwear', 'Caterpillar Safety Shoes', 'Steel Toe Shoes'
    ]
  },
  {
    name: 'Nightwear',
    icon: '🛌',
    items: [
      'Cotton Sleepwear', 'Shoulder Cut Nighty', 'Short Nighty', 'Night Suit', 'Cotton Printed Nighties'
    ]
  },
  {
    name: 'Shorts',
    icon: '🩳',
    items: [
      'Baggy Shorts', 'Ladies Cotton Shorts', 'Mens Sports Short', 'Half Pants', 'Swim Shorts'
    ]
  },
  {
    name: 'Jute Bags',
    icon: '🛍️',
    items: [
      'Jute Sugar Bags', 'Jute Sling Bag', 'Lunch Bags', 'Jute Wine Bags', 'Jute Hessian Cloth Bag'
    ]
  },
  {
    name: 'Ribbons & Laces',
    icon: '🎀',
    items: [
      'Border Laces', 'Mirrored Laces', 'Chiffon Ribbon', 'Bridal Trim', 'Maharani Lace'
    ]
  },
  {
    name: 'Caps & Hats',
    icon: '🧢',
    items: [
      'Security Guard Caps', 'Paper Chef Cap', 'Rainbow Cap', 'Casual Cap', 'Winter Caps'
    ]
  },
  {
    name: 'Bridal Wear',
    icon: '👰',
    items: [
      'Bride Dress', 'Green Lehenga', 'Velvet Lehenga', 'Bridal Lingerie', 'Fish Cut Lehenga'
    ]
  },
  {
    name: 'Scarves',
    icon: '🧣',
    items: [
      'Muslim Scarf', 'Silk Square Scarves', 'Cotton Scarves', 'Rayon Scarves', 'Custom Printed Scarves'
    ]
  },
  {
    name: 'Sweaters',
    icon: '🧥',
    items: [
      'Striped Sweater', 'Long Cardigan', 'Military Sweater', 'Ladies Cardigan', 'Woolen Cardigan'
    ]
  },
  {
    name: 'Shoes Materials & Accessories',
    icon: '👟',
    items: [
      'Leather Sole', 'Pu Shoe Mould', 'Pvc Footwear Compound', 'Suede Leather Laces', 'Pvc Shoe Cover'
    ]
  },
  {
    name: 'School Uniforms',
    icon: '🏫',
    items: [
      'Uniform Belts', 'School Sweaters', 'School Belts', 'School Uniform Frock', 'Salwar Kameez School Uniform'
    ]
  },
  {
    name: 'Sport Shoes',
    icon: '👟',
    items: [
      'Bata Sports Shoes', 'Sparx Shoes', 'Skating Shoes', 'Inblu Shoes', 'Gucci Sneakers'
    ]
  },
  {
    name: 'Stoles',
    icon: '🧣',
    items: [
      'Velvet Stoles', 'Organza Stoles', 'Linen Stoles', 'Pure Silk Stole', 'Embroidered Stoles'
    ]
  },
  {
    name: 'Belts & Accessories',
    icon: '👖',
    items: [
      'Brass Belt Buckle', 'Embroidered Belts', 'Military Web Belt', 'Braided Belt', 'Chain Belts'
    ]
  },
  {
    name: 'Shawls',
    icon: '🧣',
    items: [
      'Handmade Shawls', 'Alpaca Shawls', 'Hand Embroidered Shawls', 'Cotton Shawls', 'Tapestry Shawls'
    ]
  },
  {
    name: 'Leather Belts',
    icon: '🦴',
    items: [
      'Brown Leather Belt', 'Leather Weave Belt', 'Leather Designer Belt', 'Black Leather Belt', 'Horn Belt'
    ]
  },
  {
    name: 'Ladies Shoes',
    icon: '👠',
    items: [
      'Loafer Shoes', 'Belly Shoes', 'Derby Shoes', 'Ladies Winter Shoes', 'Ballerina Shoes'
    ]
  },
  {
    name: 'Socks & Stockings',
    icon: '🧦',
    items: [
      'Army Socks', 'Cotton Socks', 'Adidas Socks', 'Grip Socks', 'Arm Warmer'
    ]
  },
  {
    name: 'Leather Shoes',
    icon: '👞',
    items: [
      'Leather Upper Shoes', 'Leather Jutti', 'Woodland Leather Shoes', 'Bata Shoes', 'Liberty Shoes'
    ]
  },
  {
    name: 'Buttons',
    icon: '🔴',
    items: [
      'Plastic Snap Fastener', 'Dress Hook', 'Polyester Shirt Button', 'Garment Rivets', 'Pearl Button'
    ]
  },
  {
    name: 'Umbrella & Rainwear',
    icon: '☔',
    items: [
      'Outdoor Umbrella', 'Fashion Umbrella', 'Polyester Umbrella', 'Colorful Umbrella', 'Printed Promotional Umbrella'
    ]
  },
  {
    name: 'Suits & Tuxedo',
    icon: '🤵',
    items: [
      'Mens Coat Pant', 'Mens Casual Blazers', 'Embroidery Suits', 'Party Wear Coat', 'Three Piece Suit'
    ]
  },
  {
    name: 'Badges & Emblems',
    icon: '🎖️',
    items: [
      'Pvc Badges', 'Metal Badges', 'Magnetic Badge', 'Promotional Badges', 'Brass Badges'
    ]
  },
  {
    name: 'Leather Jackets',
    icon: '🥼',
    items: [
      'Artificial Leather Jacket', 'Leather Bomber Jacket', 'Kids Leather Jackets', 'Leather Sports Jacket', 'Ladies Leather Jackets'
    ]
  },
  {
    name: 'Lanyards',
    icon: '🪢',
    items: [
      'College Lanyard', 'Sublimated Lanyard', 'Promotional Lanyards', 'Polyester Lanyard', 'Badge Lanyard'
    ]
  },
  {
    name: 'Outerwear',
    icon: '🧥',
    items: [
      'Hooded Tops', 'Casual Jogwear', 'Abayas', 'Fashion Vest', 'Pullover Hoodies'
    ]
  },
  {
    name: 'Leather Gloves',
    icon: '🧤',
    items: [
      'Leather Safety Gloves', 'Leather Palm Gloves', 'Football Glove', 'Chrome Leather Gloves', 'Leather Boxing Gloves'
    ]
  },
  {
    name: 'Shoe Upper',
    icon: '👟',
    items: [
      'Shoe Upper', 'Adidas Shoes', 'Handmade Shoes', 'Protective Footwear', 'Waterproof Shoes'
    ]
  },
  {
    name: 'Children Shoes',
    icon: '👟',
    items: [
      'Embroidered Shoes', 'Ballet Shoes', 'Mojari Shoes', 'Stylish Shoes', 'Branded Shoes'
    ]
  },
  {
    name: 'Readymade Garments',
    icon: '👕',
    items: [
      'Linen Garment', 'Cargo Shirts', 'Kids Woven Garments', 'Casual Wear', 'Readymade Salwar Suits'
    ]
  },
  {
    name: 'Boots',
    icon: '🥾',
    items: [
      'Industrial Boot', 'Red Tape Boots', 'Lace Boot', 'Women Boots', 'Ankle Boots'
    ]
  },
  {
    name: 'Infant Wear',
    icon: '🧸',
    items: [
      'Infant Socks', 'Baby Bathrobes', 'Infant Romper', 'Baby Tights', 'Cotton Romper'
    ]
  },
  {
    name: 'Ties & Bow Ties',
    icon: '👔',
    items: [
      'Institutional Ties', 'Handmade Silk Ties', 'Formal Ties', 'Mens Bow Ties', 'Cotton Bow Tie'
    ]
  },
  {
    name: 'Hair Extension',
    icon: '💇',
    items: [
      'Pre Bonded Hair Extension', 'Clip Hair Extension', 'I Tip Hair Extensions', 'Hair Braid', 'Human Hair Extension'
    ]
  },
  {
    name: 'Industrial Garment',
    icon: '👷',
    items: [
      'Safety Jacket', 'Industrial Coverall', 'Industrial Gloves', 'Safety Suit', 'Acid Resistant Fabric'
    ]
  },
  {
    name: 'Zippers',
    icon: '🟣',
    items: [
      'Brass Zipper', 'Zipper Accessories', 'Zipper Pulls', 'Zipper Roll', 'Metal Slider'
    ]
  },
  {
    name: 'Elastic Tapes',
    icon: '🩹',
    items: [
      'Colour Tapes', 'Knitted Elastic', 'Elastic Cords', 'Elastic Loop', 'Garment Tape'
    ]
  },
  {
    name: 'Hair Wigs',
    icon: '💇‍♀️',
    items: [
      'Lace Front Wig', 'Afro Wigs', 'Straight Hair Wigs', 'Ladies Wigs', 'Wig Tape'
    ]
  },
  {
    name: 'Hotel Uniforms',
    icon: '👨‍🍳',
    items: [
      'Waiter Uniform', 'Restaurant Uniforms', 'Chef Uniforms', 'Pharmaceutical Uniform', 'Chef Jacket'
    ]
  },
  {
    name: 'Pashmina Shawls',
    icon: '🧣',
    items: [
      'Printed Pashmina Shawl', 'Elegant Silk Pashmina Shawls', 'Viscose Pashmina Shawls', 'Digital Printed Pashmina...'
    ]
  },
  {
    name: 'Buckles',
    icon: '🔗',
    items: [
      'One Way Lashing Buckle', 'Slide Buckle', 'Silver Belt Buckle', 'Strap Buckles', 'Metal Belt Buckle'
    ]
  },
  {
    name: 'Industrial Clothing',
    icon: '🦺',
    items: [
      'Nomex Cloth', 'Welding Jacket', 'Fire Retardant Boiler Suit', 'Aluminized Suit', 'Radium Jacket'
    ]
  },
  {
    name: 'Interlinings & Linings',
    icon: '🧵',
    items: [
      'Cuffs Interlining', 'Collar Butterfly', 'Inner Lining Fabric', 'Collar Bands', 'Lining Fabric'
    ]
  },
  {
    name: 'Winter Wear',
    icon: '🧥',
    items: [
      'Winter Trouser', 'Winter Wear', 'Winter Caps', 'Winter Sweater', 'Winter Suit'
    ]
  },
  {
    name: 'Lungis',
    icon: '🩳',
    items: [
      'Cotton Lungi', 'Printed Lungi', 'Designer Lungi', 'Silk Dhoti', 'Handloom Lungi'
    ]
  },
  {
    name: 'Raincoats',
    icon: '🧥',
    items: [
      'Kids Raincoat', 'Boys Raincoat', 'Womens Raincoat', 'Pet Raincoat', 'Printed Raincoat'
    ]
  },
  {
    name: 'Wedding Dresses',
    icon: '👰',
    items: [
      'Wedding Sherwani', 'Wedding Lehenga', 'Wedding Stalls', 'Wedding Kurta Pyjama', 'Bridal Wedding Dresses'
    ]
  },
  {
    name: 'Evening Dresses',
    icon: '👗',
    items: [
      'Womens Corset', 'Embroidered Evening Dress', 'Corset Dress', 'Silk Evening Dresses', 'Ladies Evening Wear'
    ]
  },
  {
    name: 'Beachwear',
    icon: '👙',
    items: [
      'Beach Wrap', 'Beach Shorts', 'Men Swim Shorts', 'Girls Swimwear', 'Beach Pareos'
    ]
  },
  {
    name: 'Embroidered Garments',
    icon: '🧵',
    items: [
      'Heavy Mirror Work Dress', 'Embroidered Bridal Wear', 'Cotton Embroidered Kurti', 'Embroidered Polo Shirts', 'Custom...'
    ]
  },
  {
    name: 'Fashion Accessories',
    icon: '💍',
    items: [
      'Fashion Vest', 'Fashion Contact Lens', 'Belly Dance Belt', 'Pvc Fashion Bag', 'Bridal Bindi'
    ]
  },
  {
    name: 'Dummies & Mannequins',
    icon: '🧍',
    items: [
      'Human Mannequins', 'Display Mannequin', 'Full Male Mannequin', 'Headless Female...'
    ]
  },
  {
    name: 'Leather Sandals',
    icon: '🥿',
    items: [
      'Leather Kolhapuri Sandals', 'Children Leather Sandal', 'Mens Leather Sandals', 'Leather Flip Flops', 'Womens...'
    ]
  },
  {
    name: 'Eyelets',
    icon: '🪡',
    items: [
      'Brass Eyelets', 'Aluminium Eyelets', 'Decorative Eyelet', 'Curtain Eyelets', 'Plastic Eyelets'
    ]
  },
  {
    name: 'Pareos & Sarongs',
    icon: '🩱',
    items: [
      'Designer Ladies Sarongs', 'Embroidered Pareos', 'Sarongs', 'Silk Sarongs', 'Silk Pareos'
    ]
  },
  {
    name: 'Denim Wear',
    icon: '👖',
    items: [
      'Denim Shorts', 'Denim Jumpsuit', 'Denim Jacket', 'Blue Denim Jean', 'Denim Clothing'
    ]
  },
  {
    name: 'Gumboots',
    icon: '🥾',
    items: [
      'Hillson Gumboot', 'Safety Work Boot', 'Work Boots', 'Pvc Gum Boots', 'Safety Gumboot'
    ]
  },
  {
    name: 'Leather Garments',
    icon: '🧥',
    items: [
      'Wet Blue Leather', 'Leather Waist Coat', 'Leather Tops', 'Leather Shirts', 'Leather Sleeves'
    ]
  },
  {
    name: 'Ceremonial Dress',
    icon: '👗',
    items: [
      'Folk Dance Costume', 'Tango Dress', 'Christmas Dress', 'Party Wear', 'Dance Costumes'
    ]
  },
  {
    name: 'Knitwear',
    icon: '🧶',
    items: [
      'Knitted Dresses', 'Hand Knitted Sweater', 'Knitted Kids Wear', 'Ladies Knitted Garments', 'Knitted Skirt'
    ]
  },
  {
    name: 'Silk Dress',
    icon: '👗',
    items: [
      'Silk Gown', 'Silk Salwar Kameez', 'Soft Silk Sarees', 'Silk Nighties', 'Butter Silk Sarees'
    ]
  },
  {
    name: 'Leather Boots',
    icon: '🥾',
    items: [
      'Ladies Leather Boots', 'Mens Leather Boots', 'Ladies Boot'
    ]
  },
  {
    name: 'Bindis',
    icon: '🟣',
    items: [
      'Sticker Bindi', 'Bridal Bindi', 'Fancy Bindis', 'Kumkum', 'Designer Bindis'
    ]
  },
  {
    name: 'Used Clothing',
    icon: '👚',
    items: [
      'Used Jacket', 'Waste Cloth', 'Second Hand Clothes', 'Used Sweatshirt', 'Used Sweater'
    ]
  },
  {
    name: 'Costumes',
    icon: '🦖',
    items: [
      'Fashion Apparel', 'Dandiya Dress', 'Sack Cloth', 'Mascot Costumes', 'Fancy Dress Costumes'
    ]
  },
  {
    name: 'Hosiery Goods',
    icon: '🧦',
    items: [
      'Hosiery Items', 'Hosiery Knitwear', 'Body Warmer', 'Hosiery Undergarment Accessories'
    ]
  },
  {
    name: 'Military Goods',
    icon: '🎖️',
    items: [
      'Military Medals', 'Tool Bag', 'Army Gloves', 'Military Belts', 'Military Insignia'
    ]
  },
  {
    name: 'Military & Defence Supplies',
    icon: '🪖',
    items: [
      'Haversacks'
    ]
  },
  {
    name: 'Silk Neckties',
    icon: '👔',
    items: [
      'Woven Silk Necktie', 'Striped Neck Ties', 'Silk Bow Tie', 'Fashion Necktie', 'Mens Silk Ties'
    ]
  },
  {
    name: 'Garment Accessories',
    icon: '🧵',
    items: [
      'Lanyard Hook', 'Loop Tape', 'Acrylic Button', 'Copper Eyelets', 'Lfc Zipper'
    ]
  },
  {
    name: 'Military Boots',
    icon: '🥾',
    items: [
      'Antistatic Boots', 'Army Shoes', 'Combat Boots', 'Asbestos Shoes', 'Esd Shoes'
    ]
  },
  {
    name: 'Tie Accessories',
    icon: '🤵',
    items: [
      'Brooch Pin', 'Gold Tie Pin', 'Tie Bar', 'Tie Pin Set', 'Tie Clips'
    ]
  },
  {
    name: 'Woven Clothing',
    icon: '🧥',
    items: [
      'Woven Sweater', 'Woven Shorts', 'Woven Shirts', 'Polypropylene Woven Fabrics', 'Woven Fabrics'
    ]
  },
  {
    name: 'Military Uniform',
    icon: '🪖',
    items: [
      'Military Uniform Accessories', 'Military Belts', 'Army Cap', 'Military Hat', 'Military Caps'
    ]
  },
  {
    name: 'Military Clothing',
    icon: '🧥',
    items: [
      'Army Dress Uniform', 'Army Jacket', 'Military Sweater', 'Police Sweater', 'Army Jumper'
    ]
  },
  {
    name: 'Footwear',
    icon: '👟',
    items: [
      'Kids Footwear', 'Sneakers', 'Formal Footwear', 'Ladies Leather Footwear', 'Acupressure Footwear'
    ]
  },
  {
    name: 'Made-ups',
    icon: '🛏️',
    items: [
      'Bed Cushion', 'Cotton Cushion', 'Home Made Ups', 'Embroidered Bed Cover'
    ]
  },
  {
    name: 'Sequin Garments',
    icon: '✨',
    items: [
      'Sequin Embroidery', 'Sequin Bags', 'Sequin Tops', 'Sequin Scarf', 'Sequin Work Sarees'
    ]
  },
  {
    name: 'Apparel Stocks',
    icon: '🧥',
    items: [
      'Cable Binders', 'Garment Stock Lot'
    ]
  },
  {
    name: 'Apparel & Fashion Agents',
    icon: '🕴️',
    items: [
      'Down Vest', 'Display Dummies', 'Bridal Suits', 'Denim Clothing', 'Cocktail Party Dresses'
    ]
  },
  {
    name: 'Organic Clothes',
    icon: '👚',
    items: [
      'Organic Baby Clothes', 'Organic Cotton Clothing'
    ]
  },
  {
    name: 'Neckties',
    icon: '👔',
    items: [
      'Designer Necktie', 'Casual Tie', 'Black Necktie', 'Polyester Printed Tie', 'Woven Silk Necktie'
    ]
  },
  {
    name: 'Gothic Clothing',
    icon: '🦇',
    items: []
  },
];

const ApparelSubcategories = () => (
  <div className="container mx-auto py-10">
    <h2 className="text-2xl font-bold mb-6">Apparel & Fashion Subcategories</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {apparelSubcategories.map((sub, idx) => (
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

export default ApparelSubcategories; 