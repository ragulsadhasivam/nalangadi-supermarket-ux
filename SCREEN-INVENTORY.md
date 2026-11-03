# Screen inventory

163 screens, 32 flows. Generated from SCREENS; "Changed" means the screen was rebuilt from DATA in Phase 1.

| ID | Flow | State | Title | New / Changed |
|---|---|---|---|---|
| F1-1 | F1 Sales billing | first | Empty bill — ready to scan | Changed |
| F1-2 | F1 Sales billing | filled | Bill with weighed and packed items | Changed |
| F1-3 | F1 Sales billing | error | Negative — barcode not found | Changed |
| F1-4 | F1 Sales billing | error | Negative — expired batch blocked | Changed |
| F1-5 | F1 Sales billing | filled | Split payment — cash then UPI | Changed |
| F1-6 | F1 Sales billing | error | Negative — UPI payment timed out | Changed |
| F1-7 | F1 Sales billing | success | Success — tax invoice printed | Changed |
| F1-8 | F1 Sales billing | filled | Bill in Tamil | New |
| F1-9 | F1 Sales billing | filled | Edit a line — change quantity, void a line with a reason | New |
| F1-10 | F1 Sales billing | error | Clear bill — confirmation | New |
| F2-1 | F2 Sales return | first | Find the bill — nothing searched yet | Changed |
| F2-2 | F2 Sales return | filled | Bill found — choose items (previous-month bill) | Changed |
| F2-3 | F2 Sales return | error | Negative — bill not found | Changed |
| F2-4 | F2 Sales return | error | Negative — blocked items and manager approval | Changed |
| F2-5 | F2 Sales return | filled | Refund method and credit note preview | Changed |
| F2-6 | F2 Sales return | success | Success — credit note issued | Changed |
| F2-7 | F2 Sales return | filled | Manager approval — 27-day-old bill | New |
| F3-1 | F3 Day start | first | First time — counter not set up | Changed |
| F3-2 | F3 Day start | filled | Count opening float | Changed |
| F3-3 | F3 Day start | error | Negative — float differs from yesterday’s close | Changed |
| F3-4 | F3 Day start | success | Success — shift open, first bill ready | New |
| F4-1 | F4 End of day (counter) | first | No sales on this counter today | Changed |
| F4-2 | F4 End of day (counter) | filled | Count cash and tally tenders | Changed |
| F4-3 | F4 End of day (counter) | error | Negative — cash variance above tolerance | Changed |
| F4-4 | F4 End of day (counter) | success | Success — counter closed, Z report printed | Changed |
| F5-1 | F5 Purchase | first | No purchase orders yet | Changed |
| F5-2 | F5 Purchase | filled | New purchase order with suggested quantities | Changed |
| F5-3 | F5 Purchase | error | Negative — credit limit, GSTIN and price checks fail | Changed |
| F5-4 | F5 Purchase | filled | Receiving goods — batch and expiry captured | Changed |
| F5-5 | F5 Purchase | error | Negative — short supply, price difference, short shelf life | Changed |
| F5-6 | F5 Purchase | filled | Supplier invoice with GST and 3-way match | Changed |
| F5-7 | F5 Purchase | success | Success — purchase posted | Changed |
| F6-1 | F6 Purchase return | first | No purchase returns yet | Changed |
| F6-2 | F6 Purchase return | filled | Choose batches to return | Changed |
| F6-3 | F6 Purchase return | error | Negative — batch sold out, window passed, already adjusted | Changed |
| F6-4 | F6 Purchase return | filled | Debit note preview with GST | Changed |
| F6-5 | F6 Purchase return | success | Success — debit note sent | Changed |
| F7-1 | F7 Purchase agency details | first | No agencies yet | Changed |
| F7-2 | F7 Purchase agency details | filled | Add agency — filled form | Changed |
| F7-3 | F7 Purchase agency details | error | Negative — validation errors on save | Changed |
| F7-4 | F7 Purchase agency details | filled | Agency detail — profile, reps, ledger | Changed |
| F7-5 | F7 Purchase agency details | success | Success — agency saved | New |
| F8-1 | F8 Stock upload & scan entry | first | First time — download the template | Changed |
| F8-2 | F8 Stock upload & scan entry | filled | Upload and map columns | Changed |
| F8-3 | F8 Stock upload & scan entry | error | Negative — 52 rows have errors | Changed |
| F8-4 | F8 Stock upload & scan entry | success | Success — import summary | Changed |
| F8-5 | F8 Stock upload & scan entry | first | Scan entry — nothing scanned yet | Changed |
| F8-6 | F8 Stock upload & scan entry | filled | Scan entry — item scanned, enter quantity, price and GST | Changed |
| F8-7 | F8 Stock upload & scan entry | error | Negative — QR or barcode not found | Changed |
| F8-8 | F8 Stock upload & scan entry | error | Negative — expiry, MRP and GST checks fail | Changed |
| F8-9 | F8 Stock upload & scan entry | success | Success — stock posted | Changed |
| F8-10 | F8 Stock upload & scan entry | error | Negative — invoice already posted | New |
| F9-1 | F9 Own products & QR labels | first | No own products yet | Changed |
| F9-2 | F9 Own products & QR labels | filled | Create own product | Changed |
| F9-3 | F9 Own products & QR labels | filled | Label designer — QR and legal fields | Changed |
| F9-4 | F9 Own products & QR labels | filled | Print queue — batches ready | Changed |
| F9-5 | F9 Own products & QR labels | error | Negative — printer offline and missing label data | Changed |
| F9-6 | F9 Own products & QR labels | success | Success — labels printed and linked to stock | Changed |
| F10-1 | F10 Price fixing | first | First time — no prices set | Changed |
| F10-2 | F10 Price fixing | filled | Price fixing table with margin and rule panel | Changed |
| F10-3 | F10 Price fixing | error | Negative — above MRP, below cost, below margin floor | Changed |
| F10-4 | F10 Price fixing | filled | Price approvals — manager view | Changed |
| F10-5 | F10 Price fixing | success | Success — prices published and labels queued | Changed |
| F11-1 | F11 Day collections (store) | first | First day — no counter has closed yet | Changed |
| F11-2 | F11 Day collections (store) | filled | All counters closed — store tally | Changed |
| F11-3 | F11 Day collections (store) | error | Negative — open counter and unresolved variance block closing | Changed |
| F11-4 | F11 Day collections (store) | success | Success — store day closed and locked | Changed |
| F12-1 | F12 Month collection report | first | First days of a month — report still building | Changed |
| F12-2 | F12 Month collection report | filled | Monthly collections, tender mix and GST summary | Changed |
| F12-3 | F12 Month collection report | error | Negative — month cannot be finalised | Changed |
| F12-4 | F12 Month collection report | success | Success — draft exported and shared with the CA | Changed |
| F13-1 | F13 GST setup | first | First-time GST setup wizard | Changed |
| F13-2 | F13 GST setup | filled | Rate master with effective dates | Changed |
| F13-3 | F13 GST setup | error | Negative — GSTIN invalid and scheme not allowed | New |
| F13-4 | F13 GST setup | success | Success — tax setup complete | New |
| F14-1 | F14 Login & shift handover | first | First login — set a 4-digit PIN | New |
| F14-2 | F14 Login & shift handover | filled | PIN login and switch cashier | New |
| F14-3 | F14 Login & shift handover | filled | Switch cashier mid-shift — count the drawer | New |
| F14-4 | F14 Login & shift handover | error | Negative — wrong PIN three times locks sign-in | New |
| F14-5 | F14 Login & shift handover | error | Negative — cashier tries a manager-only action | New |
| F14-6 | F14 Login & shift handover | success | Success — handover complete | New |
| F15-1 | F15 Held bills | first | No held bills | New |
| F15-2 | F15 Held bills | filled | Held bills — resume or clear | New |
| F15-3 | F15 Held bills | error | Negative — price changed and a batch expired while held | New |
| F15-4 | F15 Held bills | success | Success — held bill resumed into billing | New |
| F16-1 | F16 Void & reprint | first | Find a past bill | New |
| F16-2 | F16 Void & reprint | filled | Reprint as DUPLICATE | New |
| F16-3 | F16 Void & reprint | error | Negative — void after day close is blocked | New |
| F16-4 | F16 Void & reprint | error | Negative — void needs a manager PIN | New |
| F16-5 | F16 Void & reprint | success | Success — bill voided, stock restored | New |
| F17-1 | F17 Offline & sync | first | Network lost — billing continues | New |
| F17-2 | F17 Offline & sync | filled | Billing offline — queue and tender limits | New |
| F17-3 | F17 Offline & sync | error | Negative — sync conflicts need a decision | New |
| F17-4 | F17 Offline & sync | success | Success — all bills synced | New |
| F18-1 | F18 Customer & loyalty | first | Attach a customer by phone — not found, quick create | New |
| F18-2 | F18 Customer & loyalty | filled | Customer attached — redeem points | New |
| F18-3 | F18 Customer & loyalty | error | Negative — OTP not received | New |
| F18-4 | F18 Customer & loyalty | error | Negative — not enough points or below the minimum | New |
| F18-5 | F18 Customer & loyalty | success | Success — points earned and used, shown on the receipt | New |
| F18-6 | F18 Customer & loyalty | filled | Customer credit (khata) — limit and due | New |
| F19-1 | F19 Cash drop & petty cash | first | Drawer limit reached — time for a cash drop | New |
| F19-2 | F19 Cash drop & petty cash | filled | Cash drop with manager PIN | New |
| F19-3 | F19 Cash drop & petty cash | filled | Petty cash expense with receipt photo | New |
| F19-4 | F19 Cash drop & petty cash | error | Negative — expense above the limit | New |
| F19-5 | F19 Cash drop & petty cash | error | Negative — no receipt photo | New |
| F19-6 | F19 Cash drop & petty cash | success | Success — drop recorded and counted at day end | New |
| F20-1 | F20 B2B tax invoice | first | Ask for the buyer’s GSTIN | New |
| F20-2 | F20 B2B tax invoice | filled | GSTIN verified — buyer details on the invoice | New |
| F20-3 | F20 B2B tax invoice | error | Negative — GSTIN is not valid | New |
| F20-4 | F20 B2B tax invoice | error | Negative — buyer in another state, so IGST applies | New |
| F20-5 | F20 B2B tax invoice | success | Success — B2B invoice printed and flagged for GSTR-1 | New |
| F21-1 | F21 Item master | first | No items yet | New |
| F21-2 | F21 Item master | filled | Item list — search and filter | New |
| F21-3 | F21 Item master | filled | Item detail — batches, prices, GST history, movements | New |
| F21-4 | F21 Item master | error | Negative — duplicate barcode, missing HSN, MRP below cost | New |
| F21-5 | F21 Item master | success | Success — item saved, shelf labels queued | New |
| F22-1 | F22 Wastage & write-off | first | No wastage logged | New |
| F22-2 | F22 Wastage & write-off | filled | Log wastage by batch with reason and photo | New |
| F22-3 | F22 Wastage & write-off | error | Negative — value above the limit needs the owner; ITC flag | New |
| F22-4 | F22 Wastage & write-off | success | Success — stock reduced and value posted | New |
| F23-1 | F23 Stock count (audit) | first | Plan a stock count | New |
| F23-2 | F23 Stock count (audit) | filled | Blind count by scan | New |
| F23-3 | F23 Stock count (audit) | error | Negative — large variance needs a recount and approval | New |
| F23-4 | F23 Stock count (audit) | success | Success — adjustments posted with a variance report | New |
| F24-1 | F24 Expiry & reorder alerts | first | No alerts today | New |
| F24-2 | F24 Expiry & reorder alerts | filled | Near-expiry and low-stock lists | New |
| F24-3 | F24 Expiry & reorder alerts | error | Negative — markdown below cost needs the owner | New |
| F24-4 | F24 Expiry & reorder alerts | error | Negative — item has no reorder level | New |
| F24-5 | F24 Expiry & reorder alerts | success | Success — markdown published, PO draft created | New |
| F25-1 | F25 Agency payments | first | No dues | New |
| F25-2 | F25 Agency payments | filled | Dues by date — select, adjust debit notes and pay | New |
| F25-3 | F25 Agency payments | error | Negative — bank details changed recently | New |
| F25-4 | F25 Agency payments | error | Negative — payment is more than payable | New |
| F25-5 | F25 Agency payments | success | Success — payment recorded, advice sent, ledger updated | New |
| F26-1 | F26 Stock transfer between stores | first | No transfers yet | New |
| F26-2 | F26 Stock transfer between stores | filled | Transfer out — items, batches and challan | New |
| F26-3 | F26 Stock transfer between stores | error | Negative — not enough stock, or an expired batch | New |
| F26-4 | F26 Stock transfer between stores | error | Negative — receiving store reports a short | New |
| F26-5 | F26 Stock transfer between stores | success | Success — received, both stores updated | New |
| F27-1 | F27 Offers & promotions | first | No offers yet | New |
| F27-2 | F27 Offers & promotions | filled | Create an offer — festival price on Toor Dal | New |
| F27-3 | F27 Offers & promotions | error | Negative — overlapping offers on the same item | New |
| F27-4 | F27 Offers & promotions | error | Negative — offer price below cost or above MRP | New |
| F27-5 | F27 Offers & promotions | success | Success — offer live, bill preview | New |
| F28-1 | F28 Staff & roles | first | Only the owner exists | New |
| F28-2 | F28 Staff & roles | filled | Staff list and role permissions | New |
| F28-3 | F28 Staff & roles | error | Negative — cannot remove the last owner | New |
| F28-4 | F28 Staff & roles | error | Negative — a cashier cannot be given an over-limit refund permission | New |
| F28-5 | F28 Staff & roles | success | Success — invite sent and role updated | New |
| F29-1 | F29 Settings: counters & devices | first | No counters set up | New |
| F29-2 | F29 Settings: counters & devices | filled | Counter setup and device tests | New |
| F29-3 | F29 Settings: counters & devices | error | Negative — device test fails, with troubleshooting | New |
| F29-4 | F29 Settings: counters & devices | success | Success — all devices OK | New |
| F30-1 | F30 Dashboard | first | New store checklist | New |
| F30-2 | F30 Dashboard | filled | Today at a glance | New |
| F30-3 | F30 Dashboard | error | Negative — data is stale, a counter is offline | New |
| F31-1 | F31 Reports | first | Nothing to report yet | New |
| F31-2 | F31 Reports | filled | Sales by item and gross profit (ex-GST) | New |
| F31-3 | F31 Reports | filled | Stock valuation and GST summary for the CA | New |
| F31-4 | F31 Reports | error | Negative — period incomplete | New |
| F31-5 | F31 Reports | success | Success — exported and shared with the CA | New |
| F32-1 | F32 Audit log | filled | Audit log — who did what, when | New |
| F32-2 | F32 Audit log | error | Negative — filter returns nothing | New |

## States declared not applicable

- F30 Dashboard — success: A dashboard is a view; nothing is submitted, so there is no success state.
- F32 Audit log — first: The log is never empty: sign-ins and setup are logged from the first minute.
- F32 Audit log — success: The log is read-only, so there is nothing to submit.