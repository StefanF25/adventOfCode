export const findLevel = (
  input: string,
  goalLevel: number | undefined = undefined,
): number[] => {
  let currentLevel: number = 0,
    currentStep: number = 0

  for (const char of input) {
    currentStep++
    switch (char) {
      case "(":
        currentLevel++
        break
      case ")":
        currentLevel--
        break
      default:
        // reduces step on empty input
        currentStep--
    }
    // loop breaks at goal
    if (currentLevel === goalLevel) break
  }

  console.log(`Santa arrives at level ${currentLevel} at step ${currentStep}`)
  return [currentLevel, currentStep]
}
