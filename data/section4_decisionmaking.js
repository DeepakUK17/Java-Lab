export const section4 = // ███████████████████████████████████████████
  //  SECTION 4 — DECISION MAKING
  // ███████████████████████████████████████████
  {
    id: 'decision-making',
    title: 'Decision Making',
    icon: '🔀',
    theme: { accent: '#8b5cf6', glow: 'rgba(139,92,246,0.18)', bg: 'rgba(139,92,246,0.08)' },
    programs: [

      {
        id: 'grade-by-marks',
        title: 'Grade by Marks',
        icon: '🎯',
        difficulty: 'Easy',
        tags: ['if-else', 'grade'],
        desc: 'Assigns grade A/B/C/Fail based on marks using if-else ladder.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        if (marks >= 90) System.out.print("A");
        else if (marks >= 75) System.out.print("B");
        else if (marks >= 50) System.out.print("C");
        else System.out.print("Fail");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter marks: ', inputKey: 'marks' };
          const m = parseInt(inputs['marks']);
          if (isNaN(m)) { yield { type:'error', text:'Invalid input.' }; return; }
          const g = m>=90?'A':m>=75?'B':m>=50?'C':'Fail';
          yield { type: 'out', text: `Grade: ${g}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'calculator-switch',
        title: 'Calculator (Switch)',
        icon: '🧮',
        difficulty: 'Medium',
        tags: ['switch', 'calculator'],
        desc: 'Simple calculator using switch-case for +, -, *, / operations.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        char op = sc.next().charAt(0);
        switch (op) {
            case '+': System.out.print(a + b); break;
            case '-': System.out.print(a - b); break;
            case '*': System.out.print(a * b); break;
            case '/':
                if (b != 0) System.out.print(a / b);
                else System.out.print("Error: Division by Zero");
                break;
            default: System.out.print("Invalid operator");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'ask', text: 'Enter operator (+,-,*,/): ', inputKey: 'op' };
          const a=parseFloat(inputs['a']),b=parseFloat(inputs['b']),op=inputs['op'];
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          let res;
          switch(op){case '+':res=a+b;break;case '-':res=a-b;break;case '*':res=a*b;break;case '/':res=b!==0?a/b:'Error: Division by Zero';break;default:res='Invalid operator';}
          yield { type: 'out', text: `Result: ${res}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'leap-year',
        title: 'Leap Year Check',
        icon: '📆',
        difficulty: 'Medium',
        tags: ['if-else', 'leap year'],
        desc: 'Checks whether a year is a leap year using divisibility rules.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
            System.out.print("Y");
        else
            System.out.print("N");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a year: ', inputKey: 'year' };
          const y = parseInt(inputs['year']);
          if (isNaN(y)) { yield { type:'error', text:'Invalid input.' }; return; }
          const leap = (y%4===0&&y%100!==0)||y%400===0;
          yield { type: 'out', text: leap?`${y} is a Leap Year ✓`:`${y} is NOT a Leap Year ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'days-in-month',
        title: 'Days in Month',
        icon: '🗓️',
        difficulty: 'Easy',
        tags: ['if-else', 'month'],
        desc: 'Prints the number of days in a month given its number (1-12).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int month = sc.nextInt();
        if (month < 1 || month > 12) System.out.print("Error");
        else if (month == 2) System.out.print("28");
        else if (month == 4 || month == 6 || month == 9 || month == 11) System.out.print("30");
        else System.out.print("31");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter month number (1-12): ', inputKey: 'month' };
          const m = parseInt(inputs['month']);
          if (isNaN(m)||m<1||m>12) { yield { type:'error', text:'Error: Invalid month.' }; return; }
          const days = m===2?28:[4,6,9,11].includes(m)?30:31;
          yield { type: 'out', text: `Days = ${days}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'vowel-consonant',
        title: 'Vowel or Consonant',
        icon: '🅰️',
        difficulty: 'Easy',
        tags: ['if-else', 'char'],
        desc: 'Checks whether a character is a vowel, consonant, or not an alphabet.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            ch = Character.toLowerCase(ch);
            if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u')
                System.out.print("Vowel");
            else
                System.out.print("Consonant");
        } else {
            System.out.print("Not an alphabet");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a character: ', inputKey: 'ch' };
          const ch = (inputs['ch']||'')[0];
          if (!ch) { yield { type:'error', text:'Invalid input.' }; return; }
          const lower = ch.toLowerCase();
          if (lower>='a'&&lower<='z') {
            yield { type:'out', text:'aeiou'.includes(lower)?`'${ch}' is a Vowel`:`'${ch}' is a Consonant` };
          } else {
            yield { type:'out', text:`'${ch}' is Not an alphabet` };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'compare-two',
        title: 'Compare Two Numbers',
        icon: '⚖️',
        difficulty: 'Easy',
        tags: ['if-else', 'comparison'],
        desc: 'Compares two integers — equal, greater, or less than.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        if (x == y) System.out.print(x + " and " + y + " are equal");
        else if (x > y) System.out.print(x + " greater than " + y);
        else System.out.print(x + " less than " + y);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter x: ', inputKey: 'x' };
          yield { type: 'ask', text: 'Enter y: ', inputKey: 'y' };
          const x=parseInt(inputs['x']),y=parseInt(inputs['y']);
          if (isNaN(x)||isNaN(y)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: x===y?`${x} and ${y} are equal`:x>y?`${x} greater than ${y}`:`${x} less than ${y}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'voting-eligibility',
        title: 'Voting Eligibility',
        icon: '🗳️',
        difficulty: 'Easy',
        tags: ['if-else', 'age'],
        desc: 'Checks if a person is eligible to vote (age ≥ 18).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        if (age >= 18) System.out.print("Eligible to Vote ✓");
        else System.out.print("Not Eligible to Vote ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter age: ', inputKey: 'age' };
          const a = parseInt(inputs['age']);
          if (isNaN(a)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: a>=18?'Eligible to Vote ✓':'Not Eligible to Vote ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'pass-fail',
        title: 'Pass or Fail',
        icon: '📝',
        difficulty: 'Easy',
        tags: ['if-else', 'marks'],
        desc: 'Checks pass/fail based on marks (≥ 35 = pass).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        if (marks >= 35) System.out.print("Pass ✓");
        else System.out.print("Fail ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter marks: ', inputKey: 'marks' };
          const m = parseInt(inputs['marks']);
          if (isNaN(m)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: m>=35?`${m} — Pass ✓`:`${m} — Fail ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'traffic-light',
        title: 'Traffic Light',
        icon: '🚦',
        difficulty: 'Easy',
        tags: ['if-else', 'switch'],
        desc: 'Prints Stop/Ready/Go based on traffic light color input.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String color = sc.next().toLowerCase();
        if (color.equals("red")) System.out.print("Stop");
        else if (color.equals("yellow")) System.out.print("Ready");
        else if (color.equals("green")) System.out.print("Go");
        else System.out.print("Invalid color");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter color (red/yellow/green): ', inputKey: 'color' };
          const c = (inputs['color']||'').toLowerCase();
          const map = {red:'🔴 Stop',yellow:'🟡 Ready',green:'🟢 Go'};
          yield { type:'out', text: map[c]||'Invalid color' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'decimal-sum',
        title: 'Decimal Sum',
        icon: '➕',
        difficulty: 'Easy',
        tags: ['if-else', 'math', 'format'],
        desc: 'Prints sum of two numbers with 1 decimal place or as integer.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double sum = a + b;
        if (Math.abs(sum - (int)sum) < 1e-6)
            System.out.print((int)sum);
        else
            System.out.printf("%.1f", sum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter A: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter B: ', inputKey: 'b' };
          const a = parseFloat(inputs['a']), b = parseFloat(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          const sum = a + b;
          yield { type:'out', text: Math.abs(sum - Math.round(sum)) < 1e-6 ? String(Math.round(sum)) : sum.toFixed(1) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'grade-vc',
        title: 'Vice Chancellor Grading',
        icon: '🎓',
        difficulty: 'Easy',
        tags: ['if-else', 'grade'],
        desc: 'Grading system (S, A, B, C, D, E, F) based on strict ranges.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int marks = sc.nextInt();
        if (marks > 100 || marks < 0) System.out.println("Invalid Input");
        else if (marks == 100) System.out.println("S");
        else if (marks >= 90) System.out.println("A");
        else if (marks >= 80) System.out.println("B");
        else if (marks >= 70) System.out.println("C");
        else if (marks >= 60) System.out.println("D");
        else if (marks >= 50) System.out.println("E");
        else System.out.println("F");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter marks: ', inputKey: 'marks' };
          const m = parseInt(inputs['marks']);
          if (isNaN(m)) { yield { type:'error', text:'Invalid input.' }; return; }
          if (m>100||m<0) yield { type:'out', text:'Invalid Input' };
          else if (m===100) yield { type:'out', text:'S' };
          else if (m>=90) yield { type:'out', text:'A' };
          else if (m>=80) yield { type:'out', text:'B' };
          else if (m>=70) yield { type:'out', text:'C' };
          else if (m>=60) yield { type:'out', text:'D' };
          else if (m>=50) yield { type:'out', text:'E' };
          else yield { type:'out', text:'F' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'mango-tree',
        title: 'Mango Tree',
        icon: '🥭',
        difficulty: 'Medium',
        tags: ['if-else', 'math', 'grid'],
        desc: 'Checks if a tree in a grid is a mango tree (2nd or 2nd to last column).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int rows = sc.nextInt();
        int cols = sc.nextInt();
        int num = sc.nextInt();
        int col = (num - 1) / rows + 1;
        if (col == 2 || col == cols - 1)
            System.out.println("It is a mango tree");
        else
            System.out.println("It is not a mango tree");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter rows: ', inputKey: 'r' };
          yield { type: 'ask', text: 'Enter columns: ', inputKey: 'c' };
          yield { type: 'ask', text: 'Enter tree number: ', inputKey: 't' };
          const r = parseInt(inputs['r']), c = parseInt(inputs['c']), t = parseInt(inputs['t']);
          if (isNaN(r)||isNaN(c)||isNaN(t)||t<1||t>(r*c)) { yield { type:'error', text:'Invalid input.' }; return; }
          const col = Math.floor((t - 1) / r) + 1;
          if (col === 2 || col === c - 1) yield { type:'out', text:'It is a mango tree' };
          else yield { type:'out', text:'It is not a mango tree' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'last-digit-div-3',
        title: 'Last Digit Divisible by 3',
        icon: '3️⃣',
        difficulty: 'Easy',
        tags: ['if-else', 'modulo'],
        desc: 'Checks if the last digit of a number is divisible by 3.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int last = Math.abs(n) % 10;
        if (last % 3 == 0)
            System.out.println("Yes");
        else
            System.out.println("No");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          const last = Math.abs(n) % 10;
          yield { type:'out', text: last % 3 === 0 ? "Yes, divisible by 3" : "No, not divisible by 3" };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'nth-term-square',
        title: 'Nth Term (Square)',
        icon: '📉',
        difficulty: 'Easy',
        tags: ['if-else', 'math'],
        desc: 'Finds the Nth term of series 1, 4, 9, 16... (which is N²).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n < 0) {
            System.out.print("Error");
        } else if (n == 0) {
            System.out.print(0);
        } else {
            long term = (long)n * n;
            System.out.print(term);
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          if (n<0) yield { type:'out', text:'Error' };
          else yield { type:'out', text: String(n*n) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'quadratic-roots',
        title: 'Quadratic Equation Roots',
        icon: '📈',
        difficulty: 'Medium',
        tags: ['math', 'roots'],
        desc: 'Finds roots of a quadratic equation using Shri Dharacharya method.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double a = sc.nextDouble();
        double b = sc.nextDouble();
        double c = sc.nextDouble();
        double d = b * b - 4 * a * c;
        if (d >= 0) {
            double r1 = (-b + Math.sqrt(d)) / (2 * a);
            double r2 = (-b - Math.sqrt(d)) / (2 * a);
            System.out.printf("%.2f\\n", r1);
            System.out.printf("%.2f\\n", r2);
        } else {
            System.out.println("Imaginary roots");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter A (coeff of x²): ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter B (coeff of x): ', inputKey: 'b' };
          yield { type: 'ask', text: 'Enter C (constant): ', inputKey: 'c' };
          const a=parseFloat(inputs['a']),b=parseFloat(inputs['b']),c=parseFloat(inputs['c']);
          if (isNaN(a)||isNaN(b)||isNaN(c)) { yield { type:'error', text:'Invalid input.' }; return; }
          const d = b*b - 4*a*c;
          if (d >= 0) {
              const r1 = (-b + Math.sqrt(d))/(2*a);
              const r2 = (-b - Math.sqrt(d))/(2*a);
              yield { type:'out', text: r1.toFixed(2) };
              yield { type:'out', text: r2.toFixed(2) };
          } else {
              yield { type:'out', text: 'Imaginary roots' };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'min-two-numbers',
        title: 'Minimum of Two Numbers',
        icon: '🔻',
        difficulty: 'Easy',
        tags: ['if-else', 'min'],
        desc: 'Finds the minimum of two numbers using an if-else statement.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        if (a < b)       System.out.print(a + " is smaller");
        else if (b < a)  System.out.print(b + " is smaller");
        else             System.out.print("Both are equal");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a=parseInt(inputs['a']),b=parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          if(a<b) yield { type:'out', text: a+' is smaller' };
          else if(b<a) yield { type:'out', text: b+' is smaller' };
          else yield { type:'out', text: 'Both are equal' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'divisible-by-5',
        title: 'Divisible by 5?',
        icon: '5️⃣',
        difficulty: 'Easy',
        tags: ['if-else', 'modulo'],
        desc: 'Checks whether a given number is divisible by 5.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n % 5 == 0) System.out.print("Divisible by 5 ✓");
        else             System.out.print("Not divisible by 5 ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: n%5===0?n+' is Divisible by 5 ✓':n+' is Not divisible by 5 ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'multiple-of-3-and-7',
        title: 'Multiple of Both 3 and 7?',
        icon: '7️⃣',
        difficulty: 'Easy',
        tags: ['if-else', 'modulo'],
        desc: 'Checks whether a number is a multiple of both 3 and 7.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n % 3 == 0 && n % 7 == 0)
            System.out.print("Multiple of both 3 and 7 ✓");
        else
            System.out.print("Not a multiple of both 3 and 7 ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: n%3===0&&n%7===0?n+' is Multiple of both 3 and 7 ✓':n+' is Not a multiple of both 3 and 7 ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'smallest-of-three',
        title: 'Smallest Among Three Numbers',
        icon: '🔻',
        difficulty: 'Easy',
        tags: ['if-else', 'min'],
        desc: 'Finds the smallest among three numbers using else-if ladder.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        if (a <= b && a <= c) System.out.print(a + " is smallest");
        else if (b <= a && b <= c) System.out.print(b + " is smallest");
        else System.out.print(c + " is smallest");
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
          yield { type:'out', text: 'Smallest = '+Math.min(a,b,c) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'char-type-check',
        title: 'Character Type Check',
        icon: '🔤',
        difficulty: 'Medium',
        tags: ['if-else', 'char', 'type'],
        desc: 'Checks if a character is Uppercase, Lowercase, Digit, or Special character.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        if (ch >= 'A' && ch <= 'Z')        System.out.print("Uppercase");
        else if (ch >= 'a' && ch <= 'z')   System.out.print("Lowercase");
        else if (ch >= '0' && ch <= '9')   System.out.print("Digit");
        else                               System.out.print("Special Character");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a character: ', inputKey: 'ch' };
          const ch = (inputs['ch']||'')[0];
          if (!ch) { yield { type:'error', text:'Invalid input.' }; return; }
          let type;
          if(ch>='A'&&ch<='Z') type='Uppercase';
          else if(ch>='a'&&ch<='z') type='Lowercase';
          else if(ch>='0'&&ch<='9') type='Digit';
          else type='Special Character';
          yield { type:'out', text: "'"+ch+"' is "+type };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digit-count-type',
        title: 'Single / Double / Triple Digit',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['if-else', 'digits'],
        desc: 'Checks whether a number is a single, double, or triple digit number.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Math.abs(sc.nextInt());
        if (n < 10)        System.out.print("Single digit");
        else if (n < 100)  System.out.print("Double digit");
        else if (n < 1000) System.out.print("Triple digit");
        else               System.out.print("More than triple digit");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = Math.abs(parseInt(inputs['n']));
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          let type = n<10?'Single digit':n<100?'Double digit':n<1000?'Triple digit':'More than triple digit';
          yield { type:'out', text: n+' → '+type };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'second-largest-three',
        title: 'Second Largest of Three',
        icon: '🥈',
        difficulty: 'Medium',
        tags: ['nested if', 'comparison'],
        desc: 'Finds the second largest among three numbers using nested if conditions.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        int second;
        if (a >= b && a >= c)       second = Math.max(b, c);
        else if (b >= a && b >= c)  second = Math.max(a, c);
        else                        second = Math.max(a, b);
        System.out.print("Second largest = " + second);
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
          const arr=[a,b,c].sort((x,y)=>y-x);
          yield { type:'out', text: 'Second largest = '+arr[1] };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'voting-with-id',
        title: 'Voting Eligibility with ID',
        icon: '🪪',
        difficulty: 'Medium',
        tags: ['nested if', 'condition'],
        desc: 'Checks if a person is eligible to vote (age ≥ 18) AND has a valid ID.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        int hasId = sc.nextInt(); // 1=Yes, 0=No
        if (age >= 18) {
            if (hasId == 1) System.out.print("Eligible to Vote ✓");
            else            System.out.print("Age OK but No ID ✗");
        } else {
            System.out.print("Not Eligible (age < 18) ✗");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter age: ', inputKey: 'age' };
          yield { type: 'ask', text: 'Has valid ID? (1=Yes, 0=No): ', inputKey: 'id' };
          const age=parseInt(inputs['age']),id=parseInt(inputs['id']);
          if (isNaN(age)||isNaN(id)) { yield { type:'error', text:'Invalid input.' }; return; }
          let res;
          if(age>=18){ res = id===1?'Eligible to Vote ✓':'Age OK but No valid ID ✗'; }
          else { res='Not Eligible (age < 18) ✗'; }
          yield { type:'out', text: res };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'div-by-2-and-3',
        title: 'Divisible by 2 and 3?',
        icon: '÷',
        difficulty: 'Easy',
        tags: ['nested if', 'modulo'],
        desc: 'Checks whether a number is divisible by both 2 and 3 using nested if.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n % 2 == 0) {
            if (n % 3 == 0) System.out.print("Divisible by both 2 and 3 ✓");
            else             System.out.print("Divisible by 2 only");
        } else {
            if (n % 3 == 0) System.out.print("Divisible by 3 only");
            else             System.out.print("Not divisible by 2 or 3 ✗");
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
          let res;
          if(n%2===0){ res=n%3===0?'Divisible by both 2 and 3 ✓':'Divisible by 2 only'; }
          else { res=n%3===0?'Divisible by 3 only':'Not divisible by 2 or 3 ✗'; }
          yield { type:'out', text: res };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'max-nested-if',
        title: 'Maximum of Three (Nested If)',
        icon: '🏆',
        difficulty: 'Medium',
        tags: ['nested if', 'max'],
        desc: 'Finds the maximum of three numbers using nested if conditions.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        int max;
        if (a > b) {
            if (a > c) max = a; else max = c;
        } else {
            if (b > c) max = b; else max = c;
        }
        System.out.print("Maximum = " + max);
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
          yield { type:'out', text: 'Maximum = '+Math.max(a,b,c) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'between-10-and-50',
        title: 'Number Between 10 and 50?',
        icon: '📏',
        difficulty: 'Easy',
        tags: ['if-else', 'range'],
        desc: 'Checks if a number lies strictly between 10 and 50.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n > 10 && n < 50) System.out.print("Number is between 10 and 50 ✓");
        else                   System.out.print("Number is NOT between 10 and 50 ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: n>10&&n<50?n+' is between 10 and 50 ✓':n+' is NOT between 10 and 50 ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'day-of-week-switch',
        title: 'Day of Week (Switch)',
        icon: '📅',
        difficulty: 'Easy',
        tags: ['switch', 'day'],
        desc: 'Prints the name of the day given a number 1–7 using switch-case.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int d = sc.nextInt();
        switch (d) {
            case 1: System.out.print("Monday");    break;
            case 2: System.out.print("Tuesday");   break;
            case 3: System.out.print("Wednesday"); break;
            case 4: System.out.print("Thursday");  break;
            case 5: System.out.print("Friday");    break;
            case 6: System.out.print("Saturday");  break;
            case 7: System.out.print("Sunday");    break;
            default: System.out.print("Invalid day number");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter day number (1-7): ', inputKey: 'd' };
          const d = parseInt(inputs['d']);
          const days=['','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
          yield { type:'out', text: d>=1&&d<=7?days[d]:'Invalid day number' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'month-name-switch',
        title: 'Month Name (Switch)',
        icon: '🗓️',
        difficulty: 'Easy',
        tags: ['switch', 'month'],
        desc: 'Prints the name of the month given a number 1–12 using switch-case.',
        code: `import java.util.*;
public class Main {
    static String[] m = {"","January","February","March","April","May","June",
                          "July","August","September","October","November","December"};
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n >= 1 && n <= 12) System.out.print(m[n]);
        else System.out.print("Invalid month number");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter month number (1-12): ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          const months=['','January','February','March','April','May','June','July','August','September','October','November','December'];
          yield { type:'out', text: n>=1&&n<=12?months[n]:'Invalid month number' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'menu-driven-calc',
        title: 'Menu-Driven (Add/Sub/Mul)',
        icon: '📋',
        difficulty: 'Easy',
        tags: ['switch', 'menu'],
        desc: 'Menu-driven program: 1 → Add, 2 → Subtract, 3 → Multiply.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1.Add  2.Subtract  3.Multiply");
        int choice = sc.nextInt();
        int a = sc.nextInt(), b = sc.nextInt();
        switch (choice) {
            case 1: System.out.print("Result: " + (a + b)); break;
            case 2: System.out.print("Result: " + (a - b)); break;
            case 3: System.out.print("Result: " + (a * b)); break;
            default: System.out.print("Invalid choice");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '1.Add  2.Subtract  3.Multiply' };
          yield { type: 'ask', text: 'Enter choice (1/2/3): ', inputKey: 'ch' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const ch=parseInt(inputs['ch']),a=parseInt(inputs['a']),b=parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          let res;
          switch(ch){ case 1:res=a+b;break; case 2:res=a-b;break; case 3:res=a*b;break; default:res='Invalid choice'; }
          yield { type:'out', text: 'Result: '+res };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'salary-with-bonus',
        title: 'Salary with Bonus',
        icon: '💰',
        difficulty: 'Easy',
        tags: ['if-else', 'salary'],
        desc: 'Calculates salary bonus: 10% if salary > 50000, otherwise 5%.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double salary = sc.nextDouble();
        double bonus = salary > 50000 ? salary * 0.10 : salary * 0.05;
        System.out.printf("Bonus: %.2f%n", bonus);
        System.out.printf("Total: %.2f%n", salary + bonus);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter salary: ', inputKey: 'sal' };
          const sal = parseFloat(inputs['sal']);
          if (isNaN(sal)||sal<0) { yield { type:'error', text:'Invalid input.' }; return; }
          const bonus = sal>50000?sal*0.10:sal*0.05;
          yield { type:'out', text: 'Bonus: ₹'+bonus.toFixed(2) };
          yield { type:'out', text: 'Total: ₹'+(sal+bonus).toFixed(2) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'driving-eligibility',
        title: 'Driving Eligibility',
        icon: '🚗',
        difficulty: 'Easy',
        tags: ['if-else', 'age'],
        desc: 'Checks driving eligibility: age ≥ 18 → Eligible, otherwise Not eligible.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        if (age >= 18) System.out.print("Eligible to Drive ✓");
        else           System.out.print("Not Eligible to Drive ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter age: ', inputKey: 'age' };
          const age = parseInt(inputs['age']);
          if (isNaN(age)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: age>=18?'Eligible to Drive ✓':'Not Eligible to Drive ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'div-2-3-both-none',
        title: 'Divisible by 2, 3, Both, or None',
        icon: '÷',
        difficulty: 'Easy',
        tags: ['if-else', 'modulo'],
        desc: 'Checks whether a number is divisible by 2, 3, both, or neither.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean d2 = n%2==0, d3 = n%3==0;
        if (d2 && d3)       System.out.print("Divisible by both 2 and 3");
        else if (d2)        System.out.print("Divisible by 2 only");
        else if (d3)        System.out.print("Divisible by 3 only");
        else                System.out.print("Not divisible by 2 or 3");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          const d2=n%2===0,d3=n%3===0;
          let res;
          if(d2&&d3) res='Divisible by both 2 and 3';
          else if(d2) res='Divisible by 2 only';
          else if(d3) res='Divisible by 3 only';
          else res='Not divisible by 2 or 3';
          yield { type:'out', text: res };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'perfect-square-check',
        title: 'Perfect Square Check',
        icon: '✅',
        difficulty: 'Easy',
        tags: ['if-else', 'math', 'square'],
        desc: 'Checks whether a given number is a perfect square.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sq = (int)Math.sqrt(n);
        if (sq * sq == n) System.out.print(n + " is a Perfect Square ✓");
        else              System.out.print(n + " is NOT a Perfect Square ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          const sq = Math.floor(Math.sqrt(n));
          yield { type:'out', text: sq*sq===n?n+' is a Perfect Square ✓':n+' is NOT a Perfect Square ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'triangle-sides-check',
        title: 'Triangle Possible?',
        icon: '📐',
        difficulty: 'Easy',
        tags: ['if-else', 'triangle'],
        desc: 'Checks whether three given side lengths can form a valid triangle.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        if (a+b>c && b+c>a && a+c>b) System.out.print("Valid Triangle ✓");
        else                          System.out.print("Not a Triangle ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter side a: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter side b: ', inputKey: 'b' };
          yield { type: 'ask', text: 'Enter side c: ', inputKey: 'c' };
          const a=parseInt(inputs['a']),b=parseInt(inputs['b']),c=parseInt(inputs['c']);
          if (isNaN(a)||isNaN(b)||isNaN(c)||a<=0||b<=0||c<=0) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: a+b>c&&b+c>a&&a+c>b?'Valid Triangle ✓':'Not a Triangle ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'triangle-type-check',
        title: 'Triangle Type',
        icon: '🔺',
        difficulty: 'Easy',
        tags: ['if-else', 'triangle', 'type'],
        desc: 'Determines if a triangle is Equilateral, Isosceles, or Scalene.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        if (a==b && b==c)           System.out.print("Equilateral Triangle");
        else if (a==b||b==c||a==c) System.out.print("Isosceles Triangle");
        else                        System.out.print("Scalene Triangle");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter side a: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter side b: ', inputKey: 'b' };
          yield { type: 'ask', text: 'Enter side c: ', inputKey: 'c' };
          const a=parseInt(inputs['a']),b=parseInt(inputs['b']),c=parseInt(inputs['c']);
          if (isNaN(a)||isNaN(b)||isNaN(c)) { yield { type:'error', text:'Invalid input.' }; return; }
          let type;
          if(a===b&&b===c) type='Equilateral Triangle';
          else if(a===b||b===c||a===c) type='Isosceles Triangle';
          else type='Scalene Triangle';
          yield { type:'out', text: type };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'alphabet-check',
        title: 'Alphabet or Not?',
        icon: '🔡',
        difficulty: 'Easy',
        tags: ['if-else', 'char', 'alphabet'],
        desc: 'Checks whether a given character is an alphabet letter or not.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        if ((ch>='A'&&ch<='Z') || (ch>='a'&&ch<='z'))
            System.out.print("'" + ch + "' is an Alphabet ✓");
        else
            System.out.print("'" + ch + "' is NOT an Alphabet ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a character: ', inputKey: 'ch' };
          const ch = (inputs['ch']||'')[0];
          if (!ch) { yield { type:'error', text:'Invalid input.' }; return; }
          const isAlpha = (ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z');
          yield { type:'out', text: isAlpha?"'"+ch+"' is an Alphabet ✓":"'"+ch+"' is NOT an Alphabet ✗" };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'ends-with-5',
        title: 'Number Ends with 5?',
        icon: '5️⃣',
        difficulty: 'Easy',
        tags: ['if-else', 'modulo', 'digit'],
        desc: 'Checks whether the last digit of a number is 5.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (Math.abs(n) % 10 == 5) System.out.print("Ends with 5 ✓");
        else                       System.out.print("Does NOT end with 5 ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: Math.abs(n)%10===5?n+' ends with 5 ✓':n+' does NOT end with 5 ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'same-digits-check',
        title: 'All Digits Same? (111, 222...)',
        icon: '🔁',
        difficulty: 'Medium',
        tags: ['if-else', 'digits', 'repunit'],
        desc: 'Checks whether all digits in a number are the same (e.g. 111, 222, 444).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        char first = s.charAt(0);
        boolean same = true;
        for (char c : s.toCharArray())
            if (c != first) { same = false; break; }
        System.out.println(same ? "All digits are same ✓" : "Digits are NOT all same ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(inputs['n']||'');
          if (!s||isNaN(+s)) { yield { type:'error', text:'Invalid input.' }; return; }
          const same = s.split('').every(c=>c===s[0]);
          yield { type:'out', text: same?'All digits are same ✓':'Digits are NOT all same ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-digits-even-odd',
        title: 'Sum of Digits: Even or Odd?',
        icon: '⚖️',
        difficulty: 'Medium',
        tags: ['if-else', 'digits', 'sum'],
        desc: 'Checks whether the sum of all digits of a number is even or odd.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum = 0, temp = n;
        while (temp > 0) { sum += temp % 10; temp /= 10; }
        if (sum % 2 == 0) System.out.println("Sum " + sum + " is Even ✓");
        else              System.out.println("Sum " + sum + " is Odd");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0,t=n; while(t>0){sum+=t%10;t=Math.floor(t/10);}
          yield { type:'out', text: 'Sum = '+sum+' → '+(sum%2===0?'Even ✓':'Odd') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'even-div5-odd-div3',
        title: 'Even & Div by 5 / Odd & Div by 3',
        icon: '🔀',
        difficulty: 'Medium',
        tags: ['if-else', 'modulo', 'condition'],
        desc: 'Checks if a number is (Even and divisible by 5) or (Odd and divisible by 3).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n%2==0 && n%5==0) System.out.print("Even and divisible by 5 ✓");
        else if (n%2!=0 && n%3==0) System.out.print("Odd and divisible by 3 ✓");
        else System.out.print("Neither condition met ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          let res;
          if(n%2===0&&n%5===0) res='Even and divisible by 5 ✓';
          else if(n%2!==0&&n%3===0) res='Odd and divisible by 3 ✓';
          else res='Neither condition met ✗';
          yield { type:'out', text: res };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'student-pass-all-check',
        title: 'Student Pass All Subjects',
        icon: '🎓',
        difficulty: 'Medium',
        tags: ['if-else', 'condition', 'average'],
        desc: 'Checks if a student passed all subjects (each ≥ 35) AND has an average ≥ 50.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int s1=sc.nextInt(),s2=sc.nextInt(),s3=sc.nextInt();
        double avg = (s1+s2+s3)/3.0;
        if (s1>=35 && s2>=35 && s3>=35 && avg>=50)
            System.out.println("Passed ✓ (Average: " + avg + ")");
        else
            System.out.println("Failed ✗ (Average: " + avg + ")");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Subject 1 marks: ', inputKey: 's1' };
          yield { type: 'ask', text: 'Enter Subject 2 marks: ', inputKey: 's2' };
          yield { type: 'ask', text: 'Enter Subject 3 marks: ', inputKey: 's3' };
          const s1=parseInt(inputs['s1']),s2=parseInt(inputs['s2']),s3=parseInt(inputs['s3']);
          if (isNaN(s1)||isNaN(s2)||isNaN(s3)) { yield { type:'error', text:'Invalid input.' }; return; }
          const avg=(s1+s2+s3)/3;
          if(s1>=35&&s2>=35&&s3>=35&&avg>=50) yield { type:'out', text: 'Passed ✓ (Average: '+avg.toFixed(2)+')' };
          else yield { type:'out', text: 'Failed ✗ (Average: '+avg.toFixed(2)+')' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'login-system-check',
        title: 'Login System',
        icon: '🔐',
        difficulty: 'Easy',
        tags: ['if-else', 'string', 'login'],
        desc: 'Simulates a simple login: checks if username and password match.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String user = sc.next(), pass = sc.next();
        if (user.equals("admin") && pass.equals("1234"))
            System.out.print("Login Successful ✓");
        else
            System.out.print("Invalid Credentials ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter username: ', inputKey: 'u' };
          yield { type: 'ask', text: 'Enter password: ', inputKey: 'p' };
          const u=inputs['u'],p=inputs['p'];
          yield { type:'out', text: u==='admin'&&p==='1234'?'Login Successful ✓':'Invalid Credentials ✗' };
          yield { type: 'out', text: '(Hint: username=admin, password=1234)' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'atm-withdrawal-check',
        title: 'ATM Withdrawal',
        icon: '🏧',
        difficulty: 'Medium',
        tags: ['nested if', 'condition', 'atm'],
        desc: 'ATM withdrawal: checks if balance is sufficient AND amount is a multiple of 100.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double balance = sc.nextDouble();
        double amount  = sc.nextDouble();
        if (amount % 100 == 0) {
            if (balance >= amount) {
                balance -= amount;
                System.out.printf("Withdrawn: %.0f%nBalance: %.0f%n", amount, balance);
            } else System.out.print("Insufficient Balance ✗");
        } else System.out.print("Amount must be a multiple of 100 ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter current balance: ', inputKey: 'bal' };
          yield { type: 'ask', text: 'Enter amount to withdraw: ', inputKey: 'amt' };
          const bal=parseFloat(inputs['bal']),amt=parseFloat(inputs['amt']);
          if (isNaN(bal)||isNaN(amt)||amt<=0) { yield { type:'error', text:'Invalid input.' }; return; }
          if(amt%100!==0) yield { type:'out', text:'Amount must be a multiple of 100 ✗' };
          else if(bal<amt) yield { type:'out', text:'Insufficient Balance ✗' };
          else { yield { type:'out', text:'Withdrawn: ₹'+amt }; yield { type:'out', text:'Remaining Balance: ₹'+(bal-amt) }; }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'second-smallest-three',
        title: 'Second Smallest of Three',
        icon: '🥉',
        difficulty: 'Medium',
        tags: ['if-else', 'min', 'comparison'],
        desc: 'Finds the second smallest among three numbers.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();
        int second;
        if (a <= b && a <= c)      second = Math.min(b, c);
        else if (b <= a && b <= c) second = Math.min(a, c);
        else                       second = Math.min(a, b);
        System.out.print("Second smallest = " + second);
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
          const arr=[a,b,c].sort((x,y)=>x-y);
          yield { type:'out', text: 'Second smallest = '+arr[1] };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'between-two-values',
        title: 'Number Between Two Values?',
        icon: '↔️',
        difficulty: 'Easy',
        tags: ['if-else', 'range'],
        desc: 'Checks if a number lies between two given values (inclusive).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), low = sc.nextInt(), high = sc.nextInt();
        if (n >= low && n <= high)
            System.out.print(n + " is in range [" + low + ", " + high + "] ✓");
        else
            System.out.print(n + " is NOT in range ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter the number: ', inputKey: 'n' };
          yield { type: 'ask', text: 'Enter lower bound: ', inputKey: 'low' };
          yield { type: 'ask', text: 'Enter upper bound: ', inputKey: 'high' };
          const n=parseInt(inputs['n']),low=parseInt(inputs['low']),high=parseInt(inputs['high']);
          if (isNaN(n)||isNaN(low)||isNaN(high)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type:'out', text: n>=low&&n<=high?n+' is in range ['+low+', '+high+'] ✓':n+' is NOT in range ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'profit-or-loss',
        title: 'Profit or Loss',
        icon: '📊',
        difficulty: 'Easy',
        tags: ['if-else', 'math', 'finance'],
        desc: 'Determines profit or loss based on cost price and selling price.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double cp = sc.nextDouble(), sp = sc.nextDouble();
        if (sp > cp)      System.out.printf("Profit = %.2f%n", sp-cp);
        else if (sp < cp) System.out.printf("Loss = %.2f%n", cp-sp);
        else              System.out.print("No Profit No Loss");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Cost Price: ', inputKey: 'cp' };
          yield { type: 'ask', text: 'Enter Selling Price: ', inputKey: 'sp' };
          const cp=parseFloat(inputs['cp']),sp=parseFloat(inputs['sp']);
          if (isNaN(cp)||isNaN(sp)) { yield { type:'error', text:'Invalid input.' }; return; }
          if(sp>cp) yield { type:'out', text: 'Profit = ₹'+(sp-cp).toFixed(2) };
          else if(sp<cp) yield { type:'out', text: 'Loss = ₹'+(cp-sp).toFixed(2) };
          else yield { type:'out', text: 'No Profit No Loss' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'harshad-number-dm',
        title: 'Harshad Number (Decision)',
        icon: '🔢',
        difficulty: 'Medium',
        tags: ['if-else', 'digits', 'harshad'],
        desc: 'Checks if a number is a Harshad Number using if-else (digit sum divides the number).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum=0, temp=n;
        while (temp > 0) { sum += temp%10; temp /= 10; }
        if (n % sum == 0) System.out.println(n+" is a Harshad Number ✓");
        else              System.out.println(n+" is NOT a Harshad Number ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0,t=n; while(t>0){sum+=t%10;t=Math.floor(t/10);}
          yield { type:'out', text: n%sum===0?n+' is a Harshad Number ✓':n+' is NOT a Harshad Number ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },



    ]
  };
