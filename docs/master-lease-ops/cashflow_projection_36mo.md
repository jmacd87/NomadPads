# CDMX Master Lease — 36-Month Cash Flow Projection (v3 — Waitlist Model)

## Core Assumptions

| Variable | Value | Notes |
|---|---|---|
| Average master lease rent (to owner) | MXN 21,000 ($1,167)/month | Furnished unit, utilities included |
| Average sublease rent (from tenant) | MXN 30,000 ($1,667)/month | Furnished, work-ready, collected via Wise → SPEI |
| Gross spread per unit | MXN 9,000 ($500)/month | |
| Operating expenses per unit | MXN 2,000 ($111)/month | Maintenance, insurance, accounting share, turnover cleaning, consumable replacement |
| Vacancy (waitlist model) | ~2 weeks/year | Pre-matched tenants from waitlist, 2-3 day turnover gaps |
| Vacancy cost averaged monthly | MXN 700 ($39)/month | vs MXN 2,100 without waitlist |
| Net profit before tax per unit | MXN 6,300 ($350)/month | |
| Corporate ISR (30%) | MXN 1,890 ($105)/month per unit | |
| **Net profit after tax per unit** | **MXN 4,410 ($245)/month** | |
| Lease-up cost per new unit | MXN 0 ($0) | Waitlist model: tenant pre-matched before master lease signed |
| Deposit to owner (per unit) | MXN 21,000 ($1,167) | Refundable |
| Eviction reserve (per unit) | MXN 63,000 ($3,500) | 3 months rent, parked in OpCo account |
| Cash-for-keys reserve (per unit) | MXN 42,000 ($2,333) | 2 months rent |
| **Capital to add one unit** | **MXN 126,000 ($7,000)** | Deposit + eviction + C4K (no lease-up month, no furniture) |
| One-time setup (SAS + legal) | MXN 40,000 ($2,222) | Month 1 only |
| Bad tenant event | 1 at month 18, 1 at month 30 | Cash-for-keys used (MXN 42,000/$2,333) + 1 month extra vacancy each |
| Payment method | Wise (SPEI) default; Stripe link for late payments only (3.6% fee = tenant's cost) |
| Furniture | Owned by property owner, not OpCo | OpCo targets already-furnished units. Zero furniture capital. |

### Phase 2 Fallback: OpCo Furnishes (only if furnished supply exhausted)
| Variable | Value |
|---|---|
| Furniture capital per unit | MXN 55,000 ($3,056) |
| Furniture amortization | MXN 1,528 ($85)/month over 36 months |
| Owner rent (unfurnished) | MXN 18,000 ($1,000)/month |
| Net after tax per unit | MXN 5,440 ($302)/month (higher net, higher capital) |
| Capital per unit | MXN 163,000 ($9,056) |

## Conservative Scenario (Drip-Fund + Waitlist + Furnished by Owner)

Total initial injection: MXN 166,000 (~$9,222 USD) — covers setup + unit 1.
Second injection at month 13: MXN 126,000 (~$7,000 USD) — covers unit 2.
All subsequent units self-funded from OpCo profits.
Waitlist model: tenant pre-matched before each master lease is signed. Zero lease-up vacancy.
Furnished by owner: zero furniture capital.

| Month | Units | Event | Cash Out | Income | Monthly Net | OpCo Cash Balance |
|---|---|---|---|---|---|---|
| 1 | 0 | Form SAS, legal, attorney. Start both waitlists. | -40,000 ($2,222) | 0 | -40,000 (-$2,222) | -40,000 (-$2,222) |
| 2 | 0 | Build pipelines. 10 owner contacts/week + post in nomad groups. | 0 | 0 | 0 | -40,000 (-$2,222) |
| 3 | 0→1 | First match. Sign ML, tenant moves in. | -126,000 (-$7,000) | 2,205 ($123) | -123,795 (-$6,878) | -163,795 (-$9,100) |
| 4 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -159,385 (-$8,855) |
| 5 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -154,975 (-$8,610) |
| 6 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -150,565 (-$8,365) |
| 7 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -146,155 (-$8,120) |
| 8 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -141,745 (-$7,875) |
| 9 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -137,335 (-$7,630) |
| 10 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -132,925 (-$7,385) |
| 11 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -128,515 (-$7,140) |
| 12 | 1 | | 0 | 4,410 ($245) | +4,410 (+$245) | -124,105 (-$6,895) |

**End of Year 1:** 1 unit. MXN 41,895 ($2,328) earned. OpCo holds MXN 126,000 ($7,000) in reserves.

| Month | Units | Event | Cash Out | Income | Monthly Net | OpCo Cash Balance |
|---|---|---|---|---|---|---|
| 13 | 1→2 | Inject MXN 126,000 ($7,000) for unit 2. | -126,000 (-$7,000) | 4,410 ($245) | -121,590 (-$6,755) | -245,695 (-$13,650) |
| 14 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -236,875 (-$13,160) |
| 15 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -228,055 (-$12,670) |
| 16 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -219,235 (-$12,180) |
| 17 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -210,415 (-$11,690) |
| 18 | 2 | BAD TENANT: C4K + 1 month vacancy | -42,000 (-$2,333) | 4,410 ($245) | -37,590 (-$2,088) | -248,005 (-$13,778) |
| 19 | 2 | Re-tenanted from waitlist | 0 | 8,820 ($490) | +8,820 (+$490) | -239,185 (-$13,288) |
| 20 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -230,365 (-$12,798) |
| 21 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -221,545 (-$12,308) |
| 22 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -212,725 (-$11,818) |
| 23 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -203,905 (-$11,328) |
| 24 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -195,085 (-$10,838) |

**End of Year 2:** 2 units. Survived 1 bad tenant. Monthly income: MXN 8,820 ($490). Accumulated MXN 96,915 ($5,384) in profit but C4K event ate MXN 42,000. Need ~6 more months to self-fund unit 3.

| Month | Units | Event | Cash Out | Income | Monthly Net | OpCo Cash Balance |
|---|---|---|---|---|---|---|
| 25 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -186,265 (-$10,348) |
| 26 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -177,445 (-$9,858) |
| 27 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -168,625 (-$9,368) |
| 28 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -159,805 (-$8,878) |
| 29 | 2 | | 0 | 8,820 ($490) | +8,820 (+$490) | -150,985 (-$8,388) |
| 30 | 2→3 | Self-fund unit 3 from profits | -126,000 (-$7,000) | 8,820 ($490) | -117,180 (-$6,510) | -268,165 (-$14,898) |
| 31 | 3 | BAD TENANT #2: C4K + 1 month vacancy | -42,000 (-$2,333) | 8,820 ($490) | -33,180 (-$1,843) | -301,345 (-$16,741) |
| 32 | 3 | Re-tenanted | 0 | 13,230 ($735) | +13,230 (+$735) | -288,115 (-$16,006) |
| 33 | 3 | | 0 | 13,230 ($735) | +13,230 (+$735) | -274,885 (-$15,271) |
| 34 | 3 | | 0 | 13,230 ($735) | +13,230 (+$735) | -261,655 (-$14,536) |
| 35 | 3 | | 0 | 13,230 ($735) | +13,230 (+$735) | -248,425 (-$13,801) |
| 36 | 3 | | 0 | 13,230 ($735) | +13,230 (+$735) | -235,195 (-$13,066) |

### Conservative + Waitlist Summary — 36 Months

| Metric | Value |
|---|---|
| **Units at month 36** | **3** |
| **Monthly net income** | **MXN 13,230 ($735)** |
| **Annualized income at month 36** | **MXN 158,760 ($8,820)** |
| **Total capital injected** | **MXN 292,000 ($16,222)** |
| **Cash-for-keys events** | **2** (MXN 84,000/$4,667 total) |
| **Cash in reserves (still yours)** | **MXN 378,000 ($21,000)** (3 units × MXN 126,000) |
| **Months to self-fund next unit (at 3 units)** | **~10 months** |
| **Months to self-fund next unit (at 5 units)** | **~6 months** |

---

## Accelerated Scenario (Front-Load Capital + Waitlist + Furnished by Owner)

Total initial injection: MXN 544,000 (~$30,222 USD) — covers setup + 4 furnished units.
All subsequent units self-funded from OpCo profits.
Waitlist model: all tenants pre-matched. Zero lease-up vacancy.
Furnished by owner: zero furniture capital.

| Month | Units | Event | Income | OpCo Cash Balance |
|---|---|---|---|---|
| 1 | 0 | Form SAS, legal. Both waitlists active 4+ weeks. | 0 | -40,000 (-$2,222) |
| 2 | 0→2 | First 2 matches. Sign 2 master leases. | 0 | -292,000 (-$16,222) |
| 3 | 2 | Both tenants placed immediately | 8,820 ($490) | -283,180 (-$15,732) |
| 4 | 2→4 | 2 more matches. Sign 2 more master leases. | 8,820 ($490) | -526,360 (-$29,242) |
| 5 | 4 | All 4 units producing | 17,640 ($980) | -508,720 (-$28,262) |
| 6 | 4 | | 17,640 ($980) | -491,080 (-$27,282) |
| 7 | 4 | | 17,640 ($980) | -473,440 (-$26,302) |
| 8 | 4 | | 17,640 ($980) | -455,800 (-$25,322) |
| 9 | 4 | | 17,640 ($980) | -438,160 (-$24,342) |
| 10 | 4 | | 17,640 ($980) | -420,520 (-$23,362) |
| 11 | 4 | | 17,640 ($980) | -402,880 (-$22,382) |
| 12 | 4 | | 17,640 ($980) | -385,240 (-$21,402) |

**End of Year 1:** 4 units. MXN 123,480 ($6,860) earned. Monthly: MXN 17,640 ($980).

| Month | Units | Event | Income | OpCo Cash Balance |
|---|---|---|---|---|
| 13 | 4 | Accumulating toward unit 5 | 17,640 ($980) | -367,600 (-$20,422) |
| 14 | 4 | | 17,640 ($980) | -349,960 (-$19,442) |
| 15 | 4 | | 17,640 ($980) | -332,320 (-$18,462) |
| 16 | 4 | | 17,640 ($980) | -314,680 (-$17,482) |
| 17 | 4 | | 17,640 ($980) | -297,040 (-$16,502) |
| 18 | 4→5 | Self-fund unit 5. BAD TENANT: C4K + 1 month vacancy | -168,000 (-$9,333) | 13,230 ($735) | -451,810 (-$25,100) |
| 19 | 5 | Re-tenanted from waitlist | 22,050 ($1,225) | -429,760 (-$23,876) |
| 20 | 5 | | 22,050 ($1,225) | -407,710 (-$22,651) |
| 21 | 5 | | 22,050 ($1,225) | -385,660 (-$21,426) |
| 22 | 5 | | 22,050 ($1,225) | -363,610 (-$20,201) |
| 23 | 5→6 | Self-fund unit 6 | -126,000 (-$7,000) | 22,050 ($1,225) | -467,560 (-$25,975) |
| 24 | 6 | | 26,460 ($1,470) | -441,100 (-$24,506) |

**End of Year 2:** 6 units. Monthly: MXN 26,460 ($1,470). Survived 1 bad tenant.

| Month | Units | Event | Income | OpCo Cash Balance |
|---|---|---|---|---|
| 25 | 6 | | 26,460 ($1,470) | -414,640 (-$23,036) |
| 26 | 6 | | 26,460 ($1,470) | -388,180 (-$21,566) |
| 27 | 6 | | 26,460 ($1,470) | -361,720 (-$20,096) |
| 28 | 6→7 | Self-fund unit 7 | -126,000 (-$7,000) | 26,460 ($1,470) | -461,260 (-$25,626) |
| 29 | 7 | | 30,870 ($1,715) | -430,390 (-$23,911) |
| 30 | 7 | BAD TENANT #2: C4K + 1 month vacancy | -42,000 (-$2,333) | 26,460 ($1,470) | -445,930 (-$24,774) |
| 31 | 7 | Re-tenanted | 30,870 ($1,715) | -415,060 (-$23,059) |
| 32 | 7→8 | Self-fund unit 8 | -126,000 (-$7,000) | 30,870 ($1,715) | -510,190 (-$28,344) |
| 33 | 8 | | 35,280 ($1,960) | -474,910 (-$26,384) |
| 34 | 8 | | 35,280 ($1,960) | -439,630 (-$24,424) |
| 35 | 8 | | 35,280 ($1,960) | -404,350 (-$22,464) |
| 36 | 8 | | 35,280 ($1,960) | -369,070 (-$20,504) |

### Accelerated + Waitlist Summary — 36 Months

| Metric | Value |
|---|---|
| **Units at month 36** | **8** |
| **Monthly net income** | **MXN 35,280 ($1,960)** |
| **Annualized income at month 36** | **MXN 423,360 ($23,520)** |
| **Total capital injected** | **MXN 544,000 ($30,222)** |
| **Cash-for-keys events** | **2** (MXN 84,000/$4,667 total) |
| **Cash in reserves (still yours)** | **MXN 1,008,000 ($56,000)** (8 units × MXN 126,000) |
| **Months to self-fund next unit (at 8 units)** | **~4 months** |

---

## Growth Curve Comparison (Waitlist Model, Furnished by Owner)

```
Conservative (drip-fund, MXN 292K/$16.2K injected):
Month  1   6   12   18   24   30   36   42   48
Units  0   1    1    2    2    3    3    5    6
Net/mo 0  4.4  4.4  8.8  8.8  13.2 13.2 22.1 26.5K MXN
       0  $245 $245 $490 $490 $735 $735 $1.2K $1.5K USD

Accelerated (MXN 544K/$30.2K injected):
Month  1   6   12   18   24   30   36   42   48
Units  0   4    4    5    6    7    8    10   12
Net/mo 0  17.6 17.6 22.1 26.5 30.9 35.3 44.1 52.9K MXN
       0  $980 $980 $1.2K $1.5K $1.7K $2.0K $2.5K $2.9K USD
```

**Month 48 (Year 4) projections:**

| Scenario | Units | Monthly Net | Annual Net |
|---|---|---|---|
| Conservative + Waitlist | 6 | MXN 26,460 ($1,470) | MXN 317,520 ($17,640) |
| Accelerated + Waitlist | 12 | MXN 52,920 ($2,940) | MXN 635,040 ($35,280) |

---

## Sensitivity Analysis

### What If the Spread Is Only MXN 7,000 ($389)?

| Metric | MXN 9K ($500) spread | MXN 7K ($389) spread |
|---|---|---|
| Net after tax per unit (waitlist) | MXN 4,410 ($245) | MXN 3,010 ($167) |
| Monthly income at 8 units | MXN 35,280 ($1,960) | MXN 24,080 ($1,338) |
| Months to self-fund next unit (8 units) | 4 | 5 |
| Still viable? | Yes | Marginal — below MXN 3.5K threshold |

### What If We Get MXN 12,000 ($667) Spread?

| Metric | MXN 9K ($500) spread | MXN 12K ($667) spread |
|---|---|---|
| Net after tax per unit (waitlist) | MXN 4,410 ($245) | MXN 6,510 ($362) |
| Monthly income at 8 units | MXN 35,280 ($1,960) | MXN 52,080 ($2,893) |
| Months to self-fund next unit (8 units) | 4 | 2 |
| Annualized at 8 units | MXN 423,360 ($23,520) | MXN 624,960 ($34,720) |

### What If Bad Tenants Are More Frequent?

| Metric | 1 per 18 months | 1 per 12 months | 1 per 6 months |
|---|---|---|---|
| Annual C4K cost (at 8 units) | MXN 48,000 | MXN 72,000 | MXN 144,000 |
| % of annual revenue eaten | 3% | 5% | 10% |
| Model survives? | Easily | Yes | Barely — screening has failed |

If you're hitting 1 bad tenant every 6 months, the screening system is broken and you should stop scaling until you fix it.

### What If Some Units Require Rehab?

Rehab units have higher upfront capital but potentially higher spread (lower owner rent negotiated in exchange for OpCo fixing the unit). See `critical_path_new_unit.md` → Rehab Investment Case Evaluation for the full framework. Key thresholds:

| Metric | Threshold |
|---|---|
| Rehab payback period | ≤ 12 months (≤ 6 preferred) |
| Minimum lease term | ≥ 3× payback period |
| Waitlist demand confidence | MODERATE or HIGH |
| Portfolio CAR after rehab capital | Still < 60% |

Example: MXN 30K rehab drops owner rent from MXN 18K to MXN 15K (Option C) = MXN 3K/month additional spread. Payback: 10 months. With a 3-year lease, you get 26 months of improved spread after payback. Net gain: MXN 78K over the lease term on a MXN 30K investment.

---

## Bottom Line

| Scenario | Month 36 Units | Monthly Net | Annual Net | Capital Injected |
|---|---|---|---|---|
| Conservative + Waitlist | 3 | MXN 13,230 ($735) | MXN 158,760 ($8,820) | MXN 292,000 ($16,222) |
| **Accelerated + Waitlist** | **8** | **MXN 35,280 ($1,960)** | **MXN 423,360 ($23,520)** | **MXN 544,000 ($30,222)** |

All scenarios assume: furnished by owner (zero furniture capital), waitlist model (near-zero vacancy), MXN 9,000 ($500) gross spread per unit, 2 bad tenant events over 36 months.

The waitlist model is baked into all projections. It costs nothing to build, eliminates the biggest source of wasted capital (vacancy), and turns supply acquisition from a bottleneck into a matchmaking exercise. Start both waitlists on day 1 — before the SAS is even formed.

The binding constraint is not capital. It's finding owners of **furnished** units willing to sign master leases with sublease authorization. Unfurnished owners are not rejected — they're directed to our furniture partner and held in the warm pipeline until ready.
