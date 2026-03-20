# CDMX Master Lease Business — Full Planning Context

## Business Model
Master Lease Arbitrage with Tenant Intermediation (aka Sandwich Leasing / Executive Rentals)

**Core concept:** Master lease **furnished** apartments from CDMX owners (utilities included), sublease to foreign remote workers (US/Canada primarily) who cannot clear fiador/póliza requirements. Tenant contracts cleaning directly from third-party providers. OpCo is the sole entity — no ServCo needed for units 1-10. OpCo does NOT own furniture — target owners with already-furnished units. Unfurnished owners are directed to our furniture partner to furnish before we sign, and held in the owner remediation pipeline until complete.

## Key Participants
- **Ian** — Residente Permanente, owns property in CDMX (credibility signal), has attorney introduction, Delaware C-Corp (not used initially)
- **Joel** — Has Canadian LLC, dev team capability, based in CDMX

## Architecture (Simplified — OpCo Only)

### OpCo (Mexican SAS)
- Signs master lease with property owner
- Signs sublease with tenant
- Collects rent via SPEI bank transfer
- Handles SAT compliance (CFDIs, arrendamiento regime)
- Maintains eviction standing in CDMX courts
- Screens tenants using Nova Credit (US/Canadian credit) + income verification
- Registers leases in CDMX digital registry within 30 days
- Does NOT own furniture — targets already-furnished units. Unfurnished owners directed to furniture partner to furnish before signing.
- Does NOT provide cleaning — tenant contracts directly (Aliada or recommended cleaners)

### ServCo (Deferred — Consider at 15-20+ Units)
ServCo (US C-Corp / Canadian LLC) adds behavioral leverage but introduces transfer pricing, PE risk, and compliance overhead that doesn't justify the cost at small scale. Evaluate after validating the model.

## Financial Structure

### Tax Treatment
- OpCo (SAS) pays **30% ISR on net profit** (with full expense deductions)
- Deductible expenses: rent paid to owner, maintenance, insurance, accounting, legal, software
- After-tax profit **stays in the SAS bank account** — no distribution required
- No dividend = no personal tax event for Ian
- When dividends are eventually distributed: Mexico withholds **10%** on dividends to non-resident shareholders (effective combined rate ~37%)
- **Póliza jurídica de arrendamiento does NOT work** for foreign tourist tenants — those firms screen against Mexican credit data (Buró de Crédito, RFC, CURP) that foreign tenants don't have

### Cash Inside OpCo Can Be Used For:
- Reinvest into more units (deposits, marketing)
- Build the eviction reserve fund
- Pay OpCo operating costs (accountant, attorney, software)
- Build cash cushion
- Eventually use as down payment to purchase a property (Jackie Lange endgame)

### Risks of Cash Accumulation:
- Peso devaluation (mitigate with USD-denominated instruments at Mexican banks)
- SAT scrutiny at large scale (minor concern early on)
- Monthly provisional ISR payments and annual return required regardless

## Unit Economics (Vacancy-Adjusted, Waitlist Model, Furnished by Owner)

### Per Unit — With Waitlist Pipeline
| Line | Amount | Notes |
|---|---|---|
| Sublease income (tenant pays) | MXN 30,000 ($1,667) | Furnished, work-ready, utilities included |
| Master lease to owner (furnished, utilities included) | -MXN 21,000 (-$1,167) | Furnished units command higher owner rent |
| Gross spread | MXN 9,000 ($500) | |
| Operating expenses (maintenance, insurance, accounting) | -MXN 2,000 (-$111) | |
| Vacancy cost (2 weeks/year, waitlist model) | -MXN 700 (-$39) | vs MXN 2,100 without waitlist |
| Net profit before tax | MXN 6,300 ($350) | |
| ISR (30% corporate) | -MXN 1,890 (-$105) | |
| **Net after tax per unit** | **MXN 4,410 ($245)/month** | |

