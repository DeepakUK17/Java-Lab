import java.util.*;

public class New {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

// ============================================================
//  INPUT / OUTPUT PROGRAMS
// ============================================================

// Q1. Print Welcome
//      System.out.print("Welcome");

// Q2. Print the given word
//      String word = s.next();
//      System.out.print("Name: " + word);

// Q3. Print the given Message (full line)
//      String msg = s.nextLine();
//      System.out.print("My full name: " + msg);

// Q4. Print the given integer number
//      int num = s.nextInt();
//      System.out.print("Number is " + num);

// Q5. Print the given fractional number
//      float f = s.nextFloat();
//      System.out.print("Fractional number is: " + f);

// Q6. Print the given fractional number in 2 digit decimal format
//      double d = s.nextDouble();
//      System.out.printf("%.2f", d);

// Q7. Print given integer number in Hexadecimal format
//      int num = s.nextInt();
//      System.out.printf("%x", num);

// Q8. Print given integer number in octal format
//      int num = s.nextInt();
//      System.out.printf("%o", num);

// Q9. Print given hexadecimal number in integer format
//      String hexa = s.next();
//      int num = Integer.parseInt(hexa, 16);
//      System.out.print(num);

// Q10. Convert octal number to integer (decimal)
//      String oct = s.next();
//      int num = Integer.parseInt(oct, 8);
//      System.out.print(num);

// Q11. Print the ASCII value of a character
//      char ch = s.next().charAt(0);
//      System.out.print((int) ch);

// Q12. Print the character for given ASCII value
//      int ascii = s.nextInt();
//      char ch = (char) ascii;
//      System.out.print(ch);

// Q13. Print two numbers with a space between them
//      int a = s.nextInt();
//      int b = s.nextInt();
//      System.out.println(a + " " + b);

// Q14. Print two numbers with a tab space between them
//      int a = s.nextInt();
//      int b = s.nextInt();
//      System.out.println(a + "\t" + b);

// Q15. Print two numbers in two lines
//      int a = s.nextInt();
//      int b = s.nextInt();
//      System.out.println(a);
//      System.out.println(b);

// Q16. Print a character in single quotes
//      char ch = s.next().charAt(0);
//      System.out.print("'" + ch + "'");

// Q17. Print two words in double quotes
//      String word1 = s.nextLine();
//      System.out.print("\"" + word1 + "\"");

// Q18. Print date of birth in the format DD/MM/YYYY
//      int day   = s.nextInt();
//      int month = s.nextInt();
//      long year = s.nextLong();
//      System.out.print(day + "/" + month + "/" + year);

// Q19. Print an integer with a plus sign (+) before it
//      int n = s.nextInt();
//      System.out.print("+" + n);

// Q20. Print the size of char, int, float and double
//      System.out.println("Size of char: "   + Character.BYTES + " bytes");
//      System.out.println("Size of int: "    + Integer.BYTES   + " bytes");
//      System.out.println("Size of float: "  + Float.BYTES     + " bytes");
//      System.out.println("Size of double: " + Double.BYTES    + " bytes");

// Q21. Print roll number and name in format: Roll No: 123, Name: John
//      int roll    = s.nextInt();
//      String name = s.next();
//      System.out.print("Roll No: " + roll + ", Name: " + name);

// Q22. Print marks in 5 subjects each on a new line
//      int sub1 = s.nextInt(); int sub2 = s.nextInt();
//      int sub3 = s.nextInt(); int sub4 = s.nextInt(); int sub5 = s.nextInt();
//      System.out.print("Subject 1:" + sub1 + "\n");
//      System.out.print("Subject 2:" + sub2 + "\n");
//      System.out.print("Subject 3:" + sub3 + "\n");
//      System.out.print("Subject 4:" + sub4 + "\n");
//      System.out.print("Subject 5:" + sub5);

// Q23. Print blood group
//      String bloodgroup = s.nextLine();
//      System.out.print(bloodgroup);

// Q24. Print current time in HH:MM:SS
//      System.out.print(new java.time.LocalTime().now().toString().substring(0, 8));

// Q25. Print address in multiple lines using \n
//      System.out.print("No.5, Main Street\nChennai\nTamil Nadu\nIndia");


// ============================================================
//  OPERATOR PROGRAMS
// ============================================================

// Q1. Sum of two numbers
//      int num1 = s.nextInt();
//      int num2 = s.nextInt();
//      int sum = num1 + num2;
//      System.out.print("The sum is: " + sum);

// Q2. Difference of two numbers
//      int num1 = s.nextInt();
//      int num2 = s.nextInt();
//      int difference = num1 - num2;
//      System.out.print("The difference is: " + difference);

// Q3. Product of two numbers
//      int num1 = s.nextInt();
//      int num2 = s.nextInt();
//      int product = num1 * num2;
//      System.out.print("The Product is: " + product);

// Q4. Quotient of two numbers
//      int num1 = s.nextInt();
//      int num2 = s.nextInt();
//      int quotient = num1 / num2;
//      System.out.print("The quotient is: " + quotient);

// Q5. Remainder of two numbers
//      int num1 = s.nextInt();
//      int num2 = s.nextInt();
//      int remainder = num1 % num2;
//      System.out.print("The remainder is: " + remainder);

// Q6. Swap two numbers using third variable
//      int num1 = s.nextInt();
//      int num2 = s.nextInt();
//      int temp = num1;
//      num1 = num2;
//      num2 = temp;
//      System.out.print(num1 + " " + num2);

// Q7. Swap two numbers without third variable
//      int a = s.nextInt();
//      int b = s.nextInt();
//      a = a + b;
//      b = a - b;
//      a = a - b;
//      System.out.print(a + " " + b);

// Q8. Print the last digit of given number N
//      int num = s.nextInt();
//      int last_digit = num % 10;
//      System.out.print(last_digit);

// Q9. Print all digits except last digit of given number N
//      int num = s.nextInt();
//      long all_digits = num / 10;
//      System.out.print(all_digits);

// Q10. Sum of first and last digit of a 3-digit number
//      int num   = s.nextInt();
//      int last  = num % 10;
//      int first = num / 100;
//      System.out.print(first + last);

// Q11. Middle digit of a 3-digit number
//      long num    = s.nextLong();
//      long middle = (num / 10) % 10;
//      System.out.print(middle);

// Q12. Absolute value of a given number
//      int num = s.nextInt();
//      int abs = Math.abs(num);
//      System.out.print(abs);

// Q13. Square of a given number
//      int num = s.nextInt();
//      int sq  = num * num;
//      System.out.print(sq);

// Q14. Cube of a given number
//      int num  = s.nextInt();
//      int cube = num * num * num;
//      System.out.print(cube);

// Q15. Average of three numbers
//      int a = s.nextInt(); int b = s.nextInt(); int c = s.nextInt();
//      double avg = (a + b + c) / 3.0;
//      System.out.print(avg);

// Q16. Check whether two numbers are equal
//      int a = s.nextInt(); int b = s.nextInt();
//      if (a == b) System.out.print("True");
//      else        System.out.print("False");

// Q17. Check if a number is power of 2 using bitwise AND
//      int n = s.nextInt();
//      if (n > 0 && (n & (n - 1)) == 0)
//          System.out.print("Power of 2");
//      else
//          System.out.print("Not a power of 2");

// Q18. Print whether a number is positive or negative
//      int n = s.nextInt();
//      if (n > 0)       System.out.print("Positive");
//      else if (n < 0)  System.out.print("Negative");
//      else             System.out.print("Zero");

// Q19. Find the greatest of three numbers
//      int a = s.nextInt(); int b = s.nextInt(); int c = s.nextInt();
//      String large = (a > b) ? ((a > c) ? "a is large" : "c is large")
//                              : ((b > c) ? "b is large" : "c is large");
//      System.out.print(large);

// Q20. Price After Discount
//      double price    = s.nextDouble();
//      double discount = s.nextDouble();
//      double discountAmount = (price * discount) / 100;
//      double finalPrice     = price - discountAmount;
//      System.out.print(finalPrice);

// Q21. Convert Minutes to Seconds
//      int mints = s.nextInt();
//      long sec  = (long) mints * 60;
//      System.out.print(sec);

// Q22. Split the Bill Among 3 Friends
//      double bill    = s.nextDouble();
//      double perHead = bill / 3;
//      System.out.printf("%.2f", perHead);

// Q23. Calculate the Distance Travelled  (distance = speed * time)
//      double speed    = s.nextDouble();
//      double time     = s.nextDouble();
//      double distance = speed * time;
//      System.out.print(distance);

// Q24. Convert Kilometers to Meters
//      double km = s.nextDouble();
//      double m  = km * 1000;
//      System.out.print(m);

// Q25. Area of an Equilateral Triangle  (area = (sqrt(3)/4) * a^2)
//      double a    = s.nextDouble();
//      double area = (Math.sqrt(3) / 4) * a * a;
//      System.out.printf("%.2f", area);

// Q26. Convert Celsius to Fahrenheit
//      double celsius    = s.nextDouble();
//      double fahrenheit = (celsius * 9.0 / 5.0) + 32;
//      System.out.printf("%.2f", fahrenheit);

// Q27. Distribute Candies Equally Among People
//      int totalCandies = s.nextInt();
//      int people       = s.nextInt();
//      System.out.println("Each person gets: " + (totalCandies / people) + " candies");
//      System.out.println("Leftover candies: " + (totalCandies % people));


// ============================================================
//  DECISION MAKING PROGRAMS
// ============================================================

// Q1. Sum of Two Doubles - print int if whole number, else 1 decimal
//      double a   = s.nextDouble();
//      double b   = s.nextDouble();
//      double sum = a + b;
//      if (Math.abs(sum - (int) sum) < 1e-6)
//          System.out.print((int) sum);
//      else
//          System.out.printf("%.1f", sum);

// Q2. Print grade based on marks: 90+ A, 75+ B, 50+ C, else Fail
//      int marks = s.nextInt();
//      if      (marks >= 90) System.out.print("A");
//      else if (marks >= 75) System.out.print("B");
//      else if (marks >= 50) System.out.print("C");
//      else                  System.out.print("Fail");

// Q3. Simple Calculator using switch case
//      int a    = s.nextInt();
//      int b    = s.nextInt();
//      char op  = s.next().charAt(0);
//      switch (op) {
//          case '+': System.out.print(a + b); break;
//          case '-': System.out.print(a - b); break;
//          case '*': System.out.print(a * b); break;
//          case '/':
//              if (b != 0) System.out.print(a / b);
//              else        System.out.print("Error: Division by Zero");
//              break;
//          default: System.out.print("Invalid operator");
//      }

// Q4. Check whether a year is a leap year
//      int year = s.nextInt();
//      if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
//          System.out.print("Y");
//      else
//          System.out.print("N");

// Q5. Number of days in a month
//      int month = s.nextInt();
//      if (month < 1 || month > 12)
//          System.out.println("Error");
//      else if (month == 2)
//          System.out.println("28");
//      else if (month == 4 || month == 6 || month == 9 || month == 11)
//          System.out.println("30");
//      else
//          System.out.println("31");

// Q6. Relate 2 integers: equal, less than, or greater than
//      int x = s.nextInt();
//      int y = s.nextInt();
//      if      (x == y) System.out.println(x + " and " + y + " are equal");
//      else if (x > y)  System.out.println(x + " greater than " + y);
//      else             System.out.println(x + " less than "    + y);

// Q7. Check whether a character is vowel or consonant
//      char ch = s.next().charAt(0);
//      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//          ch = Character.toLowerCase(ch);
//          if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
//              System.out.print("Vowel");
//          else
//              System.out.print("Consonant");
//      } else {
//          System.out.print("Not an alphabet");
//      }

// Q8. Grading System: 100=S, 90-99=A, 80-89=B, 70-79=C, 60-69=D, 50-59=E, <50=F
//      int marks = s.nextInt();
//      if (marks > 100)       System.out.print("Invalid Input");
//      else if (marks == 100) System.out.print("S");
//      else if (marks >= 90)  System.out.print("A");
//      else if (marks >= 80)  System.out.print("B");
//      else if (marks >= 70)  System.out.print("C");
//      else if (marks >= 60)  System.out.print("D");
//      else if (marks >= 50)  System.out.print("E");
//      else                   System.out.print("F");

// Q9. Find Nth term of series 1, 4, 9, 16, 25 ... (N*N)
//      int n = s.nextInt();
//      if      (n < 0) System.out.print("Error");
//      else if (n == 0) System.out.print(0);
//      else {
//          long nTerm = (long) n * n;
//          System.out.print(nTerm);
//      }

// Q10. Roots of a Quadratic Equation using Sridharacharya's method
//      double a = s.nextDouble();
//      double b = s.nextDouble();
//      double c = s.nextDouble();
//      double discriminant = b * b - 4 * a * c;
//      double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//      double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//      System.out.printf("%.2f%n%.2f", root1, root2);

// Q11. Electricity Bill (0-100 @ 1.5, 101-200 @ 2.5, above @ 4.0) + 15% surcharge if > 500
//      int units = s.nextInt();
//      double bill;
//      if      (units <= 100) bill = units * 1.5;
//      else if (units <= 200) bill = 100 * 1.5 + (units - 100) * 2.5;
//      else                   bill = 100 * 1.5 + 100 * 2.5 + (units - 200) * 4.0;
//      System.out.printf("Electricity Bill before surcharge: %.2f%n", bill);
//      if (bill > 500) {
//          double surcharge = 0.15 * bill;
//          System.out.printf("Surcharge: %.2f%n", surcharge);
//          System.out.printf("Total Bill: %.2f%n", bill + surcharge);
//      } else {
//          System.out.printf("Total Bill: %.2f%n", bill);
//      }

// Q12. Gross Salary Calculation
//      long basic = s.nextLong();
//      double hra, da;
//      if (basic <= 10000) {
//          hra = 0.20 * basic;
//          da  = 0.80 * basic;
//      } else if (basic <= 20000) {
//          hra = 0.25 * basic;
//          da  = 0.90 * basic;
//      } else {
//          hra = 0.30 * basic;
//          da  = 0.95 * basic;
//      }
//      double gross = basic + hra + da;
//      double tax   = 0.10 * gross;
//      double net   = gross - tax;
//      System.out.printf("Gross Salary = %.2f%n", gross);
//      System.out.printf("Net Salary = %.2f%n",   net);

// Q13. Traffic Light: Stop / Ready / Go
//      String color = s.next().toLowerCase();
//      if      (color.equals("red"))    System.out.print("Stop");
//      else if (color.equals("yellow")) System.out.print("Ready");
//      else if (color.equals("green"))  System.out.print("Go");
//      else                             System.out.print("Invalid color");

// Q14. Discount based on purchase amount
//      double amount = s.nextDouble();
//      double discount;
//      if      (amount >= 5000) discount = 20;
//      else if (amount >= 2000) discount = 10;
//      else if (amount >= 1000) discount = 5;
//      else                     discount = 0;
//      System.out.printf("Discount: %.0f%%%n", discount);
//      System.out.printf("Final Amount: %.2f%n", amount - (amount * discount / 100));

// Q15. Weather condition based on temperature
//      int temp = s.nextInt();
//      if      (temp <= 15) System.out.print("Cold");
//      else if (temp <= 25) System.out.print("Pleasant");
//      else if (temp <= 35) System.out.print("Hot");
//      else                 System.out.print("Heatwave");

// Q16. Mobile battery status
//      int battery = s.nextInt();
//      if      (battery == 100) System.out.print("Full");
//      else if (battery >= 50)  System.out.print("Moderate");
//      else                     System.out.print("Low");

// Q17. Ticket price based on passenger age
//      int age = s.nextInt();
//      if      (age < 12)  System.out.print("Child - Rs.50");
//      else if (age < 60)  System.out.print("Adult - Rs.100");
//      else                System.out.print("Senior - Rs.75");

// Q18. Check if vehicle speed exceeds 100 km/h
//      int speed = s.nextInt();
//      if (speed > 100) System.out.print("Over-speeding! Fine imposed.");
//      else             System.out.print("Speed is within limit");

// Q19. Validate mobile number (10+ digits = Valid)
//      String mobile = s.next();
//      if (mobile.length() >= 10) System.out.print("Valid Number");
//      else                       System.out.print("Invalid Number");

// Q20. Ticket price based on day of week
//      int day = s.nextInt();
//      if (day >= 1 && day <= 5) System.out.print("Weekday ticket: Rs.100");
//      else if (day == 6 || day == 7) System.out.print("Weekend ticket: Rs.150");
//      else System.out.print("Invalid day");

// Q21. Water bill using slab rates
//      int liters = s.nextInt();
//      double waterBill;
//      if (liters <= 1000)
//          waterBill = 0;
//      else if (liters <= 3000)
//          waterBill = (liters - 1000) * 5.0 / 1000;
//      else
//          waterBill = (2000 * 5.0 / 1000) + ((liters - 3000) * 10.0 / 1000);
//      System.out.printf("Water Bill: %.2f%n", waterBill);

// Q22. Check if eligible to vote
//      int age = s.nextInt();
//      if (age >= 18) System.out.print("Eligible to vote");
//      else           System.out.print("Not eligible to vote");

// Q23. Check if eligible for senior citizen benefits
//      int age = s.nextInt();
//      if (age >= 60) System.out.print("Eligible for senior citizen benefits");
//      else           System.out.print("Not eligible");

// Q24. Check if temperature is above 100 (fever check)
//      double temp = s.nextDouble();
//      if (temp > 100) System.out.print("Fever detected");
//      else            System.out.print("Normal temperature");

// Q25. Check pass/fail based on marks (>=35 = pass)
//      int marks = s.nextInt();
//      if (marks >= 35) System.out.print("Pass");
//      else             System.out.print("Fail");

// Q26. Check if entered PIN matches stored ATM PIN
//      int storedPin  = 1234;
//      int enteredPin = s.nextInt();
//      if (enteredPin == storedPin) System.out.print("Access Granted");
//      else                         System.out.print("Wrong PIN");

// Q27. ATM Withdrawal Validation
//      int balance    = s.nextInt();
//      int withdrawal = s.nextInt();
//      if (withdrawal <= balance && withdrawal % 100 == 0)
//          System.out.print("Withdrawal Successful. Balance: " + (balance - withdrawal));
//      else
//          System.out.print("Invalid withdrawal amount");


// ============================================================
//  LOOPING PROGRAMS
// ============================================================

// Q1. Print 1 to N
//      int N = s.nextInt();
//      for (int i = 1; i <= N; i++) {
//          System.out.print(i + " ");
//      }

// Q2. Sum of N Numbers
//      int N   = s.nextInt();
//      int sum = 0;
//      for (int j = 0; j <= N; j++) {
//          sum += j;
//      }
//      System.out.println("Sum = " + sum);

// Q3. Multiplication Table
//      int table = s.nextInt();
//      int stop  = s.nextInt();
//      for (int k = 1; k <= stop; k++) {
//          System.out.println(table + "*" + k + "=" + (k * table));
//      }

// Q4. Factorial of a Number
//      int f    = s.nextInt();
//      int fact = 1;
//      for (int l = 1; l <= f; l++) {
//          fact *= l;
//      }
//      System.out.println("Factorial = " + fact);

// Q5. Reverse a Number
//      int r = s.nextInt();
//      while (r > 0) {
//          System.out.print(r % 10);
//          r /= 10;
//      }

// Q6. Count Digits of a Number
//      int c     = s.nextInt();
//      int count = 0;
//      while (c > 0) {
//          c /= 10;
//          count++;
//      }
//      System.out.println("Count = " + count);

// Q7. Sum of Digits
//      int su   = s.nextInt();
//      int sum2 = 0;
//      while (su > 0) {
//          sum2 += su % 10;
//          su   /= 10;
//      }
//      System.out.println("Sum = " + sum2);

// Q8. Palindrome Check
//      int p1  = s.nextInt();
//      int p   = p1;
//      int rev = 0;
//      while (p > 0) {
//          rev = rev * 10 + (p % 10);
//          p  /= 10;
//      }
//      if (rev == p1) System.out.println("Palindrome");
//      else           System.out.println("Non Palindrome");

// Q9. Fibonacci Series
//      int fstop = s.nextInt();
//      int num1  = 0;
//      int num2  = 1;
//      int next  = 0;
//      for (int m = 0; m <= fstop; m++) {
//          System.out.print(num1 + " ");
//          next = num1 + num2;
//          num1 = num2;
//          num2 = next;
//      }

// Q10. Prime Number Check
//      int prime = s.nextInt();
//      int cnt   = 0;
//      for (int m = 1; m <= prime; m++) {
//          if (prime % m == 0) cnt++;
//      }
//      if (cnt < 3) System.out.println("Prime");
//      else         System.out.println("Non Prime");

// Q11. Strong Number Check
//      int strong = s.nextInt();
//      int st     = strong;
//      int fnl    = 0;
//      while (strong > 0) {
//          int temp  = strong % 10;
//          strong   /= 10;
//          int facty = 1;
//          for (int n = 1; n <= temp; n++) {
//              facty *= n;
//          }
//          fnl += facty;
//      }
//      if (fnl == st) System.out.println("Strong Number");
//      else           System.out.println("Non Strong Number");

// Q12. Armstrong Number Check
//      int armstrong = s.nextInt();
//      int ams       = armstrong;
//      int county    = 0;
//      int as        = 0;
//      int temp1     = armstrong;
//      while (temp1 > 0) { temp1 /= 10; county++; }
//      while (armstrong > 0) {
//          int tem = armstrong % 10;
//          int pw  = 1;
//          for (int z = 0; z < county; z++) pw *= tem;
//          as += pw;
//          armstrong /= 10;
//      }
//      if (ams == as) System.out.println("Armstrong Number");
//      else           System.out.println("Non Armstrong Number");

// Q13. Perfect Number Check
//      int perfect = s.nextInt();
//      int sump    = 0;
//      for (int y = 1; y < perfect; y++) {
//          if (perfect % y == 0) sump += y;
//      }
//      if (perfect == sump) System.out.println("Perfect Number");
//      else                 System.out.println("Non Perfect Number");

// Q14. Largest Digit in a Number
//      int ld      = s.nextInt();
//      int largest = 0;
//      while (ld > 0) {
//          int digit = ld % 10;
//          if (digit > largest) largest = digit;
//          ld /= 10;
//      }
//      System.out.println("Largest Digit = " + largest);

// Q15. Smallest Digit in a Number
//      int sd      = s.nextInt();
//      int smallest = 9;
//      while (sd > 0) {
//          int digit = sd % 10;
//          if (digit < smallest) smallest = digit;
//          sd /= 10;
//      }
//      System.out.println("Smallest Digit = " + smallest);

// Q16. Count Even and Odd Digits
//      int eo        = s.nextInt();
//      int evenCount = 0;
//      int oddCount  = 0;
//      while (eo > 0) {
//          int digit = eo % 10;
//          if (digit % 2 == 0) evenCount++;
//          else                oddCount++;
//          eo /= 10;
//      }
//      System.out.println("Even Digits Count = " + evenCount);
//      System.out.println("Odd Digits Count  = " + oddCount);

// Q17. Print Digits Greater Than 5
//      int gt = s.nextInt();
//      System.out.print("Digits greater than 5: ");
//      while (gt > 0) {
//          int digit = gt % 10;
//          if (digit > 5) System.out.print(digit + " ");
//          gt /= 10;
//      }

// Q18. Check if Number Contains Zero
//      int cz      = s.nextInt();
//      int czTemp  = cz;
//      boolean hasZero = false;
//      while (czTemp > 0) {
//          if (czTemp % 10 == 0) { hasZero = true; break; }
//          czTemp /= 10;
//      }
//      if (hasZero) System.out.println(cz + " Contains Zero");
//      else         System.out.println(cz + " Does Not Contain Zero");

// Q19. Check whether a given digit occurs in a number
//      int num   = s.nextInt();
//      int digit = s.nextInt();
//      boolean found = false;
//      while (num > 0) {
//          int last = num % 10;
//          if (last == digit) { found = true; break; }
//          num /= 10;
//      }
//      if (found) System.out.print("Digit found");
//      else       System.out.print("Digit not found");

// Q20. Count the occurrence of a digit in a number
//      int num   = s.nextInt();
//      int digit = s.nextInt();
//      int count = 0;
//      while (num > 0) {
//          int last = num % 10;
//          if (last == digit) count++;
//          num /= 10;
//      }
//      System.out.print(count);

// Q21. HCF of two integers without recursion
//      int a = s.nextInt();
//      int b = s.nextInt();
//      int min = Math.min(a, b);
//      int hcf = 1;
//      for (int i = 1; i <= min; i++) {
//          if (a % i == 0 && b % i == 0) hcf = i;
//      }
//      System.out.print(hcf);

// Q22. Print odd and even digits of a number separately
//      int num  = s.nextInt();
//      String evenDigits = "";
//      String oddDigits  = "";
//      int temp = num;
//      while (temp > 0) {
//          int d = temp % 10;
//          if (d % 2 == 0) evenDigits = d + " " + evenDigits;
//          else            oddDigits  = d + " " + oddDigits;
//          temp /= 10;
//      }
//      System.out.println(evenDigits.trim());
//      System.out.println(oddDigits.trim());

// Q23. Print digits of an integer separated by space
//      int num    = s.nextInt();
//      String str = Integer.toString(num);
//      for (int i = 0; i < str.length(); i++) {
//          System.out.print(str.charAt(i));
//          if (i < str.length() - 1) System.out.print(" ");
//      }

// Q24. Print values from N to 1
//      int N = s.nextInt();
//      for (int i = N; i >= 1; i--) {
//          System.out.println(i);
//      }

// Q25. Print even values from 1 to N
//      int N = s.nextInt();
//      for (int i = 2; i <= N; i += 2) {
//          System.out.println(i);
//      }

// Q26. Print first digit of a given number
//      int num = s.nextInt();
//      while (num >= 10) num /= 10;
//      System.out.print("First digit: " + num);

// Q27. Check whether first digit of a given number is odd or even
//      int num = s.nextInt();
//      while (num >= 10) num /= 10;
//      if (num % 2 == 0) System.out.print("Even");
//      else              System.out.print("Odd");

// Q28. Check whether digits are in ascending order
//      int num  = s.nextInt();
//      int prev = 10;
//      boolean ascending = true;
//      while (num > 0) {
//          int last = num % 10;
//          if (last > prev) { ascending = false; break; }
//          prev = last;
//          num /= 10;
//      }
//      if (ascending) System.out.print("Digits are in ascending order");
//      else           System.out.print("Digits are NOT in ascending order");

// Q29. Check whether digits are in descending order
//      int num  = s.nextInt();
//      int prev = -1;
//      boolean descending = true;
//      while (num > 0) {
//          int last = num % 10;
//          if (last < prev) { descending = false; break; }
//          prev = last;
//          num /= 10;
//      }
//      if (descending) System.out.print("Digits are in descending order");
//      else            System.out.print("Digits are NOT in descending order");

// Q30. Print 1 to N (active demo)
        System.out.println("\n\t------Print 1 to N------");
        System.out.print("Enter N value: ");
        int N = s.nextInt();
        for (int i = 1; i <= N; i++) {
            System.out.print(i + " ");
        }

// ============================================================
//  PATTERN PROGRAMS
// ============================================================

// Pattern 1: Rectangle of stars (4x4)
// * * * *
// * * * *
// * * * *
// * * * *
//      for (int pt = 0; pt < 4; pt++) {
//          for (int pt1 = 0; pt1 < 4; pt1++) {
//              System.out.print("* ");
//          }
//          System.out.println();
//      }

// Pattern 2: Right Triangle (increasing)
// *
// * *
// * * *
// * * * *
//      for (int pt = 0; pt < 4; pt++) {
//          for (int pt1 = 0; pt1 <= pt; pt1++) {
//              System.out.print("* ");
//          }
//          System.out.println();
//      }

// Pattern 3: Right Triangle (decreasing)
// * * * *
// * * *
// * *
// *
//      for (int pt = 4; pt >= 1; pt--) {
//          for (int pt1 = 0; pt1 < pt; pt1++) {
//              System.out.print("* ");
//          }
//          System.out.println();
//      }

// Pattern 4: Number Triangle
// 1
// 1 2
// 1 2 3
// 1 2 3 4
//      for (int pt = 1; pt <= 4; pt++) {
//          for (int pt1 = 1; pt1 <= pt; pt1++) {
//              System.out.print(pt1 + " ");
//          }
//          System.out.println();
//      }

// Pattern 5: Same Number Triangle
// 1
// 2 2
// 3 3 3
// 4 4 4 4
//      for (int pt = 1; pt <= 4; pt++) {
//          for (int pt1 = 1; pt1 <= pt; pt1++) {
//              System.out.print(pt + " ");
//          }
//          System.out.println();
//      }

        s.close();
    }
}
