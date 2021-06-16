import { hasUserWon } from './game.context';
import PodType from 'enums/podType.enum';

describe('fn: hasUserWon', () => {
  it('should return true if user has picked paper and house has picked rock', () => {
    expect(hasUserWon(PodType.Paper, PodType.Rock)).toBeTruthy();
  });

  it('should return true if user has picked rock and house has picked scissor', () => {
    expect(hasUserWon(PodType.Rock, PodType.Scissor)).toBeTruthy();
  });

  it('should return true if user has picked scissor and house has picked paper', () => {
    expect(hasUserWon(PodType.Scissor, PodType.Paper)).toBeTruthy();
  });

  it('should return false in all other cases', () => {
    expect(hasUserWon(PodType.Paper, PodType.Scissor)).toBeFalsy();
    expect(hasUserWon(PodType.Rock, PodType.Paper)).toBeFalsy();
    expect(hasUserWon(PodType.Scissor, PodType.Rock)).toBeFalsy();
  });
});