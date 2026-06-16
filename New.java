import java.util.*;
public class New {
    public static void main(String[] args ){
        Scanner s = new Scanner(System.in);
// // -----------------------------------Print 1 to N---------------------------------------------------------------

//         System.out.println("\n\t------Print 1 to N------");
//         System.out.print("Enter N value:");
//         int N= s.nextInt();
//         for(int i=1;i<N+1;i++){
//             System.out.print(i + " ");
//         }

// // -----------------------------------Sum of N Number---------------------------------------------------------------

//         System.out.println("\n\n\n\t------Sum of N Number------");
//         System.out.print("Enter N value:");
//         int N1= s.nextInt();
//         int sum=0;
//         for (int j=0;j<N1+1;j++){
//             sum+=j;
//         }
//         System.out.println("Sum = "+sum);

// // ------------------------------------Multiplication Table--------------------------------------------------------------

//         System.out.println("\n\n\n\t------Multiplication Table------");
//         System.out.print("Enter which table to print:");
//         int table= s.nextInt();
//         System.out.print("Enter where to stop:");
//         int stop= s.nextInt();
//         for (int k=1 ; k<stop+1 ; k++){
//             System.out.println(table+"*"+k+"="+k*table);
//         }

// // -------------------------------------Factorial-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Factorial------");
//         System.out.print("Enter number to find Factorial:");
//         int f= s.nextInt();
//         int fact=1;
//         for(int l=1 ; l<f+1 ; l++){
//             fact*=l;
//         }
//         System.out.println("Factorial = "+fact);

// // -------------------------------------Reverse Number-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Reverse Number------");
//         System.out.print("Enter number to Reverse:");
//         int r= s.nextInt();
//         while(r>0){
//             System.out.print(r%10);
//             r-=r%10; r/=10;
//         }

// // -------------------------------------Count Digites-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Count digites------");
//         System.out.print("Enter number to Count:");
//         int c= s.nextInt();
//         int count=0;
//         while(c>0){
//             c-=c%10; c/=10;
//             count+=1;
//         }
//         System.out.println("Count = "+count);

// // -------------------------------------Sum of Digites-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Sum of digites------");
//         System.out.print("Enter number to Sum:");
//         int su= s.nextInt();
//         int sum2=0;
//         while(su>0){
//             sum2+=su%10;
//             su-=su%10; su/=10;
//         }
//         System.out.println("Sum = "+sum2);

// // -------------------------------------Palindrome-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Palindrome------");
//         System.out.print("Enter number to Check Palindrome:");
//         int p1= s.nextInt();
//         int p=p1;
//         int rev =0;
//         while(p>0){
//             rev = rev * 10 + (p % 10);
//             p-=p%10; p/=10;
//         }
//         if (rev == p1){
//             System.out.println("Palindrome");            
//         }else{
//             System.out.println("Non Palindrome");
//         }

// // -------------------------------------Fibonacci Series-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Fibonacci Series------");
//         System.out.print("Enter number to stop:");
//         int fstop = s.nextInt();
//         int num1 = 0;
//         int num2 = 1;
//         int next =0;
//         for (int m =0 ; m <fstop+1 ; m++){
//             System.out.print(num1 + " ");
//             next=num1+num2;
//             num1=num2;num2=next;
//         }

// // -------------------------------------Prime Number-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Prime Number------");
//         System.out.print("Enter number to Check:");
//         int prime = s.nextInt();
//         int cnt =0 ;
//         for (int m = 1 ; m < prime+1 ; m++){
//             if (prime%m ==0 ){
//                 cnt+=1;
//             }
//         }
//         if (cnt <3 ){
//             System.out.println("Prime");
//         }else{
//             System.out.println("Non Prime");
//         }

// // -------------------------------------Strong Number-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Strong Number------");
//         System.out.print("Enter number to Check:");
//         int strong = s.nextInt();
//         int st=strong;
//         int fnl=0;
//         int temp=0;
//         int facty=1;
//         while (strong>0) {
//             temp=strong%10;
//             strong-=strong%10; strong/=10;
//             facty=1;
//             for (int n=1; n < temp+1; n++){
//                 facty*= n;
//             }
//             fnl+=facty;
//         }
//         if ( fnl == st){
//             System.out.println("Strong Number");
//         }else{
//             System.out.println(" Non Strong Number");
//         }

// // -------------------------------------Amstrong Number-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Amstrong Number------");
//         System.out.print("Enter number to Check:");
//         int Amstrong = s.nextInt();
//         int ams=Amstrong;
//         int county=0;
//         int as=0;
//         while(Amstrong>0){
//             Amstrong-=Amstrong%10; Amstrong/=10;
//             county+=1;
//         }
//         Amstrong=ams;
//         while (Amstrong >0) {
//             int tem=Amstrong%10;
//             int pw=tem;
//             for (int z=0; z<county-1;z++){
//                 pw=pw*tem;
//             }
//             as+=pw;
//             Amstrong-=Amstrong%10; Amstrong/=10;
//         }
//         if (ams == as){
//             System.out.println("Amstrong Number");
//         }else{
//             System.out.println("Non Amstrong Number");
//         }

// // -------------------------------------Perfect Number-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Perfect Number------");
//         System.out.print("Enter number to Check:");
//         int perfect = s.nextInt();
//         int sump =0 ;
//         for (int y = 1 ; y < perfect ; y++){
//             if (perfect%y ==0 ){
//                 sump+=y;
//             }
//         }
//         if (perfect==sump ){
//             System.out.println("Perfect Number");
//         }else{
//             System.out.println("Non Perfect Number");
//         }    

// // -------------------------------------Largest Digit-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Largest Digit------");
//         System.out.print("Enter number to find Largest Digit:");
//         int ld = s.nextInt();
//         int largest = 0;
//         while (ld > 0) {
//             int digit = ld % 10;
//             if (digit > largest) {
//                 largest = digit;
//             }
//             ld -= ld % 10; ld /= 10;
//         }
//         System.out.println("Largest Digit = " + largest);

// // -------------------------------------Smallest Digit-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Smallest Digit------");
//         System.out.print("Enter number to find Smallest Digit:");
//         int sd = s.nextInt();
//         int smallest = 9;
//         while (sd > 0) {
//             int digit = sd % 10;
//             if (digit < smallest) {
//                 smallest = digit;
//             }
//             sd -= sd % 10; sd /= 10;
//         }
//         System.out.println("Smallest Digit = " + smallest);

// // -------------------------------------Count Even and Odd Digits-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Count Even and Odd Digits------");
//         System.out.print("Enter number to Count Even/Odd Digits:");
//         int eo = s.nextInt();
//         int evenCount = 0;
//         int oddCount = 0;
//         while (eo > 0) {
//             int digit = eo % 10;
//             if (digit % 2 == 0) {
//                 evenCount++;
//             } else {
//                 oddCount++;
//             }
//             eo -= eo % 10; eo /= 10;
//         }
//         System.out.println("Even Digits Count = " + evenCount);
//         System.out.println("Odd Digits Count  = " + oddCount);

// // -------------------------------------Print Digits Greater Than 5-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Print Digits Greater Than 5------");
//         System.out.print("Enter number to Print Digits > 5:");
//         int gt = s.nextInt();
//         System.out.print("Digits greater than 5: ");
//         while (gt > 0) {
//             int digit = gt % 10;
//             if (digit > 5) {
//                 System.out.print(digit + " ");
//             }
//             gt -= gt % 10; gt /= 10;
//         }

// // -------------------------------------Check if Number Contains Zero-------------------------------------------------------------

//         System.out.println("\n\n\n\t------Check if Number Contains Zero------");
//         System.out.print("Enter number to Check for Zero:");
//         int cz = s.nextInt();
//         boolean hasZero = false;
//         int czTemp = cz;
//         while (czTemp > 0) {
//             if (czTemp % 10 == 0) {
//                 hasZero = true;
//             }
//             czTemp -= czTemp % 10; czTemp /= 10;
//         }
//         if (hasZero) {
//             System.out.println(cz + " Contains Zero");
//         } else {
//             System.out.println(cz + " Does Not Contain Zero");
//         }

// -------------------------------------Check if Number Contains Zero-------------------------------------------------------------
/* 

* * * *
* * * *
* * * *

*/

        // for (int pt = 0 ; pt<4 ; pt++){
        //     for (int pt1 = 0; pt1<4 ;pt1++){
        //         System.out.print("* ");
        //     }
        //     System.out.println();
        // }

/* 

* 
* * 
* * * 
* * * *

*/
        
    for (int pt = 0 ; pt<4 ; pt++){
            for (int pt1 = 0; pt1<pt+1 ;pt1++){
                System.out.print("* ");
            }
            System.out.println();
        }

        s.close();
    }
}
