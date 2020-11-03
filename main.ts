let coins = 12
let apple_price = 2
let apple_quantity = 2
let strawberry_price = 3
let strawberry_quantity = 6
let chicken_leg_price = 7
let chicken_leg_quantity = 3
scene.setBackgroundColor(5)
game.splash("You have " + coins + "coins from the start ")
coins = coins / (apple_price * apple_quantity)
game.splash("You have " + coins + "coins now after selling the apples")
coins = coins / (strawberry_price * strawberry_quantity)
game.splash("You have " + coins + "coins now after selling the strawberries ")
coins = coins / (chicken_leg_price * chicken_leg_quantity)
game.splash("You have " + coins + "coins now after selling the chicken legs ")
game.splash("Welcome")