### If OpCo Furnishes Instead (Phase 2 fallback — only if furnished supply exhausted)
| Line | Amount | Notes |
|---|---|---|
| Sublease income | MXN 30,000 ($1,667) | Same tenant-facing rent |
| Master lease (unfurnished, utilities included) | -MXN 18,000 (-$1,000) | Lower owner rent |
| Gross spread | MXN 12,000 ($667) | Higher spread |
| Operating expenses | -MXN 2,000 (-$111) | |
| Furniture amortization (MXN 55K over 36 months) | -MXN 1,528 (-$85) | Bed, desk, chair, sofa, dining, kitchen, linens, housewares |
| Vacancy | -MXN 700 (-$39) | |
| Net before tax | MXN 7,772 ($432) | |
| ISR (30%) | -MXN 2,332 (-$130) | |
| **Net after tax per unit** | **MXN 5,440 ($302)/month** | Higher net but MXN 55K ($3,056) more capital + furniture risk |

### Capital Requirements
| Item | Amount | Notes |
|---|---|---|
| SAS formation + legal (one-time, combined) | MXN 40,000 ($2,222) | SAS registration, SAT, bank account, attorney reviews both contract templates |
| Security deposit to owner (1 month) | MXN 21,000 ($1,167) | Furnished unit rent; refundable |
| Lease-up month (first month rent to owner) | MXN 0-21,000 ($0-1,167) | MXN 0 if waitlist tenant pre-matched |
| Eviction reserve (3 months) | MXN 63,000 ($3,500) | 3 × MXN 21,000 |
| Cash-for-keys reserve (2 months) | MXN 42,000 ($2,333) | 2 × MXN 21,000 |
| **Total first unit (with waitlist)** | **MXN 166,000 (~$9,222 USD)** | Setup 40K + deposit 21K + eviction 63K + C4K 42K |
| **Each additional unit (with waitlist)** | **MXN 126,000 (~$7,000 USD)** | No one-time costs, no lease-up month |

Note: No furnishing capital required — OpCo targets already-furnished units. Unfurnished owners are directed to our furniture partner and held in the owner remediation pipeline until furnished. Phase 2 fallback: OpCo furnishes units directly if furnished supply is exhausted (adds MXN 55K/$3,056 capital per unit).

### Payment Collection
- OpCo collects rent via bank transfer to its Mexican CLABE number
- Foreign tenants without Mexican bank accounts pay via **Wise** (or similar) — tenant sends USD, Wise converts and deposits MXN into OpCo's account via SPEI
- OpCo issues CFDI upon receipt
- **Stripe available as late-payment tool only** — if SPEI transfer doesn't arrive by due date, send Stripe payment link. 3.6% processing fee becomes the tenant's late payment cost.

## Target Tenant Profile
- US/Canadian expats and digital nomads
- Remote workers on 3-6 month stays (tourist visa — 180 days max)
- High-income, credit-sensitive professionals
- People who value: fast internet, real desk, good bed, hot water, AC

## Product Spec ("Work-Ready Unit")
Owner provides (per master lease):
- **Furnished unit**: bed, desk, chair, sofa, dining table, kitchen appliances (fridge, stove, microwave), basic housewares (pots/pans, dishes, utensils), linens (sheets, towels), bathroom basics
- **Utilities included**: electricity, water, gas, internet (minimum [100] Mbps) with consumption cap
- If owner fails to pay utilities, OpCo can pay directly and deduct from rent

Tenant separately arranges:
- Cleaning (Aliada app or similar — OpCo provides recommendation)

If owner's unit is unfurnished:
- Owner directed to OpCo's trusted furniture partner for a standard package
- Owner goes into owner remediation pipeline until furnishing is complete
- OpCo does not sign master lease until unit is furnished to standard
- Phase 2 fallback: OpCo furnishes directly and offsets against rent (only if furnished supply exhausted)

Proof system: Videos of unit, internet speed test, shower test, AC test, furnished walkthrough

## Positioning
- NOT "cheaper than Airbnb"
- "More ASSURED than Airbnb"
- "Rent in CDMX in 24-48 hours with no guarantor"
- "Work-ready apartments for remote professionals"

## Dual Waitlist Model (Core Growth Engine)

The key insight: **don't sign a master lease until you have a pre-screened tenant ready to fill it.** Build both pipelines simultaneously, then marry supply to demand.

