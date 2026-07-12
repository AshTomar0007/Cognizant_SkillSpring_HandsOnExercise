package Cognizant_SkillSpring_HandsOnExercise.Week1_DataStructure.Exercise2_FinancialForecasting;

import java.util.Scanner;

public class FinancialForecast {
    public static double futureValue(double currentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        return futureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (in decimal): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double result = futureValue(currentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n", years, result);

        sc.close();
    }
}


