# Guide: How to Add New Java Programs

This document is the master instruction file for adding new Java programs to the `JavaLab` Code Explorer website.
**AI Assistant:** When the user asks you to add a new program, READ this guide, locate the appropriate data module in the `data/` directory, and follow the exact data structure below.

## Directory Structure
The 7200-line `app.js` file has been split into modular ES Modules inside the `data/` folder:
- `data/section1_inputoutput.js`
- `data/section2_operators.js`
- `data/section3_looping.js`
- `data/section4_decisionmaking.js`
- `data/section5_scenariobased.js`
- `data/section6_numberlogic.js`
- `data/section7_patterns.js`
- `data/section8_functions.js`

You should **ONLY** edit the file that corresponds to the category of the new program. Do NOT edit `app.js`.

## Data Structure format
Each file exports a JS object. Inside that object is a `programs` array. When adding a new program, you must push a new object to the *end* of that array.

### Template Object:
```javascript
      {
        id: 'unique-id-like-kebab-case',
        title: 'Title of the Program',
        icon: '☕', // Use a relevant emoji
        difficulty: 'Easy', // 'Easy', 'Medium', or 'Hard'
        tags: ['tag1', 'tag2'], // Relevant searchable tags
        desc: 'A short, 1-2 sentence description of what the program does.',
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        // ... Java Code ...
    }
}`,
        run: function*(inputs) {
          // Standard Build Output
          yield { type: 'system', text: 'Compiling Main.java...' };
          yield { type: 'system', text: 'Build successful ✓' };
          yield { type: 'out', text: '' };
          
          // --- SIMULATED EXECUTION ---
          // Use 'ask' for input. The key will be saved in inputs['key']
          yield { type: 'ask', text: 'Enter a value: ', inputKey: 'val' };
          const v = inputs['val'];
          
          // Optional validation
          if (!v) { yield { type: 'error', text: 'Invalid input.' }; return; }
          
          // Produce output based on Java logic
          yield { type: 'out', text: \`Output is: \${v}\` };
          
          // Always end with success
          yield { type: 'success', text: '\\nProcess finished with exit code 0' };
        }
      }
```

### Critical Rules for the AI
1. **Generator Function (`function*(inputs)`):** The `run` property MUST be a generator function. It yields step-by-step instructions for the website's custom terminal simulator.
2. **Yield Types:**
   - `type: 'system'` (For gray build messages)
   - `type: 'out'` (For standard printing)
   - `type: 'error'` (For exceptions or bad input)
   - `type: 'ask'` (To prompt the user. You MUST provide an `inputKey`)
   - `type: 'success'` (For the exit code 0 message)
3. **Simulation Accuracy:** The JS generator function must replicate exactly what the Java code does. If the Java code does `num1 + num2`, the JS code in the `run` generator must also parse them and yield the sum!
4. **Export formatting:** Be careful of syntax! Make sure all commas match when inserting a new program into the array.

## Workflow for adding a program
1. Analyze the user's provided Java code or text.
2. Figure out which Section it belongs to (e.g., Looping -> `data/section3_looping.js`).
3. Construct the JSON-like object with the generator function.
4. Use a `replace_file_content` tool (or similar) to insert it at the end of the `programs` array in that file.