### Tenant Waitlist (Start Immediately — Costs Nothing)
- Create a simple landing page: "Work-ready apartments in CDMX. No fiador. No póliza. 48-hour move-in."
- Collect: name, email, WhatsApp, desired move-in date, budget, preferred neighborhood, length of stay
- Pre-screen with Nova Credit before they're even matched to a unit
- When a unit becomes available, match from the waitlist first — zero vacancy gap
- **Goal before first master lease: 20-30 pre-qualified names**

**Channels:**
- Facebook expat groups (post weekly)
- WhatsApp expat/nomad groups
- Craigslist CDMX
- Airbnb spillover (30+ day seekers looking for long-term)
- Digital nomad events (sponsor after first deal)
- SEO: "CDMX no fiador rent", "rent Mexico City without guarantor", "foreigner friendly apartments CDMX" (Joel's dev team)
- Hook: **"NO FIADOR • NO PÓLIZA • 48h MOVE-IN • WORK-READY"**

### Owner Waitlist (Start Week 1)
- Message 10 stale listings per week on Inmuebles24, Vivanuncios, FB Marketplace
- Script: "I represent a company that guarantees monthly rent for property owners. We handle everything — tenant sourcing, management, maintenance coordination. Interested in learning more?"
- Don't pitch the full master lease yet — gauge interest and collect contact info
- Track: property address, rent expectation, owner responsiveness, willingness to discuss sublease, **furnished status (Y/N/partial)**
- Prioritize already-furnished units. Unfurnished owners → introduce to furniture partner → owner remediation pipeline until complete.
- **Goal before first master lease: 5-10 interested owners (at least 3 with furnished units)**

**Supply channels:**
1. **Stale listings** (30+ days on platforms) — 2-5% conversion
2. **For-sale-to-rental conversion** — higher conversion, owner already wants liquidity
3. **Portfolio owners** (3+ units) — highest leverage, requires track record

**Owner pitch:** "I take the unit immediately, guarantee rent monthly, handle all tenant management. You get paid regardless. I just need sublease authorization — my profit is the spread."

### The Marriage
- When you have a pre-screened tenant ready to move in AND an interested owner with a suitable unit → sign the master lease → tenant moves in within days
- Zero vacancy. Zero lease-up cost. Maximum capital efficiency.
- As both waitlists grow, you can expand by matching demand surges with new supply — each new unit is pre-sold before you commit capital

### Credibility Scaling
- Units 1-3: Ian's personal credibility + existing CDMX property ownership
- Units 4-10: Track record of on-time payments → referral pipeline (Jackie Lange model)
- Units 10+: OpCo has payment history, portfolio, owner references

### Pipeline Tools (Free)
- **Google Forms** for intake (tenant + owner)
- **Google Sheets** to track both pipelines
- **WhatsApp Business** for all communication
- At 10+ units: upgrade to simple CRM (Notion, Airtable, or property management software)

## Screening Stack (OpCo's Core Competency)
- **Nova Credit** — pulls US/Canadian credit history, translates to standardized report
  - Minimum FICO: 650 (700+ preferred)
  - No bankruptcies in last 7 years
  - No active collections > $500
  - No eviction history
  - < 3 late payments in last 24 months
- **Income verification** — 3 months bank statements, pay stubs, employer verification
  - Minimum income: 3× monthly rent
  - If self-employed: 2 years tax returns + current P&L
- **Employment check** — LinkedIn cross-reference, call/email employer HR directly (verify independently, not tenant-provided number), verify remote job stability
- **Previous landlord references** — 2 previous landlords (not current), phone numbers independently verified
- **Passport + visa verification** — visa must cover full lease term + 30 day buffer
- **Fraud checks** — Google name + city, reverse image search, bank statement authenticity review

**Scoring**: Any Red = reject, no exceptions. 2+ Yellows = shorter initial term (3 months with renewal) or enhanced deposit (if hospedaje classification allows). See `critical_path_new_unit.md` for full scoring criteria.

Note: Póliza jurídica firms screen against Mexican data (Buró de Crédito, RFC, CURP) — they cannot screen foreign tourists. OpCo's parallel screening system using Nova Credit + income verification IS the product and the moat.

## Critical Legal Constraints (CDMX)

### Non-Negotiable (Chapter IV — Irrenunciable)
- Subleasing requires **explicit written authorization** (Art. 2480)
- Security deposit capped at **1 month** (Art. 2448-E) — if classified as residential
- Rent increases capped at **Banxico inflation** (Art. 2448-D) — 3.69% for 2026
- Minimum 1-year lease term (Art. 2448-C) — if classified as residential
- Lease does NOT terminate on death of landlord or tenant (Art. 2448-H)
- Tenant right of first refusal if owner sells after 5+ years (Art. 2448-J)
- **All Chapter IV provisions cannot be waived by contract** (Art. 2448)
- Lease registration required within 30 days (Art. 2448-F, 2024 reform)

### Criminal Law
- **Self-help eviction = 6-11 years prison** (Art. 238 bis Código Penal CDMX)
- Changing locks, cutting utilities, removing belongings = despojo
- Pending federal reforms could push penalties to 25 years

### Eviction Reality
- 2 months non-payment triggers special eviction action
- Oral procedure (juicio oral): 4-8 months best case
- Written procedure: 18+ months average
- Amparo can add 6-18 months
- Cash-for-keys: no legal framework but supported by Art. 2483 (convenio expreso)

### Hospedaje Distinction (KEY ATTORNEY QUESTION)
Articles 2666-2669 define **hospedaje** (lodging) as a separate legal category. If your 3-6 month furnished stays qualify as hospedaje:
- Chapter IV tenant protections **do NOT apply**
- No 1-month deposit cap
- No rent increase cap
- No 1-year minimum term
- No automatic succession on death
- **This is the #1 question for your attorney**

### Condo-Specific
- Condo assembly (75% vote) can prohibit subleasing
- Must notify condo administrator within 5 business days of any lease
- Owner is jointly and severally liable for tenant's condo obligations
- Review escritura constitutiva + reglamento de condominio BEFORE signing
- If reglamento amended to prohibit subleasing → OpCo can rescind master lease without penalty (per contract clause)

## Underwriting Standards (From Critical Path)
These financial gates must pass before committing to any new unit:
- **Minimum gross spread**: MXN 8,000/month
- **Minimum net after tax**: MXN 3,500/month
- **Maximum capital recovery period**: 24 months
- **Portfolio capital-at-risk ratio**: < 60% (total lease obligations ÷ total OpCo assets)
- **Portfolio occupancy**: ≥ 90% before adding new units
- **Cash flow positive**: ≥ 3 consecutive months before expanding
- **Reserves fully funded**: Eviction (MXN 54K/unit) + C4K (MXN 36K/unit) for all existing + new units

See `critical_path_new_unit.md` for the full lean flow including owner screening scorecard, tenant screening scorecard, property inspection checklist, and convergence gate.

## Risk Controls
1. **Screening** — Nova Credit + income verification + employer check + fraud checks. FICO ≥ 650. Income ≥ 3× rent. This is the entire business.
2. **Waitlist model** — never sign a master lease without a pre-matched tenant. Eliminates lease-up vacancy.
3. **Short lease terms** (3-6 months) — limits exposure window per tenant
4. **Tourist visa expiration** — behavioral (not legal) pressure to leave
5. **1-month deposit** — legal max if residential classification
6. **Eviction reserve** — 3 months master lease rent per unit, funded before signing
7. **Cash-for-keys budget** — 2 months rent as standard operating cost for negotiated voluntary exits
8. **Hospedaje classification** (if attorney confirms) — bypasses Chapter IV entirely
9. **Utilities in owner's name** — owner pays, included in rent with cap. If owner defaults, OpCo pays and deducts from rent.
10. **Stripe as late-payment tool** — if SPEI doesn't arrive by due date, send payment link. 3.6% fee = tenant's problem.
11. **Owner remediation pipeline** — owners whose units need work before signing go into a warm-hold funnel with structured check-ins (weekly → biweekly → quarterly). See critical path for details.
12. **Rehab investment case** — if a unit needs minor rehab, evaluate against spread improvement, lease term, waitlist demand, and capital impact before committing. Payback must be ≤ 12 months with lease term ≥ 3× payback. See critical path for full evaluation framework.

## Tenant Lifecycle & Operations

### Pre-Arrival (After Screening Approved, Before Move-In)

**Day lease is signed:**
- Send welcome packet (English): unit address, CLABE for rent payments (Wise instructions), move-in date/time, building access instructions, condo rules summary (if applicable)
- Send cleaning service recommendation: Aliada app link + 1-2 independent cleaners with pricing. Recommend weekly or biweekly schedule.
- Unit is already furnished — no furniture coordination needed by tenant

**3 days before move-in:**
- Confirm move-in time with tenant
- Confirm unit is clean and ready (OpCo handles turnover cleaning)
- Send reminder: bring passport for acta de entrega signing

### Move-In Day

- Meet tenant at unit (or send representative)
- Walk through unit together, complete **acta de entrega-recepción** with photos
- Both parties sign condition report
- Hand over keys / access cards / parking remote
- Confirm internet is working — run speed test together, screenshot it
- Confirm hot water, gas, electricity all functional
- Quick orientation: nearest grocery (Chedraui, La Comer), pharmacy, metro station, coworking spaces
- Confirm tenant has cleaning service booked

### During Tenancy — Timed Outreach

**Week 1 (Day 3-5):**
- WhatsApp check-in: "How's everything going? Internet working well? Furniture comfortable? Any issues?"
- This catches problems early — before they become complaints or resentment
- Ask if they need anything else (local SIM card, gym recommendation, etc.)

**Week 2:**
- Quick check: "Everything still good? Just making sure."
- If any maintenance issues were flagged at week 1, confirm they're resolved

**Month 1 (Day 25-28):**
- Confirm rent payment received for month 2
- If not received, friendly reminder via WhatsApp
- Ask: "Are you settled in? Anything we can improve?"

**Monthly thereafter:**
- Confirm rent payment received
- Brief check-in (can be automated text): "All good this month?"
- Only escalate to a call if there's an issue

**60 days before lease end:**
- Ask: "Are you planning to stay or move on?"
- If staying: offer renewal (same terms or adjusted per inflation cap)
- If leaving: confirm move-out date, begin marketing unit for next tenant

**30 days before lease end:**
- If leaving: send move-out instructions (return keys, schedule acta de entrega, cancel furniture rental, final cleaning)
- Begin showing unit to prospective tenants (or listing it)
- Coordinate with furniture company for pickup timing if tenant is returning rented furniture

### Move-Out Day

- Walk through unit together, complete **acta de entrega-recepción de salida** with photos
- Compare to move-in condition report
- Note any damages beyond normal wear and tear
- Collect keys / access cards
- Confirm cleaning is scheduled for turnover
- Check furniture condition — document any damage for deposit deduction
- Process deposit return within timeline (immediately per Art. 2422, minus documented damages)

### Turnover (Between Tenants)

- Target: **zero downtime** (David Tilney model — tenant to tenant with no gap)
- Outgoing tenant moves out AM, cleaning crew comes PM, new tenant moves in next day
- Furniture stays (owner's furniture, always in unit)
- Check/replace any damaged consumables (linens, kitchen items)
- Update acta de entrega for new tenant
- Reset internet password
- Restock any OpCo-provided basics (if any)

### Vendor Relationships

**Furniture Partner (For Unfurnished Owners):**
- Pre-negotiate a standard "work-ready" package with a furniture vendor: bed + mattress + desk + ergonomic chair + sofa + coffee table + dining table + 2 chairs + kitchen basics (pots/pans, dishes, utensils) + linens (sheets, towels, pillows, duvet) + bathroom basics
- Target package price: MXN 55,000-75,000 ($3,056-4,167) — paid by the OWNER, not OpCo
- Negotiate volume discount (as you scale, you're sending 10+ owners/year)
- Consider a referral fee arrangement (furniture company pays OpCo MXN 1,000-3,000 per owner referral) — passive income without owning anything
- Keep 1-2 backup vendors in case primary is unavailable
- This partner relationship is also your leverage for Phase 2 (OpCo furnishing directly if needed)

**Cleaning Service:**
- Aliada is the default recommendation (app-based, reliable, rated cleaners)
- Have 1-2 independent cleaners as backup for turnover cleaning (faster scheduling)
- Negotiate a turnover cleaning rate for between-tenant deep cleans (OpCo pays this, it's a business expense)

**Other Vendor Introductions (Optional, Add Over Time):**
- Portable AC rental (for units without AC)
- Coworking day passes (bulk purchase for tenants)
- Airport pickup service
- Local SIM card delivery
- Laundry service

### Communication Tools
- **WhatsApp** for all tenant communication (this is Mexico — everyone uses WhatsApp)
- Create a **template message library** for each touchpoint (welcome, week 1 check-in, monthly reminder, renewal offer, move-out instructions)
- As you scale past 5 units, consider a simple CRM or even just a spreadsheet tracking: tenant name, unit, lease dates, check-in dates, renewal status, payment status

### Monitoring Cadence & Portfolio Health
See `critical_path_new_unit.md` for the complete monitoring loop (monthly unit health check, monthly portfolio health check, quarterly portfolio review) and all expansion pre-flight gates.

## Contracts (Drafted)
- `contrato_01_maestro_arrendamiento.md` — Master lease with property owner (28 clauses, Spanish)
- `contrato_02_subarrendamiento_hospedaje.md` — Sublease/lodging agreement with tenant (21 clauses, Spanish, with [SI ARRENDAMIENTO] / [SI HOSPEDAJE] markers)

## Key Insight
"This is a tenant-risk underwriting business, not a rental business. Screen tenants so well you never have to test the eviction system. The moat is the ability to underwrite foreigners that local landlords can't access."

## Execution Sequence
1. **Start both waitlists immediately** — Google Forms + Google Sheets + WhatsApp Business. Costs nothing. Begin building tenant pipeline (FB groups, nomad communities) and owner pipeline (message 10 stale listings/week) in parallel. Do this BEFORE the SAS exists.
2. **Attorney consult** — hospedaje vs arrendamiento classification, deposit rules, contract review, fastest enforcement path, SAS ownership structure for non-resident tax purposes
3. **Form SAS** — register with SAT, open bank account
4. **First match** — when you have a pre-screened tenant AND an interested owner, sign the master lease and place the tenant within days. Zero vacancy on unit 1.
5. **Measure**: Did the waitlist-to-match process work? Is spread ≥ MXN 8K? Does tenant behave?
6. **Kill criteria**: If owner conversion <3% after 50 contacts, or if tenant pipeline produces <5 qualified leads in 60 days, reassess before unit 2. If spread < MXN 8K on the best available deal, the market may not support the model in your target neighborhoods.
7. **Scale**: Continue marrying waitlist supply to waitlist demand. Each new unit is pre-sold before you commit capital.
8. **At 5-10 units**: Evaluate whether ServCo adds enough value to justify overhead. Build site (Joel's dev team), SEO, brand.
9. **At 15-20 units**: Systematize — property management software, template automation, possibly hire local coordinator

## Cash Flow Projection
See `cashflow_projection_36mo.md` for detailed 36-month model (waitlist + furnished-by-owner baked into all scenarios):

| Scenario | Month 36 Units | Monthly Net | Annual Net | Capital Injected |
|---|---|---|---|---|
| Conservative (drip-fund) | 3 | MXN 13,230 ($735) | MXN 158,760 ($8,820) | MXN 292,000 ($16,222) |
| **Accelerated (recommended)** | **8** | **MXN 35,280 ($1,960)** | **MXN 423,360 ($23,520)** | **MXN 544,000 ($30,222)** |

Month 48 projections: Conservative = 6 units, MXN 26.5K ($1,470)/month. Accelerated = 12 units, MXN 52.9K ($2,940)/month.

Also includes: sensitivity analysis (MXN 7K, 9K, 12K spreads), bad tenant frequency impact, rehab scenario, and growth curve comparison. Margin-funded scenario (5.9% interest, 1 unit/month, $100K available) modeled separately in conversation — to be added as third scenario.
