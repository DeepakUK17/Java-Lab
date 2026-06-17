export const section2 = // ███████████████████████████████████████████
  //  SECTION 2 — OPERATORS
  // ███████████████████████████████████████████
  {
    id: 'operators',
    title: 'Operators',
    icon: '⚙️',
    theme: { accent: '#f59e0b', glow: 'rgba(245,158,11,0.18)', bg: 'rgba(245,158,11,0.08)' },
    programs: [

      {
        id: 'sum-two-numbers',
        title: 'Sum of Two Numbers',
        icon: '➕',
        difficulty: 'Easy',
        tags: ['arithmetic', 'addition'],
        desc: 'Takes two integers and prints their sum.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int sum = num1 + num2;
        System.out.print("The sum is: " + sum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a = parseInt(inputs['a']), b = parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `The sum is: ${a+b}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'difference-two',
        title: 'Difference of Two Numbers',
        icon: '➖',
        difficulty: 'Easy',
        tags: ['arithmetic', 'subtraction'],
        desc: 'Takes two integers and prints their difference.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int difference = num1 - num2;
        System.out.print("The difference is: " + difference);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a = parseInt(inputs['a']), b = parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `The difference is: ${a-b}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'product-two',
        title: 'Product of Two Numbers',
        icon: '✖️',
        difficulty: 'Easy',
        tags: ['arithmetic', 'multiply'],
        desc: 'Takes two integers and prints their product.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int product = num1 * num2;
        System.out.print("The Product is: " + product);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a = parseInt(inputs['a']), b = parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `The Product is: ${a*b}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'quotient-two',
        title: 'Quotient & Remainder',
        icon: '➗',
        difficulty: 'Easy',
        tags: ['arithmetic', 'division', 'modulo'],
        desc: 'Takes two integers and prints both the quotient and remainder.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        System.out.println("Quotient: " + num1 / num2);
        System.out.println("Remainder: " + num1 % num2);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter dividend: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter divisor: ', inputKey: 'b' };
          const a = parseInt(inputs['a']), b = parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)||b===0) { yield { type:'error', text:'Invalid input (division by zero).' }; return; }
          yield { type: 'out', text: `Quotient: ${Math.trunc(a/b)}` };
          yield { type: 'out', text: `Remainder: ${a%b}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'swap-with-temp',
        title: 'Swap (with temp)',
        icon: '🔄',
        difficulty: 'Easy',
        tags: ['swap', 'variable', 'temp'],
        desc: 'Swaps two numbers using a third temporary variable.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int temp = num1;
        num1 = num2;
        num2 = temp;
        System.out.print(num1 + " " + num2);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'out', text: `Before: a=${inputs['a']}, b=${inputs['b']}` };
          yield { type: 'out', text: `After:  a=${inputs['b']}, b=${inputs['a']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'swap-without-temp',
        title: 'Swap (without temp)',
        icon: '🔁',
        difficulty: 'Medium',
        tags: ['swap', 'arithmetic', 'trick'],
        desc: 'Swaps two numbers without using a third variable using arithmetic.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.print(a + " " + b);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'out', text: `Before: a=${inputs['a']}, b=${inputs['b']}` };
          yield { type: 'out', text: `After:  a=${inputs['b']}, b=${inputs['a']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'last-digit',
        title: 'Last Digit of Number',
        icon: '🔚',
        difficulty: 'Easy',
        tags: ['modulo', 'digit'],
        desc: 'Extracts and prints the last digit of a given number using modulo.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int last_digit = num % 10;
        System.out.print(last_digit);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'num' };
          const n = parseInt(inputs['num']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Last digit = ${Math.abs(n) % 10}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'absolute-value',
        title: 'Absolute Value',
        icon: '|x|',
        difficulty: 'Easy',
        tags: ['math', 'abs'],
        desc: 'Prints the absolute value of a given number using Math.abs().',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int abs = Math.abs(num);
        System.out.print(abs);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'num' };
          const n = parseInt(inputs['num']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Absolute value = ${Math.abs(n)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'square-cube',
        title: 'Square & Cube',
        icon: 'x²',
        difficulty: 'Easy',
        tags: ['math', 'power', 'square'],
        desc: 'Prints the square and cube of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println("Square = " + (num * num));
        System.out.println("Cube   = " + (num * num * num));
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'num' };
          const n = parseInt(inputs['num']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Square = ${n*n}` };
          yield { type: 'out', text: `Cube   = ${n*n*n}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'average-three',
        title: 'Average of Three',
        icon: 'x̄',
        difficulty: 'Easy',
        tags: ['arithmetic', 'average'],
        desc: 'Calculates the average of three numbers.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        double avg = (a + b + c) / 3.0;
        System.out.print(avg);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'ask', text: 'Enter third number: ', inputKey: 'c' };
          const a=parseFloat(inputs['a']),b=parseFloat(inputs['b']),c=parseFloat(inputs['c']);
          if (isNaN(a)||isNaN(b)||isNaN(c)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Average = ${((a+b+c)/3).toFixed(2)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'power-of-2',
        title: 'Power of 2 Check',
        icon: '⚡',
        difficulty: 'Medium',
        tags: ['bitwise', 'AND', 'power'],
        desc: 'Checks if a number is a power of 2 using bitwise AND operator.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n > 0 && (n & (n - 1)) == 0) {
            System.out.print("Power of 2");
        } else {
            System.out.print("Not a power of 2");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          const isPow = n > 0 && (n & (n-1)) === 0;
          yield { type: 'out', text: isPow ? `${n} is a Power of 2 ✓` : `${n} is Not a power of 2 ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'bitwise-even-odd',
        title: 'Even/Odd (Bitwise)',
        icon: '🔀',
        difficulty: 'Medium',
        tags: ['bitwise', 'AND', 'even', 'odd'],
        desc: 'Checks whether a number is even or odd using bitwise AND (&1).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if ((n & 1) == 1)
            System.out.print("ODD");
        else
            System.out.print("Even");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: (n & 1) === 1 ? `${n} is ODD` : `${n} is Even` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'positive-negative',
        title: 'Positive / Negative / Zero',
        icon: '±',
        difficulty: 'Easy',
        tags: ['comparison', 'ternary'],
        desc: 'Checks whether a number is positive, negative or zero.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String result = (n > 0) ? "Positive" : (n < 0) ? "Negative" : "Zero";
        System.out.print(result);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: n > 0 ? 'Positive' : n < 0 ? 'Negative' : 'Zero' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'greatest-of-three',
        title: 'Greatest of Three',
        icon: '🏆',
        difficulty: 'Easy',
        tags: ['ternary', 'comparison', 'max'],
        desc: 'Finds the greatest of three numbers using ternary operator.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        String large = (a > b) ? (a > c ? "a is largest" : "c is largest")
                               : (b > c ? "b is largest" : "c is largest");
        System.out.print(large);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter b: ', inputKey: 'b' };
          yield { type: 'ask', text: 'Enter c: ', inputKey: 'c' };
          const a=parseInt(inputs['a']),b=parseInt(inputs['b']),c=parseInt(inputs['c']);
          if (isNaN(a)||isNaN(b)||isNaN(c)) { yield { type:'error', text:'Invalid input.' }; return; }
          const max = Math.max(a,b,c);
          yield { type: 'out', text: `Greatest = ${max}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'minutes-to-seconds',
        title: 'Minutes to Seconds',
        icon: '⏱️',
        difficulty: 'Easy',
        tags: ['conversion', 'time'],
        desc: 'Converts minutes to seconds by multiplying by 60.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int mints = sc.nextInt();
        long sec = mints * 60;
        System.out.print(sec);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter minutes: ', inputKey: 'm' };
          const m = parseInt(inputs['m']);
          if (isNaN(m)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `${m} minutes = ${m*60} seconds` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'swap-third-var',
        title: 'Swap (Using Temp)',
        icon: '🔄',
        difficulty: 'Easy',
        tags: ['swap', 'variable'],
        desc: 'Swaps two numbers using a third temporary variable.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        int temp = num1;
        num1 = num2;
        num2 = temp;
        System.out.print(num1 + " " + num2);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a = inputs['a'], b = inputs['b'];
          yield { type: 'out', text: `After Swap: ${b} ${a}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'swap-no-third-var',
        title: 'Swap (Without Temp)',
        icon: '🔃',
        difficulty: 'Medium',
        tags: ['swap', 'math'],
        desc: 'Swaps two numbers without using a third temporary variable.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.print(a + " " + b);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a = inputs['a'], b = inputs['b'];
          yield { type: 'out', text: `After Swap: ${b} ${a}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'last-digit-op',
        title: 'Last Digit',
        icon: '🔚',
        difficulty: 'Easy',
        tags: ['modulo', 'digits'],
        desc: 'Prints the last digit of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int last_digit = num % 10;
        System.out.print(last_digit);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Last digit is ${Math.abs(n % 10)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'all-but-last-digit',
        title: 'All But Last Digit',
        icon: '➖',
        difficulty: 'Easy',
        tags: ['division', 'digits'],
        desc: 'Prints all digits except the last digit of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        long all_digits = num / 10;
        System.out.print(all_digits);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Result is ${Math.floor(n / 10)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-first-last-digit',
        title: 'Sum First & Last Digit',
        icon: '➕',
        difficulty: 'Medium',
        tags: ['modulo', 'division', 'digits'],
        desc: 'Prints the sum of the first and last digit of a 3-digit number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int last = num % 10;
        int first = num / 100;
        System.out.print(first + last);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a 3-digit number: ', inputKey: 'n' };
          const n = Math.abs(parseInt(inputs['n']));
          if (isNaN(n) || n < 100 || n > 999) { yield { type:'error', text:'Invalid 3-digit number.' }; return; }
          yield { type: 'out', text: `Sum = ${Math.floor(n / 100) + (n % 10)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'middle-digit',
        title: 'Middle Digit',
        icon: '🎯',
        difficulty: 'Medium',
        tags: ['modulo', 'division', 'digits'],
        desc: 'Prints the middle digit of a 3-digit number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long num = sc.nextLong();
        long middle = (num / 10) % 10;
        System.out.print(middle);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a 3-digit number: ', inputKey: 'n' };
          const n = Math.abs(parseInt(inputs['n']));
          if (isNaN(n) || n < 100 || n > 999) { yield { type:'error', text:'Invalid 3-digit number.' }; return; }
          yield { type: 'out', text: `Middle digit = ${Math.floor(n / 10) % 10}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'absolute-value-op',
        title: 'Absolute Value',
        icon: '📏',
        difficulty: 'Easy',
        tags: ['math', 'abs'],
        desc: 'Prints the absolute value of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int abs = Math.abs(num);
        System.out.print(abs);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Absolute value is ${Math.abs(n)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'square-number',
        title: 'Square of a Number',
        icon: '📐',
        difficulty: 'Easy',
        tags: ['multiplication', 'math'],
        desc: 'Prints the square of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int sq = num * num;
        System.out.print(sq);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Square is ${n * n}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'cube-number',
        title: 'Cube of a Number',
        icon: '📦',
        difficulty: 'Easy',
        tags: ['multiplication', 'math'],
        desc: 'Prints the cube of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int cube = num * num * num;
        System.out.print(cube);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Cube is ${n * n * n}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'bitwise-not',
        title: 'Bitwise NOT',
        icon: '🔣',
        difficulty: 'Medium',
        tags: ['bitwise', 'NOT'],
        desc: 'Demonstrates the Bitwise NOT (~) operator.',
        code: `public class Main {
    public static void main(String[] args) {
        int i = 10;
        System.out.println(~i); // -11
        
        i = -7;
        System.out.println(~i); // 6
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '-11\n6' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'bitwise-shift-logic',
        title: 'Bitwise Logic & Shifts',
        icon: '🛠️',
        difficulty: 'Medium',
        tags: ['bitwise', 'AND', 'OR', 'XOR', 'shift'],
        desc: 'Demonstrates Bitwise AND, OR, XOR, Left Shift, and Right Shift.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println(4 & 5);
        System.out.println(4 | 5);
        System.out.println(4 ^ 5);
        System.out.println(4 << 1);
        System.out.println(4 >> 1);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '4\n5\n1\n8\n2' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'distance-travelled',
        title: 'Distance Travelled',
        icon: '🚗',
        difficulty: 'Easy',
        tags: ['math', 'physics'],
        desc: 'Calculates the distance travelled given speed and time.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double speed = sc.nextDouble();
        double time = sc.nextDouble();
        double distance = speed * time;
        System.out.println("Distance: " + distance);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter speed: ', inputKey: 's' };
          yield { type: 'ask', text: 'Enter time: ', inputKey: 't' };
          const s = parseFloat(inputs['s']), t = parseFloat(inputs['t']);
          if (isNaN(s) || isNaN(t)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Distance: ${s * t}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'km-to-meters',
        title: 'Kilometers to Meters',
        icon: '📏',
        difficulty: 'Easy',
        tags: ['conversion', 'math'],
        desc: 'Converts distance in kilometers to meters.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double km = sc.nextDouble();
        double meters = km * 1000;
        System.out.println(meters + " meters");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Kilometers: ', inputKey: 'k' };
          const k = parseFloat(inputs['k']);
          if (isNaN(k)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `${k * 1000} meters` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }

    ]
  };
