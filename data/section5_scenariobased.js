export const section5 = // ███████████████████████████████████████████
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
  };
