import { StoryContent } from '../StoryContentClass';

export function superheroMain1(
  userName: string,
  avatar: string
): StoryContent[] {
  return [
    {
      part1male: `My name is ${userName} and I seriously love to play`,
      part2male: `But there’s a few things you should know, like what I do when everyone’s away`,
      part1female: `My name is ${userName} and I seriously love to play`,
      part2female: `But there’s a few things you should know, like what I do when everyone’s away`,
      background: `~/assets/images/superhero/01-${avatar}.jpg`,
    },
    {
      part1male: `Although I like to cuddle, there’s a secret I can’t spill`,
      part2male: `When someone is in trouble, I use my super skills`,
      part1female: `Although I like to cuddle, there’s a secret I can’t spill`,
      part2female: `When someone is in trouble, I use my super skills`,
      background: `~/assets/images/superhero/02-${avatar}.jpg`,
    },
    {
      part1male: `That’s right - I’m a secret superhero, with secret superpowers`,
      part2male: `If there’s danger nearby I never shy away and cower`,
      part1female: `That’s right - I’m a secret superhero, with secret superpowers`,
      part2female: `If there’s danger nearby I never shy away and cower`,
      background: `~/assets/images/superhero/03-${avatar}.jpg`,
    },
    {
      part1male: `I’m brave just like a lion, and stronger than a bear`,
      part2male: `I can fly just like an eagle and I’ve got delicious hair`,
      part1female: `I’m brave just like a lion, and stronger than a bear`,
      part2female: `I can fly just like an eagle and I’ve got delicious hair`,
      background: `~/assets/images/superhero/04-${avatar}.jpg`,
    },
    {
      part1male: `Whenever someone naughty tries to flea I put on my magic cape`,
      part2male: `And tie them to the nearest lamppost with super-sticky tape`,
      part1female: `Whenever someone naughty tries to flea I put on my magic cape`,
      part2female: `And tie them to the nearest lamppost with super-sticky tape`,
      background: `~/assets/images/superhero/05-${avatar}.jpg`,
    },
  ];
}
