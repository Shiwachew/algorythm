1. First we check if there are any candies if not we return empty array. 
2. Second step is to check if all candies are above the threshold if that is correct we return empty array.
3. Third step we find the candy with lowest sugar value and save its index for future usage.
4. In the fourth step we loop through the candies array and summarize their value with the lowest sugar candy, if the value is above the threshold we skip it if not we save the index in array. 
5. We check if the previous summary value plus the new one is below the threshold and if yes we add the index if not we reset the calculations.
6. After that we get and array of the values from the saved indexes from the prevoius loop. We check if the summary of all the values in that array is above the threshold, if it is we remove the highest value to ensure we got the lowest possible amount of sugar.
6. In the last step we return sorted array with the indexes of all the candies which are possible to eat.