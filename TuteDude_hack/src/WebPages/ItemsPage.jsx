import React from 'react';
import ItemDetailView from '../Components/ItemDetailView';

const items = [
  { id: 1, name: 'Fresh Apples', price: '₹120/kg', img: '', desc: 'Crisp and juicy apples.' },
  { id: 2, name: 'Milk (1L)', price: '₹60', img: '', desc: 'Pure cow milk.' },
  { id: 3, name: 'Bread', price: '₹40', img: '', desc: 'Soft and fresh bread.' },
  { id: 4, name: 'Eggs (12pc)', price: '₹90', img: '', desc: 'Farm fresh eggs.' },
];

const sampleItem = {
  name: 'Coriander leaves',
  image: '/src/assets/coriander1.jpg',
  images: [
    '/src/assets/coriander1.jpg',
    '/src/assets/coriander2.jpg',
    '/src/assets/coriander3.jpg',
    '/src/assets/coriander4.jpg',
    '/src/assets/coriander5.jpg',
  ],
  price: 5,
  mrp: 14,
  discount: 64,
  netQty: '100 g',
  rating: 4.5,
  ratingCount: '437.5k',
  countryOfOrigin: 'India',
  shelfLife: '5 days',
  productType: 'Coriander Leaves',
  goodFor: 'Regulates Blood Sugar',
  disclaimer: 'All images are for representational purposes only. It is advised that you read the batch and manufacturing details, directions for use, allergen information, health and nutritional claims (wherever applicable), and other details mentioned on the label before consuming the product. For combo items, individual prices can be viewed on the page.',
  customerCare: 'support@zeptonow.com',
  refundPolicy: 'Refund/Replacement Applicable within 24 hours',
  sellerName: 'Geddit Convenience Private Limited',
  sellerAddress: 'Bengaluru, India',
  sellerLicense: '1234567890',
  coupons: [
    'Get flat ₹15 discount with BHIM Payments App',
    'Get Flat ₹100 or ₹150 cashback using Jupiter UPI',
    'Assured ₹10 - ₹300 Cashback on using Paytm UPI',
    'Get upto ₹25 Cashback on using Amazon Pay UPI',
    'Get Up to ₹50 cashback on Using Freecharge UPI',
  ],
};


const ItemsPage = () => {
  // In a real app, item data would come from props, context, or route params
  return (
    <div className="min-h-screen bg-gray-50 flex pt-27 items-center justify-center">
      <ItemDetailView item={sampleItem} />
    </div>
  );
};

export default ItemsPage;