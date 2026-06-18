export const section8 = // ███████████████████████████████████████████
  //  SECTION 8 — FUNCTIONS
  // ███████████████████████████████████████████
  {
    id: 'functions',
    title: 'Functions',
    icon: '🛠️',
    theme: { accent: '#8b5cf6', glow: 'rgba(139,92,246,0.18)', bg: 'rgba(139,92,246,0.08)' },
    programs: [
      {
        id: 'worker-efficiency',
        title: 'Worker Efficiency',
        icon: '📊',
        difficulty: 'Medium',
        tags: ['function', 'math'],
        desc: 'Calculates worker efficiency based on units produced and hours worked using a static method.',
        code: `import java.util.Scanner;
public class Main {
    static float eff(int unit, float hrs) {
        return unit / hrs;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter units produced: ");
        int unit = sc.nextInt();
        System.out.print("Enter hours worked: ");
        float hrs = sc.nextFloat();
        float effu = eff(unit, hrs);
        if(effu >= 80) System.out.println("High");
        else if(effu > 50) System.out.println("Moderate");
        else System.out.println("Low");
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter units produced: ', inputKey: 'unit' };
          const unit = parseInt(inputs['unit']);
          yield { type: 'ask', text: 'Enter hours worked: ', inputKey: 'hrs' };
          const hrs = parseFloat(inputs['hrs']);
          if(isNaN(unit) || isNaN(hrs)) { yield { type:'error', text:'Invalid input.' }; return; }
          const effu = unit / hrs;
          if(effu >= 80) yield { type: 'out', text: 'High' };
          else if(effu > 50) yield { type: 'out', text: 'Moderate' };
          else yield { type: 'out', text: 'Low' };
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'mileage-calculator',
        title: 'Mileage Calculator',
        icon: '📊',
        difficulty: 'Medium',
        tags: ['function', 'math'],
        desc: 'Calculates fuel efficiency based on distance and liters using a static method.',
        code: `import java.util.Scanner;
public class Main {
    static float eff(float dis, float liter) {
        return dis / liter;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter distance (km): ");
        float dis = sc.nextFloat();
        System.out.print("Enter fuel used (liters): ");
        float liter = sc.nextFloat();
        float efficiency = eff(dis, liter);
        if(efficiency >= 20) System.out.println("High");
        else if(efficiency >= 15) System.out.println("Moderate");
        else System.out.println("Low");
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter distance (km): ', inputKey: 'dis' };
          const dis = parseFloat(inputs['dis']);
          yield { type: 'ask', text: 'Enter fuel used (liters): ', inputKey: 'liter' };
          const liter = parseFloat(inputs['liter']);
          if(isNaN(dis) || isNaN(liter)) { yield { type:'error', text:'Invalid input.' }; return; }
          const eff = dis / liter;
          if(eff >= 20) yield { type: 'out', text: 'High' };
          else if(eff >= 15) yield { type: 'out', text: 'Moderate' };
          else yield { type: 'out', text: 'Low' };
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'emi-calculator',
        title: 'EMI Calculator',
        icon: '📊',
        difficulty: 'Medium',
        tags: ['function', 'math'],
        desc: 'Calculates EMI and categorizes loan duration using a static method.',
        code: `import java.util.Scanner;
public class Main {
    static double emi(float p, float r, int n) {
        return (p*r*(Math.pow(1+r,n)))/(Math.pow(1+r,n)-1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Principal: ");
        float p = sc.nextFloat();
        System.out.print("Enter Rate per month: ");
        float r = sc.nextFloat();
        System.out.print("Enter Duration (months): ");
        int n = sc.nextInt();
        if(n >= 60) System.out.println("Long");
        else if(n >= 12) System.out.println("Mid");
        else System.out.println("Short");
        System.out.println(emi(p, r, n));
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Principal: ', inputKey: 'p' };
          const p = parseFloat(inputs['p']);
          yield { type: 'ask', text: 'Enter Rate per month: ', inputKey: 'r' };
          const r = parseFloat(inputs['r']);
          yield { type: 'ask', text: 'Enter Duration (months): ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(p) || isNaN(r) || isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          if(n >= 60) yield { type: 'out', text: 'Long' };
          else if(n >= 12) yield { type: 'out', text: 'Mid' };
          else yield { type: 'out', text: 'Short' };
          const emi = (p*r*(Math.pow(1+r,n)))/(Math.pow(1+r,n)-1);
          yield { type: 'out', text: emi.toString() };
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'automorphic-number',
        title: 'Automorphic Number',
        icon: '🔄',
        difficulty: 'Easy',
        tags: ['function', 'number-logic'],
        desc: 'Checks if a number is Automorphic (its square ends with the same digits as the number) using a function.',
        code: `import java.util.Scanner;
public class Main {
    static boolean isAutomorphic(int n) {
        int sq = n * n;
        while (n > 0) {
            if (n % 10 != sq % 10) return false;
            n /= 10;
            sq /= 10;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if (isAutomorphic(num)) {
            System.out.println("Automorphic");
        } else {
            System.out.println("Not Automorphic");
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let sq = n * n;
          let tempN = n, tempSq = sq;
          let isAuto = true;
          while (tempN > 0) {
            if (tempN % 10 !== tempSq % 10) { isAuto = false; break; }
            tempN = Math.floor(tempN / 10);
            tempSq = Math.floor(tempSq / 10);
          }
          yield { type: 'out', text: isAuto ? 'Automorphic' : 'Not Automorphic' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'neon-number',
        title: 'Neon Number',
        icon: '✨',
        difficulty: 'Easy',
        tags: ['function', 'number-logic'],
        desc: 'Checks if a number is Neon (sum of digits of its square equals the number) using a function.',
        code: `import java.util.Scanner;
public class Main {
    static boolean isNeon(int n) {
        int sq = n * n;
        int sum = 0;
        while (sq > 0) {
            sum += sq % 10;
            sq /= 10;
        }
        return sum == n;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if (isNeon(num)) {
            System.out.println("Neon");
        } else {
            System.out.println("Not Neon");
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let sq = n * n;
          let sum = 0;
          while (sq > 0) {
            sum += sq % 10;
            sq = Math.floor(sq / 10);
          }
          yield { type: 'out', text: (sum === n) ? 'Neon' : 'Not Neon' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'digital-root',
        title: 'Digital Root',
        icon: '🌱',
        difficulty: 'Medium',
        tags: ['function', 'number-logic'],
        desc: 'Finds the digital root of a number (repeated sum until single digit) using a function.',
        code: `import java.util.Scanner;
public class Main {
    static int getDigitalRoot(int n) {
        if (n == 0) return 0;
        int root = n % 9;
        if (root == 0) return 9;
        return root;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        System.out.println("Digital Root: " + getDigitalRoot(num));
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let root = 0;
          if (n !== 0) {
            root = n % 9;
            if (root === 0) root = 9;
          }
          yield { type: 'out', text: 'Digital Root: ' + root };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'spy-number',
        title: 'Spy Number',
        icon: '🕵️',
        difficulty: 'Easy',
        tags: ['function', 'number-logic'],
        desc: 'Checks if a number is a Spy number (sum of digits equals product of digits) using a function.',
        code: `import java.util.Scanner;
public class Main {
    static boolean isSpy(int n) {
        int sum = 0;
        int prod = 1;
        while (n > 0) {
            int d = n % 10;
            sum += d;
            prod *= d;
            n /= 10;
        }
        return sum == prod;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if (isSpy(num)) {
            System.out.println("Spy Number");
        } else {
            System.out.println("Not Spy");
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let temp = n, sum = 0, prod = 1;
          while (temp > 0) {
            let d = temp % 10;
            sum += d;
            prod *= d;
            temp = Math.floor(temp / 10);
          }
          yield { type: 'out', text: (sum === prod) ? 'Spy Number' : 'Not Spy' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'armstrong-range',
        title: 'Armstrong Numbers in Range',
        icon: '💪',
        difficulty: 'Medium',
        tags: ['function', 'loops', 'number-logic'],
        desc: 'Prints all Armstrong numbers in a given range using a helper function.',
        code: `import java.util.Scanner;
public class Main {
    static boolean isArmstrong(int n) {
        int temp = n, sum = 0, digits = 0;
        int t = n;
        while (t > 0) {
            digits++;
            t /= 10;
        }
        while (temp > 0) {
            int d = temp % 10;
            sum += Math.pow(d, digits);
            temp /= 10;
        }
        return sum == n;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter start and end: ");
        int start = sc.nextInt();
        int end = sc.nextInt();
        for (int i = start; i <= end; i++) {
            if (isArmstrong(i)) {
                System.out.print(i + " ");
            }
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter start: ', inputKey: 's' };
          yield { type: 'ask', text: 'Enter end: ', inputKey: 'e' };
          const s = parseInt(inputs['s']), e = parseInt(inputs['e']);
          if (isNaN(s) || isNaN(e)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let out = [];
          for (let i = s; i <= e; i++) {
            let temp = i, sum = 0, digits = String(i).length;
            while (temp > 0) {
              sum += Math.pow(temp % 10, digits);
              temp = Math.floor(temp / 10);
            }
            if (sum === i) out.push(i);
          }
          yield { type: 'out', text: out.join(' ') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'perfect-range',
        title: 'Perfect Numbers in Range',
        icon: '💯',
        difficulty: 'Medium',
        tags: ['function', 'loops'],
        desc: 'Prints all Perfect numbers in a given range using a helper function.',
        code: `import java.util.Scanner;
public class Main {
    static boolean isPerfect(int n) {
        if (n <= 1) return false;
        int sum = 1;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                sum += i;
                if (i * i != n) {
                    sum += n / i;
                }
            }
        }
        return sum == n;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter start and end: ");
        int start = sc.nextInt();
        int end = sc.nextInt();
        for (int i = start; i <= end; i++) {
            if (isPerfect(i)) {
                System.out.print(i + " ");
            }
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter start: ', inputKey: 's' };
          yield { type: 'ask', text: 'Enter end: ', inputKey: 'e' };
          const s = parseInt(inputs['s']), e = parseInt(inputs['e']);
          if (isNaN(s) || isNaN(e)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let out = [];
          for (let i = s; i <= e; i++) {
            if (i <= 1) continue;
            let sum = 1;
            for (let j = 2; j * j <= i; j++) {
              if (i % j === 0) {
                sum += j;
                if (j * j !== i) sum += i / j;
              }
            }
            if (sum === i) out.push(i);
          }
          yield { type: 'out', text: out.join(' ') };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'harshad-number',
        title: 'Harshad (Niven) Number',
        icon: '➗',
        difficulty: 'Easy',
        tags: ['function', 'number-logic'],
        desc: 'Checks if a number is a Harshad number (divisible by the sum of its digits).',
        code: `import java.util.Scanner;
public class Main {
    static boolean isHarshad(int n) {
        int sum = 0;
        int temp = n;
        while (temp > 0) {
            sum += temp % 10;
            temp /= 10;
        }
        return (n % sum == 0);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        if (isHarshad(num)) {
            System.out.println("Harshad");
        } else {
            System.out.println("Not Harshad");
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let temp = n, sum = 0;
          while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
          }
          yield { type: 'out', text: (sum !== 0 && n % sum === 0) ? 'Harshad' : 'Not Harshad' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'trailing-zeros',
        title: 'Trailing Zeros in Factorial',
        icon: '0️⃣',
        difficulty: 'Medium',
        tags: ['function', 'math'],
        desc: 'Counts the number of trailing zeros in the factorial of a given number.',
        code: `import java.util.Scanner;
public class Main {
    static int getTrailingZeros(int n) {
        int count = 0;
        for (int i = 5; n / i >= 1; i *= 5) {
            count += n / i;
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        System.out.println("Trailing zeros: " + getTrailingZeros(num));
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let count = 0;
          for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
            count += Math.floor(n / i);
          }
          yield { type: 'out', text: 'Trailing zeros: ' + count };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'rotate-digits',
        title: 'Rotate Digits (Left/Right)',
        icon: '🔃',
        difficulty: 'Medium',
        tags: ['function', 'number-logic'],
        desc: 'Rotates the digits of a number to the left and to the right.',
        code: `import java.util.Scanner;
public class Main {
    static int rotateLeft(int n) {
        String s = String.valueOf(n);
        if(s.length() <= 1) return n;
        String rotated = s.substring(1) + s.charAt(0);
        return Integer.parseInt(rotated);
    }
    static int rotateRight(int n) {
        String s = String.valueOf(n);
        if(s.length() <= 1) return n;
        String rotated = s.charAt(s.length() - 1) + s.substring(0, s.length() - 1);
        return Integer.parseInt(rotated);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        System.out.println("Rotated (Left): " + rotateLeft(num));
        System.out.println("Rotated (Right): " + rotateRight(num));
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a number: ', inputKey: 'n' };
          const n = inputs['n'];
          if (!n || isNaN(parseInt(n))) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let s = n.trim();
          let left = s.length <= 1 ? s : s.substring(1) + s.charAt(0);
          let right = s.length <= 1 ? s : s.charAt(s.length - 1) + s.substring(0, s.length - 1);
          yield { type: 'out', text: 'Rotated (Left): ' + parseInt(left) };
          yield { type: 'out', text: 'Rotated (Right): ' + parseInt(right) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'pascals-triangle',
        title: 'Pascal\'s Triangle',
        icon: '📐',
        difficulty: 'Medium',
        tags: ['function', 'patterns'],
        desc: 'Generates Pascal\'s triangle for a given number of rows using a combination formula function.',
        code: `import java.util.Scanner;
public class Main {
    static int fact(int n) {
        int f = 1;
        for (int i = 2; i <= n; i++) f *= i;
        return f;
    }
    static int nCr(int n, int r) {
        return fact(n) / (fact(r) * fact(n - r));
    }
    static void printPascal(int rows) {
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < rows - i - 1; j++) System.out.print(" ");
            for (int j = 0; j <= i; j++) {
                System.out.print(nCr(i, j) + " ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int rows = sc.nextInt();
        printPascal(rows);
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'r' };
          const rows = parseInt(inputs['r']);
          if (isNaN(rows) || rows < 0) { yield { type: 'error', text: 'Invalid input.' }; return; }
          
          function fact(n) {
            let f = 1;
            for (let i = 2; i <= n; i++) f *= i;
            return f;
          }
          function nCr(n, r) {
            return Math.floor(fact(n) / (fact(r) * fact(n - r)));
          }
          
          for (let i = 0; i < rows; i++) {
            let line = "";
            for (let j = 0; j < rows - i - 1; j++) line += " ";
            for (let j = 0; j <= i; j++) {
              line += nCr(i, j) + " ";
            }
            yield { type: 'out', text: line };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }
    ]
  };
