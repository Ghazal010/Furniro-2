import React from "react";

const products = [
  { id: 1, name: "Syltherine", type: "Stylish cafe chair", price: 2500000, discountPrice: 3500000, image: "/p1.png", discount: "30%" },
  { id: 2, name: "Leviosa", type: "Stylish cafe chair", price: 2500000, image: "/p2.png" },
  { id: 3, name: "Lolito", type: "Luxury big sofa", price: 7000000, discountPrice: 14000000, image: "/p3.png", discount: "50%" },
  { id: 4, name: "Respira", type: "Outdoor bar table and stool", price: 500000, image: "/p4.png", isNew: true },
  { id: 5, name: "Grifo", type: "Night lamp", price: 1500000, image: "/p5.png", isNew: true },
  { id: 6, name: "Muggo", type: "Small mug", price: 150000, image: "/p6.png" },
  { id: 7, name: "Pingky", type: "Cute bed set", price: 7000000, discountPrice: 14000000, image: "/p7.png", discount: "50%" },
  { id: 8, name: "Potty", type: "Minimalist flower pot", price: 500000, image: "/p8.png", isNew: true },
];

export default function Products() {
  return (
    <div className="bg-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-200 rounded-sm shadow-lg overflow-hidden relative">
            {/* Image and Badges */}
            <div className="relative">
              {/* Product Image */}
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />

              {/* Discount Badge */}
              {product.discount && (
                <span className="flex justify-center items-center absolute top-2 right-2 z-10 text-xs bg-red-500 text-white w-8 h-8 rounded-full">
                  {product.discount}
                </span>
              )}

              {/* New Badge */}
              {product.isNew && (
                <span className="flex justify-center items-center absolute top-2 right-2 z-10 text-xs bg-green-500 text-white w-8 h-8 rounded-full">
                  New
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.type}</p>
              <div className="mt-2">
                <span className="text-lg font-bold text-gray-900">Rp {product.price.toLocaleString()}</span>
                {product.discountPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    Rp {product.discountPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-72  m-[60px]">
        <button className="text-brown font-bold h-10 w-64 ml-96 border border-brown">Show More</button>
        </div>
    </div>
  );
}
