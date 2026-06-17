export const section3 = // ███████████████████████████████████████████
  //  SECTION 3 — LOOPING
  // ███████████████████████████████████████████
  {
    id: 'looping',
    title: 'Looping',
    icon: '🔁',
    theme: { accent: '#10b981', glow: 'rgba(16,185,129,0.18)', bg: 'rgba(16,185,129,0.08)' },
    programs: [

      {
        id: 'print-1-to-n',
        title: 'Print 1 to N',
        icon: '📋',
        difficulty: 'Easy',
        tags: ['for loop', 'sequence'],
        desc: 'Prints all integers from 1 to N using a for loop.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N value: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++) r+=i+' ';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-n-numbers',
        title: 'Sum of N Numbers',
        icon: '∑',
        difficulty: 'Easy',
        tags: ['for loop', 'sum'],
        desc: 'Calculates the sum of all numbers from 1 to N.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N value: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0; for(let j=0;j<=n;j++) sum+=j;
          yield { type: 'out', text: `Sum = ${sum}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'multiplication-table',
        title: 'Multiplication Table',
        icon: '✖',
        difficulty: 'Easy',
        tags: ['for loop', 'table'],
        desc: 'Generates a multiplication table for any number up to a limit.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter which table: ', inputKey: 'table' };
          yield { type: 'ask', text: 'Enter where to stop: ', inputKey: 'stop' };
          const t=parseInt(inputs['table']),s=parseInt(inputs['stop']);
          if (isNaN(t)||isNaN(s)) { yield { type:'error', text:'Invalid input.' }; return; }
          for(let k=1;k<=s;k++) yield { type:'out', text:`${t} * ${k} = ${t*k}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'factorial',
        title: 'Factorial',
        icon: '!',
        difficulty: 'Easy',
        tags: ['for loop', 'factorial'],
        desc: 'Computes the factorial of N (N!) using an iterative approach.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number to find Factorial: ', inputKey: 'f' };
          const f = parseInt(inputs['f']);
          if (isNaN(f)||f<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let fact=1; for(let l=1;l<=f;l++) fact*=l;
          yield { type: 'out', text: `Factorial = ${fact}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'fibonacci',
        title: 'Fibonacci Series',
        icon: '🌀',
        difficulty: 'Medium',
        tags: ['for loop', 'fibonacci'],
        desc: 'Generates the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8...',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of terms: ', inputKey: 'fstop' };
          const fstop = parseInt(inputs['fstop']);
          if (isNaN(fstop)||fstop<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let n1=0,n2=1,next=0,r='';
          for(let m=0;m<fstop;m++){r+=n1+' ';next=n1+n2;n1=n2;n2=next;}
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'reverse-number',
        title: 'Reverse Number',
        icon: '↩',
        difficulty: 'Easy',
        tags: ['while loop', 'modulo'],
        desc: 'Reverses the digits of a given integer.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number to Reverse: ', inputKey: 'r' };
          let r = parseInt(inputs['r']);
          if (isNaN(r)||r<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let rev=0; while(r>0){rev=rev*10+(r%10);r=Math.floor(r/10);}
          yield { type: 'out', text: `Reversed = ${rev}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-digits',
        title: 'Count Digits',
        icon: '#',
        difficulty: 'Easy',
        tags: ['while loop', 'count'],
        desc: 'Counts the total number of digits in a given integer.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number to Count: ', inputKey: 'c' };
          let c = parseInt(inputs['c']);
          if (isNaN(c)||c<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let count=0; while(c>0){c=Math.floor(c/10);count++;}
          yield { type: 'out', text: `Count = ${count}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-of-digits',
        title: 'Sum of Digits',
        icon: '+',
        difficulty: 'Easy',
        tags: ['while loop', 'sum', 'digits'],
        desc: 'Computes the sum of individual digits of a number.',
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number to Sum: ', inputKey: 'su' };
          let su = parseInt(inputs['su']);
          if (isNaN(su)||su<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0; while(su>0){sum+=su%10;su=Math.floor(su/10);}
          yield { type: 'out', text: `Sum = ${sum}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hcf',
        title: 'HCF of Two Numbers',
        icon: '🔗',
        difficulty: 'Medium',
        tags: ['while loop', 'hcf', 'gcd'],
        desc: 'Finds the HCF (GCD) of two integers without recursion.',
        code: `import java.util.Scanner;
public class HCF {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.print("HCF = " + a);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling HCF.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          let a=parseInt(inputs['a']),b=parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          while(b!==0){let t=b;b=a%b;a=t;}
          yield { type: 'out', text: `HCF = ${a}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'largest-digit',
        title: 'Largest Digit',
        icon: '🔝',
        difficulty: 'Easy',
        tags: ['while loop', 'digits', 'max'],
        desc: 'Finds the largest digit in a given integer.',
        code: `import java.util.Scanner;
public class LargestDigit {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int ld = s.nextInt();
        int largest = 0;
        while (ld > 0) {
            int digit = ld % 10;
            if (digit > largest) largest = digit;
            ld /= 10;
        }
        System.out.println("Largest Digit = " + largest);
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling LargestDigit.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'ld' };
          let ld = parseInt(inputs['ld']);
          if (isNaN(ld)||ld<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let largest=0,t=ld;
          while(t>0){const d=t%10;if(d>largest)largest=d;t=Math.floor(t/10);}
          yield { type: 'out', text: `Largest Digit = ${largest}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'smallest-digit',
        title: 'Smallest Digit',
        icon: '🔻',
        difficulty: 'Easy',
        tags: ['while loop', 'digits', 'min'],
        desc: 'Finds the smallest digit in a given integer.',
        code: `import java.util.Scanner;
public class SmallestDigit {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int sd = s.nextInt();
        int smallest = 9;
        while (sd > 0) {
            int digit = sd % 10;
            if (digit < smallest) smallest = digit;
            sd /= 10;
        }
        System.out.println("Smallest Digit = " + smallest);
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling SmallestDigit.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'sd' };
          let sd = parseInt(inputs['sd']);
          if (isNaN(sd)||sd<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let smallest=9,t=sd;
          while(t>0){const d=t%10;if(d<smallest)smallest=d;t=Math.floor(t/10);}
          yield { type: 'out', text: `Smallest Digit = ${smallest}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-even-odd-digits',
        title: 'Count Even & Odd Digits',
        icon: '⚖️',
        difficulty: 'Easy',
        tags: ['while loop', 'even', 'odd'],
        desc: 'Counts how many digits in a number are even vs odd.',
        code: `import java.util.Scanner;
public class CountEvenOddDigits {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int eo = s.nextInt();
        int evenCount = 0, oddCount = 0;
        while (eo > 0) {
            int digit = eo % 10;
            if (digit % 2 == 0) evenCount++;
            else oddCount++;
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
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'eo' };
          let eo = parseInt(inputs['eo']);
          if (isNaN(eo)||eo<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let ec=0,oc=0,t=eo;
          while(t>0){if((t%10)%2===0)ec++;else oc++;t=Math.floor(t/10);}
          yield { type: 'out', text: `Even Digits Count = ${ec}` };
          yield { type: 'out', text: `Odd Digits Count  = ${oc}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digits-greater-5',
        title: 'Print Digits > 5',
        icon: '5️⃣',
        difficulty: 'Easy',
        tags: ['while loop', 'filter'],
        desc: 'Prints all digits from a number that are greater than 5.',
        code: `import java.util.Scanner;
public class DigitsGreaterThan5 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int gt = s.nextInt();
        System.out.print("Digits > 5: ");
        while (gt > 0) {
            int digit = gt % 10;
            if (digit > 5) System.out.print(digit + " ");
            gt /= 10;
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling DigitsGreaterThan5.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'gt' };
          let gt = parseInt(inputs['gt']);
          if (isNaN(gt)||gt<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let r='',t=gt;
          while(t>0){const d=t%10;if(d>5)r=d+' '+r;t=Math.floor(t/10);}
          yield { type: 'out', text: `Digits > 5: ${r.trim()||'None'}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'contains-zero',
        title: 'Contains Zero Check',
        icon: '0️⃣',
        difficulty: 'Easy',
        tags: ['while loop', 'zero'],
        desc: 'Checks whether a number contains the digit 0.',
        code: `import java.util.Scanner;
public class ContainsZero {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number: ");
        int cz = s.nextInt();
        boolean hasZero = false;
        int czTemp = cz;
        while (czTemp > 0) {
            if (czTemp % 10 == 0) hasZero = true;
            czTemp /= 10;
        }
        if (hasZero) System.out.println(cz + " Contains Zero ✓");
        else System.out.println(cz + " Does Not Contain Zero ✗");
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling ContainsZero.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'cz' };
          let cz = parseInt(inputs['cz']);
          if (isNaN(cz)||cz<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let hasZero=false,t=cz;
          while(t>0){if(t%10===0)hasZero=true;t=Math.floor(t/10);}
          yield { type: 'out', text: hasZero?`${cz} Contains Zero ✓`:`${cz} Does Not Contain Zero ✗` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digit-found',
        title: 'Find Digit in Number',
        icon: '🔍',
        difficulty: 'Easy',
        tags: ['while loop', 'search'],
        desc: 'Checks whether a specific digit exists in a number.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int digit = sc.nextInt();
        boolean found = false;
        while (num > 0) {
            int last = num % 10;
            if (last == digit) {
                found = true;
                break;
            }
            num = num / 10;
        }
        if (found) System.out.print("Digit found");
        else System.out.print("Digit not found");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'num' };
          yield { type: 'ask', text: 'Enter digit to find: ', inputKey: 'digit' };
          let num=parseInt(inputs['num']),digit=parseInt(inputs['digit']);
          if (isNaN(num)||isNaN(digit)) { yield { type:'error', text:'Invalid input.' }; return; }
          let found=false;
          while(num>0){if(num%10===digit){found=true;break;}num=Math.floor(num/10);}
          yield { type: 'out', text: found?'Digit found ✓':'Digit not found ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digit-occurrence',
        title: 'Count Digit Occurrence',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['while loop', 'count'],
        desc: 'Counts how many times a digit appears in a number.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int digit = sc.nextInt();
        int count = 0;
        while (num > 0) {
            int last = num % 10;
            if (last == digit) count++;
            num = num / 10;
        }
        System.out.print("Occurrence: " + count);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number: ', inputKey: 'num' };
          yield { type: 'ask', text: 'Enter digit to count: ', inputKey: 'digit' };
          let num=parseInt(inputs['num']),digit=parseInt(inputs['digit']);
          if (isNaN(num)||isNaN(digit)) { yield { type:'error', text:'Invalid input.' }; return; }
          let count=0;
          while(num>0){if(num%10===digit)count++;num=Math.floor(num/10);}
          yield { type: 'out', text: `Occurrence: ${count}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-n-to-1',
        title: 'Print N to 1',
        icon: '⬇️',
        difficulty: 'Easy',
        tags: ['for loop', 'reverse'],
        desc: 'Prints values from N down to 1.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = N; i >= 1; i--) {
            System.out.println(i);
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=n;i>=1;i--) r+=i+' ';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'even-numbers-1-to-n',
        title: 'Even Numbers 1 to N',
        icon: '2️⃣',
        difficulty: 'Easy',
        tags: ['for loop', 'even'],
        desc: 'Prints all even numbers from 1 to N.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 2; i <= N; i += 2) {
            System.out.println(i);
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=2;i<=n;i+=2) r+=i+' ';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'odd-numbers-1-to-n',
        title: 'Odd Numbers 1 to N',
        icon: '1️⃣',
        difficulty: 'Easy',
        tags: ['for loop', 'odd'],
        desc: 'Prints all odd numbers from 1 to N.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 1; i <= N; i += 2) {
            System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i+=2) r+=i+' ';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-div-by-3',
        title: 'Count Divisible by 3',
        icon: '3️⃣',
        difficulty: 'Easy',
        tags: ['for loop', 'count', 'divisible'],
        desc: 'Counts how many numbers from 1 to N are divisible by 3.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int count = 0;
        for (int i = 1; i <= N; i++) {
            if (i % 3 == 0) count++;
        }
        System.out.println("Count = " + count);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let count=0; for(let i=1;i<=n;i++) if(i%3===0) count++;
          yield { type: 'out', text: 'Count = ' + count };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'div-by-3-and-5',
        title: 'Divisible by 3 and 5',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['for loop', 'divisible'],
        desc: 'Prints numbers from 1 to N that are divisible by both 3 and 5.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 1; i <= N; i++) {
            if (i % 3 == 0 && i % 5 == 0)
                System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++) if(i%3===0&&i%5===0) r+=i+' ';
          yield { type: 'out', text: r.trim()||'None in range' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'square-numbers-1-to-n',
        title: 'Squares from 1 to N',
        icon: '²',
        difficulty: 'Easy',
        tags: ['for loop', 'square'],
        desc: 'Prints the square of each number from 1 to N.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 1; i <= N; i++) {
            System.out.println(i + "^2 = " + (i * i));
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          for(let i=1;i<=n;i++) yield { type:'out', text: i+'^2 = '+(i*i) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'cube-numbers-1-to-n',
        title: 'Cubes from 1 to N',
        icon: '³',
        difficulty: 'Easy',
        tags: ['for loop', 'cube'],
        desc: 'Prints the cube of each number from 1 to N.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 1; i <= N; i++) {
            System.out.println(i + "^3 = " + (i * i * i));
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          for(let i=1;i<=n;i++) yield { type:'out', text: i+'^3 = '+(i*i*i) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'skip-multiples-of-4',
        title: 'Skip Multiples of 4',
        icon: '4️⃣',
        difficulty: 'Easy',
        tags: ['for loop', 'continue'],
        desc: 'Prints numbers from 1 to N, skipping multiples of 4.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        for (int i = 1; i <= N; i++) {
            if (i % 4 == 0) continue;
            System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++){if(i%4===0)continue;r+=i+' ';}
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'remove-last-digit-to-single',
        title: 'Remove Digits Until Single',
        icon: '🔄',
        difficulty: 'Medium',
        tags: ['while loop', 'digits'],
        desc: 'Removes the last digit repeatedly until the number becomes a single digit.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print(n);
        while (n >= 10) {
            n /= 10;
            System.out.print(" -> " + n);
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let r = String(n);
          while(n>=10){n=Math.floor(n/10);r+=' -> '+n;}
          yield { type: 'out', text: r };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'replace-zero-with-one',
        title: 'Replace 0s with 1s',
        icon: '0️⃣',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'transform'],
        desc: 'Replaces every digit 0 with 1 in a number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String result = s.replace('0', '1');
        System.out.println("Result: " + result);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(inputs['n'] || '');
          if (!s || isNaN(parseInt(s))) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: 'Result: ' + s.replace(/0/g,'1') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'swap-first-last-digit',
        title: 'Swap First & Last Digit',
        icon: '🔀',
        difficulty: 'Hard',
        tags: ['while loop', 'digits', 'swap'],
        desc: 'Swaps the first and last digit of a number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int last = n % 10;
        int len  = (int)Math.log10(n);
        int first = n / (int)Math.pow(10, len);
        long pow  = (long)Math.pow(10, len);
        long result = n - first * pow - last;
        result += last * pow + first;
        System.out.println("Result: " + result);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number (2+ digits): ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<10) { yield { type:'error', text:'Enter a number with at least 2 digits.' }; return; }
          const s = String(n).split('');
          [s[0], s[s.length-1]] = [s[s.length-1], s[0]];
          yield { type: 'out', text: 'Result: ' + parseInt(s.join('')) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digits-in-words',
        title: 'Digits in Words',
        icon: '🔤',
        difficulty: 'Medium',
        tags: ['for loop', 'digits', 'string'],
        desc: 'Prints each digit of a number as a word (e.g. 123 → One Two Three).',
        code: `import java.util.Scanner;
public class Main {
    static String[] w = {"Zero","One","Two","Three","Four",
                         "Five","Six","Seven","Eight","Nine"};
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        for (char c : s.toCharArray())
            System.out.print(w[c - '0'] + " ");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(Math.abs(parseInt(inputs['n'])||0));
          const w=['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
          yield { type: 'out', text: s.split('').map(c=>w[+c]).join(' ') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'add-one-to-each-digit',
        title: 'Add 1 to Each Digit',
        icon: '➕',
        difficulty: 'Medium',
        tags: ['for loop', 'digits', 'transform'],
        desc: 'Forms a new number by adding 1 to each digit (9 wraps to 0).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray())
            sb.append((c - '0' + 1) % 10);
        System.out.println("Result: " + sb);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(Math.abs(parseInt(inputs['n'])||0));
          yield { type: 'out', text: 'Result: ' + s.split('').map(c=>(+c+1)%10).join('') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-even-odd-digits-sep',
        title: 'Sum of Even & Odd Digits',
        icon: '⚖️',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'sum'],
        desc: 'Finds the sum of even digits and the sum of odd digits of a number separately.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int evenSum = 0, oddSum = 0;
        while (n > 0) {
            int d = n % 10;
            if (d % 2 == 0) evenSum += d; else oddSum += d;
            n /= 10;
        }
        System.out.println("Even digit sum = " + evenSum);
        System.out.println("Odd digit sum  = " + oddSum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let es=0,os=0,t=n;
          while(t>0){const d=t%10;if(d%2===0)es+=d;else os+=d;t=Math.floor(t/10);}
          yield { type: 'out', text: 'Even digit sum = '+es };
          yield { type: 'out', text: 'Odd digit sum  = '+os };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'product-of-digits',
        title: 'Product of Digits',
        icon: '✖️',
        difficulty: 'Easy',
        tags: ['while loop', 'digits', 'product'],
        desc: 'Calculates the product of all digits in a number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int product = 1;
        while (n > 0) { product *= n % 10; n /= 10; }
        System.out.println("Product = " + product);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let prod=1,t=n;
          while(t>0){prod*=t%10;t=Math.floor(t/10);}
          yield { type: 'out', text: 'Product = '+prod };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'diff-sum-product-digits',
        title: 'Diff: Sum vs Product of Digits',
        icon: '📉',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'math'],
        desc: 'Finds the absolute difference between the sum and the product of digits.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int sum = 0, product = 1;
        while (n > 0) {
            int d = n % 10; sum += d; product *= d; n /= 10;
        }
        System.out.println("Sum = " + sum);
        System.out.println("Product = " + product);
        System.out.println("Difference = " + Math.abs(sum - product));
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0,prod=1,t=n;
          while(t>0){const d=t%10;sum+=d;prod*=d;t=Math.floor(t/10);}
          yield { type: 'out', text: 'Sum = '+sum };
          yield { type: 'out', text: 'Product = '+prod };
          yield { type: 'out', text: 'Difference = '+Math.abs(sum-prod) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'power-without-pow',
        title: 'Power (Without Math.pow)',
        icon: '⚡',
        difficulty: 'Easy',
        tags: ['for loop', 'power', 'math'],
        desc: 'Calculates base^exponent using a loop, without using Math.pow.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int base = sc.nextInt(), exp = sc.nextInt();
        long result = 1;
        for (int i = 0; i < exp; i++) result *= base;
        System.out.println(base + "^" + exp + " = " + result);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter base: ', inputKey: 'base' };
          yield { type: 'ask', text: 'Enter exponent: ', inputKey: 'exp' };
          const base=parseInt(inputs['base']),exp=parseInt(inputs['exp']);
          if (isNaN(base)||isNaN(exp)||exp<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let result=1; for(let i=0;i<exp;i++) result*=base;
          yield { type: 'out', text: base+'^'+exp+' = '+result };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'lcm-using-loop',
        title: 'LCM Using Loop',
        icon: '🔗',
        difficulty: 'Medium',
        tags: ['while loop', 'lcm'],
        desc: 'Finds the LCM (Least Common Multiple) of two numbers using a loop.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(), b = sc.nextInt();
        int lcm = Math.max(a, b);
        while (lcm % a != 0 || lcm % b != 0) lcm++;
        System.out.println("LCM = " + lcm);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          const a=parseInt(inputs['a']),b=parseInt(inputs['b']);
          if (isNaN(a)||isNaN(b)||a<1||b<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let lcm=Math.max(a,b); while(lcm%a!==0||lcm%b!==0) lcm++;
          yield { type: 'out', text: 'LCM = '+lcm };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'square-series-loop',
        title: 'Square Series (1,4,9,16...)',
        icon: '📈',
        difficulty: 'Easy',
        tags: ['for loop', 'series', 'square'],
        desc: 'Prints the perfect square series: 1, 4, 9, 16, 25, … up to N terms.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++)
            System.out.print(i*i + " ");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N terms: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++) r+=i*i+' ';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'pattern-series-2-6-7',
        title: 'Series: 2, 6, 7, 21, 22...',
        icon: '🔣',
        difficulty: 'Hard',
        tags: ['for loop', 'series', 'pattern'],
        desc: 'Prints the pattern-based series: 2, 6, 7, 21, 22, 66, 67, 201…',
        code: `public class Main {
    public static void main(String[] args) {
        long val = 2;
        for (int i = 0; i < 8; i++) {
            System.out.print(val + " ");
            if (i % 2 == 0) val *= 3;
            else             val += 1;
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          let val=2n, r='';
          for(let i=0;i<8;i++){r+=val+' ';if(i%2===0)val*=3n;else val+=1n;}
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'alternating-series',
        title: 'Alternating Series: 1 -2 3 -4...',
        icon: '±',
        difficulty: 'Easy',
        tags: ['for loop', 'series', 'alternating'],
        desc: 'Prints the alternating sign series: 1 -2 3 -4 5 -6 … up to N terms.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) System.out.print(-i + " ");
            else             System.out.print(i  + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N terms: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++) r+=(i%2===0?-i:i)+' ';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'harmonic-series-sum',
        title: 'Harmonic Sum: 1 + 1/2 + ... + 1/N',
        icon: '∑',
        difficulty: 'Medium',
        tags: ['for loop', 'series', 'harmonic'],
        desc: 'Calculates the sum of the harmonic series: 1 + 1/2 + 1/3 + … + 1/N.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        double sum = 0;
        for (int i = 1; i <= n; i++) sum += 1.0 / i;
        System.out.printf("Sum = %.4f%n", sum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0; for(let i=1;i<=n;i++) sum+=1/i;
          yield { type: 'out', text: 'Sum = '+sum.toFixed(4) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'factorial-series-sum',
        title: 'Factorial Series Sum (1!+2!+...+N!)',
        icon: '!',
        difficulty: 'Medium',
        tags: ['for loop', 'factorial', 'series'],
        desc: 'Calculates the sum of factorials: 1! + 2! + 3! + … + N!',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long sum = 0, fact = 1;
        for (int i = 1; i <= n; i++) { fact *= i; sum += fact; }
        System.out.println("Sum = " + sum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0,fact=1; for(let i=1;i<=n;i++){fact*=i;sum+=fact;}
          yield { type: 'out', text: 'Sum = '+sum };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'break-divisible-by-7',
        title: 'Stop at Multiple of 7 (break)',
        icon: '🛑',
        difficulty: 'Easy',
        tags: ['for loop', 'break'],
        desc: 'Prints numbers from 1 to N and stops when a multiple of 7 is encountered.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            if (i % 7 == 0) { System.out.println("\nStopped at: " + i); break; }
            System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r='',found=false;
          for(let i=1;i<=n;i++){if(i%7===0){r+='\nStopped at: '+i;found=true;break;}r+=i+' ';}
          if(!found) r+='\n(No multiple of 7 in range)';
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'skip-divisible-by-5',
        title: 'Skip Multiples of 5 (continue)',
        icon: '5️⃣',
        difficulty: 'Easy',
        tags: ['for loop', 'continue'],
        desc: 'Prints numbers from 1 to N, skipping all multiples of 5 using continue.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            if (i % 5 == 0) continue;
            System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++){if(i%5===0)continue;r+=i+' ';}
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-until-exceeds-100',
        title: 'Print Until Sum Exceeds 100',
        icon: '💯',
        difficulty: 'Easy',
        tags: ['for loop', 'break', 'sum'],
        desc: 'Prints numbers from 1 upward and stops when the cumulative sum exceeds 100.',
        code: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; ; i++) {
            sum += i;
            if (sum > 100) {
                System.out.println("\nStopped at i=" + i + ", Sum=" + sum);
                break;
            }
            System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          let sum=0,r='';
          for(let i=1;;i++){sum+=i;if(sum>100){r+='\nStopped at i='+i+', Sum='+sum;break;}r+=i+' ';}
          yield { type: 'out', text: r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-until-negative-input',
        title: 'Sum Until Negative Input',
        icon: '➕',
        difficulty: 'Medium',
        tags: ['do-while', 'input', 'sum'],
        desc: 'Reads numbers from the user until a negative is entered, then prints the sum.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0, num;
        do {
            num = sc.nextInt();
            if (num >= 0) sum += num;
        } while (num >= 0);
        System.out.println("Sum = " + sum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          let sum=0,count=0;
          while(true){
            yield { type: 'ask', text: 'Enter number (negative to stop): ', inputKey: 'num'+count };
            const num=parseInt(inputs['num'+count]);
            if(isNaN(num)||num<0) break;
            sum+=num; count++;
          }
          yield { type: 'out', text: 'Sum = '+sum };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-pos-neg-zero-inputs',
        title: 'Count Positive, Negative, Zero',
        icon: '📊',
        difficulty: 'Medium',
        tags: ['for loop', 'input', 'count'],
        desc: 'Reads N numbers and counts how many are positive, negative, and zero.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), pos=0, neg=0, zero=0;
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            if (num > 0) pos++;
            else if (num < 0) neg++;
            else zero++;
        }
        System.out.println("Positive: "+pos);
        System.out.println("Negative: "+neg);
        System.out.println("Zero: "+zero);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'How many numbers to enter? ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let pos=0,neg=0,zero=0;
          for(let i=0;i<n;i++){
            yield { type: 'ask', text: 'Enter number '+(i+1)+': ', inputKey: 'v'+i };
            const v=parseInt(inputs['v'+i]);
            if(v>0)pos++;else if(v<0)neg++;else zero++;
          }
          yield { type: 'out', text: 'Positive: '+pos };
          yield { type: 'out', text: 'Negative: '+neg };
          yield { type: 'out', text: 'Zero: '+zero };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'avg-n-inputs',
        title: 'Average of N Inputs',
        icon: 'x̄',
        difficulty: 'Easy',
        tags: ['for loop', 'input', 'average'],
        desc: 'Reads N numbers from the user and calculates their average.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        double sum = 0;
        for (int i = 0; i < n; i++) sum += sc.nextDouble();
        System.out.printf("Average = %.2f%n", sum / n);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'How many numbers? ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let sum=0;
          for(let i=0;i<n;i++){
            yield { type: 'ask', text: 'Enter number '+(i+1)+': ', inputKey: 'v'+i };
            sum+=parseFloat(inputs['v'+i])||0;
          }
          yield { type: 'out', text: 'Average = '+(sum/n).toFixed(2) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'max-among-n-inputs',
        title: 'Maximum Among N Inputs',
        icon: '🔝',
        difficulty: 'Easy',
        tags: ['for loop', 'input', 'max'],
        desc: 'Reads N numbers from the user and finds the maximum value.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), max = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            if (num > max) max = num;
        }
        System.out.println("Maximum = " + max);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'How many numbers? ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let max=-Infinity;
          for(let i=0;i<n;i++){
            yield { type: 'ask', text: 'Enter number '+(i+1)+': ', inputKey: 'v'+i };
            const v=parseFloat(inputs['v'+i]);
            if(v>max)max=v;
          }
          yield { type: 'out', text: 'Maximum = '+max };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'second-largest-n-inputs',
        title: 'Second Largest Among N Inputs',
        icon: '🥈',
        difficulty: 'Medium',
        tags: ['for loop', 'input', 'max'],
        desc: 'Reads N numbers from the user and finds the second largest value.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int max = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            int num = sc.nextInt();
            if (num > max)      { second = max; max = num; }
            else if (num > second) second = num;
        }
        System.out.println("Second Largest = " + second);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'How many numbers? ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<2) { yield { type:'error', text:'Enter at least 2 numbers.' }; return; }
          let max=-Infinity,second=-Infinity;
          for(let i=0;i<n;i++){
            yield { type: 'ask', text: 'Enter number '+(i+1)+': ', inputKey: 'v'+i };
            const v=parseFloat(inputs['v'+i]);
            if(v>max){second=max;max=v;}else if(v>second)second=v;
          }
          yield { type: 'out', text: second===-Infinity?'No second largest':'Second Largest = '+second };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digits-ascending-check',
        title: 'Digits in Ascending Order?',
        icon: '📈',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'ascending'],
        desc: 'Checks whether the digits of a number are in ascending order (left to right).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        boolean asc = true;
        for (int i = 1; i < s.length(); i++)
            if (s.charAt(i) < s.charAt(i-1)) { asc = false; break; }
        System.out.println(asc ? "Ascending ✓" : "Not Ascending ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(Math.abs(parseInt(inputs['n'])||0));
          let asc=true;
          for(let i=1;i<s.length;i++) if(s[i]<s[i-1]){asc=false;break;}
          yield { type: 'out', text: asc?'Ascending ✓':'Not Ascending ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digits-descending-check',
        title: 'Digits in Descending Order?',
        icon: '📉',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'descending'],
        desc: 'Checks whether the digits of a number are in descending order (left to right).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        boolean desc = true;
        for (int i = 1; i < s.length(); i++)
            if (s.charAt(i) > s.charAt(i-1)) { desc = false; break; }
        System.out.println(desc ? "Descending ✓" : "Not Descending ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(Math.abs(parseInt(inputs['n'])||0));
          let desc=true;
          for(let i=1;i<s.length;i++) if(s[i]>s[i-1]){desc=false;break;}
          yield { type: 'out', text: desc?'Descending ✓':'Not Descending ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'unique-digits-check',
        title: 'Unique Digits Check',
        icon: '🔍',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'unique'],
        desc: 'Checks whether all digits of a number are unique (no repeats).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean[] seen = new boolean[10]; boolean unique = true;
        while (n > 0) {
            int d = n % 10;
            if (seen[d]) { unique = false; break; }
            seen[d] = true; n /= 10;
        }
        System.out.println(unique ? "All digits unique ✓" : "Repeated digit found ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const s = String(Math.abs(parseInt(inputs['n'])||0));
          const u = new Set(s.split(''));
          yield { type: 'out', text: u.size===s.length?'All digits unique ✓':'Repeated digit found ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'frequency-of-each-digit',
        title: 'Frequency of Each Digit',
        icon: '📊',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'frequency'],
        desc: 'Finds how many times each digit (0–9) appears in a number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] freq = new int[10];
        while (n > 0) { freq[n % 10]++; n /= 10; }
        for (int i = 0; i < 10; i++)
            if (freq[i] > 0) System.out.println(i + ": " + freq[i] + " time(s)");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<0) { yield { type:'error', text:'Invalid input.' }; return; }
          const freq=new Array(10).fill(0);
          String(n).split('').forEach(c=>freq[+c]++);
          for(let i=0;i<10;i++) if(freq[i]>0) yield { type:'out', text: i+': '+freq[i]+' time(s)' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'harshad-number-loop',
        title: 'Harshad Number',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['while loop', 'digits', 'harshad'],
        desc: 'Checks if a number is a Harshad number (divisible by the sum of its digits).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), sum=0, temp=n;
        while (temp > 0) { sum += temp % 10; temp /= 10; }
        if (n % sum == 0) System.out.println(n + " is a Harshad Number ✓");
        else               System.out.println(n + " is NOT a Harshad Number ✗");
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
          yield { type: 'out', text: n%sum===0?n+' is a Harshad Number ✓':n+' is NOT a Harshad Number ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'automorphic-number-check',
        title: 'Automorphic Number',
        icon: '🔄',
        difficulty: 'Medium',
        tags: ['while loop', 'digits', 'automorphic'],
        desc: 'Checks if a number is Automorphic — its square ends with the number itself.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        long sq = (long)n * n;
        int d = String.valueOf(n).length();
        long mod = (long)Math.pow(10, d);
        if (sq % mod == n) System.out.println(n + " is Automorphic ✓");
        else               System.out.println(n + " is NOT Automorphic ✗");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          const sq=n*n, mod=Math.pow(10,String(n).length);
          yield { type: 'out', text: sq%mod===n?n+' is Automorphic ✓':n+' is NOT Automorphic ✗' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'perfect-squares-in-range',
        title: 'Perfect Squares in Range',
        icon: '✅',
        difficulty: 'Easy',
        tags: ['for loop', 'square', 'range'],
        desc: 'Prints all perfect squares between two given numbers (inclusive).',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int low = sc.nextInt(), high = sc.nextInt();
        System.out.print("Perfect squares: ");
        for (int i = low; i <= high; i++) {
            int sq = (int)Math.sqrt(i);
            if (sq * sq == i) System.out.print(i + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter lower bound: ', inputKey: 'low' };
          yield { type: 'ask', text: 'Enter upper bound: ', inputKey: 'high' };
          const low=parseInt(inputs['low']),high=parseInt(inputs['high']);
          if (isNaN(low)||isNaN(high)||low>high) { yield { type:'error', text:'Invalid input.' }; return; }
          let r='';
          for(let i=low;i<=high;i++){const sq=Math.floor(Math.sqrt(i));if(sq*sq===i)r+=i+' ';}
          yield { type: 'out', text: 'Perfect squares: '+(r.trim()||'None') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'factors-of-number',
        title: 'All Factors of a Number',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['for loop', 'factors', 'divisors'],
        desc: 'Prints all factors (divisors) of a given number.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print("Factors: ");
        for (int i = 1; i <= n; i++)
            if (n % i == 0) System.out.print(i + " ");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          let r=''; for(let i=1;i<=n;i++) if(n%i===0) r+=i+' ';
          yield { type: 'out', text: 'Factors: '+r.trim() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },



    ]
  };
