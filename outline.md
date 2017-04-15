now maintained on github

# The End of Unsafety

The Past, Present and Future of of the Rust Programming Language.

- intro
  - hook - gray havens
    - image of gray havens
    - 'this is the gray havens, from tolkiens lord of the rings. it's
      where the elves of middle-earth go when their time in this world
      is over.'
    - animation of C sailing from middle-earth
    - 'this talk is the story of C's long journey from the
      grey havens out of middle-earth. this is a talk about the end of
      the age of C and what comes next.'
  - who we are
    - rust core team, mozilla research
    - brian anderson
      - bona-fides
    - alex crichton
      - bona-fides
  - what this talk is about
    - timeline overview
    - links at end
  - disclaimers
    - touchy subjects
    - C and C++ authors may feel afronted by some things in this talk
      - that's fine - as long the debate continues, and remains
        respectful, I am confident these problems will be solved
    - disclaimer re personal attacks on C authors
      - they are excellent engineers
        - example of excellent engineering
      - it requires excellent engineering to maintain C software
        - let's see why!
- state of computer security (1970 - 2009)
  - use some early computer security incident
  - graph of CVEs
    - graph of CVEs due to memory safety bugs
  - the introduction of java and why it is insufficient
  - graph of proportion of C software
    - use tiobe raw data
    - use debian archives
    - then overlay that graph with a 'not-the-right-tool-for-the-job' graph
  - worse is better
- the creation of rust (2009 - 2017)
  - what is rust?
  - why rust is created?
  - the origin of borrowing
    - key problem - how to maintain memory safety in a concurrent
      program without a (global) GC
    - original memory-management philosophy in Rust
      - much different!
      - garbage collected
        - @boxes
      - intent was to have isolated heaps, and thus
        employ efficient single-threaded GC strategies
        - what we ended up with was much, much different
    - baloon demo
- the state of rust (2017)
  - stackoverflow most loved language 2016/2017
  - quotes
  - performance
  - redmonk rankings
  - fuzzing results
  - not just systems programming
  - community
  - friends of rust
  - platform support
  - error messages
- the future of rust (2017 - 2020)
  - what's stopping rust from displacing C and C++?
    - performance, portability, inertia
    - computed goto, setjmp/longjmp
    - compiler target
  - rust had a huge head start
  - performance
  - tokio
  - succ
    - link: roadmap
  - what's coming up
    - need links to
- closing
  - links

# section timings

- intro - 5 minutes
- age of unsafety - 10 minutes?
- creation of rust - 10 minutes?
- rust today - 10 minutes?
- rust future - 15 minutes

- intro - 5.30
- creation - 8
- future - 13
