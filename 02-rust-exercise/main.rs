fn main() {
    let test = "Hello, World KENNeTH ";
    // Get chars.
    let values = test.chars();
    let mut count = 0;
    let vowels = "aeoiuAEIOU";
    
    // Use for-in loop to print all chars.
    for c in values {
        println!("CHARACTER: {}", c);
        if vowels.contains(c) {
            count = count + 1;
        }
    }
    println!("Count {}", count);

}
