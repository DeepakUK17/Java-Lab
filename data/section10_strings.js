export const section10 = // ███████████████████████████████████████████
  //  SECTION 10 — STRINGS
  // ███████████████████████████████████████████
  {
    id: 'strings',
    title: 'Strings',
    icon: '📝',
    theme: { accent: '#ec4899', glow: 'rgba(236,72,153,0.18)', bg: 'rgba(236,72,153,0.08)' },
    programs: [
      {
        id: 'count-string-occurrences',
        title: 'Count String Occurrences',
        icon: '🔍',
        difficulty: 'Medium',
        tags: ['string', 'search', 'count'],
        desc: 'Given a sentence and string S, find how many times S occurs in the given sentence.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String sentence = sc.nextLine();
        String s = sc.nextLine();
        
        int count = 0;
        int idx = 0;
        while ((idx = sentence.indexOf(s, idx)) != -1) {
            count++;
            idx += s.length();
        }
        
        if (count > 0) {
            System.out.println(count);
        } else {
            System.out.println("-1");
        }
    }
}`,
        run: function*(inputs) {
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          
          yield { type: 'ask', text: 'Enter sentence: ', inputKey: 'sentence' };
          const sentence = inputs['sentence'] || '';
          
          yield { type: 'ask', text: 'Enter string to find: ', inputKey: 's' };
          const s = inputs['s'] || '';
          
          if (!s) { yield { type: 'error', text: 'Invalid string.' }; return; }
          
          let count = 0;
          let idx = 0;
          while ((idx = sentence.indexOf(s, idx)) !== -1) {
              count++;
              idx += s.length;
          }
          
          if (count > 0) {
              yield { type: 'out', text: String(count) };
          } else {
              yield { type: 'out', text: '-1' };
          }
          
          yield { type: 'success', text: '\nProcess finished with exit code 0' };
        }
      }
    ]
  };
