package com.springdemo;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class AAAExampleTest {

    private int number;

    @BeforeEach
    public void setUp() {
        System.out.println("Setting up...");
        number = 10;
    }

    @AfterEach
    public void tearDown() {
        System.out.println("Cleaning up...");
    }

    @Test
    public void testAddition() {

        int num1 = number;
        int num2 = 5;

        int result = num1 + num2;

        assertEquals(15, result);
    }
}