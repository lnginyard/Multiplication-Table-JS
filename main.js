// output the header row
document.write('<span class="cell header">&times;</span>');
let i = 0;
while (i <= 10) {
  document.write('<span class="cell header">' + i + "</span>");
  i++;
}
document.write("<br>");

// TODO: Write two nested while loops to output the rest of the multiplication table
let j = 0;
while (j <= 10) {
  document.write('<span class="cell header">' + j + "</span>");
  let n = 0;
  while (n <= 10) {
    document.write('<span class="cell">' + n * j + "</span>");
    n++;
  }
  document.write("<br>");
  j++;
}
