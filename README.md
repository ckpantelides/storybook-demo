# Storybook demo

This repo holds sample code of my children's storybook app. (As this is a commercial product I'm not sharing all of the code.)

The trailer below shows the:
* animated homescreen
* character select screen
* Secret Superhero story
* bookstore for purchasing physical copies of the stories

![](trailer.gif)

There are four professionally illustrated stories, three of which are in-app purchases.

The app is built with NativeScript-Angular and TypeScript and will be available for iOS and Android.

### Code structure

Each page of the story has a background image and two lines of text, that are altered depending on the name, gender and avatar chosen by the user. Each page reuses the [story page](https://github.com/ckpantelides/storybook-demo/tree/main/storypage) component, which populates the page from story data held in [arrays of objects](https://github.com/ckpantelides/storybook-demo/blob/main/superhero/superhero-main1-data.ts). As the reader presses the ">" arrow in the story, the array is cycled through, updating the page shown to the user. Once the end of the array is reached, the reader is asked a [question](https://github.com/ckpantelides/storybook-demo/tree/main/questionpage). How they answer the question determines whether they're led down an alternative branch or whether they stay on the main branch.

I've shared 

Each story has questions that lead the reader to alternative paths. is built from 12 sections - there's a 'main' path built of 4 sections of typically four pages, and questions that lead to alternative paths path with four questions that either keep the reader on the main path or lead to alternate paths that later rejoin the main path. So each story has 12 sections: main 1 to 4, question 1 to 4, alt 1 to 4.

The user chooses the name and the look of the protagonist in the [settings modules](https://github.com/ckpantelides/storybook-demo/tree/main/settings). The name, gender and avatar are saved in Application Settings.

Each story has four questions that lead to four alternative routes that later rejoin the main story route. Each story relies on a reusable [story-page](https://github.com/ckpantelides/storybook-demo/tree/main/storypage) child  has questions that lead to branching paths which later rejoin the main story path. For example the is made up of the reusable [story page](https://github.com/ckpantelides/storybook-demo/tree/main/storypage)

The app opens on the hub page, which shows the four stories. Each time the user scrolls through the stories, the position of the story-image is checked, and the the image grows or shrinks as appropriate.

In-app purchases rely on the nativescript-purchase module. The [in-app purchase service](https://github.com/ckpantelides/storybook-demo/blob/main/services/iap.service.ts) controls making new purchases, checking whether stories have already been purchased, restoring purchases and marking stories as 'purchased' on the hub page.


