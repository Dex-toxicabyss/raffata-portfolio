# SiLibrary — Digital Library Database

SiLibrary is an academic digital-library information system designed as a relational database project. The model covers catalog data, members, staff, lending, returns, and late-payment penalties.

## Project snapshot

| Item | Detail |
| --- | --- |
| Context | Academic team project — Database Systems course |
| Stack | MySQL 8 / relational database design |
| Design focus | ERD, relational model, lending and return relationships |
| Public artifact | [Importable SQL repository](https://github.com/Dex-toxicabyss/silibrary-database) |

## System model

The course report describes `Kategori`, `Penulis`, `Buku`, `Anggota`, `Petugas`, `Peminjaman`, `Pengembalian`, and `Denda`. A book-to-author many-to-many relationship is represented through the `Buku_Penulis` junction table. The lending model connects members and staff to borrowing transactions, while returns and penalties extend the borrowing flow.

## Raffata's contribution

Raffata contributed to the Entity Relationship Diagram, the relational model, and the project documentation for Chapters 1 and 2. His work focused on defining entities and attributes, translating relationships into relational form, documenting cardinality, and clarifying the business rules behind lending and returns.

## What a reviewer can inspect

The dedicated repository provides a runnable, course-aligned MySQL implementation with schema, seed data, stored procedures, triggers, demo queries, and example access-control statements. Because the original export was unavailable, that implementation is presented honestly as a reconstruction grounded in the course report; it does not rewrite the project’s team contribution record.

## Notes

This is an academic database-design project. The contribution section intentionally distinguishes Raffata's ERD/model/documentation work from implementation work originally completed by other team members.
