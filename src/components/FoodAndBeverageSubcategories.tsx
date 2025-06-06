import React from 'react';

const FoodAndBeverageSubcategories = () => {
  const foodAndBeverageSubcategories = [
    {
      name: 'Spices & Seasonings',
      items: ['Chana Masala', 'Shiitake Powder', 'Black Pepper Powder', 'Chicken Tikka Masala', 'Mdh Pav Bhaji Masala'],
      icon: '🌶️'
    },
    {
      name: 'Rice',
      items: ['Hmt Rice', 'Rice Product', 'Broken Matta Rice', 'Heritage Basmati Rice', 'Raw White Rice'],
      icon: '🍚'
    },
    {
      name: 'Seeds',
      items: ['Roasted Sesame Seeds', 'Chilli Seeds', 'Organic Moringa Seeds', 'Celery Seeds', 'Hybrid Maize Seeds'],
      icon: '🌰'
    },
    {
      name: 'Edible Oils & Fats',
      items: ['Fortune Groundnut Oil', 'Patanjali Mustard Oil', 'Corn Oil', 'Fortune Refined Oil', 'Grape Seed Oil'],
      icon: '🌻'
    },
    {
      name: 'Fresh Fruits',
      items: ['Banana', 'Gooseberry', 'Dragon Fruit', 'Fresh Pears', 'Cherry'],
      icon: '🍎'
    },
    {
      name: 'Dairy Products',
      items: ['Butterscotch Ice Cream', 'Britannia Milk', 'Instant Milk Powder', 'Nandini Milk', 'White Cheese'],
      icon: '🥛'
    },
    {
      name: 'Food Products',
      items: ['Sambar Paste', 'Mushroom Soup Powder', 'Vegan Food', 'Marine Food Products', 'Herbal Food Supplement'],
      icon: '🍎'
    },
    {
      name: 'Confectionery & Bakery Products',
      items: ['Vanilla Chocolate', 'Sesame Seed Candy', 'Rusk Toast', 'Milk Lollipop', 'Coco Chips'],
      icon: '🍰'
    },
    {
      name: 'Pulses',
      items: ['Adzuki Beans', 'Green Chickpeas', 'Green Moong', 'Chickpeas', 'Red Lentils'],
      icon: '🥜'
    },
    {
      name: 'Tea',
      items: ['Anti Aging Tea', 'Girnar Green Tea', 'Flavored Tea Bags', 'Yellow Tea', 'White Tea'],
      icon: '☕'
    },
    {
      name: 'Beverages',
      items: ['Mango Juice', 'Carrot Juice', 'Grape Juice', 'Fruit Cocktail', 'Patanjali Mango Juice'],
      icon: '🍹'
    },
    {
      name: 'Nuts & Kernels',
      items: ['Split Cashew Nut', 'Cashew Nuts', 'Almond Shell', 'Bitter Kola', 'Brazil Nuts'],
      icon: '🌰'
    },
    {
      name: 'Sweets & Namkeen',
      items: ['Diet Chiwda', 'Kesar Peda', 'Milk Khoya', 'Sev Namkeen', 'Rajgira Ladoo'],
      icon: '🍬'
    },
    {
      name: 'Dietary Supplements',
      items: ['Weight Gain Tonic', 'Vitamin C Powder', 'Multivitamin Injection', 'Chondroitin Sulphate', 'Complex Enzyme'],
      icon: '💊'
    },
    {
      name: 'Snacks',
      items: ['Roasted Bajra', 'Namkeen Snacks', 'Banana Slicer', 'Aloo Bhujia', 'Manchurian Khakhra'],
      icon: '🥨'
    },
    {
      name: 'Frozen Fruits',
      items: ['Pineapple Slices', 'Freeze Dried Pineapple', 'Frozen Pulp', 'Dehydrated Apple', 'Processed Fruits'],
      icon: '🍓'
    },
    {
      name: 'Cashews',
      items: ['White Cashew Nuts', 'Salted Cashew', 'Broken Cashew Nut', 'Dried Cashew Nuts', 'Raw Cashew'],
      icon: '🌰'
    },
    {
      name: 'Flavours & Food Additives',
      items: ['Chitin', 'Dihydromyrcenol', 'Papain Powder', 'Flavouring Essence', 'Food Emulsifier'],
      icon: '✨'
    },
    {
      name: 'Sugar & Sweeteners',
      items: ['Brown Sugar', 'Sodium Saccharin', 'Icing Sugar', 'Sugar M30', 'Flavoured Sugar'],
      icon: '🍬'
    },
    {
      name: 'Grain',
      items: ['Kodo Millet', 'Food Grains', 'Popcorn', 'Broken Wheat', 'White Millet'],
      icon: '🌾'
    },
    {
      name: 'Cookies & Biscuits',
      items: ['Nut Cookies', 'Chocolate Wafer', 'Osmania Biscuit', 'Homemade Biscuits', 'Peanut Cookies'],
      icon: '🍪'
    },
    {
      name: 'Flour',
      items: ['Pastry Flour', 'Mustard Oil', 'Bread Flour', 'Almond Flour', 'Defatted Soya Flour'],
      icon: '🍞'
    },
    {
      name: 'Coconut',
      items: ['Fresh Coconut', 'Mature Coconut', 'Yellow Coconut', 'Tender Coconut', 'Dry Coconut'],
      icon: '🥥'
    },
    {
      name: 'Pickles & Murabba',
      items: ['Garlic Chutney', 'Fruit Sauce', 'Mustard Sauce', 'Pickle Masala', 'Garlic In Brine'],
      icon: '🍯'
    },
    {
      name: 'Chocolates',
      items: ['Chocolate Cluster', 'Coconut Chocolate', 'Pineapple Chocolate', 'Fruit Chocolate', 'Kinder Joy Chocolate'],
      icon: '🍫'
    },
    {
      name: 'Frozen & Processed Food',
      items: ['Mango Chunk', 'Dal Makhani', 'Frozen Fish', 'Frozen Vannamei Shrimp', 'Frozen Fish Fillet'],
      icon: '🧊'
    },
    {
      name: 'Honey Products',
      items: ['Kashmir Honey', 'Multi Flora Honey', 'Forever Royal Jelly', 'Acacia Honey', 'Blossom Honey'],
      icon: '🍯'
    },
    {
      name: 'Coffee',
      items: ['Coffee Premixes', 'Cappuccino Coffee', 'Chicory Powder', 'Bru Coffee', 'Ganoderma Coffee'],
      icon: '☕'
    },
    {
      name: 'Seafood',
      items: ['Cuttlefish', 'Frozen Tilapia Fillet', 'Frozen Sardine', 'Ribbon Fish', 'Tuna Fish'],
      icon: '🍤'
    },
    {
      name: 'Health Food',
      items: ['Protein Hydrolysate', 'Herbal Juice', 'Noni Health Juice', 'Corn Fiber', 'Oat Products'],
      icon: '🥗'
    },
    {
      name: 'Frozen Vegetables',
      items: ['Vegetable Flakes', 'Frozen Green Beans', 'Tomato Extract', 'Frozen Spinach', 'White Onion Flakes'],
      icon: '🥦'
    },
    {
      name: 'Papad',
      items: ['Mathiya Papad', 'Sabudana Papad', 'Green Chilli Papad', 'Garlic Papads', 'Moong Papad'],
      icon: '🌮'
    },
    {
      name: 'Drinking Water',
      items: ['Aquafina Mineral Water', 'Flavored Water', 'Packaged Drinking Water', 'Alkaline Water', 'Tonic Water'],
      icon: '💧'
    },
    {
      name: 'Fast-Food',
      items: ['Falooda Mix', 'Jeera Rice', 'Frozen Pizza', 'Farfalle Pasta', 'Instant Chicken Soup'],
      icon: '🍔'
    },
    {
      name: 'Jaggery & Jaggery Products',
      items: ['Jaggery Cubes', 'Jaggery Chikki', 'Jaggery Sugar', 'White Jaggery', 'Organic Jaggery Powder'],
      icon: '🍬'
    },
    {
      name: 'Meat & Poultry',
      items: ['Salted Sheep Casing', 'Rhode Island Red Chicks', 'Bone Grist', 'Chicken Nuggets', 'Bone Ash'],
      icon: '🍗'
    },
    {
      name: 'Edible Salt',
      items: ['White Salt', 'Aashirvaad Salt', 'Pink Rock Salt', 'Rock Salt Powder', 'Crystal Salt'],
      icon: '🧂'
    },
    {
      name: 'Mushroom & Truffle',
      items: ['Fresh Button Mushroom', 'Medicinal Mushroom', 'Mushroom Powder', 'Reishi Mushroom', 'Dehydrated Mushroom'],
      icon: '🍄'
    },
    {
      name: 'Plant & Animal Oil',
      items: ['Palm Oil', 'Crude Palm Oil', 'Animal Fat', 'Yellow grease', 'Used Cooking Oil'],
      icon: '🌻'
    },
    {
      name: 'Noodles',
      items: ['Soba Noodles', 'Wheat Vermicelli', 'Bowl Noodles', 'Rice Noodle', 'Patanjali Noodles'],
      icon: '🍜'
    },
    {
      name: 'Bean Products',
      items: ['Cocoa Beans', 'Pinto Bean', 'Black Beans', 'Baked Beans', 'Broad Bean'],
      icon: '🥜'
    },
    {
      name: 'Castor Oil',
      items: ['Castor Oil Ethoxylate', 'Castor Seed Oil', 'Sulphonated Castor Oil', 'Turkey Red Oil', 'Bp Castor Oil'],
      icon: '🧴'
    },
    {
      name: 'Mouth Freshener',
      items: ['Herbal Mouth Freshener', 'Amla Supari', 'Milky Supari', 'Mouth Freshner'],
      icon: '🍃'
    },
    {
      name: 'Asafoetida',
      items: ['Hing Dana', 'Raw Hing', 'Asafoetida Powder', 'Asafoetida Cake'],
      icon: '🌱'
    },
    {
      name: 'Canned Food',
      items: ['Canned Cucumber', 'Mushroom Slice', 'Canned Tomato Paste', 'Packed Food', 'Canned Pineapple'],
      icon: '🥫'
    },
    {
      name: 'Dehydrated Food Products',
      items: ['Dehydrated Garlic Powder', 'Dehydrated Potato Powder', 'Dehydrated Red Onion'],
      icon: '☀️'
    },
    {
      name: 'Marine Products',
      items: ['Turtle Food', 'Cuttlefish', 'Carrageenan', 'Sea Shell', 'Fish Finder'],
      icon: '🐠'
    },
    {
      name: 'Pan Masala',
      items: ['Sweet Supari', 'Tobacco Zarda', 'Amla Supari', 'Tobacco Leaves', 'Tobacco Accessories'],
      icon: '🌿'
    },
    {
      name: 'Dried Vegetables',
      items: ['Raw Garlic', 'Brinjal', 'Spinach', 'Green Chillies', 'Beetroot'],
      icon: '🥕'
    },
    {
      name: 'Molasses',
      items: ['Sugar Cane Molasses', 'Organic Blackstrap Molasses', 'Dry Molasses', 'Organic Molasses', 'Beet Molasses'],
      icon: '🍯'
    },
    {
      name: 'Consumer Goods',
      items: ['Consumable Spares', 'Fmcg Products', 'Consumer Products', 'Cooking Spices', 'Spice Powder'],
      icon: '🛒'
    },
    {
      name: 'Aquatic Products',
      items: ['Aqua Feed Supplements', 'Shrimp Feed'],
      icon: '🦐'
    },
    {
      name: 'Egg Products',
      items: [],
      icon: '🥚'
    },
    {
      name: 'Margarine',
      items: ['Table Margarine', 'Nutritious Margarine'],
      icon: '🧈'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Food & Beverage Subcategories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodAndBeverageSubcategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <img src={category.icon} alt={category.name} className="w-12 h-12 mr-3" />
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
            <div className="text-gray-600 hover:text-gray-900">
              {category.items.join(' • ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodAndBeverageSubcategories; 