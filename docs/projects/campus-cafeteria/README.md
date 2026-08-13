# Campus Cafeteria System — Lab OOP Week 14

A runnable Java console implementation of the Week 14 guided Object-Oriented Programming lab. The system models a campus cafeteria with menu products, transactions, stock checks, food-discount rules, and controlled failure scenarios.

## Project snapshot

| Item | Detail |
| --- | --- |
| Context | Guided PBO lab — Week 14 |
| Year | 2026 |
| Stack | Java, BlueJ-compatible default package |
| Focus | Abstraction, interface, inheritance, polymorphism, `ArrayList`, and custom exceptions |
| Public artifact | [Source repository](https://github.com/Dex-toxicabyss/campus-cafeteria-system) |

## What it demonstrates

`Produk` is an abstract base class; `Makanan` and `Minuman` provide subtype behavior; and `Makanan` implements the `Diskonable` contract. `Transaksi` stores products and quantities in paired `ArrayList`s, calculates post-discount totals, reduces stock, and prints a receipt. The project also demonstrates specific catch, multi-catch, parent-class catch, and `finally` behavior using a custom exception hierarchy.

## What a reviewer can inspect

The source repository includes the runnable Java code, a class diagram, a BlueJ guide, requirement traceability, and testing notes. The README keeps the original course structure visible instead of adding framework layers that would make the lab harder to assess.

## Notes

The original source file was unavailable. The public implementation is a course-aligned reconstruction based on the supplied Week 14 brief, not a claim that it is the exact historical submission.
