export const section9 = // ███████████████████████████████████████████
  //  SECTION 9 — ARRAYS
  // ███████████████████████████████████████████
  {
    id: 'arrays',
    title: 'Arrays',
    icon: '🗂️',
    theme: { accent: '#06b6d4', glow: 'rgba(6,182,212,0.18)', bg: 'rgba(6,182,212,0.08)' },
    programs: [
      {
        id: 'read-and-print-array',
        title: 'Read and Print an Array',
        icon: '📤',
        difficulty: 'Easy',
        tags: ['array', 'input', 'output'],
        desc: 'Reads an array of integers from the user and prints all its elements.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'out', text: arr.join(' ') + ' ' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'sum-of-elements',
        title: 'Sum of All Elements',
        icon: '➕',
        difficulty: 'Easy',
        tags: ['array', 'sum', 'math'],
        desc: 'Calculates and prints the sum of all elements in an array.',
        code: `import java.util.*;
public class Main {	
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum = sum + arr[i];
        }
        System.out.print(sum);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          let sum = 0;
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
            sum += v;
          }
          yield { type: 'out', text: sum.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'average-of-elements',
        title: 'Average of Elements',
        icon: '🧮',
        difficulty: 'Easy',
        tags: ['array', 'average', 'math'],
        desc: 'Calculates and prints the average of elements in an array as a floating-point number.',
        code: `import java.util.*;
public class Main {	
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int sum = 0;
        float avg = 0;
        for (int i = 0; i < n; i++) {
            sum = sum + arr[i];
        }
        avg = sum / (float)n; 
        System.out.print(avg);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          let sum = 0;
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
            sum += v;
          }
          const avg = sum / n;
          yield { type: 'out', text: avg.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-total-elements',
        title: 'Count Total Elements',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['array', 'counter'],
        desc: 'Counts the total number of elements in an array by traversing it.',
        code: `import java.util.*;
public class Main {	
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int count = 0;
        for (int i = 0; i < n; i++) {
            count++;
        }
        System.out.print(count);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          let count = 0;
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
            count++;
          }
          yield { type: 'out', text: count.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'reverse-array-in-memory',
        title: 'Reverse Array in Memory',
        icon: '🔄',
        difficulty: 'Medium',
        tags: ['array', 'reverse', 'in-place'],
        desc: 'Reverses the elements of an array in-place (mutates the memory) and prints the result.',
        code: `import java.util.*;
public class Main {	
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        int var = n;
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            int temp = arr[i];
            arr[i] = arr[n-1];
            arr[n-1] = temp;
            n--;
        }
        for (int i = 0; i < var; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          let n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          const var_n = n;
          for (let i = 0; i < var_n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let tempN = var_n;
          for (let i = 0; i < tempN; i++) {
            let temp = arr[i];
            arr[i] = arr[tempN-1];
            arr[tempN-1] = temp;
            tempN--;
          }
          yield { type: 'out', text: arr.join(' ') + ' ' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'elements-at-even-index',
        title: 'Elements at Even Index',
        icon: '2️⃣',
        difficulty: 'Easy',
        tags: ['array', 'index', 'modulo'],
        desc: 'Traverses the array and prints the elements present at even indexes (0, 2, 4, etc.).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          const out = [];
          for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
              out.push(arr[i]);
            }
          }
          yield { type: 'out', text: out.join(' ') + ' ' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'elements-at-odd-index',
        title: 'Elements at Odd Index',
        icon: '1️⃣',
        difficulty: 'Easy',
        tags: ['array', 'index', 'modulo'],
        desc: 'Traverses the array and prints the elements present at odd indexes (1, 3, 5, etc.).',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            if (i % 2 != 0) {
                System.out.print(arr[i] + " ");
            }
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          const out = [];
          for (let i = 0; i < n; i++) {
            if (i % 2 !== 0) {
              out.push(arr[i]);
            }
          }
          yield { type: 'out', text: out.join(' ') + ' ' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-even-numbers',
        title: 'Count Even Numbers',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['array', 'modulo', 'counter'],
        desc: 'Counts how many even numbers are present in the given array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0) {
                count = count + 1;
            }
        }
        System.out.print(count);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          let count = 0;
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
            if (v % 2 === 0) {
              count++;
            }
          }
          yield { type: 'out', text: count.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-odd-numbers',
        title: 'Count Odd Numbers',
        icon: '🔢',
        difficulty: 'Easy',
        tags: ['array', 'modulo', 'counter'],
        desc: 'Counts how many odd numbers are present in the given array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 != 0) {
                count = count + 1;
            }
        }
        System.out.print(count);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          let count = 0;
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
            if (v % 2 !== 0) {
              count++;
            }
          }
          yield { type: 'out', text: count.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'replace-negatives-with-0',
        title: 'Replace Negatives with 0',
        icon: '🛑',
        difficulty: 'Easy',
        tags: ['array', 'conditional', 'replace'],
        desc: 'Traverses the array and replaces any negative elements with 0, then prints the final array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            if (arr[i] < 0) {
                arr[i] = 0;
            }
        }
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v < 0 ? 0 : v);
          }
          yield { type: 'out', text: arr.join(' ') + ' ' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'linear-search',
        title: 'Linear Search',
        icon: '🔍',
        difficulty: 'Easy',
        tags: ['array', 'search', 'find'],
        desc: 'Performs linear search to find if a given target element exists in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int key = sc.nextInt();
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                found = true;
                break;
            }
        }
        if (found) {
            System.out.print("Found");
        } else {
            System.out.print("Not Found");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter target element to search: ', inputKey: 'key' };
          const key = parseInt(inputs['key']);
          if (isNaN(key)) { yield { type: 'error', text: 'Invalid key.' }; return; }
          const found = arr.includes(key);
          yield { type: 'out', text: found ? 'Found' : 'Not Found' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'search-and-print-index',
        title: 'Search and Print Index',
        icon: '📍',
        difficulty: 'Easy',
        tags: ['array', 'search', 'index'],
        desc: 'Searches for a target element in the array and prints its index (first occurrence), or -1 if not found.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int key = sc.nextInt();
        int index = -1;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                index = i;
                break;
            }
        }
        System.out.print(index);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter search key: ', inputKey: 'key' };
          const key = parseInt(inputs['key']);
          if (isNaN(key)) { yield { type: 'error', text: 'Invalid key.' }; return; }
          const idx = arr.indexOf(key);
          yield { type: 'out', text: idx.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'count-element-occurrences',
        title: 'Count Element Occurrences',
        icon: '📊',
        difficulty: 'Easy',
        tags: ['array', 'search', 'counter'],
        desc: 'Counts and prints the frequency of a specific target element in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int key = sc.nextInt();
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                count++;
            }
        }
        System.out.print(count);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter target key to count: ', inputKey: 'key' };
          const key = parseInt(inputs['key']);
          if (isNaN(key)) { yield { type: 'error', text: 'Invalid key.' }; return; }
          let count = 0;
          for (let i = 0; i < n; i++) {
            if (arr[i] === key) count++;
          }
          yield { type: 'out', text: count.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'search-first-occurrence',
        title: 'Search First Occurrence',
        icon: '🥇',
        difficulty: 'Easy',
        tags: ['array', 'search', 'first-occurrence'],
        desc: 'Finds and prints the index of the first occurrence of a target element in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int key = sc.nextInt();
        int index = -1;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                index = i;
                break;
            }
        }
        System.out.print(index);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter search key: ', inputKey: 'key' };
          const key = parseInt(inputs['key']);
          if (isNaN(key)) { yield { type: 'error', text: 'Invalid key.' }; return; }
          const idx = arr.indexOf(key);
          yield { type: 'out', text: idx.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'search-last-occurrence',
        title: 'Search Last Occurrence',
        icon: '🏅',
        difficulty: 'Easy',
        tags: ['array', 'search', 'last-occurrence'],
        desc: 'Finds and prints the index of the last occurrence of a target element in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int key = sc.nextInt();
        int index = -1;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                index = i;
            }
        }
        System.out.print(index);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter search key: ', inputKey: 'key' };
          const key = parseInt(inputs['key']);
          if (isNaN(key)) { yield { type: 'error', text: 'Invalid key.' }; return; }
          const idx = arr.lastIndexOf(key);
          yield { type: 'out', text: idx.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'check-element-existence',
        title: 'Check Element Existence',
        icon: '❓',
        difficulty: 'Easy',
        tags: ['array', 'search', 'exist'],
        desc: 'Checks whether a specific target element exists or not in the array, printing a custom message.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int key = sc.nextInt();
        boolean exists = false;
        for (int i = 0; i < n; i++) {
            if (arr[i] == key) {
                exists = true;
                break;
            }
        }
        if (exists) {
            System.out.print("Exists");
        } else {
            System.out.print("Does not exist");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter target to check: ', inputKey: 'key' };
          const key = parseInt(inputs['key']);
          if (isNaN(key)) { yield { type: 'error', text: 'Invalid key.' }; return; }
          const exists = arr.includes(key);
          yield { type: 'out', text: exists ? 'Exists' : 'Does not exist' };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'find-maximum-element',
        title: 'Find Maximum Element',
        icon: '📈',
        difficulty: 'Easy',
        tags: ['array', 'min-max', 'extreme'],
        desc: 'Finds and prints the maximum value present in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        System.out.print(max);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let max = arr[0];
          for (let i = 1; i < n; i++) {
            if (arr[i] > max) max = arr[i];
          }
          yield { type: 'out', text: max.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },

      {
        id: 'find-minimum-element',
        title: 'Find Minimum Element',
        icon: '📉',
        difficulty: 'Easy',
        tags: ['array', 'min-max', 'extreme'],
        desc: 'Finds and prints the minimum value present in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int min = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        System.out.print(min);
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let min = arr[0];
          for (let i = 1; i < n; i++) {
            if (arr[i] < min) min = arr[i];
          }
          yield { type: 'out', text: min.toString() };
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'find-first-even-number',
        title: 'Find First Even Number',
        icon: '2️⃣',
        difficulty: 'Easy',
        tags: ['array', 'search', 'even'],
        desc: 'Find and print the first even number in the array. If not found, print No even number.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 == 0) {
                System.out.println("First Even: " + arr[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("No even number");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let found = false;
          for (let i = 0; i < n; i++) {
            if (arr[i] % 2 === 0) {
              yield { type: 'out', text: 'First Even: ' + arr[i] };
              found = true;
              break;
            }
          }
          if (!found) {
            yield { type: 'out', text: 'No even number' };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'find-last-odd-number',
        title: 'Find Last Odd Number',
        icon: '1️⃣',
        difficulty: 'Easy',
        tags: ['array', 'search', 'odd'],
        desc: 'Find the last odd number in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int lastOdd = -1;
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (arr[i] % 2 != 0) {
                lastOdd = arr[i];
                found = true;
            }
        }
        if (found) {
            System.out.println("Last Odd: " + lastOdd);
        } else {
            System.out.println("No odd number");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let lastOdd = -1;
          let found = false;
          for (let i = 0; i < n; i++) {
            if (arr[i] % 2 !== 0) {
              lastOdd = arr[i];
              found = true;
            }
          }
          if (found) {
            yield { type: 'out', text: 'Last Odd: ' + lastOdd };
          } else {
            yield { type: 'out', text: 'No odd number' };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'find-first-repeating-element',
        title: 'Find First Repeating Element',
        icon: '🔁',
        difficulty: 'Medium',
        tags: ['array', 'search', 'repeating'],
        desc: 'Find the first element that repeats in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        boolean found = false;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println("First Repeating: " + arr[i]);
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        if (!found) {
            System.out.println("No repeating element");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let found = false;
          for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
              if (arr[i] === arr[j]) {
                yield { type: 'out', text: 'First Repeating: ' + arr[i] };
                found = true;
                break;
              }
            }
            if (found) break;
          }
          if (!found) {
            yield { type: 'out', text: 'No repeating element' };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'find-first-non-repeating-element',
        title: 'Find First Non-Repeating Element',
        icon: '🔂',
        difficulty: 'Medium',
        tags: ['array', 'search', 'non-repeating'],
        desc: 'Find the first element that does NOT repeat in the array.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        boolean found = false;
        for (int i = 0; i < n; i++) {
            boolean repeats = false;
            for (int j = 0; j < n; j++) {
                if (i != j && arr[i] == arr[j]) {
                    repeats = true;
                    break;
                }
            }
            if (!repeats) {
                System.out.println("First Non-Repeating: " + arr[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            System.out.println("All elements repeat");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i}: `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          let found = false;
          for (let i = 0; i < n; i++) {
            let repeats = false;
            for (let j = 0; j < n; j++) {
              if (i !== j && arr[i] === arr[j]) {
                repeats = true;
                break;
              }
            }
            if (!repeats) {
              yield { type: 'out', text: 'First Non-Repeating: ' + arr[i] };
              found = true;
              break;
            }
          }
          if (!found) {
            yield { type: 'out', text: 'All elements repeat' };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      },
      {
        id: 'binary-search',
        title: 'Binary Search (Sorted Array)',
        icon: '🔍',
        difficulty: 'Medium',
        tags: ['array', 'search', 'binary'],
        desc: 'Perform binary search on a sorted array to find a given element.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        int search = sc.nextInt();
        int low = 0, high = n - 1;
        boolean found = false;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (arr[mid] == search) {
                System.out.println(mid);
                found = true;
                break;
            } else if (arr[mid] > search) {
                high = mid - 1;
            } else if (arr[mid] < search) {
                low = mid + 1;
            }
        }
        if (!found) {
            System.out.println("Not found");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          yield { type: 'ask', text: 'Enter array size: ', inputKey: 'n' };
          const n = parseInt(inputs['n']);
          if (isNaN(n) || n <= 0) { yield { type: 'error', text: 'Invalid size.' }; return; }
          const arr = [];
          for (let i = 0; i < n; i++) {
            yield { type: 'ask', text: `Enter element at index ${i} (must be sorted): `, inputKey: `val_${i}` };
            const v = parseInt(inputs[`val_${i}`]);
            if (isNaN(v)) { yield { type: 'error', text: 'Invalid input.' }; return; }
            arr.push(v);
          }
          yield { type: 'ask', text: 'Enter search key: ', inputKey: 'key' };
          const search = parseInt(inputs['key']);
          if (isNaN(search)) { yield { type: 'error', text: 'Invalid search key.' }; return; }
          
          let low = 0, high = n - 1;
          let found = false;
          while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === search) {
              yield { type: 'out', text: String(mid) };
              found = true;
              break;
            } else if (arr[mid] > search) {
              high = mid - 1;
            } else if (arr[mid] < search) {
              low = mid + 1;
            }
          }
          if (!found) {
            yield { type: 'out', text: 'Not found' };
          }
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }
    ]
  };
