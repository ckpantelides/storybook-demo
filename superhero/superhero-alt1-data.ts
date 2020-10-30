import { StoryContent } from '../StoryContentClass';

export function superheroAlt1(
  userName: string,
  avatar: string
): StoryContent[] {
  return [
    {
      part1male: `When you need help, any at all, just give out a little cry or a great big shout`,
      part2male: `Don’t be afraid to give super ${userName} a call for he will always help you out!... “SUPER ${userName}”`,
      part1female: `When you need help, any at all, just give out a little cry or a great big shout`,
      part2female: `Don’t be afraid to give super ${userName} a call for she will always help you out!... “SUPER ${userName}”`,
      // There is only one option for image 6
      background: `~/assets/images/superhero/06-01.jpg`,
    },
  ];
}
