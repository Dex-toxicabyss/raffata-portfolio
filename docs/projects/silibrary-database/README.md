# SiLibrary — Digital Library Database

SiLibrary is an academic digital-library information system designed as a relational database project. The model covers catalog data, members, staff, lending, returns, and late-payment penalties.

## Project snapshot

| Item | Detail |
| --- | --- |
| Context | Academic team project — Database Systems course |
| Stack | MySQL Workbench / relational database design |
| Scope | ERD, relational model, lending and return relationships |
| Data model | 8 primary entities with 1:1, 1:N, and M:N relationships |
| Status | Documentation-only database project note |

## System model

The reported model includes `Kategori`, `Penulis`, `Buku`, `Anggota`, `Petugas`, `Peminjaman`, `Pengembalian`, and `Denda`. A book-to-author many-to-many relationship is represented through the `Buku_Penulis` junction table. The lending model connects members and staff to borrowing transactions, while returns and penalties extend the borrowing flow.

## Raffata's contribution

Raffata contributed to the Entity Relationship Diagram, the relational model, and the project documentation for Chapters 1 and 2. His work focused on defining entities and attributes, translating relationships into relational form, documenting cardinality, and clarifying the business rules behind lending and returns.

## Concepts practiced

- Entity Relationship Diagramming with Chen notation
- Relational model transformation
- Primary keys, foreign keys, and junction-table thinking
- Cardinality: 1:1, 1:N, and M:N
- Database documentation and business-rule communication

## Evidence

The project evidence is presented on the [Raffata portfolio](https://raffataport-rw6twnsp.manus.space). This README intentionally stays lightweight and does not duplicate the portfolio's binary ERD evidence assets.

## Code availability

This README is a documentation page inside Raffata's public portfolio repository. The original Workbench model and SQL export are outside this documentation snapshot, so no import command or MySQL version is claimed. This keeps the public README accurate about what a recruiter can inspect today.

## Notes

This is an academic database-design project. The contribution section intentionally distinguishes Raffata's ERD/model/documentation work from SQL implementation work completed by other members.
