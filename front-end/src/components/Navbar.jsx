import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from 'react-redux';

export default function Navbar() {
  // Only two states needed!
  const [activeMain, setActiveMain] = useState(null); // e.g. "Apple", "Samsung", ...
  const [activeSub, setActiveSub] = useState(null);   // e.g. "iPhone", "Galaxy S", ...
  const cartItems = useSelector(state => state.cart.cartItems)
  console.log(cartItems);
  

  // All menu data in one structure
  const menu = [
    {
      name: "Apple",
      href : "/apple",
      sub: [
        {
          name: "iPhone",
          columns: [
            [
              { name: "iPhone 17", href: '/' },
              { name: "iPhone 17 Pro", href: '/' },
              { name: "iPhone 17 Pro Max", href: '/' },
              { name: "iPhone 16", href: '/' },
              { name: "iPhone 16 Pro", href: '/' },
              { name: "iPhone 16 Pro Max", href: '/' },
              { name: "iPhone 15", href: '/' },
              { name: "iPhone 15 Pro", href: '/' },
              { name: "iPhone 15 Pro Max", href: '/' },
            ],
            [
              { name: "iPhone 14", href: '/' },
              { name: "iPhone 14 Pro", href: '/' },
              { name: "iPhone 14 Pro Max", href: '/' },
              { name: "iPhone 13", href: '/' },
              { name: "iPhone 13 Pro", href: '/' },
              { name: "iPhone 13 Pro Max", href: '/' },
              { name: "iPhone 12", href: '/' },
              { name: "iPhone 12 Pro", href: '/' },
              { name: "iPhone 12 Pro Max", href: '/' },
            ],
            [
              { name: "iPhone SE", href: '/' },
              { name: "iPhone 11", href: '/' },
              { name: "iPhone 11 Pro", href: '/' },
              { name: "iPhone 11 Pro Max", href: '/' },
              { name: "iPhone X", href: '/' },
              { name: "iPhone XS", href: '/' },
              { name: "iPhone XS Max", href: '/' },
            ]
          ]
        },
        {
          name: "iPad",
          columns: [
            [
              { name: 'iPad (10th generation)', href: '/' },
              { name: 'iPad (8th generation)', href: '/' },
              { name: 'iPad 4', href: '/' },
              { name: 'iPad 3', href: '/' },
              { name: 'iPad Air', href: '/' },
              { name: 'iPad Pro (4th generation)', href: '/' },
              { name: 'iPad Air (5th generation)', href: '/' },
              { name: 'iPad Air (4th generation)', href: '/' },
            ]
          ]
        },
        {
          name: "Mac",
          columns: [
            [
              { name: 'MacBook Air (15-inch, M4, 2025)', href: '/' },
              { name: 'MacBook Air (13-inch, M4, 2025)', href: '/' },
              { name: 'MacBook Pro (16-inch, M4 Pro/Max, 2024)', href: '/' },
              { name: 'MacBook Pro (14-inch, M4 Pro/Max, 2024)', href: '/' },
              { name: 'MacBook Air (15-inch, M3, 2024)', href: '/' },
              { name: 'MacBook Air (13-inch, M3, 2024)', href: '/' },
            ]
          ]
        },
        {
          name: "Apple Watch",
          columns: [
            [
              { name: 'Apple Watch Ultra 3', href: '/' },
              { name: 'Apple Watch SE (3rd gen)', href: '/' },
              { name: 'Apple Watch Series 11', href: '/' },
              { name: 'Apple Watch Series 10', href: '/' },
              { name: 'Apple Watch Ultra 2', href: '/' },
              { name: 'Apple Watch Series 9', href: '/' },
              { name: 'Apple Watch Ultra (original)', href: '/' },
              { name: 'Apple Watch SE (2nd gen)', href: '/' },
              { name: 'Apple Watch Series 8', href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "Samsung",
      href : "/Samsung",
      sub: [
        {
          name: "Galaxy S",
          columns: [
            [
              { name: "Galaxy S25", href: '/' },
              { name: "Galaxy S25 Edge", href: '/' },
              { name: "Galaxy S25 Ultra", href: '/' },
              { name: "Galaxy S25+", href: '/' },
              { name: "Galaxy S25+ (Special Colour)", href: '/' },
              { name: "Galaxy S25 Ultra (Special Colour)", href: '/' },
              { name: "Galaxy S25 (Special Colour)", href: '/' },
              { name: "Galaxy S24", href: '/' },
              { name: "Galaxy S24 FE", href: '/' },
            ],
            [
              { name: "Galaxy S24 Ultra", href: '/' },
              { name: "Galaxy S24 Ultra (Special Colour)", href: '/' },
              { name: "Galaxy S23", href: '/' },
              { name: "Galaxy S23 FE", href: '/' },
              { name: "Galaxy S23 Ultra", href: '/' },
              { name: "Galaxy S23 Ultra (Special Colour)", href: '/' },
              { name: "Galaxy S23 FE (Special Colour)", href: '/' },
            ]
          ]
        },
        {
          name: "Galaxy Z",
          columns: [
            [
              { name: "Galaxy Z Fold7", href: '/' },
              { name: "Galaxy Z Flip7", href: '/' },
              { name: "Galaxy Z Flip7 FE", href: '/' },
              { name: "Galaxy Z Fold6", href: '/' },
              { name: "Galaxy Z Flip6", href: '/' },
            ]
          ]
        },
        {
          name: "Galaxy A",
          columns: [
            [
              { name: "Galaxy A07", href: '/' },
              { name: "Galaxy A17 5G", href: '/' },
              { name: "Galaxy A26 5G", href: '/' },
              { name: "Galaxy A56 5G", href: '/' },
              { name: "Galaxy A06 5G", href: '/' },
              { name: "Galaxy A16 5G", href: '/' },
              { name: "Galaxy A55 5G", href: '/' },
              { name: "Galaxy A15 5G", href: '/' },
              { name: "Galaxy A35 5G", href: '/' },
            ],
            [
              { name: "Galaxy A25 5G", href: '/' },
              { name: "Galaxy A05", href: '/' },
              { name: "Galaxy A14", href: '/' },
              { name: "Galaxy A23 5G", href: '/' },
              { name: "Galaxy A14 5G", href: '/' },
              { name: "Galaxy A04", href: '/' },
              { name: "Galaxy A73 5G", href: '/' },
              { name: "Galaxy A13", href: '/' },
            ]
          ]
        },
        {
          name: "Galaxy M",
          columns: [
            [
              { name: "Galaxy M36 5G", href: '/' },
              { name: "Galaxy M56 5G", href: '/' },
              { name: "Galaxy M06 5G", href: '/' },
              { name: "Galaxy M16 5G", href: '/' },
              { name: "Galaxy M15 5G Prime", href: '/' },
              { name: "Galaxy M55s 5G", href: '/' },
              { name: "Galaxy M05", href: '/' },
              { name: "Galaxy M35 5G", href: '/' },
              { name: "Galaxy M55 5G", href: '/' },
            ],
            [
              { name: "Galaxy M14", href: '/' },
              { name: "Galaxy M34 5G", href: '/' },
              { name: "Galaxy M14 5G", href: '/' },
              { name: "Galaxy M04", href: '/' },
              { name: "Galaxy M13", href: '/' },
              { name: "Galaxy M13 5G", href: '/' },
              { name: "Galaxy M53 5G", href: '/' },
            ]
          ]
        },
        {
          name: "Galaxy F",
          columns: [
            [
              { name: "Galaxy F07", href: '/' },
              { name: "Galaxy F17 5G", href: '/' },
              { name: "Galaxy F36 5G", href: '/' },
              { name: "Galaxy F56 5G", href: '/' },
              { name: "Galaxy F16 5G", href: '/' },
              { name: "Galaxy F06 5G", href: '/' },
              { name: "Galaxy F15 5G", href: '/' },
              { name: "Galaxy F05", href: '/' },
              { name: "Galaxy F14", href: '/' },
            ],
            [
              { name: "Galaxy F55 5G", href: '/' },
              { name: "Galaxy F34 5G", href: '/' },
              { name: "Galaxy F54 5G", href: '/' },
              { name: "Galaxy F14 5G", href: '/' },
              { name: "Galaxy F04", href: '/' },
              { name: "Galaxy F13", href: '/' },
              { name: "Galaxy F23", href: '/' },
              { name: "Galaxy F42 5G", href: '/' },
              { name: "Galaxy F12", href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "Xiaomi",
      href : "/",
      sub: [
        {
          name: "Xiaomi Series",
          columns: [
            [
              { name: "Xiaomi 15T", href: '/' },
              { name: "Xiaomi 15T Pro", href: '/' },
              { name: "Xiaomi 15", href: '/' },
              { name: "Xiaomi 15 Ultra", href: '/' },
              { name: "Xiaomi MIX Flip", href: '/' },
              { name: "Xiaomi 14T", href: '/' },
              { name: "Xiaomi 14T Pro", href: '/' },
              { name: "Xiaomi MIX Fold 3", href: '/' },
              { name: "Xiaomi 14", href: '/' },
            ],
            [
              { name: "Xiaomi 14 Ultra", href: '/' },
              { name: "Xiaomi 14 Pro", href: '/' },
              { name: "Xiaomi 13T Pro", href: '/' },
              { name: "Xiaomi 13T", href: '/' },
              { name: "Xiaomi 13 Ultra", href: '/' },
              { name: "Xiaomi 13 Lite", href: '/' },
              { name: "Xiaomi 13", href: '/' },
              { name: "Xiaomi 13 Pro", href: '/' },
              { name: "Xiaomi 12T Pro", href: '/' },
            ]
          ]
        },
        {
          name: "Redmi",
          columns: [
            [
              { name: "Redmi 15C 5G", href: '/' },
              { name: "Redmi 15", href: '/' },
              { name: "Redmi 15C", href: '/' },
              { name: "Redmi 15 5G", href: '/' },
              { name: "Redmi 13x", href: '/' },
              { name: "Redmi A5", href: '/' },
              { name: "Redmi Note 14S", href: '/' },
              { name: "Redmi Note 14", href: '/' },
              { name: "Redmi Note 14 5G", href: '/' },
            ],
            [
              { name: "Redmi Note 14 Pro", href: '/' },
              { name: "Redmi Note 14 Pro 5G", href: '/' },
              { name: "Redmi Note 14 Pro+  5G", href: '/' },
              { name: "Xiaomi 14C", href: '/' },
              { name: "Xiaomi 13C 5G", href: '/' },
              { name: "Xiaomi 13C", href: '/' },
              { name: "Xiaomi 13", href: '/' },
              { name: "Xiaomi A3x", href: '/' },
              { name: "Xiaomi A3", href: '/' },
            ]
          ]
        },
        {
          name: "Poco",
          columns: [
            [
              { name: "POCO C85", href: '/' },
              { name: "POCO M7", href: '/' },
              { name: "POCO F7", href: '/' },
              { name: "POCO C71", href: '/' },
              { name: "POCO M7 Pro", href: '/' },
              { name: "POCO F7 Pro", href: '/' },
              { name: "POCO F7 Ultra", href: '/' },
              { name: "POCO X7 Pro", href: '/' },
              { name: "POCO X7", href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "Oppo",
      href : "/",
      sub: [
        {
          name: "Find",
          columns: [
            [
              { name: 'OPPO Find N3 Flip', href: '/' },
              { name: 'OPPO Find N2 Flip', href: '/' },
              { name: 'OPPO Find X8 Pro', href: '/' },
              { name: 'OOPPO Find X8', href: '/' },
            ]
          ]
        },
        {
          name: "Reno",
          columns: [
            [
              { name: 'OPPO Reno14 5G Diwali Edition', href: '/' },
              { name: 'OPPO Reno14 Pro 5G', href: '/' },
              { name: 'OOPPO Reno14 5G', href: '/' },
              { name: 'OPPO Reno13 Pro 5G', href: '/' },
              { name: 'OPPO Reno13 5G', href: '/' },
              { name: 'OPPO Reno12 Pro 5G', href: '/' },
              { name: 'OPPO Reno12 5G', href: '/' },
              { name: 'OPPO Reno11 Pro 5G', href: '/' },
              { name: 'OPPO Reno11 5G', href: '/' },
            ]
          ]
        },
        {
          name: "Oppo A",
          columns: [
            [
              { name: 'OPPO A5x', href: '/' },
              { name: 'OPPO A5 5G', href: '/' },
              { name: 'OPPO A5x 5G', href: '/' },
              { name: 'OPPO A5 Pro 5G', href: '/' },
              { name: 'OPPO A3 Pro 5G', href: '/' },
              { name: 'OPPO A3x 5G', href: '/' },
              { name: 'OPPO A3 5G', href: '/' },
              { name: 'OPPO A3x', href: '/' },
            ]
          ]
        },
        {
          name: "Oppo F",
          columns: [
            [
              { name: 'OPPO F31 Pro+ 5G', href: '/' },
              { name: 'OPPO F31 Pro 5G', href: '/' },
              { name: 'OPPO F31 5G', href: '/' },
              { name: 'OPPO F29 Pro 5G', href: '/' },
              { name: 'OPPO F29 5G', href: '/' },
              { name: 'OOPPO F27 5G', href: '/' },
              { name: 'OPPO F27 Pro+ 5G', href: '/' },
            ]
          ]
        },
        {
          name: "Oppo K",
          columns: [
            [
              { name: 'OPPO K13 Turbo Pro 5G', href: '/' },
              { name: 'OPPO K13 Turbo 5G', href: '/' },
              { name: 'OPPO K13x 5G', href: '/' },
              { name: 'OPPO K13 5G', href: '/' },
              { name: 'OPPO K12x 5G', href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "Vivo",
      href : "/",
      sub: [
        {
          name: "Vivo X",
          columns: [
            [
              { name: 'vivo X200 FE', href: '/' },
              { name: 'vivo X Fold 5', href: '/' },
              { name: 'vivo X100 Pro', href: '/' },
              { name: 'vivo X100', href: '/' },
              { name: 'vivo X90', href: '/' },
              { name: 'vivo X90 Pro', href: '/' },
            ]
          ]
        },
        {
          name: "Vivo V",
          columns: [
            [
              { name: 'vivo V60', href: '/' },
              { name: 'vivo V50e', href: '/' },
              { name: 'vivo V50', href: '/' },
              { name: 'vivo V40', href: '/' },
              { name: 'vivo V40e', href: '/' },
              { name: 'vivo V40 Pro', href: '/' },
              { name: 'vivo V30', href: '/' },
              { name: 'vivo V30e', href: '/' },
              { name: 'vivo V30 Pro', href: '/' },
            ],
            [
              { name: 'vivo V29e 5G', href: '/' },
              { name: 'vivo V29', href: '/' },
              { name: 'vivo V29 Pro', href: '/' },
              { name: 'vivo V27', href: '/' },
              { name: 'vivo V27 Pro', href: '/' },
            ]
          ]
        },
        {
          name: "Vivo Y",
          columns: [
            [
              { name: 'vivo Y31 5G', href: '/' },
              { name: 'vivo Y31 Pro 5G', href: '/' },
              { name: 'vivo Y400 5G', href: '/' },
              { name: 'vivo Y400 Pro 5G', href: '/' },
              { name: 'vivo Y19 5G', href: '/' },
              { name: 'vivo Y39 5G', href: '/' },
              { name: 'vivo Y19e', href: '/' },
              { name: 'vivo Y29 5G', href: '/' },
              { name: 'vivo Y300 5G', href: '/' },
            ],
            [
              { name: 'vivo Y18t', href: '/' },
              { name: 'vivo Y300 Plus 5G', href: '/' },
              { name: 'vivo Y18i', href: '/' },
              { name: 'vivo Y28e 5G', href: '/' },
              { name: 'vivo Y28s 5G', href: '/' },
              { name: 'vivo Y58 5G', href: '/' },
              { name: 'vivo Y200 Pro 5G', href: '/' },
              { name: 'vivo Y18', href: '/' },
              { name: 'vivo Y200e 5G', href: '/' },
            ],
            [
              { name: 'vivo Y28 5G', href: '/' },
              { name: 'vivo Y200 5G', href: '/' },
              { name: 'vivo Y17s', href: '/' },
              { name: 'vivo Y36', href: '/' },
              { name: 'vivo Y27', href: '/' },
              { name: 'vivo Y02t', href: '/' },
              { name: 'vivo Y100', href: '/' },
              { name: 'vivo Y100A', href: '/' },
              { name: 'vivo Y56 5G', href: '/' },
            ]
          ]
        },
        {
          name: "Vivo T",
          columns: [
            [
              { name: 'vivo T4 Pro', href: '/' },
              { name: 'vivo T4R', href: '/' },
              { name: 'vivo T4 Lite 5G', href: '/' },
              { name: 'vivo T4 Ultra', href: '/' },
              { name: 'vivo T4 5G', href: '/' },
              { name: 'vivo T4x 5G', href: '/' },
              { name: 'vivo T3 Ultra', href: '/' },
              { name: 'vivo T3 Pro 5G', href: '/' },
              { name: 'vivo T3 Lite 5G', href: '/' },
            ],
            [
              { name: 'vivo T3x 5G', href: '/' },
              { name: 'vivo T3 5G', href: '/' },
              { name: 'vivo T2 Pro 5G', href: '/' },
              { name: 'vivo T2x 5G', href: '/' },
              { name: 'vivo T2 5G', href: '/' },
              { name: 'vivo T1x', href: '/' },
              { name: 'vivo T1 5G', href: '/' },
              { name: 'vivo T1 Pro 5G', href: '/' },
              { name: 'vivo T1', href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "OnePlus",
      href : "/",
      sub: [
        {
          name: "One Plus",
          columns: [
            [
              { name: 'OnePlus 13', href: '/' },
              { name: 'OnePlus 13R', href: '/' },
              { name: 'OnePlus 12', href: '/' },
              { name: 'OnePlus 12R', href: '/' },
              { name: 'OnePlus Open', href: '/' },
              { name: 'OnePlus 11 5G', href: '/' },
              { name: 'OnePlus 10T', href: '/' },
              { name: 'OnePlus 10R', href: '/' },
              { name: 'OnePlus 10 Pro', href: '/' },
            ],
            [
              { name: 'OnePlus 9', href: '/' },
              { name: 'OnePlus 9R', href: '/' },
              { name: 'OnePlus 9 Pro', href: '/' },
              { name: 'OnePlus 8T', href: '/' },
              { name: 'OnePlus Nord 4', href: '/' },
              { name: 'OnePlus Nord CE4 Lite 5G', href: '/' },
              { name: 'OnePlus Nord CE4', href: '/' },
              { name: 'OnePlus Nord CE3 Lite 5G', href: '/' },
              { name: 'OnePlus Nord 3 5G', href: '/' },
            ],
            [
              { name: 'OnePlus Nord 2T 5G', href: '/' },
              { name: 'OnePlus Nord CE2 Lite 5G', href: '/' },
              { name: 'OnePlus Nord CE2 5G', href: '/' },
              { name: 'OnePlus Nord 2 5G', href: '/' },
              { name: 'OnePlus Nord CE 5G', href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "Google",
      href : "/",
      sub: [
        {
          name: "Google Pixel",
          columns: [
            [
              { name: 'Pixel 10 Pro Fold', href: '/' },
              { name: 'Pixel 10 Pro', href: '/' },
              { name: 'Pixel 10', href: '/' },
              { name: 'Pixel 9a', href: '/' },
              { name: 'Pixel 9 Pro Fold', href: '/' },
              { name: 'Pixel 9', href: '/' },
              { name: 'Pixel 9 Pro', href: '/' },
              { name: 'Pixel 8a', href: '/' },
              { name: 'Pixel 8', href: '/' },
            ],
            [
              { name: 'Pixel 10 Pro Fold', href: '/' },
              { name: 'Pixel 10 Pro', href: '/' },
              { name: 'Pixel 10', href: '/' },
              { name: 'Pixel 9a', href: '/' },
              { name: 'Pixel 9 Pro Fold', href: '/' },
              { name: 'Pixel 9', href: '/' },
              { name: 'Pixel 9 Pro', href: '/' },
              { name: 'Pixel 8a', href: '/' },
              { name: 'Pixel 8', href: '/' },
            ],
            [
              { name: 'Pixel 10 Pro Fold', href: '/' },
              { name: 'Pixel 10 Pro', href: '/' },
              { name: 'Pixel 10', href: '/' },
              { name: 'Pixel 9a', href: '/' },
              { name: 'Pixel 9 Pro Fold', href: '/' },
              { name: 'Pixel 9', href: '/' },
              { name: 'Pixel 9 Pro', href: '/' },
              { name: 'Pixel 8a', href: '/' },
              { name: 'Pixel 8', href: '/' },
            ]
          ]
        }
      ]
    },
    {
      name: "Realme",
      href : "/",
      sub: [
        {
          name: "Realme GT",
          columns: [
            [
              { name: 'Realme GT 6', href: '/' },
              { name: 'Realme GT 6T', href: '/' },
              { name: 'Realme GT Neo 6', href: '/' },
              { name: 'Realme GT Neo 5', href: '/' },
              { name: 'Realme GT Neo 5 SE', href: '/' },
              { name: 'Realme GT 5', href: '/' },
              { name: 'Realme GT 3', href: '/' },
              { name: 'Realme GT 2', href: '/' },
              { name: 'Realme GT Neo 3', href: '/' },
            ]
          ]
        },
        {
          name: "Realme",
          columns: [
            [
              { name: 'Realme 12 Pro+', href: '/' },
              { name: 'Realme 12 Pro', href: '/' },
              { name: 'Realme 12+', href: '/' },
              { name: 'Realme 12', href: '/' },
              { name: 'Realme 11 Pro+', href: '/' },
              { name: 'Realme 11 Pro', href: '/' },
              { name: 'Realme 11', href: '/' },
              { name: 'Realme 10 Pro+', href: '/' },
              { name: 'Realme 10 Pro', href: '/' },
            ]
          ]
        },
        {
          name: "Realme P",
          columns: [
            [
              { name: 'Realme P1', href: '/' },
              { name: 'Realme P1 Pro', href: '/' },
            ]
          ]
        },
        {
          name: "Realme C",
          columns: [
            [
              { name: 'Realme C65', href: '/' },
              { name: 'Realme C63', href: '/' },
              { name: 'Realme C61', href: '/' },
              { name: 'Realme C53', href: '/' },
              { name: 'Realme C51', href: '/' },
              { name: 'Realme C55', href: '/' },
              { name: 'Realme C33', href: '/' },
              { name: 'Realme C30', href: '/' },
              { name: 'Realme C25', href: '/' },
            ]
          ]
        },
        {
          name: "Realme Narzo",
          columns: [
            [
              { name: 'Realme Narzo 70 Pro', href: '/' },
              { name: 'Realme Narzo 70', href: '/' },
              { name: 'Realme Narzo 60 Pro', href: '/' },
              { name: 'Realme Narzo 60', href: '/' },
              { name: 'Realme Narzo 50 Pro', href: '/' },
              { name: 'Realme Narzo 50', href: '/' },
              { name: 'Realme Narzo 30', href: '/' },
              { name: 'Realme Narzo 20', href: '/' },
              { name: 'Realme Narzo 10', href: '/' },
            ]
          ]
        }
      ]
    }
  ];

  // Handler for main nav click
  // Handler for sub nav click
  const handleSubClick = (name) => {
    setActiveSub(activeSub === name ? null : name);
  };

  const handleMainEnter = (name) => {
    setActiveMain(name);
    setActiveSub(null); // Close sub-dropdown when switching main
  }

  const handleMainLeave = () => {
    setActiveMain(null);
    setActiveSub(null);
  }

  return (
    <header>
      <nav>
        <div className='top-shelve'>
          <div className='left-section'>
            <Link to={"/"} className='logo'><HiOutlineBars3CenterLeft /></Link>
            <IoSearch className='search-icon' />
            <input className='search-bar' type="text" placeholder='Search' />
          </div>
          <div className='user-section-container'>
            <div className='user-section'>
              <Link to={"/login"}><HiOutlineUserCircle className='user-icon' /></Link>
              <Link to={"/login"} className='login-nav-btn'>My account</Link>
              <Link to={"/cart"} className='cart-btn'><LuShoppingCart className='cart-icon' />Cart</Link>
              {
                cartItems.length > 0 ? <span>{cartItems.length}</span> : <span>0</span>
              }
            </div>
          </div>
        </div>
        <div className='bottom-shelve'>
          {menu.map((item) => (
            <Link to={item.href} style={{ textDecoration: 'none' }} >
              <button
                key={item.name}
                className={`nav-links${activeMain === item.name ? " active" : ""}`}
                onMouseEnter={() => handleMainEnter(item.name)}
                style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
              >
                {item.name}
                
                <IoIosArrowDown className='arrow-icon' />
              </button>
            </Link>
          ))}
        {/* Main Dropdown */}
        {activeMain && (
          <div className='main-dropdown' onMouseLeave={handleMainLeave} >
            <ul className='main-shelve' >
              {menu.find(nav => nav.name === activeMain).sub.map(subItem => (
                <li key={subItem.name} className='main-items'>
                  <button
                    className={`main-link${activeSub === subItem.name ? " active" : ""}`}
                    onClick={() => handleSubClick(subItem.name)}
                    style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}
                  >
                    {subItem.name}
                  </button>
                  {/* Sub Dropdown */}
                  {activeSub === subItem.name && (
                    <div className="sub-dropdown-columns">
                      {subItem.columns.map((col, idx) => (
                        <ul className={`sub-shelve${idx ? '-' + idx : ''}`} key={idx}>
                          {col.map((item) => (
                            <li key={item.name} className='sub-items' >
                              <Link to={item.href} className='sub-link'>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>

        
      </nav>
    </header>
  );
}