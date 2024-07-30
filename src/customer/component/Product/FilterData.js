export const color = [
  "white",
  "Red",
  "Multicolor",
  "Brown",
  "Blue",
  "Pink",
  "Green",
  "Gray",
  "Yellow",
  "Silver",
  "Black",
];

export const filters = [
  {
    id:"color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "Red", label: "Red" },
      { value: "Multicolor", label: "Multicolor" },
      { value: "Brown", label: "Brown" },
      { value: "Blue", label: "Blue" },
      { value: "Pink", label: "Pink" },
      { value: "Green", label: "Green" },
      { value: "Gray", label: "Gray" },
      { value: "Yellow", label: "Yellow" },
      { value: "Silver", label: "Silver" },
      { value: "Black", label: "Black" },

    ],
  },
  {
    id:"size",
    name: "Size",
    options: [
      { value: "Small", label: "Small" }, 
      { value: "Medium", label: "Medium" },
      { value: "Large", label: "Large" },
    ]
  },

]

export const singleFilter =[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "Under 1000", label: "Under 1000" },
      { value: "1000-2000", label: "1000-2000" },
      { value: "2000-3000", label: "2000-3000" },
      { value: "Above 3000", label: "Above 3000" }
    ]
  },
  {
    id: "discount",
    name: "Discount",
    options: [
      { value: "Below 30%", label: "Below 30%" },
      { value: "30%-50%", label: "30%-50%" },
      { value: "Above 50%", label: "Above 50%" }
    ]
  },
]