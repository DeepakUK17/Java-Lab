export const section7 = // ███████████████████████████████████████████
  //  SECTION 7 — PATTERNS
  // ███████████████████████████████████████████
  {
    id: 'patterns',
    title: 'Patterns',
    icon: '🔷',
    theme: { accent: '#64748b', glow: 'rgba(100,116,139,0.18)', bg: 'rgba(100,116,139,0.08)' },
    programs: [

      {
        id: 'right-triangle',
        title: 'Right Triangle Pattern',
        icon: '📐',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'stars'],
        desc: 'Prints a right-angled triangle pattern of stars with N rows.',
        code: `import java.util.Scanner;
public class RightTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = s.nextInt();
        for (int pt = 0; pt < n; pt++) {
            for (int pt1 = 0; pt1 < pt + 1; pt1++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling RightTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          for (let i=0;i<n;i++) {
            let row='';
            for (let j=0;j<i+1;j++) row+='* ';
            yield { type: 'out', text: row };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'square-pattern',
        title: 'Square Pattern',
        icon: '⬛',
        difficulty: 'Easy',
        tags: ['nested loop', 'pattern', 'square'],
        desc: 'Prints an N×N square pattern of stars.',
        code: `import java.util.Scanner;
public class SquarePattern {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = s.nextInt();
        for (int pt = 0; pt < n; pt++) {
            for (int pt1 = 0; pt1 < n; pt1++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling SquarePattern.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          for (let i=0;i<n;i++) {
            let row='';
            for (let j=0;j<n;j++) row+='* ';
            yield { type: 'out', text: row };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'inverted-triangle',
        title: 'Inverted Triangle',
        icon: '🔻',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern'],
        desc: 'Prints an inverted right-angled triangle pattern of stars.',
        code: `import java.util.Scanner;
public class InvertedTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = s.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling InvertedTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          for (let i=n;i>=1;i--) {
            let row='';
            for (let j=0;j<i;j++) row+='* ';
            yield { type: 'out', text: row };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'number-triangle',
        title: 'Number Triangle',
        icon: '🔢',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'numbers'],
        desc: 'Prints a right triangle pattern using increasing column numbers.',
        code: `import java.util.Scanner;
public class NumberTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling NumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n)||n<1) { yield { type:'error', text:'Invalid input.' }; return; }
          for (let i=1;i<=n;i++) {
            let row='';
            for (let j=1;j<=i;j++) row+=j+' ';
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      // ─── Pattern 1: Same Number Triangle (1 / 2 2 / 3 3 3 ...) ───
      {
        id: 'same-number-triangle',
        title: 'Same Number Triangle',
        icon: '🔼',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'numbers'],
        desc: 'Prints a triangle using row numbers where each row contains the same number.',
        code: `import java.util.Scanner;
public class SameNumberTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling SameNumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) row += i + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      // ─── Pattern 2: Inverted Incremental Number Triangle ───
      {
        id: 'inverted-number-triangle',
        title: 'Inverted Number Triangle',
        icon: '🔽',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'numbers'],
        desc: 'Prints an inverted number triangle — first row has n numbers, last row has 1.',
        code: `import java.util.Scanner;
public class InvertedNumberTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling InvertedNumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = n; i >= 1; i--) {
            let row = '';
            for (let j = 1; j <= i; j++) row += j + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      // ─── Pattern 3: Continuous Number Triangle ───
      {
        id: 'continuous-number-triangle',
        title: 'Continuous Number Triangle',
        icon: '🔢',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'numbers'],
        desc: 'Prints a triangle with continuously incrementing numbers: row 1 → 1, row 2 → 2 3, row 3 → 4 5 6.',
        code: `import java.util.Scanner;
public class ContinuousNumberTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        int num = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling ContinuousNumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let num = 1;
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) { row += num + ' '; num++; }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      // ─── Pattern 4: Pyramid Pattern ───
      {
        id: 'pyramid-pattern',
        title: 'Pyramid Pattern',
        icon: '🔺',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'stars', 'spaces'],
        desc: 'Prints a centered star pyramid with leading spaces (row 1 → "   *", row n → "* * * *").',
        code: `import java.util.Scanner;
public class PyramidPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int sp = 0; sp < n - i; sp++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling PyramidPattern.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      // ─── Pattern 5: Inverted Pyramid Pattern ───
      {
        id: 'inverted-pyramid-pattern',
        title: 'Inverted Pyramid Pattern',
        icon: '▼',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'stars', 'spaces'],
        desc: 'Prints an inverted centered star pyramid (top row full stars, bottom row one star).',
        code: `import java.util.Scanner;
public class InvertedPyramidPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = sc.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int sp = 0; sp < n - i; sp++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling InvertedPyramidPattern.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = n; i >= 1; i--) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'diamond-triangle',
        title: 'Diamond Triangle',
        icon: '💎',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'stars', 'spaces'],
        desc: 'Prints a diamond pattern of stars with N rows (odd number).',
        code: `import java.util.Scanner;
public class DiamondTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter rows (odd): ");
        int n = s.nextInt();
        int space = n / 2;
        int stars = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= space; j++) {
                System.out.print(" ");
            }
            for (int j = 1; j <= stars; j++) {
                System.out.print("*");
            }
            System.out.println();
            if (i < n / 2 + 1) {
                space--;
                stars += 2;
            } else {
                space++;
                stars -= 2;
            }
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling DiamondTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows (odd): ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          if (n % 2 === 0) n++; // make it odd for perfect symmetry
          let space = Math.floor(n / 2);
          let stars = 1;
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(space) + '*'.repeat(stars);
            yield { type: 'out', text: row };
            if (i < Math.floor(n / 2) + 1) {
              space--;
              stars += 2;
            } else {
              space++;
              stars -= 2;
            }
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'odd-number-triangle',
        title: 'Odd Number Triangle',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['nested loop', 'pattern', 'odd'],
        desc: 'Prints a right triangle using incrementing odd numbers.',
        code: `import java.util.Scanner;
public class OddNumberTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = s.nextInt();
        int val = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(val + " ");
                val += 2;
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling OddNumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let val = 1;
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
              row += val + ' ';
              val += 2;
            }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'even-number-triangle',
        title: 'Even Number Triangle',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['nested loop', 'pattern', 'even'],
        desc: 'Prints a right triangle using incrementing even numbers.',
        code: `import java.util.Scanner;
public class EvenNumberTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = s.nextInt();
        int val = 2;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(val + " ");
                val += 2;
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling EvenNumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          let val = 2;
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
              row += val + ' ';
              val += 2;
            }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'alphabet-triangle',
        title: 'Alphabet Triangle',
        icon: '🔤',
        difficulty: 'Easy',
        tags: ['nested loop', 'pattern', 'characters'],
        desc: 'Prints a right triangle of alphabet letters (A / A B / A B C...).',
        code: `import java.util.Scanner;
public class AlphabetTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            char ch = 'A';
            for (int j = 1; j <= i; j++) {
                System.out.print(ch + " ");
                ch++;
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling AlphabetTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = '';
            let code = 65; // 'A'
            for (let j = 1; j <= i; j++) {
              row += String.fromCharCode(code) + ' ';
              code++;
            }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'reverse-number-triangle',
        title: 'Reverse Number Triangle',
        icon: '🔄',
        difficulty: 'Easy',
        tags: ['nested loop', 'pattern', 'reverse'],
        desc: 'Prints a right triangle where each row starts at the row index and counts down to 1.',
        code: `import java.util.Scanner;
public class ReverseNumberTriangle {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = i; j >= 1; j--) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling ReverseNumberTriangle.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = i; j >= 1; j--) {
              row += j + ' ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'row-sum-pattern',
        title: 'Row Sum Pattern',
        icon: '➕',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'sum'],
        desc: 'Prints a right triangle where each row shows the addition expression of values and their sum.',
        code: `import java.util.Scanner;
public class RowSumPattern {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            int sum = 0;
            for (int j = 1; j <= i; j++) {
                sum += j;
                System.out.print(j);
                if (j < i) {
                    System.out.print("+");
                }
            }
            System.out.println(" = " + sum);
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling RowSumPattern.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter number of rows: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = '';
            let sum = 0;
            for (let j = 1; j <= i; j++) {
              sum += j;
              row += j + (j < i ? '+' : '');
            }
            row += ' = ' + sum;
            yield { type: 'out', text: row };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'column-constant-pattern',
        title: 'Column Constant Pattern',
        icon: '📊',
        difficulty: 'Easy',
        tags: ['nested loop', 'pattern', 'grid'],
        desc: 'Prints an N×N square where columns have constant values across rows.',
        code: `import java.util.Scanner;
public class ColumnConstantPattern {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter size N: ");
        int n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling ColumnConstantPattern.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter size N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              row += j + ' ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hollow-box-pattern',
        title: 'Hollow Box Pattern',
        icon: '⬜',
        difficulty: 'Medium',
        tags: ['nested loop', 'pattern', 'hollow'],
        desc: 'Prints a hollow square pattern of stars.',
        code: `import java.util.Scanner;
public class HollowBoxPattern {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter size N: ");
        int n = s.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        s.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling HollowBoxPattern.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter size N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n < 1) { yield { type: 'error', text: 'Invalid input.' }; return; }
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (i === 1 || i === n || j === 1 || j === n) {
                row += '* ';
              } else {
                row += '  ';
              }
            }
            yield { type: 'out', text: row.trimEnd() };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }

,

      {
        id: 'reverse-floyd',
        title: 'Reverse Floyd',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints Floyds triangle in reverse.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = sc.nextInt();
        int val = (n * (n + 1)) / 2;
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print(val + " ");
                val--;
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          let val = (n * (n + 1)) / 2;
          for (let i = n; i >= 1; i--) {
            let row = '';
            for (let j = 1; j <= i; j++) {
              row += val + ' ';
              val--;
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'zig-zag-pattern',
        title: 'Zig-Zag Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a zig-zag star pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter columns (e.g. 9): ");
        int n = sc.nextInt();
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= n; j++) {
                if (((i + j) % 4 == 0) || (i == 2 && j % 4 == 0)) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= 3; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (((i + j) % 4 === 0) || (i === 2 && j % 4 === 0)) {
                row += '* ';
              } else {
                row += '  ';
              }
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hourglass-pattern',
        title: 'Hourglass Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints an hourglass star pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter rows: ");
        int n = sc.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print("* ");
            System.out.println();
        }
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print("* ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = n; i >= 1; i--) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
          for (let i = 2; i <= n; i++) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'x-pattern',
        title: 'X Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints an X shape with stars.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size (odd): ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (j == i || j == (n - i + 1)) System.out.print("*");
                else System.out.print(" ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (j === i || j === (n - i + 1)) row += '*';
              else row += ' ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'plus-pattern',
        title: 'Plus Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a plus sign shape.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size (odd): ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == n / 2 + 1 || j == n / 2 + 1) System.out.print("* ");
                else System.out.print("  ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          const mid = Math.floor(n / 2) + 1;
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (i === mid || j === mid) row += '* ';
              else row += '  ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'checkerboard-pattern',
        title: 'Checkerboard Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a checkerboard pattern of stars.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if ((i + j) % 2 == 0) System.out.print("* ");
                else System.out.print("  ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if ((i + j) % 2 === 0) row += '* ';
              else row += '  ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'spiral-pattern',
        title: 'Spiral Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints numbers in a spiral matrix.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        int[][] arr = new int[n][n];
        int val = 1, minCol = 0, maxCol = n-1, minRow = 0, maxRow = n-1;
        while(val <= n*n){
            for(int j=minCol; j<=maxCol; j++) arr[minRow][j] = val++;
            minRow++;
            for(int i=minRow; i<=maxRow; i++) arr[i][maxCol] = val++;
            maxCol--;
            for(int j=maxCol; j>=minCol; j--) arr[maxRow][j] = val++;
            maxRow--;
            for(int i=maxRow; i>=minRow; i--) arr[i][minCol] = val++;
            minCol++;
        }
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                System.out.print(arr[i][j] + "\t");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          let arr = Array.from({length: n}, () => Array(n).fill(0));
          let val = 1, minCol = 0, maxCol = n-1, minRow = 0, maxRow = n-1;
          while(val <= n*n){
            for(let j=minCol; j<=maxCol; j++) arr[minRow][j] = val++;
            minRow++;
            for(let i=minRow; i<=maxRow; i++) arr[i][maxCol] = val++;
            maxCol--;
            for(let j=maxCol; j>=minCol; j--) arr[maxRow][j] = val++;
            maxRow--;
            for(let i=maxRow; i>=minRow; i--) arr[i][minCol] = val++;
            minCol++;
          }
          for(let i=0; i<n; i++){
            let row = '';
            for(let j=0; j<n; j++){
              row += arr[i][j] + '\t';
            }
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'border-pattern',
        title: 'Border Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints stars only on the border.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) System.out.print("* ");
                else System.out.print("  ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (i === 1 || i === n || j === 1 || j === n) row += '* ';
              else row += '  ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'number-pyramid',
        title: 'Number Pyramid',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a symmetric number pyramid.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print(j);
            for (int j = i - 1; j >= 1; j--) System.out.print(j);
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += j;
            for (let j = i - 1; j >= 1; j--) row += j;
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'butterfly-pattern',
        title: 'Butterfly Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a butterfly pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) System.out.print("*");
            for (int j = 1; j <= 2*(n-i); j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print("*");
            System.out.println();
        }
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) System.out.print("*");
            for (int j = 1; j <= 2*(n-i); j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print("*");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '*'.repeat(i) + ' '.repeat(2*(n-i)) + '*'.repeat(i);
            yield { type: 'out', text: row };
          }
          for (let i = n; i >= 1; i--) {
            let row = '*'.repeat(i) + ' '.repeat(2*(n-i)) + '*'.repeat(i);
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hollow-butterfly',
        title: 'Hollow Butterfly',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a hollow butterfly pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                if(j==1 || j==i) System.out.print("*"); else System.out.print(" ");
            }
            for (int j = 1; j <= 2*(n-i); j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) {
                if(j==1 || j==i) System.out.print("*"); else System.out.print(" ");
            }
            System.out.println();
        }
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                if(j==1 || j==i) System.out.print("*"); else System.out.print(" ");
            }
            for (int j = 1; j <= 2*(n-i); j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) {
                if(j==1 || j==i) System.out.print("*"); else System.out.print(" ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) row += (j===1 || j===i) ? '*' : ' ';
            row += ' '.repeat(2*(n-i));
            for (let j = 1; j <= i; j++) row += (j===1 || j===i) ? '*' : ' ';
            yield { type: 'out', text: row };
          }
          for (let i = n; i >= 1; i--) {
            let row = '';
            for (let j = 1; j <= i; j++) row += (j===1 || j===i) ? '*' : ' ';
            row += ' '.repeat(2*(n-i));
            for (let j = 1; j <= i; j++) row += (j===1 || j===i) ? '*' : ' ';
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sandglass-pattern',
        title: 'Sandglass Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a sandglass star pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print("* ");
            System.out.println();
        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print("* ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = n; i >= 1; i--) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'rhombus-pattern',
        title: 'Rhombus Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a solid rhombus pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= n; j++) System.out.print("*");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i) + '*'.repeat(n);
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hollow-rhombus',
        title: 'Hollow Rhombus',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a hollow rhombus pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) System.out.print("*");
                else System.out.print(" ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= n; j++) {
              if (i === 1 || i === n || j === 1 || j === n) row += '*';
              else row += ' ';
            }
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }
,

      {
        id: 'binary-pyramid',
        title: 'Binary Pyramid',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a binary number pyramid.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                if ((i + j) % 2 == 0) System.out.print("1 ");
                else System.out.print("0 ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
              if ((i + j) % 2 === 0) row += '1 ';
              else row += '0 ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'palindrome-triangle',
        title: 'Palindrome Triangle',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a palindromic number triangle.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print("  ");
            for (int j = i; j >= 1; j--) System.out.print(j + " ");
            for (int j = 2; j <= i; j++) System.out.print(j + " ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '  '.repeat(n - i);
            for (let j = i; j >= 1; j--) row += j + ' ';
            for (let j = 2; j <= i; j++) row += j + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'number-diamond',
        title: 'Number Diamond',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a number diamond.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print(j + " ");
            System.out.println();
        }
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print(j + " ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += j + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
          for (let i = n - 1; i >= 1; i--) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += j + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'snake-pattern',
        title: 'Snake Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints numbers in a snake pattern.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        int val = 1;
        for (int i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                for (int j = 1; j <= n; j++) System.out.print(val++ + "\t");
            } else {
                int temp = val + n - 1;
                for (int j = 1; j <= n; j++) System.out.print(temp-- + "\t");
                val += n;
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          let val = 1;
          for (let i = 1; i <= n; i++) {
            let row = '';
            if (i % 2 !== 0) {
              for (let j = 1; j <= n; j++) row += (val++) + '\t';
            } else {
              let temp = val + n - 1;
              for (let j = 1; j <= n; j++) row += (temp--) + '\t';
              val += n;
            }
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'wave-pattern',
        title: 'Wave Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a wave shape using stars.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter wave height: ");
        int n = sc.nextInt();
        int waveLength = 4; // predefined waves
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n * waveLength; j++) {
                if (i % n == j % n || (i + j) % n == 0) System.out.print("*");
                else System.out.print(" ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          let waveLength = 4;
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n * waveLength; j++) {
              if (i % n === j % n || (i + j) % n === 0) row += '*';
              else row += ' ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'star-spiral',
        title: 'Star Spiral',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a spiral pattern of stars.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int min = Math.min(Math.min(i, j), Math.min(n - 1 - i, n - 1 - j));
                if (min % 2 == 0) System.out.print("* ");
                else System.out.print("  ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 0; i < n; i++) {
            let row = '';
            for (let j = 0; j < n; j++) {
              let min = Math.min(Math.min(i, j), Math.min(n - 1 - i, n - 1 - j));
              if (min % 2 === 0) row += '* ';
              else row += '  ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'pyramid-increasing-numbers',
        title: 'Pyramid with Increasing Numbers',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a pyramid with sequentially increasing numbers.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        int val = 1;
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) System.out.print("  ");
            for (int j = 1; j <= i; j++) System.out.print(val++ + "   ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          let val = 1;
          for (let i = 1; i <= n; i++) {
            let row = '  '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += (val++) + '   ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'reverse-pyramid-numbers',
        title: 'Reverse Pyramid Numbers',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints an inverted pyramid with numbers.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = n; i >= 1; i--) {
            for (int s = 1; s <= n - i; s++) System.out.print(" ");
            for (int j = 1; j <= i; j++) System.out.print(j + " ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = n; i >= 1; i--) {
            let row = ' '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += j + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'double-hill-pattern',
        title: 'Double Hill Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints two adjacent hills of numbers.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) System.out.print(j + " ");
            for (int j = 1; j <= 2*(n-i); j++) System.out.print("  ");
            for (int j = i; j >= 1; j--) System.out.print(j + " ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) row += j + ' ';
            row += '  '.repeat(2*(n-i));
            for (let j = i; j >= 1; j--) row += j + ' ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'mirror-triangle',
        title: 'Mirror Triangle',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a mirrored right triangle.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) System.out.print("  ");
            for (int j = 1; j <= i; j++) System.out.print("* ");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '  '.repeat(n - i);
            for (let j = 1; j <= i; j++) row += '* ';
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'cross-number-pattern',
        title: 'Cross Number Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints an X shape with numbers.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == j || i + j == n + 1) System.out.print(j + " ");
                else System.out.print("  ");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (i === j || i + j === n + 1) row += j + ' ';
              else row += '  ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'staircase-pattern',
        title: 'Staircase Pattern',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a simple staircase.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (j <= n - i) System.out.print(" ");
                else System.out.print("#");
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= n; j++) {
              if (j <= n - i) row += ' ';
              else row += '#';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'alphabet-pyramid',
        title: 'Alphabet Pyramid',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a pyramid with alphabet letters.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) System.out.print(" ");
            char ch = 'A';
            for (int j = 1; j <= i; j++) {
                System.out.print(ch + " ");
                ch++;
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            let ch = 65;
            for (let j = 1; j <= i; j++) {
              row += String.fromCharCode(ch++) + ' ';
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hollow-alphabet-pyramid',
        title: 'Hollow Alphabet Pyramid',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a hollow alphabet pyramid.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        for (int i = 1; i <= n; i++) {
            for (int s = 1; s <= n - i; s++) System.out.print(" ");
            char ch = 'A';
            for (int j = 1; j <= i; j++) {
                if (j == 1 || j == i || i == n) System.out.print(ch + " ");
                else System.out.print("  ");
                ch++;
            }
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          for (let i = 1; i <= n; i++) {
            let row = ' '.repeat(n - i);
            let ch = 65;
            for (let j = 1; j <= i; j++) {
              if (j === 1 || j === i || i === n) row += String.fromCharCode(ch) + ' ';
              else row += '  ';
              ch++;
            }
            yield { type: 'out', text: row.trimEnd() };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'advanced-spiral-matrix',
        title: 'Advanced Spiral Matrix',
        icon: '🔷',
        difficulty: 'Medium',
        tags: ['pattern'],
        desc: 'Prints a full spiral matrix matching typical Java behavior.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter N: ");
        int n = sc.nextInt();
        int[][] arr = new int[n][n];
        int val = 1, top = 0, bottom = n-1, left = 0, right = n-1;
        while(val <= n*n){
            for(int j=left; j<=right; j++) arr[top][j] = val++;
            top++;
            for(int i=top; i<=bottom; i++) arr[i][right] = val++;
            right--;
            for(int j=right; j>=left; j--) arr[bottom][j] = val++;
            bottom--;
            for(int i=bottom; i>=top; i--) arr[i][left] = val++;
            left++;
        }
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++) System.out.print(arr[i][j] + "\t");
            System.out.println();
        }
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter N: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if(isNaN(n)) { yield { type:'error', text:'Invalid input.' }; return; }
          
          let arr = Array.from({length: n}, () => Array(n).fill(0));
          let val = 1, top = 0, bottom = n-1, left = 0, right = n-1;
          while(val <= n*n){
            for(let j=left; j<=right && val<=n*n; j++) arr[top][j] = val++;
            top++;
            for(let i=top; i<=bottom && val<=n*n; i++) arr[i][right] = val++;
            right--;
            for(let j=right; j>=left && val<=n*n; j--) arr[bottom][j] = val++;
            bottom--;
            for(let i=bottom; i>=top && val<=n*n; i--) arr[i][left] = val++;
            left++;
          }
          for(let i=0; i<n; i++){
            let row = '';
            for(let j=0; j<n; j++) row += arr[i][j] + '\t';
            yield { type: 'out', text: row };
          }
    
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }
    ]
  };
