import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  men = [{
    name: "Special Offers",
    link: "special-offers",
    value: [{
      name: "20% Discount",
      link: "products/men/20-discount"
    }, {
      name: "Buy one get one",
      link: "products/men/buy-one-get-one"
    }]
  },
  {
    name: "Clothing",
    link: "clothing",
    value: [{
      name: "New Arrival",
      link: "products/men/new-arrival"
    },
    {
      name: "Hoodies & Sweatshirts",
      link: "products/men/hoodies-sweatshirts"
    }, {
      name: "Jackets & Outerwear",
      link: "products/men/jackets-outerwear"
    }, {
      name: "Denim & Jeans",
      link: "products/men/denim-jeans"
    }, {
      name: "Graphic Tees",
      link: "products/men/graphic-tees"
    }, {
      name: "Tops",
      link: "products/men/tops"
    }
    ]
  },
  {
    name: "Accessories",
    link: "accessories",
    value: [
      {
        name: "Shoes",
        link: "products/men/shoes"
      },
      {
        name: "Hats & Beanies",
        link: "products/men/hats-beanies"
      },
      {
        name: "Bags & Backpacks",
        link: "products/men/bags-backpacks"
      },
      {
        name: "Sunglasses",
        link: "products/men/sunglasses"
      }
    ]
  }
  ]

  women = [{
    name: "Special Offers",
    link: "special-offers",
    value: [{
      name: "20% Discount",
      link: "products/women/20-discount"
    }, {
      name: "Buy one get one",
      link: "products/women/buy-one-get-one"
    }]
  },
  {
    name: "Clothing",
    link: "clothing",
    value: [{
      name: "New Arrival",
      link: "products/women/new-arrival"
    },
    {
      name: "Tops",
      link: "products/women/tops"
    },
    {
      name: "Dresses",
      link: "products/women/dresses"
    },
    {
      name: "Jackets & Outerwear",
      link: "products/women/jackets-outerwear"
    },
    {
      name: "Denim & Jeans",
      link: "products/women/denim-jeans"
    },
    {
      name: "Lingerie & Sleepwear",
      link: "products/women/lingerie-sleepwear"
    },
    {
      name: "Rompers & Jumpsuits",
      link: "products/women/rompers-jumpsuits"
    }
    ]
  }, {
    name: "Accessories",
    link: "accessories",
    value: [
      {
        name: "Shoes",
        link: "products/women/shoes"
      },
      {
        name: "Bags & Backpacks",
        link: "products/women/bags-backpacks"
      },
      {
        name: "Sunglasses",
        link: "products/women/sunglasses"
      }
    ]
  }
  ]


  constructor() { }

  ngOnInit() {
  }

}
