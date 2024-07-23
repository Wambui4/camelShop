import axios from 'axios'


const state={
    stockDetails : [     //edit the names accordingly to the backend products in laravel
        {
          itemNumber: 1,
          itemName :"Jelly beans",
          itemPrice : 20,
          itemQuantity : 30,
          itemImage: '../images/jelly beans.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 2,
          itemName : "Mackaroon",
          itemPrice : 100,
          itemQuantity : 4,
          itemImage: '../images/mockaroon.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 3,
          itemName : "Lollipops",
          itemPrice : 10,
          itemQuantity : 4,
          itemImage: '../images/lollipops.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 4,
          itemName : "Chocolate bars",
          itemPrice : 120,
          itemQuantity : 10,
          itemImage: '../images/chocolate bars.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 5,
          itemName : "Ice cream",
          itemPrice : 50,
          itemQuantity : 15,
          itemImage: '../images/ice cream.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 6,
          itemName : "Gummy worms",
          itemPrice : 150,
          itemQuantity : 165,
          itemImage: '../images/gummy worms.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 7,
          itemName : "Donuts",
          itemPrice : 50,
          itemQuantity : 100,
          itemImage: '../images/donouts.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 8,
          itemName : "Chocolate",
          itemPrice : 250,
          itemQuantity : 80,
          itemImage: '../images/chocolate.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 9,
          itemName : "Oreo",
          itemPrice : 30,
          itemQuantity : 170,
          itemImage: '../images/oreo.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 10,
          itemName : "Soda",
          itemPrice : 90,
          itemQuantity : 100,
          itemImage: '../images/soda.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 11,
          itemName : "Juice",
          itemPrice : 70,
          itemQuantity : 90,
          itemImage: '../images/juice.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

        {
          itemNumber: 12,
          itemName : "Biscuits",
          itemPrice : 50,
          itemQuantity : 100,
          itemImage: '../images/biscuits.jpg',
          description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },

      ],
      allProducts:[]
}
 
const getters={
  stock:(state) => state.allProducts,
}

const actions = {
	async fetchProducts({ commit }) {
		try {
		  const data = await axios.get(
			"http://127.0.0.1:8000/api/products"//edit to my personal url(laravel is needed)
		  );
		  commit("SET_PRODUCTS", data.data);
		} catch (error) {
		  alert(error);
		  console.log(error);
		}
	  },

}
const mutations = {
	SET_PRODUCTS (state, allProducts) {
		state.allProducts = allProducts //modify the all products state
	}
}

export default{
   state,
   getters,
   actions,
   mutations
}