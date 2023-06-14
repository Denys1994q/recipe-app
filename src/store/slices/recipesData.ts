import { v4 as uuidv4 } from "uuid";

export const recipes = [
    {
        title: "Microwave Caramel Corn",
        id: uuidv4(),
        image: require("../../imgs/corn.jpg"),
        description:
            "Try this easy homemade microwave caramel corn! It’s fast, easy to clean up after, and utterly snackable. The secret is a big brown paper bag. The rich and buttery smell of a freshly homemade caramel corn lingers in the air for hours, evoking celebratory occasions like the Christmas holidays or a county fair. And it’s all thanks to a microwave—no candy-making skills required. Microwave caramel corn is incredibly simple yet deftly impressive. Make it on a whim as a snack or plan ahead to give it as a gift",
        ingredients: [
            "1 cup brown sugar (light or dark)",
            "1/4 cup corn syrup (light or dark)",
            "3 tablespoons unsalted butter",
            "1/2 teaspoon salt",
        ],
        instructions: [
            "Add 200g of sweet corn, 30g of Green beans,30g of carrot,30g of Ham，salt, stir-fry over medium heat for a while",
            "Mix flour with water and milk to make a thin batter",
            "Grease the pan, pour in the batter, and turn the pan quickly to form a round cake while the batter is not completely set. ",
        ],
        timeCooking: 40
    },
    {
        title: "Cheesy Baked Cauliflower",
        id: uuidv4(),
        image: require("../../imgs/cheese.webp"),
        description:
            "Low carb and utterly delicious, this quick and easy cheesy cauliflower casserole makes a decadent holiday or weeknight dinner side dish. Keep it simple with tender florets and a rich cheese sauce, or load this cauliflower bake with bacon and minced chives.",
        ingredients: [
            "2 large heads (10 cups) cauliflower, cut into bite-sized florets",
            "8 ounces sharp cheddar cheese, grated",
            "3 tablespoons unsalted butter",
            "4 tablespoons unsalted butter",
        ],
        instructions: [
            "To Freeze",
            "To Reheat from Frozen",
            "Grease the pan, pour in the batter, and turn the pan quickly to form a round cake while the batter is not completely set. ",
        ],
        timeCooking: 150
    },
    {
        title: "Eggplant Parmesan",
        id: uuidv4(),
        image: require("../../imgs/parmesan.webp"),
        description:
            "Eggplant Parmesan is one of those great Italian comfort foods—a layered casserole much like lasagna but with slices of globe eggplant taking the place of pasta. The two things to keep in mind when cooking eggplant, especially firm globe eggplants, is that not only do eggplants hold onto moisture, they also absorb oil like a sponge. So if you're not careful you can end up with something mushy and oily.",
        ingredients: [
            "1 cup brown sugar (light or dark)",
            "1/4 cup corn syrup (light or dark)",
            "3 tablespoons unsalted butter",
            "1/2 teaspoon salt",
        ],
        instructions: [
            "Add up to 3 additional minced garlic cloves.",
            "Add 1 teaspoon of dried oregano or 2 teaspoons of chopped fresh oregano.",
            "Add 1/2 teaspoon of red pepper flakes or more to taste.",
        ],
        timeCooking: 120
    },
    {
        title: "Roasted Broccoli With Parmesan",
        id: uuidv4(),
        image: require("../../imgs/broccoli.webp"),
        description:
            "Everyone loves this roasted broccoli recipe with florets tossed in olive oil, lemon juice and salt, roasted and served with parmesan cheese and lots of black pepper. So I was quite pleasantly surprised when my goddaughter and her sisters not only raved about roasted broccoli, but insisted on making a batch for me during a recent visit.",
        ingredients: [
            "Kosher salt",
            "2 to 3 cloves garlic, minced",
            "Freshly ground black pepper",
            "1/4 cup grated Parmesan cheese, or to taste",
        ],
        instructions: [
            "Use Asiago cheese instead of Parmesan",
            "Use half kale and half broccoli",
            "Use Cojita cheese instead of Parmesan",
        ],
        timeCooking: 100
    },
];