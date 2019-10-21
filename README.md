# Simple App

Simple stores app that consists of 3 pages list, details and checkout

## Features

1- Show List of stores using the following API
https://api.unocart.com/api/v1/2000/groceries/shops/

Each store item should have the following
1- Store name
2- Store address
3- Store image
4- Short description ( limit it to 60 char)

The API can return more than 100 items so we will need to take care of pagination and show the result to the user 10 by 10 if there are items available

 2- When the user clicks on one of the store items, the app should show the store details page like the following
1- Store cover
2- Store image
3- Store name
4- The description
5- Opening hours (if exist ) please note if you need to show the opening hours you should convert the value from seconds to hours
Example: if you get the following value for start 43200 it should show as 12:00 for the opening hour
6- List of items for this store you can show about 3 items and the user can click on see all to check all items

https://api.unocart.com/api/v1/6000/groceries/shops/24/specials/

Where 24 is the store id
In the product item, you should show the following
1- Image
2- Name
3- Price in cents
4- Icon to indicate if available in the store or not
5- Add to cart button where this button will add selected items to the user cart  ( User can only add items from one store, So you will need to check if there any items in the cart from another store and give the user option to clear current cart or cancel adding the selected item)

when the user clicks on the cart icon the user can check his selected items and he can proceed ( click proceed will only show success message for now)

## How to run

1- Run this command to install node modules:

```json
$ npm i
```

2- Inside the project directory run: (to serve angular project locally)

```json
$ ng serve -o
```

## Bonus Features
1- basic validation

2- services caching

3- performance code

