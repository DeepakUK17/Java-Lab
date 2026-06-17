export const section1 = // ███████████████████████████████████████████
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
  };
