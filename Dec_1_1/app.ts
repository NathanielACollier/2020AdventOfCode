import { utility } from "../common/utility";

/*
Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?


+ here is analysis from Colin Fray
   + [](https://colinfay.me/aoc-2020-01/)

*/


async function main(){

    // run through the input
    let entries = (await utility.readInput('./dec_1_1/input.txt')).map((val)=>{
        // each line has a number
        return +val; // so convert the string to a number
    });


    let allCombinations = entries.flatMap(n => entries.map(n2 => [n, n2]));
    
    let winningRow = allCombinations
                                .filter(r=> r[0] + r[1] == 2020)
                                [0];
    
    let result = winningRow[0] * winningRow[1];

    console.log(`
        -----------------
        Num:\t\t${winningRow[0]}
        Compare:\t\t${winningRow[1]}
        -----------------
        Times:\t\t${result}
    `);


}



main();

