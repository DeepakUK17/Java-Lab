/* =============================================
   Java Lab – app.js
   Interactive Java Program Explorer
   ============================================= */

'use strict';

// ─────────────────────────────────────────────
//  Program Data
// ─────────────────────────────────────────────
const PROGRAMS = [
  {
    id: 'sum-n-numbers',
    title: 'Sum of N Numbers',
    icon: '∑',
    category: 'Math',
    difficulty: 'Easy',
    tags: ['for loop', 'sum', 'input'],
    desc: 'Calculates the sum of all numbers from 1 to N using a for loop.',
    accentColor: '#4f9cf9',
    glowColor: 'rgba(79,156,249,0.2)',
    iconBg: 'rgba(79,156,249,0.15)',
    code: `import java.util.Scanner;

public class SumOfNNumbers {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter N value: ");
        int N = s.nextInt();

        int sum = 0;
        for (int j = 0; j < N + 1; j++) {
            sum += j;
        }

        System.out.println("Sum = " + sum);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling SumOfNNumbers.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask',    text: 'Enter N value: ', inputKey: 'n' };
      const n = parseInt(inputs['n']);
      if (isNaN(n) || n < 0) { yield { type: 'error', text: 'Invalid input. Please enter a positive integer.' }; return; }
      let sum = 0;
      for (let j = 0; j <= n; j++) sum += j;
      yield { type: 'out', text: `Sum = ${sum}` };
      yield { type: 'success', text: `\nProcess finished with exit code 0` };
    }
  },

  {
    id: 'print-1-to-n',
    title: 'Print 1 to N',
    icon: '📋',
    category: 'Loop',
    difficulty: 'Easy',
    tags: ['for loop', 'print', 'sequence'],
    desc: 'Prints all integers from 1 to N in sequence using a simple for loop.',
    accentColor: '#34d399',
    glowColor: 'rgba(52,211,153,0.2)',
    iconBg: 'rgba(52,211,153,0.15)',
    code: `import java.util.Scanner;

public class Print1ToN {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter N value: ");
        int N = s.nextInt();

        for (int i = 1; i < N + 1; i++) {
            System.out.print(i + " ");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling Print1ToN.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask',    text: 'Enter N value: ', inputKey: 'n' };
      const n = parseInt(inputs['n']);
      if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let result = '';
      for (let i = 1; i <= n; i++) result += i + ' ';
      yield { type: 'out', text: result.trim() };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'multiplication-table',
    title: 'Multiplication Table',
    icon: '✖',
    category: 'Math',
    difficulty: 'Easy',
    tags: ['for loop', 'multiply', 'table'],
    desc: 'Generates a multiplication table for any number up to a specified limit.',
    accentColor: '#f89820',
    glowColor: 'rgba(248,152,32,0.2)',
    iconBg: 'rgba(248,152,32,0.15)',
    code: `import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter which table to print: ");
        int table = s.nextInt();

        System.out.print("Enter where to stop: ");
        int stop = s.nextInt();

        for (int k = 1; k < stop + 1; k++) {
            System.out.println(table + " * " + k + " = " + k * table);
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling MultiplicationTable.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter which table to print: ', inputKey: 'table' };
      yield { type: 'ask', text: 'Enter where to stop: ',        inputKey: 'stop'  };
      const table = parseInt(inputs['table']);
      const stop  = parseInt(inputs['stop']);
      if (isNaN(table) || isNaN(stop)) { yield { type: 'error', text: 'Invalid input.' }; return; }
      for (let k = 1; k <= stop; k++) {
        yield { type: 'out', text: `${table} * ${k} = ${k * table}` };
      }
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'factorial',
    title: 'Factorial',
    icon: '!',
    category: 'Math',
    difficulty: 'Easy',
    tags: ['for loop', 'factorial', 'product'],
    desc: 'Computes the factorial of a number N (N!) using an iterative for loop approach.',
    accentColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.2)',
    iconBg: 'rgba(167,139,250,0.15)',
    code: `import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to find Factorial: ");
        int f = s.nextInt();

        int fact = 1;
        for (int l = 1; l < f + 1; l++) {
            fact *= l;
        }

        System.out.println("Factorial = " + fact);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling Factorial.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to find Factorial: ', inputKey: 'f' };
      const f = parseInt(inputs['f']);
      if (isNaN(f) || f < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let fact = 1;
      for (let l = 1; l <= f; l++) fact *= l;
      yield { type: 'out', text: `Factorial = ${fact}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'reverse-number',
    title: 'Reverse Number',
    icon: '↩',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'modulo', 'digits'],
    desc: 'Reverses the digits of a given integer using a while loop and modulo operator.',
    accentColor: '#f472b6',
    glowColor: 'rgba(244,114,182,0.2)',
    iconBg: 'rgba(244,114,182,0.15)',
    code: `import java.util.Scanner;

public class ReverseNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Reverse: ");
        int r = s.nextInt();

        int reversed = 0;
        while (r > 0) {
            reversed = reversed * 10 + (r % 10);
            r /= 10;
        }

        System.out.println("Reversed = " + reversed);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling ReverseNumber.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Reverse: ', inputKey: 'r' };
      let r = parseInt(inputs['r']);
      if (isNaN(r) || r < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let rev = 0;
      while (r > 0) { rev = rev * 10 + (r % 10); r = Math.floor(r / 10); }
      yield { type: 'out', text: `Reversed = ${rev}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'count-digits',
    title: 'Count Digits',
    icon: '#',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'count', 'digits'],
    desc: 'Counts the total number of digits in a given integer using a while loop.',
    accentColor: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.2)',
    iconBg: 'rgba(34,211,238,0.15)',
    code: `import java.util.Scanner;

public class CountDigits {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Count: ");
        int c = s.nextInt();

        int count = 0;
        while (c > 0) {
            c /= 10;
            count += 1;
        }

        System.out.println("Count = " + count);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling CountDigits.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Count: ', inputKey: 'c' };
      let c = parseInt(inputs['c']);
      if (isNaN(c) || c < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let count = 0;
      while (c > 0) { c = Math.floor(c / 10); count++; }
      yield { type: 'out', text: `Count = ${count}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'sum-of-digits',
    title: 'Sum of Digits',
    icon: '+',
    category: 'Math',
    difficulty: 'Easy',
    tags: ['while loop', 'sum', 'digits'],
    desc: 'Computes the sum of individual digits of a number using modulo and division.',
    accentColor: '#fb923c',
    glowColor: 'rgba(251,146,60,0.2)',
    iconBg: 'rgba(251,146,60,0.15)',
    code: `import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Sum: ");
        int su = s.nextInt();

        int sum = 0;
        while (su > 0) {
            sum += su % 10;
            su /= 10;
        }

        System.out.println("Sum = " + sum);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling SumOfDigits.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Sum: ', inputKey: 'su' };
      let su = parseInt(inputs['su']);
      if (isNaN(su) || su < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let sum = 0;
      while (su > 0) { sum += su % 10; su = Math.floor(su / 10); }
      yield { type: 'out', text: `Sum = ${sum}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'palindrome',
    title: 'Palindrome Check',
    icon: '⇌',
    category: 'Logic',
    difficulty: 'Medium',
    tags: ['while loop', 'palindrome', 'reverse'],
    desc: 'Checks whether a number reads the same forward and backward (palindrome).',
    accentColor: '#818cf8',
    glowColor: 'rgba(129,140,248,0.2)',
    iconBg: 'rgba(129,140,248,0.15)',
    code: `import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Check Palindrome: ");
        int p1 = s.nextInt();
        int p  = p1;
        int rev = 0;

        while (p > 0) {
            rev = rev * 10 + (p % 10);
            p /= 10;
        }

        if (rev == p1) {
            System.out.println("Palindrome");
        } else {
            System.out.println("Non Palindrome");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling Palindrome.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Check Palindrome: ', inputKey: 'p' };
      const p1 = parseInt(inputs['p']);
      if (isNaN(p1) || p1 < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let p = p1, rev = 0;
      while (p > 0) { rev = rev * 10 + (p % 10); p = Math.floor(p / 10); }
      yield { type: 'out', text: rev === p1 ? 'Palindrome ✓' : 'Non Palindrome ✗' };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'fibonacci',
    title: 'Fibonacci Series',
    icon: '🌀',
    category: 'Series',
    difficulty: 'Medium',
    tags: ['for loop', 'fibonacci', 'sequence'],
    desc: 'Generates the Fibonacci sequence up to N terms: 0, 1, 1, 2, 3, 5, 8...',
    accentColor: '#2dd4bf',
    glowColor: 'rgba(45,212,191,0.2)',
    iconBg: 'rgba(45,212,191,0.15)',
    code: `import java.util.Scanner;

public class FibonacciSeries {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number of terms: ");
        int fstop = s.nextInt();

        int num1 = 0, num2 = 1, next = 0;

        for (int m = 0; m < fstop; m++) {
            System.out.print(num1 + " ");
            next = num1 + num2;
            num1 = num2;
            num2 = next;
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling FibonacciSeries.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number of terms: ', inputKey: 'fstop' };
      const fstop = parseInt(inputs['fstop']);
      if (isNaN(fstop) || fstop < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let n1 = 0, n2 = 1, next = 0, result = '';
      for (let m = 0; m < fstop; m++) {
        result += n1 + ' ';
        next = n1 + n2; n1 = n2; n2 = next;
      }
      yield { type: 'out', text: result.trim() };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'prime-number',
    title: 'Prime Number Check',
    icon: '🔢',
    category: 'Math',
    difficulty: 'Medium',
    tags: ['for loop', 'prime', 'divisor'],
    desc: 'Determines if a number is prime by checking divisibility up to the number itself.',
    accentColor: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.2)',
    iconBg: 'rgba(245,158,11,0.15)',
    code: `import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Check: ");
        int prime = s.nextInt();

        int cnt = 0;
        for (int m = 1; m < prime + 1; m++) {
            if (prime % m == 0) {
                cnt += 1;
            }
        }

        if (cnt < 3) {
            System.out.println("Prime ✓");
        } else {
            System.out.println("Non Prime ✗");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling PrimeNumber.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Check: ', inputKey: 'prime' };
      const prime = parseInt(inputs['prime']);
      if (isNaN(prime) || prime < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let cnt = 0;
      for (let m = 1; m <= prime; m++) { if (prime % m === 0) cnt++; }
      yield { type: 'out', text: cnt < 3 ? `${prime} is a Prime Number ✓` : `${prime} is Non Prime ✗` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'strong-number',
    title: 'Strong Number Check',
    icon: '💪',
    category: 'Logic',
    difficulty: 'Hard',
    tags: ['factorial', 'digits', 'sum'],
    desc: 'Checks if a number equals the sum of factorials of its digits (e.g. 145 = 1! + 4! + 5!).',
    accentColor: '#ef4444',
    glowColor: 'rgba(239,68,68,0.2)',
    iconBg: 'rgba(239,68,68,0.15)',
    code: `import java.util.Scanner;

public class StrongNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Check: ");
        int strong = s.nextInt();
        int st  = strong;
        int fnl = 0;

        while (strong > 0) {
            int temp  = strong % 10;
            strong   /= 10;
            int facty = 1;
            for (int n = 1; n <= temp; n++) {
                facty *= n;
            }
            fnl += facty;
        }

        if (fnl == st) {
            System.out.println("Strong Number ✓");
        } else {
            System.out.println("Non Strong Number ✗");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling StrongNumber.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Check: ', inputKey: 'strong' };
      let strong = parseInt(inputs['strong']);
      if (isNaN(strong) || strong < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      const st = strong;
      let fnl = 0;
      while (strong > 0) {
        const temp = strong % 10;
        strong = Math.floor(strong / 10);
        let facty = 1;
        for (let n = 1; n <= temp; n++) facty *= n;
        fnl += facty;
      }
      yield { type: 'out', text: fnl === st ? `${st} is a Strong Number ✓` : `${st} is Non Strong Number ✗` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'armstrong-number',
    title: 'Armstrong Number',
    icon: '⭐',
    category: 'Logic',
    difficulty: 'Hard',
    tags: ['power', 'digits', 'sum'],
    desc: 'Checks if a number equals the sum of its own digits raised to the power of digit count.',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139,92,246,0.2)',
    iconBg: 'rgba(139,92,246,0.15)',
    code: `import java.util.Scanner;

public class Armstrong {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to check: ");
        int num = s.nextInt();

        int original = num;
        int digits   = String.valueOf(num).length();
        int sum      = 0;

        while (num > 0) {
            int digit = num % 10;
            sum += (int) Math.pow(digit, digits);
            num /= 10;
        }

        if (original == sum) {
            System.out.println("Armstrong Number ✓");
        } else {
            System.out.println("Not an Armstrong Number ✗");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling Armstrong.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to check: ', inputKey: 'num' };
      let num = parseInt(inputs['num']);
      if (isNaN(num) || num < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      const original = num;
      const digits   = String(num).length;
      let sum = 0;
      let temp = num;
      while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
      }
      yield { type: 'out', text: original === sum ? `${original} is an Armstrong Number ✓` : `${original} is Not an Armstrong Number ✗` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'perfect-number',
    title: 'Perfect Number Check',
    icon: '💎',
    category: 'Math',
    difficulty: 'Medium',
    tags: ['divisors', 'sum', 'perfect'],
    desc: 'A perfect number equals the sum of its proper divisors. E.g. 6 = 1 + 2 + 3.',
    accentColor: '#06b6d4',
    glowColor: 'rgba(6,182,212,0.2)',
    iconBg: 'rgba(6,182,212,0.15)',
    code: `import java.util.Scanner;

public class PerfectNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Check: ");
        int perfect = s.nextInt();

        int sump = 0;
        for (int y = 1; y < perfect; y++) {
            if (perfect % y == 0) {
                sump += y;
            }
        }

        if (perfect == sump) {
            System.out.println("Perfect Number ✓");
        } else {
            System.out.println("Non Perfect Number ✗");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling PerfectNumber.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Check: ', inputKey: 'perfect' };
      const perfect = parseInt(inputs['perfect']);
      if (isNaN(perfect) || perfect < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let sump = 0;
      for (let y = 1; y < perfect; y++) { if (perfect % y === 0) sump += y; }
      yield { type: 'out', text: perfect === sump ? `${perfect} is a Perfect Number ✓` : `${perfect} is Non Perfect Number ✗` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'largest-digit',
    title: 'Largest Digit',
    icon: '🔝',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'digits', 'max'],
    desc: 'Finds the largest digit in a given integer by checking each digit with a while loop.',
    accentColor: '#10b981',
    glowColor: 'rgba(16,185,129,0.2)',
    iconBg: 'rgba(16,185,129,0.15)',
    code: `import java.util.Scanner;

public class LargestDigit {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to find Largest Digit: ");
        int ld = s.nextInt();

        int largest = 0;
        while (ld > 0) {
            int digit = ld % 10;
            if (digit > largest) {
                largest = digit;
            }
            ld /= 10;
        }

        System.out.println("Largest Digit = " + largest);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling LargestDigit.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to find Largest Digit: ', inputKey: 'ld' };
      let ld = parseInt(inputs['ld']);
      if (isNaN(ld) || ld < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let largest = 0;
      let temp = ld;
      while (temp > 0) { const d = temp % 10; if (d > largest) largest = d; temp = Math.floor(temp / 10); }
      yield { type: 'out', text: `Largest Digit = ${largest}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'smallest-digit',
    title: 'Smallest Digit',
    icon: '🔻',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'digits', 'min'],
    desc: 'Finds the smallest digit in a given integer by comparing each digit using a while loop.',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244,63,94,0.2)',
    iconBg: 'rgba(244,63,94,0.15)',
    code: `import java.util.Scanner;

public class SmallestDigit {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to find Smallest Digit: ");
        int sd = s.nextInt();

        int smallest = 9;
        while (sd > 0) {
            int digit = sd % 10;
            if (digit < smallest) {
                smallest = digit;
            }
            sd /= 10;
        }

        System.out.println("Smallest Digit = " + smallest);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling SmallestDigit.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to find Smallest Digit: ', inputKey: 'sd' };
      let sd = parseInt(inputs['sd']);
      if (isNaN(sd) || sd < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let smallest = 9;
      let temp = sd;
      while (temp > 0) { const d = temp % 10; if (d < smallest) smallest = d; temp = Math.floor(temp / 10); }
      yield { type: 'out', text: `Smallest Digit = ${smallest}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'count-even-odd-digits',
    title: 'Count Even & Odd Digits',
    icon: '⚖️',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'even', 'odd', 'digits'],
    desc: 'Counts how many digits in a number are even and how many are odd using a while loop.',
    accentColor: '#7c3aed',
    glowColor: 'rgba(124,58,237,0.2)',
    iconBg: 'rgba(124,58,237,0.15)',
    code: `import java.util.Scanner;

public class CountEvenOddDigits {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Count Even/Odd Digits: ");
        int eo = s.nextInt();

        int evenCount = 0;
        int oddCount  = 0;

        while (eo > 0) {
            int digit = eo % 10;
            if (digit % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
            eo /= 10;
        }

        System.out.println("Even Digits Count = " + evenCount);
        System.out.println("Odd Digits Count  = " + oddCount);
        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling CountEvenOddDigits.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Count Even/Odd Digits: ', inputKey: 'eo' };
      let eo = parseInt(inputs['eo']);
      if (isNaN(eo) || eo < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let evenCount = 0, oddCount = 0;
      let temp = eo;
      while (temp > 0) { const d = temp % 10; if (d % 2 === 0) evenCount++; else oddCount++; temp = Math.floor(temp / 10); }
      yield { type: 'out', text: `Even Digits Count = ${evenCount}` };
      yield { type: 'out', text: `Odd Digits Count  = ${oddCount}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'digits-greater-than-5',
    title: 'Print Digits > 5',
    icon: '5️⃣',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'filter', 'digits'],
    desc: 'Extracts and prints all digits from a number that are strictly greater than 5.',
    accentColor: '#0ea5e9',
    glowColor: 'rgba(14,165,233,0.2)',
    iconBg: 'rgba(14,165,233,0.15)',
    code: `import java.util.Scanner;

public class DigitsGreaterThan5 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Print Digits > 5: ");
        int gt = s.nextInt();

        System.out.print("Digits greater than 5: ");
        while (gt > 0) {
            int digit = gt % 10;
            if (digit > 5) {
                System.out.print(digit + " ");
            }
            gt /= 10;
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling DigitsGreaterThan5.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Print Digits > 5: ', inputKey: 'gt' };
      let gt = parseInt(inputs['gt']);
      if (isNaN(gt) || gt < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let result = '';
      let temp = gt;
      while (temp > 0) { const d = temp % 10; if (d > 5) result = d + ' ' + result; temp = Math.floor(temp / 10); }
      yield { type: 'out', text: `Digits greater than 5: ${result.trim() || 'None'}` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  },

  {
    id: 'contains-zero',
    title: 'Contains Zero Check',
    icon: '0️⃣',
    category: 'Logic',
    difficulty: 'Easy',
    tags: ['while loop', 'zero', 'digits'],
    desc: 'Checks whether a given integer contains the digit 0 anywhere in its digits.',
    accentColor: '#64748b',
    glowColor: 'rgba(100,116,139,0.2)',
    iconBg: 'rgba(100,116,139,0.15)',
    code: `import java.util.Scanner;

public class ContainsZero {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter number to Check for Zero: ");
        int cz = s.nextInt();

        boolean hasZero = false;
        int czTemp = cz;

        while (czTemp > 0) {
            if (czTemp % 10 == 0) {
                hasZero = true;
            }
            czTemp /= 10;
        }

        if (hasZero) {
            System.out.println(cz + " Contains Zero ✓");
        } else {
            System.out.println(cz + " Does Not Contain Zero ✗");
        }

        s.close();
    }
}`,
    run: function*(inputs) {
      yield { type: 'system', text: 'Compiling ContainsZero.java...' };
      yield { type: 'system', text: 'Build successful ✓' };
      yield { type: 'out',    text: '' };
      yield { type: 'ask', text: 'Enter number to Check for Zero: ', inputKey: 'cz' };
      let cz = parseInt(inputs['cz']);
      if (isNaN(cz) || cz < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
      let hasZero = false;
      let temp = cz;
      while (temp > 0) { if (temp % 10 === 0) hasZero = true; temp = Math.floor(temp / 10); }
      yield { type: 'out', text: hasZero ? `${cz} Contains Zero ✓` : `${cz} Does Not Contain Zero ✗` };
      yield { type: 'success', text: '\nProcess finished with exit code 0' };
    }
  }
];

// ─────────────────────────────────────────────
//  State
// ─────────────────────────────────────────────
let currentProgram   = null;
let activeTab        = 'code';
let terminalGen      = null;
let pendingInputKey  = null;
let collectedInputs  = {};
let isRunning        = false;

// ─────────────────────────────────────────────
//  DOM Refs
// ─────────────────────────────────────────────
const modalOverlay     = document.getElementById('modalOverlay');
const modalClose       = document.getElementById('modalClose');
const modalTitle       = document.getElementById('modalTitle');
const modalMeta        = document.getElementById('modalMeta');
const modalIcon        = document.getElementById('modalIcon');
const codeContent      = document.getElementById('codeContent');
const terminalBody     = document.getElementById('terminalBody');
const terminalName     = document.getElementById('terminalName');
const terminalInputRow = document.getElementById('terminalInputRow');
const termInput        = document.getElementById('termInput');
const termStatus       = document.getElementById('termStatus');
const runBtn           = document.getElementById('runBtn');
const tabCode          = document.getElementById('tabCode');
const tabTerminal      = document.getElementById('tabTerminal');
const panelCode        = document.getElementById('panelCode');
const panelTerminal    = document.getElementById('panelTerminal');

// ─────────────────────────────────────────────
//  Particles
// ─────────────────────────────────────────────
function spawnParticles() {
  const container = document.getElementById('bgParticles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${8+Math.random()*14}s;
      animation-delay:${Math.random()*12}s;
      background: ${['#4f9cf9','#a78bfa','#34d399','#f89820','#f472b6'][Math.floor(Math.random()*5)]};
    `;
    container.appendChild(p);
  }
}

// ─────────────────────────────────────────────
//  Card Rendering
// ─────────────────────────────────────────────
function difficultyColor(d) {
  return { Easy: '#34d399', Medium: '#f59e0b', Hard: '#f87171' }[d] || '#94a3b8';
}

function renderCards() {
  const grid = document.getElementById('cardsGrid');
  PROGRAMS.forEach((prog, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-${prog.id}`;
    card.style.setProperty('--card-accent', prog.accentColor);
    card.style.setProperty('--card-glow',   prog.glowColor);
    card.style.setProperty('--card-icon-bg',prog.iconBg);
    card.style.animationDelay = `${idx * 0.06}s`;

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${prog.icon}</div>
        <span class="card-badge">${prog.category}</span>
      </div>
      <div class="card-title">${prog.title}</div>
      <div class="card-desc">${prog.desc}</div>
      <div class="card-footer">
        <div class="card-tags">
          ${prog.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          <span class="tag" style="color:${difficultyColor(prog.difficulty)};border-color:${difficultyColor(prog.difficulty)}44">${prog.difficulty}</span>
        </div>
        <div class="card-arrow" style="background:${prog.accentColor}">→</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(prog));
    grid.appendChild(card);
  });
}

// ─────────────────────────────────────────────
//  Syntax Highlighter
// ─────────────────────────────────────────────
function highlight(code) {
  const keywords = /\b(import|public|class|static|void|int|long|double|boolean|String|new|return|if|else|for|while|do|switch|case|break|continue|final|null|true|false|this|super)\b/g;
  const classes  = /\b(Scanner|System|Math|String)\b/g;
  const methods  = /\b(\w+)(?=\s*\()/g;
  const strings  = /(["'`])(?:(?!\1)[^\\]|\\.)*?\1/g;
  const comments = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g;
  const numbers  = /\b(\d+\.?\d*)\b/g;
  const annotations = /(@\w+)/g;

  return code
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(comments,    m => `<span class="cm">${m}</span>`)
    .replace(strings,     m => `<span class="st">${m}</span>`)
    .replace(annotations, m => `<span class="an">${m}</span>`)
    .replace(keywords,    m => `<span class="kw">${m}</span>`)
    .replace(classes,     m => `<span class="cl">${m}</span>`)
    .replace(methods,     (m,g) => `<span class="fn">${g}</span>(`)
    .replace(numbers,     m => `<span class="nm">${m}</span>`);
}

// ─────────────────────────────────────────────
//  Modal Open / Close
// ─────────────────────────────────────────────
function openModal(prog) {
  currentProgram = prog;
  activeTab      = 'code';
  collectedInputs = {};
  pendingInputKey  = null;
  isRunning        = false;

  // Set header
  modalIcon.textContent  = prog.icon;
  modalIcon.style.background = prog.iconBg;
  modalIcon.style.borderColor = prog.accentColor + '44';
  modalTitle.textContent = prog.title;
  modalMeta.textContent  = `Java  ·  ${prog.category}  ·  ${prog.difficulty}`;

  // Set code
  codeContent.innerHTML = highlight(prog.code);

  // Reset terminal
  resetTerminal();
  terminalName.textContent = prog.title + ' – Terminal';

  // Switch to code tab
  switchTab('code');

  // Update header accent
  document.querySelector('.modal').style.setProperty('--modal-accent', prog.accentColor);

  // Show
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  currentProgram = null;
  stopRun();
}

// ─────────────────────────────────────────────
//  Tab switching
// ─────────────────────────────────────────────
window.switchTab = function(tab) {
  activeTab = tab;
  tabCode.classList.toggle('active',     tab === 'code');
  tabTerminal.classList.toggle('active', tab === 'terminal');
  panelCode.classList.toggle('hidden',     tab !== 'code');
  panelTerminal.classList.toggle('hidden', tab !== 'terminal');
};

// ─────────────────────────────────────────────
//  Terminal Helpers
// ─────────────────────────────────────────────
function termPrint(type, text) {
  const line = document.createElement('div');
  line.className = `term-line term-${type}`;

  if (type === 'cmd') {
    line.innerHTML = `<span class="term-prompt-sym">$</span><span>${escHtml(text)}</span>`;
  } else if (type === 'ask') {
    line.innerHTML = `<span class="term-prompt-sym">?</span><span>${escHtml(text)}</span><span class="cursor"></span>`;
  } else {
    line.innerHTML = `<span>${escHtml(text)}</span>`;
  }

  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
  return line;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

function resetTerminal() {
  terminalBody.innerHTML = '<div class="term-line term-info">Click <strong>Run</strong> to start the program...</div>';
  terminalInputRow.style.display = 'none';
  termStatus.textContent  = 'Ready';
  termStatus.className    = 'term-status';
  runBtn.classList.remove('running');
  runBtn.innerHTML = '<span class="run-icon">▶</span> Run Program';
  runBtn.disabled  = false;
  pendingInputKey  = null;
  collectedInputs  = {};
  terminalGen      = null;
  isRunning        = false;
}

window.clearTerminal = function() {
  stopRun();
  resetTerminal();
};

function stopRun() {
  isRunning       = false;
  terminalGen     = null;
  pendingInputKey = null;
  terminalInputRow.style.display = 'none';
  runBtn.classList.remove('running');
  runBtn.disabled  = false;
  runBtn.innerHTML = '<span class="run-icon">▶</span> Run Program';
}

// ─────────────────────────────────────────────
//  Generator-based Program Runner
// ─────────────────────────────────────────────
window.runProgram = function() {
  if (!currentProgram) return;
  if (isRunning) return;

  isRunning = true;
  collectedInputs = {};
  pendingInputKey  = null;

  terminalBody.innerHTML = '';
  termStatus.textContent = 'Running';
  termStatus.className   = 'term-status running';
  runBtn.classList.add('running');
  runBtn.innerHTML = '<span class="run-icon">⏳</span> Running...';
  runBtn.disabled  = true;

  // Switch to terminal tab
  switchTab('terminal');

  termPrint('cmd', `java ${currentProgram.title.replace(/\s+/g,'')}`);
  termPrint('out', '');

  terminalGen = currentProgram.run(collectedInputs);
  advanceGen();
};

function advanceGen() {
  if (!terminalGen || !isRunning) return;

  // Remove cursor from previous ask line
  const oldCursor = terminalBody.querySelector('.cursor');
  if (oldCursor) oldCursor.remove();

  let result;
  try {
    result = terminalGen.next();
  } catch (e) {
    termPrint('error', 'RuntimeException: ' + e.message);
    finishRun(true);
    return;
  }

  if (result.done) { finishRun(false); return; }

  const step = result.value;

  if (step.type === 'ask') {
    // Need user input
    pendingInputKey = step.inputKey;
    termPrint('ask', step.text);
    terminalInputRow.style.display = 'flex';
    termInput.value = '';
    termInput.focus();
    // Wait — do NOT advance further until input
    return;
  }

  // Delay between output lines for a real terminal feel
  setTimeout(() => {
    if (!isRunning) return;
    termPrint(step.type, step.text);
    advanceGen();
  }, step.type === 'system' ? 180 : 60);
}

function submitInput() {
  const val = termInput.value.trim();
  if (!val || !pendingInputKey || !isRunning) return;

  // Record the input
  collectedInputs[pendingInputKey] = val;

  // Echo input to terminal
  const lastAsk = terminalBody.querySelector('.cursor');
  if (lastAsk) lastAsk.remove();

  // Add user typed value to the ask line
  const askLines = terminalBody.querySelectorAll('.term-ask');
  if (askLines.length) {
    const last = askLines[askLines.length - 1];
    const typed = document.createElement('span');
    typed.style.color = '#fde68a';
    typed.textContent = val;
    last.appendChild(typed);
  }

  terminalInputRow.style.display = 'none';
  termInput.value = '';
  pendingInputKey = null;

  // Pass updated inputs to generator and rebuild with same inputs reference
  terminalGen = currentProgram.run(collectedInputs);

  // Fast-forward through already-answered steps
  fastForwardGen();
}

function fastForwardGen() {
  // Re-run the generator, skipping already-answered asks
  const answeredKeys = Object.keys(collectedInputs);
  let askCount = 0;

  terminalGen = currentProgram.run(collectedInputs);

  // We need to advance until we reach the first UN-answered ask or done
  // Since generator is pure and uses collectedInputs, just run it
  // The 'ask' steps will be encountered in order; we auto-answer them
  function step() {
    if (!terminalGen || !isRunning) return;
    let r;
    try { r = terminalGen.next(); } catch(e) {
      termPrint('error', 'RuntimeException: ' + e.message);
      finishRun(true); return;
    }
    if (r.done) { finishRun(false); return; }

    const s = r.value;
    if (s.type === 'ask') {
      if (collectedInputs[s.inputKey] !== undefined) {
        // Already answered — silently skip
        step();
      } else {
        // New unanswered question
        pendingInputKey = s.inputKey;
        termPrint('ask', s.text);
        terminalInputRow.style.display = 'flex';
        termInput.value = '';
        termInput.focus();
      }
    } else if (s.type === 'system' || s.type === 'cmd') {
      // Skip already-printed system lines (don't re-print)
      step();
    } else {
      // New output — print it and continue
      setTimeout(() => {
        if (!isRunning) return;
        termPrint(s.type, s.text);
        step();
      }, 60);
    }
  }

  step();
}

function finishRun(isError) {
  isRunning = false;
  terminalGen = null;
  pendingInputKey = null;
  terminalInputRow.style.display = 'none';

  if (!isError) {
    termStatus.textContent = 'Done ✓';
    termStatus.className   = 'term-status done';
  } else {
    termStatus.textContent = 'Error ✗';
    termStatus.className   = 'term-status error';
  }

  runBtn.classList.remove('running');
  runBtn.innerHTML = '<span class="run-icon">▶</span> Run Again';
  runBtn.disabled  = false;

  // Allow re-run
  runBtn.onclick = () => {
    resetTerminal();
    window.runProgram();
  };
}

// ─────────────────────────────────────────────
//  Copy Code
// ─────────────────────────────────────────────
window.copyCode = function() {
  if (!currentProgram) return;
  navigator.clipboard.writeText(currentProgram.code).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<span>✅</span> Copied!';
    btn.style.color = '#34d399';
    btn.style.borderColor = 'rgba(52,211,153,0.4)';
    setTimeout(() => {
      btn.innerHTML = '<span>📋</span> Copy Code';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
};

// ─────────────────────────────────────────────
//  Events
// ─────────────────────────────────────────────
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
});

termInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') submitInput();
});

document.getElementById('termSubmit').addEventListener('click', submitInput);

// ─────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────
spawnParticles();
renderCards();

// Update stats count
document.querySelectorAll('.stat-num').forEach(el => {
  if (el.textContent === '12') el.textContent = PROGRAMS.length;
});

console.log('%c☕ Java Lab Loaded', 'font-size:18px;color:#f89820;font-weight:bold');
console.log(`%c${PROGRAMS.length} programs ready`, 'color:#34d399');
