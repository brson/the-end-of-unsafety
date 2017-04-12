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

# Notes

- timeline
  - 1970 - 2009 = 39
  - 2009 - 2017 = 8
  - 2017
  - 2017 - 2020 - 3
  - 2020 -> 39

- links and research
  - archaea
  - https://crypto.stanford.edu/cs155/papers/cowan-vulnerability.pdf
  - https://people.eecs.berkeley.edu/~daw/papers/overruns-ndss00.pdf
  - https://groups.google.com/forum/#!msg/mozilla.dev.servo/ufJM51SF3G4/5nfMejsQd5UJ
    - roc's analysis
  - research about people who think they are good drivers causing the most accidents, etc.
    - https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect
  - curl is c
    - https://www.reddit.com/r/programming/comments/61rh9j/curl_is_c/
    - https://news.ycombinator.com/item?id=13966967
    - https://news.ycombinator.com/item?id=13966241
    - https://news.ycombinator.com/item?id=13967325
    - "The simple fact is that most of our past vulnerabilities happened because of logical mistakes in the code."
    - https://www.reddit.com/r/programming/comments/61rh9j/comment/dfgqkkq
  - https://people.eecs.berkeley.edu/~dawnsong/papers/Oakland13-SoK-CR.pdf
  - https://www.vvdveen.com/memory-errors/
  - https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project
  - https://users.rust-lang.org/t/seeking-concrete-research-on-the-security-impact-of-memory-unsafety/10115/7?u=brson
  - https://pdfs.semanticscholar.org/30b3/0b2da89e9a287f235cdec1d346de163e50c5.pdf
  - http://tekhinnovation.blogspot.com/2017/03/after-all-these-years-world-is-still.html?m=1
    - "why is the c programming language still used?"
  - https://arstechnica.com/gadgets/2017/04/samsungs-tizen-is-riddled-with-security-flaws-amateurishly-written/
  - https://en.wikipedia.org/wiki/Memory_safety
  - https://news.ycombinator.com/item?id=14090478

[This blog post about curl's reason for using C][1] led some
commenters to go through all the known curl vulnerabilities from the
past seventeen years and count [how many were directly caused by
memory safety violations][2].

23 of the 61 reported security bugs (about 38%) were caused by memory
unsafety according to this tally.

[1]: https://daniel.haxx.se/blog/2017/03/27/curl-is-c/
[2]: https://www.reddit.com/r/programming/comments/61rh9j/curl_is_c/dfgvdw0/

- get some kind of retractable thingy to demonstrate ownership live

Need alternate barrowing demo.

## credits

- gray havens http://intergalacticrobot.blogspot.com/2013_10_01_archive.html
- barbarians http://www.barnesandnoble.com/blog/sci-fi-fantasy/throwback-thursday-robert-e-howards-conan-the-barbarian-is-whats-best-in-life/

# section timings

- intro - 5 minutes
- age of unsafety - 10 minutes?
- creation of rust - 10 minutes?
- rust today - 10 minutes?
- rust future - 15 minutes

- intro - 5.30
- creation - 8
- future - 13

## todo

- fix scaling of balloon illustrations
- split future success slides
- get sticky notes
