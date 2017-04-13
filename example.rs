fn main() {
    let b = Balloon::new();
    examine_balloon(b);
    // accessing b here is a compilation error
    println!("still have my balloon? {}", b);
}

fn examine_balloon(b: Balloon) {
    println!("this balloon looks like {}", b);
    // b is destroyed when the function exits
}

fn main() {
    let b = Balloon::new();
    examine_balloon(&b);
    println!("still have my balloon! {}", b);
    // b is destroyed when the function exits
}

fn examine_balloon(b: &Balloon) {
    println!("this balloon looks like {}", b);
}

fn main() {
    let mut b = Balloon::new();
    modify_balloon(&mut b);
    println!("my balloon is happy! {}", b);
}

fn modify_balloon(b: &mut Balloon) {
    b.draw(Drawing::HappyFace);
}
