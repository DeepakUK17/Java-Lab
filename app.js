/* =============================================
   Java Lab – app.js
   Interactive Java Program Explorer
   Section-Based Layout v3.0
   ============================================= */

'use strict';

// ─────────────────────────────────────────────
//  Section & Program Data
// ─────────────────────────────────────────────
const SECTIONS = [

  // ███████████████████████████████████████████
  //  SECTION 1 — INPUT & OUTPUT
  // ███████████████████████████████████████████
  {
    id: 'input-output',
    title: 'Input & Output',
    icon: '📥',
    theme: { accent: '#06b6d4', glow: 'rgba(6,182,212,0.18)', bg: 'rgba(6,182,212,0.08)' },
    programs: [

      {
        id: 'print-welcome',
        title: 'Print Welcome',
        icon: '👋',
        difficulty: 'Easy',
        tags: ['print', 'output'],
        desc: 'Prints a simple "Welcome" message to the console.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.print("Welcome");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Welcome' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-word',
        title: 'Print a Word',
        icon: '🔤',
        difficulty: 'Easy',
        tags: ['scanner', 'input', 'string'],
        desc: 'Takes a word as input and prints it with a label.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.print("Name: " + s);
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a word: ', inputKey: 'word' };
          const w = inputs['word'];
          if (!w) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: `Name: ${w}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-full-name',
        title: 'Print Full Name',
        icon: '📝',
        difficulty: 'Easy',
        tags: ['scanner', 'nextLine', 'string'],
        desc: 'Reads a full name (with spaces) and prints it.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the Name: ");
        String s = sc.nextLine();
        System.out.print("My full name: " + s);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter the Name: ', inputKey: 'name' };
          const n = inputs['name'];
          if (!n) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: `My full name: ${n}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-integer',
        title: 'Print Integer',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['scanner', 'int', 'input'],
        desc: 'Reads an integer from the user and prints it.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.print("Number is " + num);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter an integer: ', inputKey: 'num' };
          const n = parseInt(inputs['num']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: `Number is ${n}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-fractional',
        title: 'Print Decimal (2dp)',
        icon: '🔣',
        difficulty: 'Easy',
        tags: ['scanner', 'float', 'printf'],
        desc: 'Reads a decimal number and prints it formatted to 2 decimal places.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double d = sc.nextDouble();
        System.out.printf("%.2f", d);
        sc.close();
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a decimal number: ', inputKey: 'd' };
          const d = parseFloat(inputs['d']);
          if (isNaN(d)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: d.toFixed(2) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'int-to-hex',
        title: 'Integer to Hex',
        icon: '🔷',
        difficulty: 'Easy',
        tags: ['format', 'hex', 'conversion'],
        desc: 'Converts a given integer to its hexadecimal representation.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.printf("%x", num);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter an integer: ', inputKey: 'num' };
          const n = parseInt(inputs['num']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: n.toString(16) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'int-to-octal',
        title: 'Integer to Octal',
        icon: '🔶',
        difficulty: 'Easy',
        tags: ['format', 'octal', 'conversion'],
        desc: 'Converts a given integer to its octal representation.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        System.out.printf("%o", num);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter an integer: ', inputKey: 'num' };
          const n = parseInt(inputs['num']);
          if (isNaN(n)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: n.toString(8) };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'ascii-value',
        title: 'ASCII Value',
        icon: '🔡',
        difficulty: 'Easy',
        tags: ['char', 'ascii', 'casting'],
        desc: 'Prints the ASCII value of a given character.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        System.out.println((int) ch);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a character: ', inputKey: 'ch' };
          const ch = inputs['ch'];
          if (!ch) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: `ASCII value of '${ch[0]}' = ${ch.charCodeAt(0)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'char-from-ascii',
        title: 'Char from ASCII',
        icon: '🅰️',
        difficulty: 'Easy',
        tags: ['ascii', 'char', 'casting'],
        desc: 'Prints the character corresponding to a given ASCII value.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ascii = sc.nextInt();
        char ch = (char) ascii;
        System.out.println(ch);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter ASCII value: ', inputKey: 'ascii' };
          const a = parseInt(inputs['ascii']);
          if (isNaN(a)) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: `Character = '${String.fromCharCode(a)}'` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'data-type-sizes',
        title: 'Data Type Sizes',
        icon: '📏',
        difficulty: 'Easy',
        tags: ['datatypes', 'size', 'bytes'],
        desc: 'Prints the size in bytes of char, int, float and double in Java.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Size of char: " + Character.BYTES + " bytes");
        System.out.println("Size of int: " + Integer.BYTES + " bytes");
        System.out.println("Size of float: " + Float.BYTES + " bytes");
        System.out.println("Size of double: " + Double.BYTES + " bytes");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Size of char: 2 bytes' };
          yield { type: 'out', text: 'Size of int: 4 bytes' };
          yield { type: 'out', text: 'Size of float: 4 bytes' };
          yield { type: 'out', text: 'Size of double: 8 bytes' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'date-of-birth',
        title: 'Date of Birth Format',
        icon: '📅',
        difficulty: 'Easy',
        tags: ['format', 'date', 'input'],
        desc: 'Takes day, month, year as input and prints date in DD/MM/YYYY format.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Day: ");
        int day = sc.nextInt();
        System.out.print("Enter Month: ");
        int month = sc.nextInt();
        System.out.print("Enter Year: ");
        long year = sc.nextLong();
        System.out.print(day + "/" + month + "/" + year);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Day: ', inputKey: 'day' };
          yield { type: 'ask', text: 'Enter Month: ', inputKey: 'month' };
          yield { type: 'ask', text: 'Enter Year: ', inputKey: 'year' };
          const d = inputs['day'], m = inputs['month'], y = inputs['year'];
          yield { type: 'out', text: `${d}/${m}/${y}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'roll-and-name',
        title: 'Roll No & Name',
        icon: '🎓',
        difficulty: 'Easy',
        tags: ['format', 'string', 'input'],
        desc: 'Prints roll number and name in a formatted output.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int roll = sc.nextInt();
        String name = sc.next();
        System.out.print("Roll No: " + roll + ", Name: " + name);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Roll No: ', inputKey: 'roll' };
          yield { type: 'ask', text: 'Enter Name: ', inputKey: 'name' };
          yield { type: 'out', text: `Roll No: ${inputs['roll']}, Name: ${inputs['name']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'hex-to-int',
        title: 'Hexadecimal to Integer',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['parseInt', 'hex', 'conversion'],
        desc: 'Converts a given hexadecimal string to an integer format.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String hexa = sc.next();
        int num = Integer.parseInt(hexa, 16);
        System.out.print(num);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter hexadecimal string: ', inputKey: 'hex' };
          const h = inputs['hex'];
          if (!h) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: parseInt(h, 16).toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'octal-to-int',
        title: 'Octal to Integer',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['parseInt', 'octal', 'conversion'],
        desc: 'Converts a given octal string to an integer format.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String oct = sc.next();
        int num = Integer.parseInt(oct, 8);
        System.out.println(num);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter octal string: ', inputKey: 'oct' };
          const o = inputs['oct'];
          if (!o) { yield { type: 'error', text: 'Invalid input.' }; return; }
          yield { type: 'out', text: parseInt(o, 8).toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-space',
        title: 'Two Numbers with Space',
        icon: '↔️',
        difficulty: 'Easy',
        tags: ['print', 'space'],
        desc: 'Prints two numbers with a space between them.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + " " + b);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'out', text: `${inputs['a']} ${inputs['b']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-tab',
        title: 'Two Numbers with Tab',
        icon: '⏭️',
        difficulty: 'Easy',
        tags: ['print', 'tab', 'escape'],
        desc: 'Prints two numbers with a tab space between them.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a + "\\t" + b);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'out', text: `${inputs['a']}\t${inputs['b']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-lines',
        title: 'Two Numbers in Two Lines',
        icon: '↕️',
        difficulty: 'Easy',
        tags: ['println', 'newline'],
        desc: 'Prints two numbers in two separate lines.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println(a);
        System.out.println(b);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter first number: ', inputKey: 'a' };
          yield { type: 'ask', text: 'Enter second number: ', inputKey: 'b' };
          yield { type: 'out', text: `${inputs['a']}\n${inputs['b']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'char-single-quote',
        title: 'Char in Single Quotes',
        icon: '🔡',
        difficulty: 'Easy',
        tags: ['print', 'char', 'quotes'],
        desc: 'Prints a character surrounded by single quotes.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char ch = sc.next().charAt(0);
        System.out.print("'" + ch + "'");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter a character: ', inputKey: 'c' };
          yield { type: 'out', text: `'${inputs['c'][0]}'` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'words-double-quote',
        title: 'Words in Double Quotes',
        icon: '💬',
        difficulty: 'Easy',
        tags: ['print', 'string', 'escape'],
        desc: 'Prints two words surrounded by double quotes using escape sequence.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String words = sc.nextLine();
        System.out.print("\\"" + words + "\\"");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter words: ', inputKey: 'w' };
          yield { type: 'out', text: `"${inputs['w']}"` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'plus-sign',
        title: 'Integer with Plus Sign',
        icon: '➕',
        difficulty: 'Easy',
        tags: ['print', 'format'],
        desc: 'Prints an integer with a plus sign (+) before it.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print("+" + n);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter an integer: ', inputKey: 'n' };
          yield { type: 'out', text: `+${inputs['n']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'five-subjects',
        title: 'Marks in 5 Subjects',
        icon: '📝',
        difficulty: 'Easy',
        tags: ['input', 'print', 'newline'],
        desc: 'Takes marks in 5 subjects and prints them each on a new line.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sub1 = sc.nextInt();
        int sub2 = sc.nextInt();
        int sub3 = sc.nextInt();
        int sub4 = sc.nextInt();
        int sub5 = sc.nextInt();
        System.out.println("Subject 1:" + sub1);
        System.out.println("Subject 2:" + sub2);
        System.out.println("Subject 3:" + sub3);
        System.out.println("Subject 4:" + sub4);
        System.out.println("Subject 5:" + sub5);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Subject 1 marks: ', inputKey: 's1' };
          yield { type: 'ask', text: 'Subject 2 marks: ', inputKey: 's2' };
          yield { type: 'ask', text: 'Subject 3 marks: ', inputKey: 's3' };
          yield { type: 'ask', text: 'Subject 4 marks: ', inputKey: 's4' };
          yield { type: 'ask', text: 'Subject 5 marks: ', inputKey: 's5' };
          yield { type: 'out', text: `Subject 1:${inputs['s1']}\nSubject 2:${inputs['s2']}\nSubject 3:${inputs['s3']}\nSubject 4:${inputs['s4']}\nSubject 5:${inputs['s5']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'blood-group',
        title: 'Print Blood Group',
        icon: '🩸',
        difficulty: 'Easy',
        tags: ['string', 'input'],
        desc: 'Reads a blood group and prints it.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String bloodgroup = sc.nextLine();
        System.out.print(bloodgroup);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter blood group: ', inputKey: 'bg' };
          yield { type: 'out', text: `${inputs['bg']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'current-time',
        title: 'Current Time (HH:MM:SS)',
        icon: '⌚',
        difficulty: 'Easy',
        tags: ['format', 'time'],
        desc: 'Takes hours, minutes, and seconds as input and prints them formatted as HH:MM:SS.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int h = sc.nextInt();
        int m = sc.nextInt();
        int s = sc.nextInt();
        System.out.printf("%02d:%02d:%02d", h, m, s);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Hours: ', inputKey: 'h' };
          yield { type: 'ask', text: 'Enter Minutes: ', inputKey: 'm' };
          yield { type: 'ask', text: 'Enter Seconds: ', inputKey: 's' };
          const h = parseInt(inputs['h']) || 0, m = parseInt(inputs['m']) || 0, s = parseInt(inputs['s']) || 0;
          yield { type: 'out', text: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'print-address',
        title: 'Address in Multiple Lines',
        icon: '🏠',
        difficulty: 'Easy',
        tags: ['newline', 'escape', 'print'],
        desc: 'Prints an address using newline escape characters.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("123 Main Street\\nApartment 4B\\nNew York, NY 10001");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '123 Main Street\nApartment 4B\nNew York, NY 10001' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-board-marks',
        title: 'Dhoni Class X Board Marks',
        icon: '🏏',
        difficulty: 'Easy',
        tags: ['scenario', 'input', 'print'],
        desc: 'Prints Dhoni\'s Class X board exam scores in English, Hindi, Science, and Social.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the marks scored");
        System.out.println("English:");
        int english = sc.nextInt();
        System.out.println("Hindi:");
        int hindi = sc.nextInt();
        System.out.println("Science:");
        int science = sc.nextInt();
        System.out.println("Social:");
        int social = sc.nextInt();
        
        System.out.println("MS.Dhoni Class X board exams score details");
        System.out.println("English: " + english);
        System.out.println("Hindi: " + hindi);
        System.out.println("Science: " + science);
        System.out.println("Social: " + social);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Enter the marks scored\nEnglish:' };
          yield { type: 'ask', text: '', inputKey: 'e' };
          yield { type: 'out', text: 'Hindi:' };
          yield { type: 'ask', text: '', inputKey: 'h' };
          yield { type: 'out', text: 'Science:' };
          yield { type: 'ask', text: '', inputKey: 'sc' };
          yield { type: 'out', text: 'Social:' };
          yield { type: 'ask', text: '', inputKey: 'so' };
          yield { type: 'out', text: `MS.Dhoni Class X board exams score details\nEnglish: ${inputs['e']}\nHindi: ${inputs['h']}\nScience: ${inputs['sc']}\nSocial: ${inputs['so']}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }

    ]
  },

  // ███████████████████████████████████████████
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
  },

  // ███████████████████████████████████████████
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
  },

  // ███████████████████████████████████████████
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
  },

  // ███████████████████████████████████████████
  //  SECTION 5 — SCENARIO BASED
  // ███████████████████████████████████████████
  {
    id: 'scenario-based',
    title: 'Scenario Based',
    icon: '🎭',
    theme: { accent: '#f43f5e', glow: 'rgba(244,63,94,0.18)', bg: 'rgba(244,63,94,0.08)' },
    programs: [

      {
        id: 'price-after-discount',
        title: 'Price After Discount',
        icon: '🏷️',
        difficulty: 'Easy',
        tags: ['arithmetic', 'discount'],
        desc: 'Calculates the final price after applying a discount percentage.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double price = sc.nextDouble();
        double discount = sc.nextDouble();
        double discountAmount = (price * discount) / 100;
        double finalPrice = price - discountAmount;
        System.out.print(finalPrice);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter price: ', inputKey: 'price' };
          yield { type: 'ask', text: 'Enter discount %: ', inputKey: 'disc' };
          const p=parseFloat(inputs['price']),d=parseFloat(inputs['disc']);
          if (isNaN(p)||isNaN(d)) { yield { type:'error', text:'Invalid input.' }; return; }
          const amt=(p*d)/100;
          yield { type: 'out', text: `Discount: ₹${amt.toFixed(2)}` };
          yield { type: 'out', text: `Final Price: ₹${(p-amt).toFixed(2)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'celsius-to-fahrenheit',
        title: 'Celsius to Fahrenheit',
        icon: '🌡️',
        difficulty: 'Easy',
        tags: ['conversion', 'temperature'],
        desc: 'Converts temperature from Celsius to Fahrenheit.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double celsius = sc.nextDouble();
        double fahrenheit = (celsius * 9.0 / 5.0) + 32;
        System.out.printf("%.2f", fahrenheit);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter temperature in Celsius: ', inputKey: 'c' };
          const c = parseFloat(inputs['c']);
          if (isNaN(c)) { yield { type:'error', text:'Invalid input.' }; return; }
          const f = (c*9/5)+32;
          yield { type: 'out', text: `${c}°C = ${f.toFixed(2)}°F` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'triangle-area',
        title: 'Equilateral Triangle Area',
        icon: '🔺',
        difficulty: 'Medium',
        tags: ['formula', 'math', 'area'],
        desc: 'Calculates area of equilateral triangle using formula ¼(√3 × a²).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        double area = (Math.sqrt(3) / 4) * a * a;
        System.out.printf("%.2f", area);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter side length: ', inputKey: 'a' };
          const a = parseFloat(inputs['a']);
          if (isNaN(a)||a<=0) { yield { type:'error', text:'Invalid input.' }; return; }
          const area = (Math.sqrt(3)/4)*a*a;
          yield { type: 'out', text: `Area = ${area.toFixed(2)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'split-bill',
        title: 'Split the Bill',
        icon: '🍕',
        difficulty: 'Easy',
        tags: ['division', 'scenario'],
        desc: 'Splits a bill equally among 3 friends.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double bill = sc.nextDouble();
        double each = bill / 3;
        System.out.printf("Each pays: %.2f", each);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter total bill: ', inputKey: 'bill' };
          const b = parseFloat(inputs['bill']);
          if (isNaN(b)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Each person pays: ₹${(b/3).toFixed(2)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'candy-distribution',
        title: 'Distribute Candies',
        icon: '🍬',
        difficulty: 'Easy',
        tags: ['division', 'modulo'],
        desc: 'Distributes candies equally and finds leftover.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int candies = sc.nextInt();
        int people = sc.nextInt();
        System.out.println("Each person gets: " + candies / people + " candies");
        System.out.println("Leftover candies: " + candies % people);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter total candies: ', inputKey: 'candies' };
          yield { type: 'ask', text: 'Enter number of people: ', inputKey: 'people' };
          const c=parseInt(inputs['candies']),p=parseInt(inputs['people']);
          if (isNaN(c)||isNaN(p)||p===0) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Each person gets: ${Math.floor(c/p)} candies` };
          yield { type: 'out', text: `Leftover candies: ${c%p}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'electricity-bill',
        title: 'Electricity Bill',
        icon: '⚡',
        difficulty: 'Hard',
        tags: ['if-else', 'slab', 'bill'],
        desc: 'Calculates electricity bill with slab rates and 15% surcharge if > ₹500.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int units = sc.nextInt();
        double bill;
        if (units <= 100) bill = units * 1.5;
        else if (units <= 200) bill = 100*1.5 + (units-100)*2.5;
        else bill = 100*1.5 + 100*2.5 + (units-200)*4.0;
        double surcharge = bill > 500 ? bill * 0.15 : 0;
        System.out.printf("Bill: %.2f%n", bill);
        System.out.printf("Surcharge: %.2f%n", surcharge);
        System.out.printf("Total: %.2f%n", bill + surcharge);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter units consumed: ', inputKey: 'units' };
          const u = parseInt(inputs['units']);
          if (isNaN(u)||u<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let bill;
          if (u<=100) bill=u*1.5;
          else if (u<=200) bill=100*1.5+(u-100)*2.5;
          else bill=100*1.5+100*2.5+(u-200)*4.0;
          const surcharge = bill>500?bill*0.15:0;
          yield { type: 'out', text: `Bill before surcharge: ₹${bill.toFixed(2)}` };
          yield { type: 'out', text: `Surcharge: ₹${surcharge.toFixed(2)}` };
          yield { type: 'out', text: `Total Bill: ₹${(bill+surcharge).toFixed(2)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'gross-salary',
        title: 'Gross & Net Salary',
        icon: '💰',
        difficulty: 'Hard',
        tags: ['if-else', 'salary', 'calculation'],
        desc: 'Calculates Gross Salary (Basic+HRA+DA) and Net Salary after 10% tax.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long basic = sc.nextLong();
        double hra, da;
        if (basic <= 10000) { hra = 0.2*basic; da = 0.8*basic; }
        else if (basic <= 20000) { hra = 0.25*basic; da = 0.9*basic; }
        else { hra = 0.3*basic; da = 0.95*basic; }
        double gross = basic + hra + da;
        double tax = 0.1 * gross;
        double net = gross - tax;
        System.out.printf("Gross Salary = %.2f%n", gross);
        System.out.printf("Net Salary = %.2f%n", net);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Basic Salary: ', inputKey: 'basic' };
          const basic = parseFloat(inputs['basic']);
          if (isNaN(basic)||basic<0) { yield { type:'error', text:'Invalid input.' }; return; }
          let hra,da;
          if(basic<=10000){hra=0.2*basic;da=0.8*basic;}
          else if(basic<=20000){hra=0.25*basic;da=0.9*basic;}
          else{hra=0.3*basic;da=0.95*basic;}
          const gross=basic+hra+da,tax=0.1*gross,net=gross-tax;
          yield { type: 'out', text: `Gross Salary = ₹${gross.toFixed(2)}` };
          yield { type: 'out', text: `Tax (10%)    = ₹${tax.toFixed(2)}` };
          yield { type: 'out', text: `Net Salary   = ₹${net.toFixed(2)}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-motivational',
        title: 'Dhoni\'s Motivational Message',
        icon: '💬',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints Dhoni\'s motivational message in a single line.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Believe in hard work and trust your journey.");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Believe in hard work and trust your journey.' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-achievements',
        title: 'Dhoni\'s Achievements',
        icon: '🏆',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints two major achievements of Dhoni in separate lines.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("ICC T20 World Cup Winner 2007");
        System.out.println("ICC World Cup Winner 2011");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'ICC T20 World Cup Winner 2007\nICC World Cup Winner 2011' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-favorite-games',
        title: 'Dhoni\'s Favorite Games',
        icon: '⚽',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints Dhoni\'s favorite games in different lines.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Football");
        System.out.println("Badminton");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Football\nBadminton' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-school',
        title: 'Dhoni\'s School & City',
        icon: '🏫',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints Dhoni\'s school name and city in two separate lines.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Jawahar Vidya Mandir");
        System.out.println("Ranchi");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Jawahar Vidya Mandir\nRanchi' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-intro',
        title: 'Dhoni\'s Intro (Scanner)',
        icon: '🎤',
        difficulty: 'Easy',
        tags: ['scanner', 'scenario'],
        desc: 'Takes Name and Role as input and prints a formatted sentence.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        String role = sc.nextLine();
        System.out.println("My name is " + name + " and I worked as " + role + " of the Indian Cricket Team.");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter Name: ', inputKey: 'name' };
          yield { type: 'ask', text: 'Enter Role: ', inputKey: 'role' };
          const name = inputs['name'], role = inputs['role'];
          if (!name || !role) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `My name is ${name} and I worked as ${role} of the Indian Cricket Team.` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-skills',
        title: 'Dhoni\'s Academy Skills',
        icon: '🎯',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints the skills trained at Dhoni\'s academy separated by commas.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Wicketkeeping, Batting, Fitness Training");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'Wicketkeeping, Batting, Fitness Training' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-family',
        title: 'Dhoni\'s Family Details',
        icon: '👨‍👩‍👧‍👦',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints Dhoni\'s family details in a specific format.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("MS Dhoni");
        System.out.println("Father: Pan Singh");
        System.out.println("Mother: Devki Devi");
        System.out.println("Siblings: Narendra Singh and Jayanti Gupta");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: 'MS Dhoni\nFather: Pan Singh\nMother: Devki Devi\nSiblings: Narendra Singh and Jayanti Gupta' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-reaction',
        title: 'Dhoni\'s Emotional Reply',
        icon: '🎙️',
        difficulty: 'Easy',
        tags: ['print', 'scenario'],
        desc: 'Prints Dhoni\'s emotional reply to a journalist\'s question.',
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Question:");
        System.out.println("How did you feel when you were selected for India?");
        System.out.println("Dhoni's reply:");
        System.out.println("It was a dream come true and a proud moment.");
        System.out.println("For the question \\"How did you feel when you were selected for India?\\" Dhoni replied \\"It was a dream come true and a proud moment.\\"");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: "Question:\nHow did you feel when you were selected for India?\nDhoni's reply:\nIt was a dream come true and a proud moment.\nFor the question \"How did you feel when you were selected for India?\" Dhoni replied \"It was a dream come true and a proud moment.\"" };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-training',
        title: 'Dhoni\'s Training Hours',
        icon: '🏋️',
        difficulty: 'Easy',
        tags: ['scanner', 'scenario'],
        desc: 'Takes training hours as input and displays it formatted.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int hours = sc.nextInt();
        System.out.println("Dhoni trains for " + hours + " hours per week.");
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter training hours: ', inputKey: 'hours' };
          const hours = parseInt(inputs['hours']);
          if (isNaN(hours)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Dhoni trains for ${hours} hours per week.` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'dhoni-marks',
        title: 'Dhoni\'s Sports Performance',
        icon: '📋',
        difficulty: 'Easy',
        tags: ['scanner', 'scenario'],
        desc: 'Takes marks for Fitness, Strategy, and Teamwork and displays them.',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int fitness = sc.nextInt();
        int strategy = sc.nextInt();
        int teamwork = sc.nextInt();
        System.out.println("Dhoni's Sports Performance");
        System.out.println("Fitness: " + fitness);
        System.out.println("Strategy: " + strategy);
        System.out.println("Teamwork: " + teamwork);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Fitness marks: ', inputKey: 'f' };
          yield { type: 'ask', text: 'Strategy marks: ', inputKey: 's' };
          yield { type: 'ask', text: 'Teamwork marks: ', inputKey: 't' };
          const f = parseInt(inputs['f']), s = parseInt(inputs['s']), t = parseInt(inputs['t']);
          if (isNaN(f)||isNaN(s)||isNaN(t)) { yield { type:'error', text:'Invalid input.' }; return; }
          yield { type: 'out', text: `Dhoni's Sports Performance\nFitness: ${f}\nStrategy: ${s}\nTeamwork: ${t}` };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }

    ]
  },

  // ███████████████████████████████████████████
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
      }

    ]
  },

  // ███████████████████████████████████████████
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
      }

    ]
  }

];

// ─────────────────────────────────────────────
//- [x] Add 10 missing Scenario Based programs (`Scenario based question (2).txt`), `Decision Making.txt`), `Operators - class session.txt`)
// ─────────────────────────────────────────────
function getAllPrograms() {
  const all = [];
  SECTIONS.forEach(sec => sec.programs.forEach(p => all.push({ ...p, sectionId: sec.id, sectionTitle: sec.title, sectionTheme: sec.theme })));
  return all;
}

const ALL_PROGRAMS = getAllPrograms();

// ─────────────────────────────────────────────
//  State
// ─────────────────────────────────────────────
let currentProgram   = null;
let activeTab        = 'code';
let terminalGen      = null;
let pendingInputKey  = null;
let collectedInputs  = {};
let isRunning        = false;
let activeFilter     = 'all';
let searchQuery      = '';

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
      background: ${['#06b6d4','#f59e0b','#10b981','#8b5cf6','#f43f5e','#6366f1','#64748b'][Math.floor(Math.random()*7)]};
    `;
    container.appendChild(p);
  }
}

// ─────────────────────────────────────────────
//  Section Filter Nav
// ─────────────────────────────────────────────
function renderFilterNav() {
  const nav = document.getElementById('filterNav');
  if (!nav) return;

  // "All" button
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.dataset.section = 'all';
  allBtn.innerHTML = `<span>🏠</span> All`;
  allBtn.addEventListener('click', () => filterSection('all'));
  nav.appendChild(allBtn);

  SECTIONS.forEach(sec => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.section = sec.id;
    btn.style.setProperty('--filter-accent', sec.theme.accent);
    btn.innerHTML = `<span>${sec.icon}</span> ${sec.title}`;
    btn.addEventListener('click', () => filterSection(sec.id));
    nav.appendChild(btn);
  });
}

function filterPrograms() {
  const query = searchQuery.trim().toLowerCase();
  
  SECTIONS.forEach(sec => {
    const sectionBlock = document.querySelector(`.section-block[data-section="${sec.id}"]`);
    if (!sectionBlock) return;
    
    let visibleCardsCount = 0;
    
    sec.programs.forEach(prog => {
      const card = document.getElementById(`card-${prog.id}`);
      if (!card) return;
      
      const matchesSearch = !query || 
                            prog.title.toLowerCase().includes(query) || 
                            prog.desc.toLowerCase().includes(query) || 
                            prog.tags.some(tag => tag.toLowerCase().includes(query));
                            
      const matchesFilter = activeFilter === 'all' || sec.id === activeFilter;
      
      if (matchesSearch && matchesFilter) {
        if (card.style.display === 'none') {
          card.style.display = '';
          card.classList.remove('animate-entrance');
          void card.offsetWidth; // trigger reflow
          card.classList.add('animate-entrance');
        }
        visibleCardsCount++;
      } else {
        card.style.display = 'none';
        card.classList.remove('animate-entrance');
      }
    });
    
    // Show/hide section block based on whether it has visible cards
    const shouldShowSection = visibleCardsCount > 0 && (activeFilter === 'all' || sec.id === activeFilter);
    sectionBlock.style.display = shouldShowSection ? '' : 'none';
    
    // Dynamically update section count badge
    const countEl = sectionBlock.querySelector('.section-count');
    if (countEl) {
      if (query) {
        countEl.textContent = `${visibleCardsCount} of ${sec.programs.length} matches`;
      } else {
        countEl.textContent = `${sec.programs.length} programs`;
      }
    }
  });
  
  // Show a "No results found" message if all section blocks are hidden
  let noResultsMessage = document.getElementById('noResultsMessage');
  const anyVisible = Array.from(document.querySelectorAll('.section-block')).some(block => block.style.display !== 'none');
  
  if (!anyVisible) {
    if (!noResultsMessage) {
      noResultsMessage = document.createElement('div');
      noResultsMessage.id = 'noResultsMessage';
      noResultsMessage.className = 'no-results-message';
      noResultsMessage.innerHTML = `
        <div class="no-results-icon">🔍</div>
        <h3>No matching programs found</h3>
        <p>Try searching for other keywords, tags, or select a different section.</p>
        <button class="clear-search-link-btn" onclick="clearSearchAndFilters()">Clear Search & Filters</button>
      `;
      const container = document.getElementById('cardsGrid');
      container.appendChild(noResultsMessage);
    }
    noResultsMessage.style.display = 'flex';
  } else if (noResultsMessage) {
    noResultsMessage.style.display = 'none';
  }
}

window.clearSearchAndFilters = function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
    searchQuery = '';
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) clearBtn.style.display = 'none';
  }
  filterSection('all');
};

function filterSection(sectionId) {
  activeFilter = sectionId;
  // Update buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionId);
  });
  filterPrograms();
}

// ─────────────────────────────────────────────
//  Card Rendering — Section-Based
// ─────────────────────────────────────────────
function difficultyColor(d) {
  return { Easy: '#34d399', Medium: '#f59e0b', Hard: '#f87171' }[d] || '#94a3b8';
}

function renderCards() {
  const container = document.getElementById('cardsGrid');
  container.innerHTML = '';

  SECTIONS.forEach((sec) => {
    // Section wrapper
    const sectionBlock = document.createElement('div');
    sectionBlock.className = 'section-block';
    sectionBlock.dataset.section = sec.id;

    // Section header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.style.setProperty('--section-accent', sec.theme.accent);
    header.style.setProperty('--section-glow', sec.theme.glow);
    header.style.setProperty('--section-bg', sec.theme.bg);
    header.innerHTML = `
      <div class="section-icon" style="background:${sec.theme.bg};border:1px solid ${sec.theme.accent}33">${sec.icon}</div>
      <div class="section-info">
        <h2 class="section-title">${sec.title}</h2>
        <span class="section-count">${sec.programs.length} programs</span>
      </div>
    `;
    sectionBlock.appendChild(header);

    // Cards grid inside section
    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    sec.programs.forEach((prog, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = `card-${prog.id}`;
      card.style.setProperty('--card-accent', sec.theme.accent);
      card.style.setProperty('--card-glow', sec.theme.glow);
      card.style.setProperty('--card-icon-bg', sec.theme.bg);
      card.style.animationDelay = `${idx * 0.04}s`;

      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon">${prog.icon}</div>
          <span class="card-badge">${sec.title}</span>
        </div>
        <div class="card-title">${prog.title}</div>
        <div class="card-desc">${prog.desc}</div>
        <div class="card-footer">
          <div class="card-tags">
            ${prog.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            <span class="tag" style="color:${difficultyColor(prog.difficulty)};border-color:${difficultyColor(prog.difficulty)}44">${prog.difficulty}</span>
          </div>
          <div class="card-arrow" style="background:${sec.theme.accent}">→</div>
        </div>
      `;
      card.addEventListener('click', () => openModal(prog, sec));
      grid.appendChild(card);
    });

    sectionBlock.appendChild(grid);
    container.appendChild(sectionBlock);
  });
}

// ─────────────────────────────────────────────
//  Syntax Highlighter  (single-pass tokeniser)
// ─────────────────────────────────────────────
function highlight(code) {
  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  const KW  = /\b(import|public|class|static|void|int|long|double|float|boolean|char|String|new|return|if|else|for|while|do|switch|case|break|continue|final|null|true|false|this|super)\b/g;
  const CLS = /\b(Scanner|System|Math|Integer|Character|Float|Double)\b/g;
  const MTH = /\b([a-zA-Z_]\w*)(?=\s*\()/g;
  const NUM = /\b(\d+\.?\d*)\b/g;
  const ANN = /(@\w+)/g;

  function colourPlain(s) {
    return esc(s)
      .replace(ANN, (_,g) => `<span class="an">${g}</span>`)
      .replace(KW,  m     => `<span class="kw">${m}</span>`)
      .replace(CLS, m     => `<span class="cl">${m}</span>`)
      .replace(MTH, (_,g) => `<span class="fn">${g}</span>`)
      .replace(NUM, m     => `<span class="nm">${m}</span>`);
  }

  // Tokenise: protect comments & strings, colour plain code between them
  const tokenRe = /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')/g;
  let result = '';
  let last = 0;
  let mt;
  tokenRe.lastIndex = 0;

  while ((mt = tokenRe.exec(code)) !== null) {
    result += colourPlain(code.slice(last, mt.index));
    if (mt[1] || mt[2]) {
      result += `<span class="cm">${esc(mt[0])}</span>`;
    } else {
      result += `<span class="st">${esc(mt[0])}</span>`;
    }
    last = tokenRe.lastIndex;
  }
  result += colourPlain(code.slice(last));
  return result;
}

// ─────────────────────────────────────────────
//  Modal Open / Close
// ─────────────────────────────────────────────
function openModal(prog, sec) {
  currentProgram = prog;
  activeTab      = 'code';
  collectedInputs = {};
  pendingInputKey  = null;
  isRunning        = false;

  const accent = sec ? sec.theme.accent : '#4f9cf9';
  const iconBg = sec ? sec.theme.bg : 'rgba(79,156,249,0.15)';
  const sectionTitle = sec ? sec.title : 'Java';

  // Set header
  modalIcon.textContent   = prog.icon;
  modalIcon.style.background = iconBg;
  modalIcon.style.borderColor = accent + '44';
  modalTitle.textContent  = prog.title;
  modalMeta.textContent   = `Java  ·  ${sectionTitle}  ·  ${prog.difficulty}`;

  // Set code
  codeContent.innerHTML = highlight(prog.code);

  // Reset terminal
  resetTerminal();
  terminalName.textContent = prog.title + ' – Terminal';

  // Switch to code tab
  switchTab('code');

  // Update header accent
  document.querySelector('.modal').style.setProperty('--modal-accent', accent);

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

  switchTab('terminal');

  termPrint('cmd', `java ${currentProgram.title.replace(/\s+/g,'')}`);
  termPrint('out', '');

  terminalGen = currentProgram.run(collectedInputs);
  advanceGen();
};

function advanceGen() {
  if (!terminalGen || !isRunning) return;

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
    pendingInputKey = step.inputKey;
    termPrint('ask', step.text);
    terminalInputRow.style.display = 'flex';
    termInput.value = '';
    termInput.focus();
    return;
  }

  setTimeout(() => {
    if (!isRunning) return;
    termPrint(step.type, step.text);
    advanceGen();
  }, step.type === 'system' ? 180 : 60);
}

function submitInput() {
  const val = termInput.value.trim();
  if (!val || !pendingInputKey || !isRunning) return;

  collectedInputs[pendingInputKey] = val;

  const lastAsk = terminalBody.querySelector('.cursor');
  if (lastAsk) lastAsk.remove();

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

  terminalGen = currentProgram.run(collectedInputs);
  fastForwardGen();
}

function fastForwardGen() {
  const answeredKeys = Object.keys(collectedInputs);

  terminalGen = currentProgram.run(collectedInputs);

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
        step();
      } else {
        pendingInputKey = s.inputKey;
        termPrint('ask', s.text);
        terminalInputRow.style.display = 'flex';
        termInput.value = '';
        termInput.focus();
      }
    } else if (s.type === 'system' || s.type === 'cmd') {
      step();
    } else {
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
//  Search Bar Event Listeners
// ─────────────────────────────────────────────
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'flex' : 'none';
    }
    filterPrograms();
  });
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      filterPrograms();
    });
  }
  
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchQuery = '';
      if (clearBtn) clearBtn.style.display = 'none';
      searchInput.blur();
      filterPrograms();
    }
  });
}

// ─────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────
spawnParticles();
renderFilterNav();
renderCards();
initSearch();

// Update stats count
document.querySelectorAll('.stat-num').forEach(el => {
  const num = parseInt(el.textContent);
  if (!isNaN(num) && num < ALL_PROGRAMS.length) el.textContent = ALL_PROGRAMS.length;
});

console.log('%c☕ Java Lab Loaded', 'font-size:18px;color:#f89820;font-weight:bold');
console.log(`%c${ALL_PROGRAMS.length} programs across ${SECTIONS.length} sections`, 'color:#34d399');
