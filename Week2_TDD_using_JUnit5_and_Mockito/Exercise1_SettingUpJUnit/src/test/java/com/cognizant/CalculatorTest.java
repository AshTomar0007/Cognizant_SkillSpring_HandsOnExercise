package com.cognizant;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    @Test
    void testAddition() {

        Calculator calculator = new Calculator();

        assertEquals(30, calculator.add(10, 20));
    }
}