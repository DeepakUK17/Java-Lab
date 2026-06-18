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
      }
    ]
  };
