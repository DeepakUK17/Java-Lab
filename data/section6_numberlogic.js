export const section6 = // ███████████████████████████████████████████
  //  SECTION 6 — NUMBER LOGIC
  // ███████████████████████████████████████████
  {
    id: 'number-logic',
    title: 'Number Logic',
    icon: '🧠',
    theme: { accent: '#6366f1', glow: 'rgba(99,102,241,0.18)', bg: 'rgba(99,102,241,0.08)' },
    programs: [

      {
        id: 'palindrome',
        title: 'Palindrome Check',
        icon: '⇌',
        difficulty: 'Medium',
        tags: ['while loop', 'palindrome'],
        desc: 'Checks whether a number reads the same forward and backward.',
        code: `import java.util.Scanner;
public class Palindrome {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int p1 = s.nextInt();
        int p = p1, rev = 0;
        while (p > 0) {
            rev = rev * 10 + (p % 10);
            p /= 10;
        }
        if (rev == p1) System.out.println("Palindrome ✓");
        else System.out.println("Non Palindrome ✗");
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Palindrome.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'p' };
          const p1 = parseInt(inputs['p']);
          if (isNaN(p1)||p1<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let p=p1,rev=0; while(p>0){rev=rev*10+(p%10);p=Math.floor(p/10);}
          yield { type: 'out', text: rev===p1?`${p1} is a Palindrome ✓`:`${p1} is Non Palindrome ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'prime-number',
        title: 'Prime Number Check',
        icon: '🔢',
        difficulty: 'Medium',
        tags: ['for loop', 'prime'],
        desc: 'Determines if a number is prime by checking divisibility.',
        code: `import java.util.Scanner;
public class PrimeNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int prime = s.nextInt();
        int cnt = 0;
        for (int m = 1; m <= prime; m++) {
            if (prime % m == 0) cnt++;
        }
        if (cnt < 3) System.out.println("Prime ✓");
        else System.out.println("Non Prime ✗");
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling PrimeNumber.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'prime' };
          const prime = parseInt(inputs['prime']);
          if (isNaN(prime)||prime<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let cnt=0; for(let m=1;m<=prime;m++){if(prime%m===0)cnt++;}
          yield { type: 'out', text: cnt<3?`${prime} is Prime ✓`:`${prime} is Non Prime ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'strong-number',
        title: 'Strong Number Check',
        icon: '💪',
        difficulty: 'Hard',
        tags: ['factorial', 'digits'],
        desc: 'Checks if a number equals the sum of factorials of its digits (e.g. 145).',
        code: `import java.util.Scanner;
public class StrongNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int strong = s.nextInt();
        int st = strong, fnl = 0;
        while (strong > 0) {
            int temp = strong % 10;
            strong /= 10;
            int facty = 1;
            for (int n = 1; n <= temp; n++) facty *= n;
            fnl += facty;
        }
        if (fnl == st) System.out.println("Strong Number ✓");
        else System.out.println("Non Strong Number ✗");
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling StrongNumber.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'strong' };
          let strong = parseInt(inputs['strong']);
          if (isNaN(strong)||strong<0) { yield { type:'error', text:'Invalid input.' }; return; }
          const st=strong; let fnl=0;
          while(strong>0){const temp=strong%10;strong=Math.floor(strong/10);let f=1;for(let n=1;n<=temp;n++)f*=n;fnl+=f;}
          yield { type: 'out', text: fnl===st?`${st} is a Strong Number ✓`:`${st} is Non Strong Number ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'armstrong-number',
        title: 'Armstrong Number',
        icon: '⭐',
        difficulty: 'Hard',
        tags: ['power', 'digits'],
        desc: 'Checks if a number equals sum of digits raised to the power of digit count.',
        code: `import java.util.Scanner;
public class Armstrong {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = s.nextInt();
        int original = num;
        int digits = String.valueOf(num).length();
        int sum = 0;
        while (num > 0) {
            int digit = num % 10;
            sum += (int) Math.pow(digit, digits);
            num /= 10;
        }
        if (original == sum) System.out.println("Armstrong Number ✓");
        else System.out.println("Not an Armstrong Number ✗");
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Armstrong.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'num' };
          let num = parseInt(inputs['num']);
          if (isNaN(num)||num<0) { yield { type:'error', text:'Invalid input.' }; return; }
          const original=num,digits=String(num).length;
          let sum=0,temp=num;
          while(temp>0){const d=temp%10;sum+=Math.pow(d,digits);temp=Math.floor(temp/10);}
          yield { type: 'out', text: original===sum?`${original} is an Armstrong Number ✓`:`${original} is Not an Armstrong Number ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'perfect-number',
        title: 'Perfect Number Check',
        icon: '💎',
        difficulty: 'Medium',
        tags: ['divisors', 'sum'],
        desc: 'A perfect number equals the sum of its proper divisors. E.g. 6 = 1+2+3.',
        code: `import java.util.Scanner;
public class PerfectNumber {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int perfect = s.nextInt();
        int sump = 0;
        for (int y = 1; y < perfect; y++) {
            if (perfect % y == 0) sump += y;
        }
        if (perfect == sump) System.out.println("Perfect Number ✓");
        else System.out.println("Non Perfect Number ✗");
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling PerfectNumber.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'perfect' };
          const perfect = parseInt(inputs['perfect']);
          if (isNaN(perfect)||perfect<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let sump=0; for(let y=1;y<perfect;y++){if(perfect%y===0)sump+=y;}
          yield { type: 'out', text: perfect===sump?`${perfect} is a Perfect Number ✓`:`${perfect} is Non Perfect Number ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'fibonacci-sum',
        title: 'Sum of nth Fibonacci Series',
        icon: '➕',
        difficulty: 'Medium',
        tags: ['for loop', 'fibonacci', 'sum'],
        desc: 'Calculates the sum of the first N terms of the Fibonacci sequence.',
        code: `import java.util.Scanner;
public class FibonacciSum {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = s.nextInt();
        int num1 = 0, num2 = 1, sum = 0;
        for (int i = 0; i < n; i++) {
            sum += num1;
            int next = num1 + num2;
            num1 = num2;
            num2 = next;
        }
        System.out.println("Sum of first " + n + " terms: " + sum);
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling FibonacciSum.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let num1 = 0, num2 = 1, sum = 0;
          for (let i = 0; i < n; i++) {
            sum += num1;
            let next = num1 + num2;
            num1 = num2;
            num2 = next;
          }
          yield { type: 'out', text: `Sum of first ${n} terms: ${sum}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'fibonacci-check',
        title: 'Check Fibonacci Number',
        icon: '🔍',
        difficulty: 'Medium',
        tags: ['while loop', 'fibonacci', 'check'],
        desc: 'Checks whether a given number is part of the Fibonacci sequence.',
        code: `import java.util.Scanner;
public class FibonacciCheck {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = s.nextInt();
        int n1 = 0, n2 = 1;
        boolean isFib = false;
        if (num == 0 || num == 1) {
            isFib = true;
        } else {
            int next = n1 + n2;
            while (next <= num) {
                if (next == num) {
                    isFib = true;
                    break;
                }
                n1 = n2;
                n2 = next;
                next = n1 + n2;
            }
        }
        if (isFib) {
            System.out.println(num + " is a Fibonacci number ✓");
        } else {
            System.out.println(num + " is not a Fibonacci number ✗");
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling FibonacciCheck.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'num' };
          const num = parseInt(inputs['num']);
          if (isNaN(num) || num < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let n1 = 0, n2 = 1, isFib = false;
          if (num === 0 || num === 1) {
            isFib = true;
          } else {
            let next = n1 + n2;
            while (next <= num) {
              if (next === num) { isFib = true; break; }
              n1 = n2;
              n2 = next;
              next = n1 + n2;
            }
          }
          yield { type: 'out', text: isFib ? `${num} is a Fibonacci number ✓` : `${num} is not a Fibonacci number ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'power-without-pow',
        title: 'Power without Math.pow()',
        icon: '⚡',
        difficulty: 'Easy',
        tags: ['for loop', 'exponent', 'math'],
        desc: 'Calculates the power of a base to an exponent without using Math.pow().',
        code: `import java.util.Scanner;
public class PowerWithoutPow {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter base: ");
        int base = s.nextInt();
        System.out.print("Enter exponent: ");
        int exp = s.nextInt();
        long result = 1;
        for (int i = 1; i <= exp; i++) {
            result *= base;
        }
        System.out.println(base + "^" + exp + " = " + result);
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling PowerWithoutPow.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter base: ', inputKey: 'base' };
          yield { type: 'ask', text: 'Enter exponent: ', inputKey: 'exp' };
          const base = parseInt(inputs['base']);
          const exp = parseInt(inputs['exp']);
          if (isNaN(base) || isNaN(exp) || exp < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let result = 1;
          for (let i = 1; i <= exp; i++) {
            result *= base;
          }
          yield { type: 'out', text: `${base}^${exp} = ${result}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'power-series-sum',
        title: 'Power Series Sum',
        icon: '➕',
        difficulty: 'Medium',
        tags: ['for loop', 'series', 'sum'],
        desc: 'Calculates the sum of the series 2^1 + 2^2 + 2^3 + ... + 2^n without Math.pow().',
        code: `import java.util.Scanner;
public class PowerSeriesSum {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = s.nextInt();
        long sum = 0;
        long currentPower = 1;
        for (int i = 1; i <= n; i++) {
            currentPower *= 2;
            sum += currentPower;
        }
        System.out.println("Sum of series: " + sum);
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling PowerSeriesSum.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter n: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let sum = 0;
          let currentPower = 1;
          for (let i = 1; i <= n; i++) {
            currentPower *= 2;
            sum += currentPower;
          }
          yield { type: 'out', text: `Sum of series: ${sum}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }

    ]
  };
