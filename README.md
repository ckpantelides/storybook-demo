# Storybook demo

This repo holds sample code of my children's storybook app. (As this is a commercial product I'm not sharing all of the code.)

The trailer below shows the:
* animated homescreen
* character select screen
* Secret Superhero story
* bookstop for purchasing physical copies of the stories

![](trailer.gif)

There are four professionally illustrated stories, three of which are in-app purchases.

The app is built with NativeScript-Angular and TypeScript and will be available for iOS and Android. There's also a node backend for handling bookshop orders, and a React admin dashboard to view bookshop orders.

### Code structure

Each page of a story has a background image and two lines of text, that are altered depending on the name, gender and avatar chosen by the user. Each page reuses the [story page](https://github.com/ckpantelides/storybook-demo/tree/main/storypage) component, which populates the page from story data held in [arrays of objects](https://github.com/ckpantelides/storybook-demo/blob/main/superhero/superhero-main1-data.ts). As the reader presses the ">" arrow in the story, the array is cycled through, updating the background image and the text. Once the end of the array is reached, the reader is asked a question via the [question-page](https://github.com/ckpantelides/storybook-demo/tree/main/questionpage) component. How they answer the question determines whether they continue down the main branch of the story or an alternate branch. Each story has four questions and four alternate paths that later rejoin the main path.

The app opens on the hub page, which shows the four stories horizontally. As the user scrolls through the stories, the position of the story is checked. In the center it grows, at the edges it shrinks.

The user chooses the name and the look of the protagonist via the [settings component](https://github.com/ckpantelides/storybook-demo/tree/main/settings). The name, gender and avatar are saved in Application Settings. These are then fed into the story-data arrays which are used by the story-page component.

In-app purchases rely on the nativescript-purchase module. The [in-app purchase service](https://github.com/ckpantelides/storybook-demo/blob/main/services/iap.service.ts) controls making new purchases, checking whether stories have already been purchased, restoring purchases and marking stories as 'purchased' on the hub page. When a user clicks on a story from the hub page, it checks whether the story has been purchased, and then uses the [settings service](https://github.com/ckpantelides/storybook-demo/blob/main/services/settings.service.ts) to check whether the name, gender or avatar is missing.

#### Bookshop and node backend

Users can also purchase physical copies of the four stories via the [bookshop](https://github.com/ckpantelides/storybook-demo/tree/main/bookshop). Payments are handled by Stripe and its Payment Intents API, which complies with the Strong Customer Authentication requirements. The app uses the NativeScript httpModule to communicate with my node backend that authenticates payments and stores order details. The node backend also uses JSON web tokens to authenticate a React admin dashboard used to view the orders.


