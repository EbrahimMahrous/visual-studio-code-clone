export interface IFile {
  id: string;
  name: string;
  isFolder: boolean;
  children?: IFile[];
  content?: string;
}

// ** recursion

// ** 5 => 5 * 4 * 3 * 2 * 1 => 125 ==> recursion function

// function factorial(n: number) {
//   // ** base case
//   if (n <= 0) return 1;

//   return n * factorial(n - 1);
// }

// console.log(factorial(5));
